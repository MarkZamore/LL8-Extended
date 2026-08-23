#!/usr/bin/env python3
"""Takes the blocks of departed mods out of a world's region files.

A chunk section stores its blocks as a palette of names plus packed indices into
it.  When a mod leaves, its names stay in those palettes, and every single load
of that chunk makes the game resolve them, fail, log "Recoverable errors when
loading section", and substitute air.  It never writes the correction back: a
chunk that was only read is not dirty, so nothing is saved, and the same work
happens again the next time somebody walks past.  One player's session showed
17,582 of those, and a third of the sections that failed in one session failed
again in the next.

This does once, on disk, what the game does over and over in memory:

* a palette entry naming an absent mod becomes ``minecraft:air`` - in place, so
  the packed indices stay valid and nothing has to be re-encoded,
* a biome palette entry becomes ``minecraft:plains``,
* block entities, entities and points of interest belonging to absent mods are
  dropped, exactly as the game already drops them on load.

Heightmaps and lighting are deliberately left alone.  The game has been treating
these blocks as air all along, so the stored light and heights already describe
the world as it renders today; rewriting them would change what players see and
buy a relight of the whole world for nothing.

Which mods count as absent is not guessed.  Pass the namespaces the game itself
reported as unknown (they are in every player's log); the tool refuses any that
a mod in ``mods/`` still provides.

    python tools/scrub_absent_mods.py --world ".../Chebupeli" --namespaces a,b,c
    python tools/scrub_absent_mods.py --world ".../Chebupeli" --namespaces a,b,c --apply
"""
from __future__ import annotations

import argparse
import collections
import io
import json
import re
import sys
import zipfile
import zlib
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import nbtlite  # noqa: E402

SECTOR = 4096
REGION_NAME = re.compile(r"r\.(-?\d+)\.(-?\d+)\.mca")
AIR = "minecraft:air"
PLAINS = "minecraft:plains"


# ----------------------------------------------------------------- mod ids

def installed_mod_ids(mods_directory: Path) -> set[str]:
    """Every modId declared by a jar in the folder, nested jars included."""
    found: set[str] = set()

    def mods_toml_ids(text: str) -> list[str]:
        out, in_mods = [], False
        for line in text.splitlines():
            stripped = line.strip()
            if stripped.startswith("[["):
                in_mods = stripped.startswith("[[mods]]")
                continue
            if stripped.startswith("["):
                in_mods = False
                continue
            if in_mods:
                match = re.match(r'modId\s*=\s*"([^"]+)"', stripped)
                if match:
                    out.append(match.group(1))
        return out

    def scan(source, depth: int = 0) -> None:
        try:
            archive = zipfile.ZipFile(source)
        except (OSError, zipfile.BadZipFile):
            return
        with archive:
            for entry in ("META-INF/neoforge.mods.toml", "META-INF/mods.toml"):
                try:
                    found.update(mods_toml_ids(archive.read(entry).decode("utf-8", "ignore")))
                except KeyError:
                    pass
            try:
                fabric = json.loads(archive.read("fabric.mod.json").decode("utf-8", "ignore"))
                if isinstance(fabric.get("id"), str):
                    found.add(fabric["id"])
            except (KeyError, ValueError):
                pass
            # Only declared mod ids count. A jar shipping assets or data under
            # somebody else's namespace - compatibility recipes, a patch for a
            # mod that may not be there - does not register a single block, and
            # counting those as installed is what stops this from cleaning the
            # very mods the game says are missing.
            if depth < 2:
                for name in archive.namelist():
                    if name.endswith(".jar"):
                        try:
                            scan(io.BytesIO(archive.read(name)), depth + 1)
                        except (OSError, zipfile.BadZipFile, KeyError):
                            pass

    for jar in sorted(mods_directory.glob("*.jar")):
        scan(jar)
    found.update({"minecraft", "c", "neoforge", "forge", "fabric"})
    return found


# ------------------------------------------------------------ region files

def read_region(path: Path):
    """-> {(x, z): (payload, timestamp, index)} for one region file."""
    raw = path.read_bytes()
    if len(raw) < 2 * SECTOR:
        return {}
    match = REGION_NAME.fullmatch(path.name)
    if not match:
        return {}
    found = {}
    for index in range(1024):
        head = raw[index * 4:index * 4 + 4]
        offset = int.from_bytes(head[:3], "big")
        sectors = head[3]
        if not offset or not sectors:
            continue
        start, end = offset * SECTOR, min(offset * SECTOR + sectors * SECTOR, len(raw))
        if start >= len(raw):
            continue
        timestamp = raw[SECTOR + index * 4:SECTOR + index * 4 + 4]
        found[index] = (raw[start:end], timestamp, index)
    return found


def write_region(path: Path, chunks) -> None:
    locations = bytearray(SECTOR)
    timestamps = bytearray(SECTOR)
    body = bytearray()
    next_sector = 2
    for payload, timestamp, index in sorted(chunks.values(), key=lambda item: item[2]):
        sectors = (len(payload) + SECTOR - 1) // SECTOR
        if sectors > 255:
            raise ValueError(f"{path.name}: chunk {index} needs {sectors} sectors")
        locations[index * 4:index * 4 + 3] = next_sector.to_bytes(3, "big")
        locations[index * 4 + 3] = sectors
        timestamps[index * 4:index * 4 + 4] = timestamp
        body += payload + bytes(sectors * SECTOR - len(payload))
        next_sector += sectors
    temporary = path.with_name(path.name + ".scrub")
    temporary.write_bytes(bytes(locations) + bytes(timestamps) + bytes(body))
    temporary.replace(path)


def unpack_chunk(payload: bytes):
    """-> (root_name, root, compression byte) or None when unreadable."""
    if len(payload) < 6:
        return None
    length = int.from_bytes(payload[:4], "big")
    compression = payload[4]
    data = payload[5:4 + length]
    try:
        if compression == 1:
            import gzip
            plain = gzip.decompress(data)
        elif compression == 2:
            plain = zlib.decompress(data)
        elif compression == 3:
            plain = data
        else:
            return None
        name, root = nbtlite.decode(plain)
    except (zlib.error, OSError, nbtlite.NbtError, EOFError, IndexError):
        return None
    return name, root, compression


def pack_chunk(name: str, root, compression: int) -> bytes:
    plain = nbtlite.encode(name, root)
    # A chunk we cannot read back is worse than one we never touched.
    if nbtlite.encode(*nbtlite.decode(plain)) != plain:
        raise nbtlite.NbtError("re-encoded chunk does not match")
    if compression == 1:
        import gzip
        data = gzip.compress(plain, 6, mtime=0)
    elif compression == 2:
        data = zlib.compress(plain, 6)
    else:
        data = plain
    return (len(data) + 1).to_bytes(4, "big") + bytes([compression]) + data


# ---------------------------------------------------------------- scrubbing

def namespace_of(value: str) -> str:
    return value.split(":", 1)[0] if ":" in value else "minecraft"


def scrub_chunk(root, absent: set[str], counts: collections.Counter) -> bool:
    """Rewrites one chunk in place. -> whether anything changed."""
    changed = False
    fields = root[1]

    for section in (fields.get("sections") or ("list", 0, []))[2]:
        if not nbtlite.is_compound(section):
            continue
        block_states = section[1].get("block_states")
        if nbtlite.is_compound(block_states):
            for entry in (block_states[1].get("palette") or ("list", 0, []))[2]:
                if not nbtlite.is_compound(entry):
                    continue
                name = entry[1].get("Name")
                if name and name[0] == "str" and namespace_of(name[1]) in absent:
                    counts[namespace_of(name[1])] += 1
                    entry[1]["Name"] = ("str", AIR)
                    # Air carries no block state; leaving the old one behind
                    # would describe properties air does not have.
                    entry[1].pop("Properties", None)
                    changed = True

        biomes = section[1].get("biomes")
        if nbtlite.is_compound(biomes):
            palette = biomes[1].get("palette")
            if nbtlite.is_list(palette):
                for position, entry in enumerate(palette[2]):
                    if entry and entry[0] == "str" and namespace_of(entry[1]) in absent:
                        counts[namespace_of(entry[1])] += 1
                        palette[2][position] = ("str", PLAINS)
                        changed = True

    for key in ("block_entities", "Entities"):
        holder = fields.get(key)
        if not nbtlite.is_list(holder):
            continue
        kept = []
        for entry in holder[2]:
            identifier = entry[1].get("id") if nbtlite.is_compound(entry) else None
            if identifier and identifier[0] == "str" and namespace_of(identifier[1]) in absent:
                counts[namespace_of(identifier[1])] += 1
                changed = True
                continue
            kept.append(entry)
        if len(kept) != len(holder[2]):
            holder[2][:] = kept

    # Points of interest: villager workstations and the like, by type.
    sections = fields.get("Sections")
    if nbtlite.is_compound(sections):
        for section in sections[1].values():
            if not nbtlite.is_compound(section):
                continue
            records = section[1].get("Records")
            if not nbtlite.is_list(records):
                continue
            kept = []
            for entry in records[2]:
                kind = entry[1].get("type") if nbtlite.is_compound(entry) else None
                if kind and kind[0] == "str" and namespace_of(kind[1]) in absent:
                    counts[namespace_of(kind[1])] += 1
                    changed = True
                    continue
                kept.append(entry)
            if len(kept) != len(records[2]):
                records[2][:] = kept

    # Structure starts and the references pointing at them.
    structures = fields.get("structures")
    if nbtlite.is_compound(structures):
        for key in ("starts", "References"):
            table = structures[1].get(key)
            if not nbtlite.is_compound(table):
                continue
            doomed = [name for name in table[1] if namespace_of(name) in absent]
            for name in doomed:
                counts[namespace_of(name)] += 1
                del table[1][name]
                changed = True

    return changed


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__,
                                     formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--world", required=True, type=Path)
    parser.add_argument("--namespaces", required=True,
                        help="comma separated, as the game reported them")
    parser.add_argument("--mods", type=Path, default=Path(__file__).resolve().parent.parent / "mods")
    parser.add_argument("--apply", action="store_true", help="write; otherwise only report")
    args = parser.parse_args()

    wanted = {part.strip() for part in args.namespaces.split(",") if part.strip()}
    if not wanted:
        print("no namespaces given", file=sys.stderr)
        return 2

    installed = installed_mod_ids(args.mods) if args.mods.exists() else set()
    refused = sorted(wanted & installed)
    if refused:
        print("refusing: these are still provided by a mod in the pack:", ", ".join(refused),
              file=sys.stderr)
        return 2
    absent = wanted

    regions = sorted(path for path in args.world.rglob("*.mca")
                     if path.parent.name in ("region", "entities", "poi"))
    print(f"{len(regions)} region file(s) under {args.world}")
    counts: collections.Counter = collections.Counter()
    touched_chunks = touched_files = unreadable = 0

    for number, path in enumerate(regions, 1):
        try:
            chunks = read_region(path)
        except OSError as error:
            print(f"  {path}: {error}", file=sys.stderr)
            continue
        rewritten = {}
        dirty = False
        for index, (payload, timestamp, slot) in chunks.items():
            opened = unpack_chunk(payload)
            if opened is None:
                unreadable += 1
                rewritten[index] = (payload, timestamp, slot)
                continue
            name, root, compression = opened
            if scrub_chunk(root, absent, counts):
                touched_chunks += 1
                dirty = True
                rewritten[index] = (pack_chunk(name, root, compression), timestamp, slot)
            else:
                rewritten[index] = (payload, timestamp, slot)
        if dirty:
            touched_files += 1
            if args.apply:
                write_region(path, rewritten)
        if number % 100 == 0:
            print(f"  {number}/{len(regions)} files, {touched_chunks} chunks so far",
                  file=sys.stderr)

    print(f"\n{'rewrote' if args.apply else 'would rewrite'} {touched_chunks} chunk(s) "
          f"in {touched_files} file(s)")
    if unreadable:
        print(f"{unreadable} chunk(s) could not be read and were left byte for byte")
    for namespace, count in counts.most_common():
        print(f"  {namespace:24} {count}")
    if not args.apply:
        print("\nnothing was written; pass --apply to do it")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
