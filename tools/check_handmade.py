#!/usr/bin/env python3
"""Proves the work this build did by hand is still in the tree.

An update rebuilds mods/, config/, kubejs/ and the other managed roots from the
upstream release and then lays this build's own edits back over the top. Four
checkers already guard parts of that - check_overlay.py that every pinned file
matches its source, check_pack_locks.py that the two resource-pack lists agree,
check_datapacks.py that a datapack still parses, quests-ru/ru.py that the
Russian quest table still has en_us's keys - and between them they leave one
shape of loss unwatched: work that no list names at all, and edits the overlay
describes but nobody ever reads back.

So this asks the questions the others do not:

  1. Did the overlay's tomlEdits and jsonEdits actually land? check_overlay
     counts them and never opens the files. update_ll8.py refuses to finish
     when a key it edits has gone - but only while it runs, and only that once.
     A mod that rewrites its own config on the next launch, or a hand-edit in
     the tree, puts the default back without a word. The Lootr chest fix is one
     of those seven lines.
  2. Do the remove globs still match nothing? A rename upstream turns a
     deletion into a no-op, and update_ll8.py says so in one line of a long log
     and carries on.
  3. Did the move land - is upstream's tnp_resources out of config/paxi/ and
     whole in resourcepacks/?
  4. Is every path launcher/pack-owned.txt names and git tracks still on disk?
     update_ll8.py compares before against after inside one run; nothing can
     answer this afterwards, or on a checkout somebody else has touched.
  5. Are the landmarks below still there - the kubejs scripts this build wrote,
     the Paxi datapacks, LL8 Russian, the quest chapters, the chest fixes? And
     does LL8 Russian still parse? check_datapacks.py asks that of the
     datapacks and of nothing else; a resource pack's language file that will
     not parse is dropped whole and its mod goes back to English in silence.
  6. And the sweep, with --staged: every file under a managed root has to be
     upstream's, or pinned, or kept, or fetched by hash - because anything else
     is deleted by the next update and nothing says so.

    python tools/check_handmade.py
    python tools/check_handmade.py --staged .ll8-work/staged-1.70.0

Exit code 0 means this build's own work is accounted for.
"""
from __future__ import annotations

import argparse
import fnmatch
import glob as globmod
import json
import re
import subprocess
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
OVERLAY = REPO / "tools" / "overlay.json"
PACK_OWNED = REPO / "launcher" / "pack-owned.txt"
ORDER = REPO / "launcher" / "resourcepacks-default.txt"
REMOTE_FILES = REPO / "tools" / "remote-files.json"

# The same list update_ll8.py rebuilds from the release. Repeated here rather
# than imported because importing update_ll8 wants a CurseForge key.
MANAGED_ROOTS = ("mods", "config", "kubejs", "defaultconfigs",
                 "configureddefaults", "resourcepacks", "shaderpacks",
                 "scripts", "data")

# This build's own work, named so that losing it is a failure and not a diff
# nobody reads. A count is a floor, not an inventory: it is there to catch a
# tree that went out whole, and it does not care that one file was added.
LANDMARKS = [
    ("kubejs/server_scripts/recipes_and_fixes.js", "file",
     "the recipe fixes this build carries"),
    ("kubejs/server_scripts/recipes_lost_to_the_rename.js", "file",
     "recipes that broke when mods renamed their items"),
    ("kubejs/server_scripts/tags_enchantment_repairs.js", "file",
     "what each tool may be mended with"),
    ("kubejs/server_scripts/ysm_model_sync.js", "file",
     "Yes Steve Model: the model a player wears follows them"),
    ("kubejs/server_scripts/ysm_stand_down.js", "file",
     "Yes Steve Model: stops it seizing the player model it should not"),
    ("kubejs/config/web_server.json", "file",
     "KubeJS's localhost web server, off"),
    ("config/ftbquests/quests/chapters", "dir>=30",
     "the quest book's chapters"),
    ("config/ftbquests/quests/lang/ru_ru.snbt", "file",
     "the Russian quest table - its keys are ru.py check's business"),
    ("config/paxi/datapacks/ll8_pack_rules.zip", "file",
     "this build's own datapack"),
    ("config/paxi/datapacks/LL8 Companion Spawns.zip", "file",
     "the companion spawns"),
    ("config/paxi/datapacks/From-The-Fog-1.21-1.21.1-v1.9.4-Data-Resource-Pack.zip",
     "file", "From The Fog's data half"),
    ("config/paxi/datapacks/ExtraDataModels-1.21-4.4.2.zip", "file",
     "the extra data models"),
    ("config/paxi/datapacks/tnp_data", "dir>=1",
     "upstream's datapack tree, which this build edits in place"),
    ("resourcepacks/LL8 Russian", "dir>=200",
     "the Russian written for this build, key by key"),
    ("resourcepacks/LL8 Russian/pack.mcmeta", "file",
     "without it the game loads nothing from that folder"),
]

# Values that have to be what they are, in files a mod rewrites on its own.
# The overlay's own edits are read from tools/overlay.json instead; these are
# the ones no overlay entry describes.
PINNED_VALUES = [
    ("config/entity_model_features.json", "modelsNamesDisabled", "contains",
     ["chest", "double_chest_left", "double_chest_right"],
     "the chest fix: EMF hands the Backwoods CEM chest model to Lootr's "
     "renderer and the vanilla one alike, and the chests come out invisible"),
]

# Ids launcher/resourcepacks-default.txt has to keep naming. check_pack_locks
# proves the order and the lock agree; it cannot know an id left both at once.
REQUIRED_PACK_IDS = [
    ("mod/lootr:resourcepacks/old_textures",
     "Lootr's older chest textures, the other half of the chest fix"),
    ("file/LL8 Russian", "the build's own Russian"),
    ("file/tnp_resources", "upstream's pack, moved out of config/paxi/"),
    ("file/LL8 Mob Fixes.zip", "the one pack here that beats another pack"),
]


def load_overlay() -> dict:
    return json.loads(OVERLAY.read_text(encoding="utf-8"))


def toml_value(path: Path, table: str, key: str):
    """The raw right-hand side of `key = ...` inside [table], '' = preamble.

    Line-scoped exactly the way update_ll8.apply_toml_edit writes it, so the
    two can never disagree about which line the edit is on.
    """
    if not path.is_file():
        return None
    pattern = re.compile(r"^(\s*" + re.escape(key) + r"\s*=\s*)(.*?)(\s*(?:#.*)?)$")
    header = re.compile(r"^\s*\[([^\]]*)\]")
    current = ""
    for line in path.read_text(encoding="utf-8").splitlines():
        head = header.match(line)
        if head:
            current = head.group(1).strip()
            continue
        if current != table:
            continue
        match = pattern.match(line)
        if match:
            return match.group(2)
    return None


def check_overlay_edits(overlay: dict) -> list:
    problems = []
    for edit in overlay.get("tomlEdits", []):
        path = REPO / edit["file"]
        want = str(edit["value"])
        if not path.is_file():
            problems.append(f"{edit['file']} is not in the build, and the "
                            f"overlay edits {edit['key']} in it")
            continue
        got = toml_value(path, edit["table"], edit["key"])
        if got is None:
            problems.append(
                f"{edit['file']}: no `{edit['key']}` in table {edit['table']!r} - "
                f"the mod changed its config format and the overlay edit now "
                f"lands nowhere")
        elif got != want:
            problems.append(
                f"{edit['file']}: {edit['key']} is {got}, the overlay says "
                f"{want} ({edit.get('reason', 'no reason recorded')[:90]})")
    for edit in overlay.get("jsonEdits", []):
        path = REPO / edit["file"]
        if not path.is_file():
            problems.append(f"{edit['file']} is not in the build, and the "
                            f"overlay edits {edit['key']} in it")
            continue
        try:
            body = json.loads(path.read_text(encoding="utf-8"))
        except ValueError as error:
            problems.append(f"{edit['file']} is not json any more ({error})")
            continue
        if edit["key"] not in body:
            problems.append(f"{edit['file']}: no key {edit['key']} - the mod "
                            f"changed its config format")
        elif body[edit["key"]] != edit["value"]:
            problems.append(
                f"{edit['file']}: {edit['key']} is {body[edit['key']]!r}, the "
                f"overlay says {edit['value']!r}")
    return problems


def check_removals(overlay: dict) -> list:
    problems = []
    for spec in overlay.get("remove", []):
        hits = sorted(REPO.glob(spec["path"]))
        if hits:
            problems.append(
                f"{spec['path']} is on the overlay's remove list and "
                f"{len(hits)} path(s) match it, first "
                f"{hits[0].relative_to(REPO).as_posix()}")
    return problems


def check_moves(overlay: dict) -> list:
    problems = []
    for spec in overlay.get("moves", []):
        source = REPO / spec["from"]
        target = REPO / spec["to"]
        if source.exists():
            problems.append(
                f"{spec['from']} is still there; the overlay moves it to "
                f"{spec['to']}, and both present is the pack loaded twice")
        if not target.exists():
            problems.append(f"{spec['to']} is where the overlay moves "
                            f"{spec['from']}, and it is not there")
        elif target.is_dir() and not any(p.is_file() for p in target.rglob("*")):
            problems.append(f"{spec['to']} is an empty folder")
    return problems


def tracked_files() -> set:
    result = subprocess.run(["git", "-C", str(REPO), "ls-files"],
                            capture_output=True, text=True)
    if result.returncode != 0:
        return set()
    return set(result.stdout.splitlines())


def check_pack_owned(tracked: set):
    """Every path pack-owned.txt names and git tracks has to be on disk.

    A path that names nothing and git does not track is the other case the file
    documents: a config the pack has stopped shipping, whose claim stays so the
    old copy is taken back out of an instance. Said, not failed.
    """
    problems, notes = [], []
    if not PACK_OWNED.is_file():
        return [f"{PACK_OWNED.name} is not there"], notes
    for raw in PACK_OWNED.read_text(encoding="utf-8").splitlines():
        row = raw.strip()
        if not row or row.startswith("#"):
            continue
        on_disk = {Path(hit).resolve().relative_to(REPO).as_posix()
                   for hit in globmod.glob(str(REPO / row))}
        claimed = sorted(name for name in tracked
                         if fnmatch.fnmatchcase(name, row))
        missing = [name for name in claimed if name not in on_disk]
        if missing:
            problems.append(
                "pack-owned and gone from the build: " + ", ".join(missing) +
                " - a managed root is rebuilt from upstream, so a file this "
                "pack wrote and did not pin cannot survive an update")
        elif not on_disk and not claimed:
            notes.append(f"{row} names nothing and git does not track it: the "
                         f"claim that takes an old file back out of an instance")
    return problems, notes


def check_landmarks() -> list:
    problems = []
    for rel, kind, why in LANDMARKS:
        path = REPO / rel
        if kind == "file":
            if not path.is_file():
                problems.append(f"{rel} is gone - {why}")
            elif path.stat().st_size == 0:
                problems.append(f"{rel} is empty - {why}")
        elif kind.startswith("dir>="):
            floor = int(kind.split(">=")[1])
            if not path.is_dir():
                problems.append(f"{rel}/ is gone - {why}")
                continue
            count = sum(1 for p in path.rglob("*") if p.is_file())
            if count < floor:
                problems.append(
                    f"{rel}/ holds {count} file(s), fewer than the {floor} this "
                    f"build expects - {why}")
    return problems


def check_pinned_values() -> list:
    problems = []
    for rel, key, rule, want, why in PINNED_VALUES:
        path = REPO / rel
        if not path.is_file():
            problems.append(f"{rel} is gone - {why}")
            continue
        try:
            body = json.loads(path.read_text(encoding="utf-8"))
        except ValueError as error:
            problems.append(f"{rel} is not json any more ({error})")
            continue
        got = body.get(key)
        if rule == "contains":
            missing = [item for item in want if item not in (got or [])]
            if missing:
                problems.append(
                    f"{rel}: {key} no longer holds {', '.join(missing)} - {why}")
        elif got != want:
            problems.append(f"{rel}: {key} is {got!r}, expected {want!r} - {why}")
    return problems


def check_russian_parses() -> list:
    """Every json in LL8 Russian has to be json.

    A language file that will not parse is not a missing line: the game drops
    the whole file and every key in it goes back to English, for that mod, with
    nothing said in game. The pack is 300-odd files hand-written against the
    glossary, so one stray comma is a mod's worth of Russian gone.
    """
    root = REPO / "resourcepacks" / "LL8 Russian"
    if not root.is_dir():
        return []
    problems = []
    for path in sorted(root.rglob("*.json")):
        try:
            json.loads(path.read_text(encoding="utf-8"))
        except (ValueError, UnicodeDecodeError) as error:
            problems.append(f"{path.relative_to(REPO).as_posix()} is not json "
                            f"({error}) - the game drops the whole file and "
                            f"that mod goes back to English")
    for path in sorted(root.rglob("*.mcmeta")):
        try:
            json.loads(path.read_text(encoding="utf-8"))
        except (ValueError, UnicodeDecodeError) as error:
            problems.append(f"{path.relative_to(REPO).as_posix()} is not json "
                            f"({error}) - the game loads nothing from the pack")
    return problems


def order_ids() -> set:
    if not ORDER.is_file():
        return set()
    ids = set()
    for raw in ORDER.read_text(encoding="utf-8").splitlines():
        row = raw.strip()
        if not row or row.startswith("#"):
            continue
        ids.add(row.lstrip("!?- ").strip())
    return ids


def check_required_pack_ids() -> list:
    ids = order_ids()
    return [f"{pack} is not in {ORDER.name} any more - {why}"
            for pack, why in REQUIRED_PACK_IDS if pack not in ids]


def check_keep_globs(overlay: dict) -> list:
    """A keep entry that matches nothing is a file that already went out."""
    problems = []
    for spec in overlay.get("keep", []):
        for pattern in spec.get("paths", []):
            if not sorted(REPO.glob(pattern)):
                problems.append(
                    f"the overlay keeps {pattern} and nothing matches it: "
                    f"either it is already lost, or upstream started shipping "
                    f"it and the entry is stale")
    return problems


def remote_targets() -> set:
    if not REMOTE_FILES.is_file():
        return set()
    try:
        body = json.loads(REMOTE_FILES.read_text(encoding="utf-8"))
    except ValueError:
        return set()
    return {entry["target"] for entry in body.get("files", [])}


def sweep(staged: Path, overlay: dict) -> list:
    """Everything under a managed root has to be somebody's.

    Upstream's, because the release carries it; pinned, because the overlay
    copies it back; kept, because the overlay says it is ours; inside the
    target of a move; or fetched by hash after the sync. Anything else is
    deleted by the next update, and the update log will not mention it.
    """
    pins = {entry["target"] for entry in overlay.get("files", [])}
    keeps = [path for spec in overlay.get("keep", [])
             for path in spec.get("paths", [])]
    moved_into = [spec["to"] for spec in overlay.get("moves", [])]
    remote = remote_targets()
    orphans = []
    for root in MANAGED_ROOTS:
        here = REPO / root
        there = staged / root
        if not here.is_dir():
            continue
        upstream = ({p.relative_to(there).as_posix() for p in there.rglob("*")
                     if p.is_file()} if there.is_dir() else set())
        for path in here.rglob("*"):
            if not path.is_file():
                continue
            rel = path.relative_to(here).as_posix()
            full = path.relative_to(REPO).as_posix()
            if rel in upstream or full in pins or full in remote:
                continue
            if any(fnmatch.fnmatchcase(full, pattern) for pattern in keeps):
                continue
            if any(full == dest or full.startswith(dest + "/")
                   for dest in moved_into):
                continue
            orphans.append(full)
    if not orphans:
        return []
    shown = sorted(orphans)[:20]
    tail = "" if len(orphans) <= 20 else f"\n  ... and {len(orphans) - 20} more"
    return ["the next update deletes these and says nothing - pin them in "
            "tools/overlay.json or name them under \"keep\":\n  " +
            "\n  ".join(shown) + tail]


def find_staged():
    """The staged tree of the release this checkout is on, if it is still there.

    tools/ll8-state.json names the version and the folders are named after it,
    so the right one is asked for rather than guessed at: sorting "staged-1.9.0"
    against "staged-1.70.0" by name picks the older tree.
    """
    work = REPO / ".ll8-work"
    if not work.is_dir():
        return None
    try:
        version = json.loads((REPO / "tools" / "ll8-state.json")
                             .read_text(encoding="utf-8"))["version"]
    except (OSError, ValueError, KeyError):
        return None
    for candidate in (work / f"staged-{version}",
                      work / f"client-{version}" / "overrides"):
        if candidate.is_dir():
            return candidate
    return None


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--staged", type=Path, default=None,
                        help="the upstream tree the sync rebuilds from; "
                             "defaults to the newest under .ll8-work/")
    parser.add_argument("--require-staged", action="store_true",
                        help="fail rather than skip when there is none")
    args = parser.parse_args()

    overlay = load_overlay()
    tracked = tracked_files()
    owned_problems, owned_notes = check_pack_owned(tracked)

    groups = [
        ("the overlay's toml and json edits are in the files",
         check_overlay_edits(overlay)),
        ("what the overlay removes is gone", check_removals(overlay)),
        ("what the overlay moves has arrived", check_moves(overlay)),
        ("what the overlay keeps is still here", check_keep_globs(overlay)),
        ("the files this pack owns are on disk", owned_problems),
        ("this build's own work is where it was", check_landmarks()),
        ("the chest fixes still say what they said", check_pinned_values()),
        ("LL8 Russian is json the game will read", check_russian_parses()),
        ("the resource pack order still names them", check_required_pack_ids()),
    ]

    staged = args.staged or find_staged()
    if staged and staged.is_dir():
        groups.append((f"nothing is unaccounted for against {staged.name}",
                       sweep(staged, overlay)))
    else:
        message = ("no staged upstream tree to sweep against (pass --staged; "
                   "update_ll8.py leaves one under .ll8-work/)")
        if args.require_staged:
            groups.append(("the sweep", [message]))
        else:
            print("not checked: " + message)

    problems = 0
    for title, found in groups:
        if found:
            problems += len(found)
            print(f"\n{title.upper()} - {len(found)} problem(s):")
            for problem in found:
                print("  " + problem)
        else:
            print(f"ok: {title}")

    for note in owned_notes:
        print("note: " + note)

    if problems:
        print(f"\n{problems} problem(s). This build's own work is not all here.")
        return 1
    print("\nEverything this build made by hand is accounted for.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
