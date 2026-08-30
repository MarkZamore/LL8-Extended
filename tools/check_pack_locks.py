#!/usr/bin/env python3
"""Proves the two lists that decide resource packs still say the same thing.

A pack in this build is decided twice, and both have to agree:

  * launcher/resourcepacks-default.txt gives it its place. A later line sits
    above an earlier one, and the launcher writes that order into the instance's
    options.txt on every launch.
  * enable_builtin in config/global_packs.toml locks it. Global Packs gives
    every id it matches (required, TOP, fixedPosition), so the pack screen shows
    neither a tick to clear nor a handle to drag.

An id in one list and not the other is not a tidiness problem: a pack named in
the order but missing from the lock is force-selected every launch and still
draggable in between, so a player can move it, change what the build looks like
until the next start, and nobody meant to offer that. A pack locked but not
ordered is inserted wherever the mod happens to put it. Both go quiet until
somebody notices in game, which is how three packs came to be loose at once.

The marks are the exception and the whole of it: "?" hands an entry's on and off
to the player, "-" does the same and ships it off, and both work by being ids
left out of enable_builtin. So a marked entry must not be locked, and an
unmarked one must.

Also checked, because the same drift got in through the side door:

  * config/global_packs.toml is byte-identical to its overlay source
    tools/overlay/config/global_packs.toml, and tools/overlay.json records that
    source's sha256. config/ is a managed root - an update rebuilds it from the
    release and then copies the overlay source over the top - so an edit made
    only to the live file is an edit with a date on it;
  * every "file/..." id names something that is really in resourcepacks/, and
    everything in resourcepacks/ is named. An upstream update that adds a pack
    file, or takes one away, stops here rather than in somebody's game.

    python tools/check_pack_locks.py

Exit code 0 means the two lists agree; anything else prints what does not.
"""
from __future__ import annotations

import hashlib
import json
import re
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
ORDER = REPO / "launcher" / "resourcepacks-default.txt"
CONFIG = REPO / "config" / "global_packs.toml"
OVERLAY_SOURCE = REPO / "tools" / "overlay" / "config" / "global_packs.toml"
OVERLAY = REPO / "tools" / "overlay.json"
PACKS = REPO / "resourcepacks"
MARKS = "!?- "
FILE_PREFIX = "file/"


def read_order() -> list[tuple[str, str]]:
    """Each entry of the order file as (id, marks), in the order it is written."""
    entries: list[tuple[str, str]] = []
    for line in ORDER.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        stripped = line.lstrip(MARKS)
        entries.append((stripped, line[: len(line) - len(stripped)].strip()))
    return entries


def read_locked() -> list[str]:
    """The ids of enable_builtin under [resourcepacks], in file order.

    Parsed by hand rather than with a TOML reader: the value has to come back
    with the file's own spelling for the error messages to be usable, and one
    entry - The Brazilian Project - carries a "]" in its name, which is exactly
    where a lazier parser stops.
    """
    text = CONFIG.read_text(encoding="utf-8")
    table = text.index("[resourcepacks]")
    start = text.index("enable_builtin = [", table) + len("enable_builtin = [")
    end = text.index("\n\t]", start)
    return re.findall(r'"([^"]+)"', text[start:end])


def main() -> int:
    problems: list[str] = []

    order = read_order()
    locked = read_locked()
    ordered_ids = [entry for entry, _ in order]
    optional = {entry for entry, marks in order if "?" in marks or "-" in marks}

    seen: set[str] = set()
    for entry in ordered_ids:
        if entry in seen:
            problems.append(f"{ORDER.name} names {entry!r} twice")
        seen.add(entry)
    for entry in locked:
        if locked.count(entry) > 1:
            problems.append(f"enable_builtin names {entry!r} {locked.count(entry)} times")
            break

    for entry in ordered_ids:
        if entry in optional:
            if entry in locked:
                problems.append(
                    f"{entry!r} is marked as the player's choice in {ORDER.name} "
                    f"and locked in enable_builtin - a locked pack has no choice left")
        elif entry not in locked:
            problems.append(
                f"{entry!r} is in {ORDER.name} but not in enable_builtin: "
                f"the build puts it back every launch and a player can still drag it")
    for entry in locked:
        if entry not in seen:
            problems.append(
                f"{entry!r} is locked in enable_builtin but not in {ORDER.name}, "
                f"so nothing gives it its place in the order")

    on_disk = {path.name for path in PACKS.iterdir()} if PACKS.is_dir() else set()
    named = {entry[len(FILE_PREFIX):] for entry in set(ordered_ids) | set(locked)
             if entry.startswith(FILE_PREFIX)}
    for name in sorted(named - on_disk):
        problems.append(f"file/{name} is named in the lists but is not in resourcepacks/")
    for name in sorted(on_disk - named):
        problems.append(f"resourcepacks/{name} is in the build but no list names it")

    live = CONFIG.read_bytes()
    source = OVERLAY_SOURCE.read_bytes()
    if live != source:
        problems.append(
            f"{CONFIG.relative_to(REPO).as_posix()} and its overlay source "
            f"{OVERLAY_SOURCE.relative_to(REPO).as_posix()} differ; config/ is a managed root, "
            f"so the next update would copy the source over the live file")
    recorded = [file for file in json.loads(OVERLAY.read_text(encoding="utf-8"))["files"]
                if file["target"] == CONFIG.relative_to(REPO).as_posix()]
    if len(recorded) != 1:
        problems.append(f"tools/overlay.json has {len(recorded)} entries for {CONFIG.name}, expected 1")
    else:
        digest = hashlib.sha256(source).hexdigest()
        if recorded[0]["sha256"] != digest:
            problems.append(
                f"tools/overlay.json records sha256 {recorded[0]['sha256'][:12]} for the "
                f"overlay source, which is {digest[:12]}")

    print(f"{len(ordered_ids)} packs in the order, {len(locked)} locked, "
          f"{len(optional)} left to the player, {len(on_disk)} files in resourcepacks/")
    if problems:
        print(f"\n{len(problems)} problem(s):")
        for problem in problems:
            print("  " + problem)
        return 1
    print("The lists agree.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
