#!/usr/bin/env python3
"""Proves tools/overlay.json still describes the tree it is meant to describe.

The overlay is how this build keeps its own edits through an upstream update.
mods/, config/, kubejs/ and the rest are managed roots: an update rebuilds them
from the release and then copies each files entry's source over the top. That
means the source under tools/overlay/ is the real file and the one in the pack
is a copy of it - and an edit made to the copy alone lives exactly until the
next update, without a word to anyone.

That has happened twice in one week. A lock added straight to
config/global_packs.toml was undone by the following update. A recipe edited
straight in kubejs/server_scripts/ would have been, in the same silence.

So, for every files entry:

  * the source exists, and its sha256 is the one overlay.json records - which is
    what update_ll8.py itself checks, refusing to run otherwise, so a mismatch
    caught here is a publish that would have blocked the next update;
  * the target exists and is byte-identical to it. This is the half nothing
    checked before: the update overwrites the target from the source without
    comparing them or saying so.

And across the lists: nothing may be both installed and deleted. A path named by
a files entry and matched by a remove glob is a contradiction that happens to
resolve - files runs before remove - by copying a file and then unlinking it,
which is not a plan anybody wrote down.

    python tools/check_overlay.py

Exit code 0 means the overlay and the tree agree; anything else prints how not.
"""
from __future__ import annotations

import fnmatch
import hashlib
import json
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
OVERLAY = REPO / "tools" / "overlay.json"


def main() -> int:
    overlay = json.loads(OVERLAY.read_text(encoding="utf-8"))
    problems: list[str] = []
    files = overlay.get("files", [])

    for entry in files:
        source = REPO / entry["source"]
        target = REPO / entry["target"]
        if not source.is_file():
            problems.append(f"{entry['source']} is named as an overlay source and is not there")
            continue
        payload = source.read_bytes()
        digest = hashlib.sha256(payload).hexdigest()
        if digest != entry["sha256"]:
            problems.append(
                f"{entry['source']}: overlay.json records sha256 {entry['sha256'][:12]}, "
                f"the file is {digest[:12]} - the next update would refuse to run")
        if not target.is_file():
            problems.append(f"{entry['target']} is pinned from {entry['source']} and is not in the build")
        elif target.read_bytes() != payload:
            problems.append(
                f"{entry['target']} differs from its overlay source {entry['source']}; "
                f"the target is a copy, so the next update would undo whatever was edited there")

    removals = [spec["path"] for spec in overlay.get("remove", [])]
    for entry in files:
        for glob in removals:
            if fnmatch.fnmatchcase(entry["target"], glob):
                problems.append(
                    f"{entry['target']} is pinned from {entry['source']} and removed by {glob!r}: "
                    f"the update installs it and then deletes it")

    print(f"{len(files)} pinned file(s), {len(removals)} removal(s), "
          f"{len(overlay.get('tomlEdits', []))} toml edit(s), {len(overlay.get('jsonEdits', []))} json edit(s)")
    if problems:
        print(f"\n{len(problems)} problem(s):")
        for problem in problems:
            print("  " + problem)
        return 1
    print("The overlay and the tree agree.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
