"""Refuses a datapack this build ships that the game would refuse.

A world that will not open is the worst thing this pack can do to somebody, and
one malformed json in a datapack does exactly that: the registry it belongs to
fails whole, and the game offers to open the world without its datapacks - which
for a modded world means without the blocks and mobs they define.

The rule this checks is the one that has actually bitten. A biome list is a tag
on its own - "#c:is_swamp" - or a list of biomes, and never a list with a tag in
it: the codec reads a list as biomes and nothing else, and answers a tag inside
one with "Not a JSON object". The four modifiers in LL8 Companion Spawns had it
the wrong way round and Chebupeli would not open.

Only the datapacks this pack ships are read. What a mod carries inside its own
jar is the mod author's, and is not ours to fail the build over.
"""
import json
import pathlib
import sys
import zipfile

DATAPACK_ROOT = pathlib.Path("config/paxi/datapacks")
# Every registry whose entries name biomes the same way.
BIOME_FIELDS = ("biomes", "biome")


def problems_in(name, body):
    """Everything wrong with one json, said plainly."""
    found = []
    if not isinstance(body, dict):
        return found
    for field in BIOME_FIELDS:
        value = body.get(field)
        if isinstance(value, list):
            tags = [entry for entry in value if isinstance(entry, str) and entry.startswith("#")]
            if tags:
                found.append(
                    f"{name}: {field} is a list holding {', '.join(tags)}. A tag is a biome list on its "
                    f"own, never an entry in one - the game answers this with \"Not a JSON object\" and "
                    f"refuses the whole registry, and the world offers to open without its datapacks."
                )
        elif isinstance(value, str) and not value.startswith("#") and ":" not in value:
            found.append(f"{name}: {field} is \"{value}\", which is neither a tag nor a biome id.")
    for nested in body.values():
        if isinstance(nested, dict):
            found.extend(problems_in(name, nested))
        elif isinstance(nested, list):
            for entry in nested:
                if isinstance(entry, dict):
                    found.extend(problems_in(name, entry))
    return found


def main():
    if not DATAPACK_ROOT.is_dir():
        print("check_datapacks: no datapacks in this pack.")
        return 0

    problems = []
    checked = 0
    for archive_path in sorted(DATAPACK_ROOT.glob("*.zip")):
        try:
            archive = zipfile.ZipFile(archive_path)
        except zipfile.BadZipFile:
            problems.append(f"{archive_path.name}: not a zip the game could open.")
            continue
        with archive:
            names = archive.namelist()
            if "pack.mcmeta" not in names:
                problems.append(f"{archive_path.name}: no pack.mcmeta, so the game loads nothing from it.")
            for entry in names:
                if not entry.endswith(".json"):
                    continue
                where = f"{archive_path.name}:{entry}"
                try:
                    body = json.loads(archive.read(entry))
                except (json.JSONDecodeError, UnicodeDecodeError) as error:
                    problems.append(f"{where}: not json ({error}).")
                    continue
                checked += 1
                problems.extend(problems_in(where, body))

    if problems:
        print("check_datapacks: this would not open a world.")
        for problem in problems:
            print("  " + problem)
        return 1
    print(f"check_datapacks: {checked} file(s) in this pack's datapacks are shaped the way the game reads them.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
