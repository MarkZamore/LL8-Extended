#!/usr/bin/env python3
r"""The Russian translation of the FTB Quests text: how it is cut, checked and put back.

The quests keep their words in language tables, config/ftbquests/quests/lang/
<locale>.snbt, one key per title, subtitle, description line and so on. The
mod hands each player the table of their own game language and takes any key
that table lacks from en_us, key by key - so a Russian file may be short of a
few keys after an upstream update and nobody sees a blank.

Four things live here:

  glossary  reads mods/*.jar (and, when given, the vanilla asset index) for
            item, block, entity, effect, enchantment and fluid names that occur
            in en_us.snbt, and writes glossary.json {english: russian} from the
            mods' own ru_ru.json - the name the player sees in a Russian game.
  chunks    cuts en_us.snbt into portions of about 1500 words along chapter
            lines (a quest never straddles two) into work/NN-<chapter>.json,
            each with its chapter, its slice of the glossary and a few pt_br
            lines that show how structure survives translation.
  assemble  gathers work/NN-<chapter>.ru.json into ru_ru.snbt written exactly
            the way en_us.snbt is written: CRLF, tabs, one-item lists inline,
            longer lists one line each, only \\ and \" escaped.
  check     the gate: ru_ru.snbt parses; it has every key of en_us; each list is
            as long; each entry carries the same &-codes, {image}/{@pagebreak}
            markers, \& and quotes; each entry has Cyrillic where the English
            had a phrase; the overlay hash matches. It also compares en_us with
            the snapshot taken at translation time and lists the keys that are
            new, changed or gone - what the next pass has to translate.
            With --chunk NN it checks one portion in work/ instead.

    python tools/quests-ru/ru.py glossary [--vanilla-index PATH]
    python tools/quests-ru/ru.py chunks [--only-changed]
    python tools/quests-ru/ru.py assemble
    python tools/quests-ru/ru.py check [--chunk NN] [--report]
    python tools/quests-ru/ru.py snapshot

Exit code 0 from check means the file is whole; anything else prints why.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
import zipfile
from collections import Counter, OrderedDict, defaultdict
from pathlib import Path

HERE = Path(__file__).resolve().parent
REPO = HERE.parent.parent
QUESTS = REPO / "config" / "ftbquests" / "quests"
EN_US = QUESTS / "lang" / "en_us.snbt"
PT_BR = QUESTS / "lang" / "pt_br.snbt"
RU_RU_TARGET = "config/ftbquests/quests/lang/ru_ru.snbt"
RU_RU = REPO / "tools" / "overlay" / RU_RU_TARGET
OVERLAY = REPO / "tools" / "overlay.json"
GLOSSARY = HERE / "glossary.json"
TERMS = HERE / "terms.json"
SNAPSHOT = HERE / "en_us.snapshot.snbt"
WORK = HERE / "work"

FIRST_CHAPTERS = ("welcome", "minecraft", "adventure")
CHUNK_WORDS = 1500
# A chapter's last piece shorter than this rides with the piece before it.
TAIL_WORDS = 500

# What the game will not let through untranslated: a run of this many Latin
# words that is not a name from the glossary is an English sentence.
LATIN_RUN = 4


# ---------------------------------------------------------------- the file format
def unescape(raw: str) -> str:
    out = []
    i = 0
    while i < len(raw):
        c = raw[i]
        if c == "\\" and i + 1 < len(raw):
            out.append(raw[i + 1])
            i += 2
        else:
            out.append(c)
            i += 1
    return "".join(out)


def escape(text: str) -> str:
    return text.replace("\\", "\\\\").replace('"', '\\"')


SCALAR = re.compile(r'^\t([\w.]+): "(.*)"$')
INLINE = re.compile(r'^\t([\w.]+): \["(.*)"\]$')
OPEN = re.compile(r'^\t([\w.]+): \[$')
ITEM = re.compile(r'^\t\t"(.*)"$')


def parse_lang(text: str) -> "OrderedDict[str, str | list[str]]":
    """The subset of SNBT these tables use, and nothing more."""
    entries: "OrderedDict[str, str | list[str]]" = OrderedDict()
    lines = text.replace("\r\n", "\n").split("\n")
    if lines and lines[-1] == "":
        lines.pop()
    if not lines or lines[0] != "{" or lines[-1] != "}":
        raise ValueError("a lang table is one { } compound")
    i = 1
    while i < len(lines) - 1:
        line = lines[i]
        m = SCALAR.match(line)
        if m:
            entries[m.group(1)] = unescape(m.group(2))
            i += 1
            continue
        m = INLINE.match(line)
        if m:
            entries[m.group(1)] = [unescape(m.group(2))]
            i += 1
            continue
        m = OPEN.match(line)
        if m:
            key = m.group(1)
            items: list[str] = []
            i += 1
            while i < len(lines) - 1 and lines[i] != "\t]":
                mi = ITEM.match(lines[i])
                if not mi:
                    raise ValueError(f"line {i + 1}: not a list item: {lines[i]!r}")
                items.append(unescape(mi.group(1)))
                i += 1
            if i >= len(lines) - 1:
                raise ValueError(f"list {key} never closes")
            entries[key] = items
            i += 1
            continue
        raise ValueError(f"line {i + 1}: not a lang entry: {line!r}")
    return entries


def format_lang(entries: "OrderedDict[str, str | list[str]]") -> str:
    out = ["{"]
    for key, value in entries.items():
        if isinstance(value, str):
            out.append(f'\t{key}: "{escape(value)}"')
        elif len(value) == 1:
            out.append(f'\t{key}: ["{escape(value[0])}"]')
        else:
            out.append(f"\t{key}: [")
            out.extend(f'\t\t"{escape(item)}"' for item in value)
            out.append("\t]")
    out.append("}")
    return "\r\n".join(out) + "\r\n"


def read_lang(path: Path) -> "OrderedDict[str, str | list[str]]":
    return parse_lang(path.read_text(encoding="utf-8"))


def sha256_of(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def words_of(value: "str | list[str]") -> int:
    text = value if isinstance(value, str) else " ".join(value)
    return len(re.findall(r"[A-Za-z']+", text))


# ---------------------------------------------------------------- chapters
ID_IN_FILE = re.compile(r'\bid: "([0-9A-F]{16})"')


def chapter_of_ids() -> dict[str, str]:
    """Every id in a chapter file belongs to that chapter: quests, tasks, rewards."""
    owner: dict[str, str] = {}
    for folder, label in ((QUESTS / "chapters", None), (QUESTS / "older_chapters", "old_")):
        if not folder.is_dir():
            continue
        for path in sorted(folder.glob("*.snbt")):
            name = (label or "") + path.stem
            for ident in ID_IN_FILE.findall(path.read_text(encoding="utf-8")):
                owner.setdefault(ident, name)
    for path in sorted((QUESTS / "reward_tables").glob("*.snbt")):
        for ident in ID_IN_FILE.findall(path.read_text(encoding="utf-8")):
            owner.setdefault(ident, "reward_tables")
    groups = QUESTS / "chapter_groups.snbt"
    if groups.is_file():
        for ident in ID_IN_FILE.findall(groups.read_text(encoding="utf-8")):
            owner.setdefault(ident, "groups")
    return owner


def chapter_for(key: str, owner: dict[str, str]) -> str:
    kind, ident = key.split(".", 2)[:2]
    if kind == "file":
        return "file"
    return owner.get(ident, "orphans")


def chapter_titles(en: dict) -> dict[str, tuple[str, str]]:
    """chapter name -> (title, subtitle) for the context a translator needs."""
    owner = chapter_of_ids()
    titles: dict[str, tuple[str, str]] = {}
    for key, value in en.items():
        kind, ident, field = key.split(".", 2)
        if kind != "chapter":
            continue
        name = owner.get(ident)
        if name is None:
            continue
        title, subtitle = titles.get(name, ("", ""))
        if field == "title":
            title = value if isinstance(value, str) else " ".join(value)
        elif field == "chapter_subtitle":
            subtitle = " ".join(value) if isinstance(value, list) else value
        titles[name] = (title, subtitle)
    return titles


# ---------------------------------------------------------------- glossary
NAME_PREFIXES = ("item.", "block.", "entity.", "effect.", "enchantment.", "fluid_type.", "fluid.", "biome.")


def load_json_lenient(data: bytes) -> dict:
    try:
        return json.loads(data.decode("utf-8-sig"))
    except (UnicodeDecodeError, ValueError):
        return {}


def vanilla_langs(index_path: Path) -> tuple[dict, dict]:
    """en_us comes from the client jar, ru_ru from the hashed asset objects."""
    en: dict = {}
    ru: dict = {}
    objects = index_path.parent.parent / "objects"
    index = load_json_lenient(index_path.read_bytes())
    for name, meta in index.get("objects", {}).items():
        if name.endswith("lang/ru_ru.json"):
            digest = meta["hash"]
            blob = objects / digest[:2] / digest
            if blob.is_file():
                ru = load_json_lenient(blob.read_bytes())
    versions = index_path.parent.parent.parent / "versions"
    for jar in sorted(versions.glob("*/*.jar")):
        try:
            with zipfile.ZipFile(jar) as z:
                if "assets/minecraft/lang/en_us.json" in z.namelist():
                    en = load_json_lenient(z.read("assets/minecraft/lang/en_us.json"))
                    break
        except zipfile.BadZipFile:
            continue
    return en, ru


def build_glossary(vanilla_index: Path | None) -> None:
    text = EN_US.read_text(encoding="utf-8")
    # A name counts when it stands as a whole word or words in the quest text.
    # The substring test first: the regex over 400 KB for each of a hundred
    # thousand names is a quarter of an hour, and almost none of them occur.
    def occurs(name: str) -> bool:
        return name in text and re.search(
            r"(?<![A-Za-z])" + re.escape(name) + r"(?![A-Za-z])", text) is not None

    votes: dict[str, Counter] = defaultdict(Counter)
    without: set[str] = set()
    sources: list[tuple[str, dict, dict]] = []
    for jar in sorted((REPO / "mods").glob("*.jar")):
        try:
            z = zipfile.ZipFile(jar)
        except zipfile.BadZipFile:
            continue
        names = set(z.namelist())
        for entry in names:
            m = re.match(r"assets/([^/]+)/lang/en_us\.json$", entry)
            if not m:
                continue
            en = load_json_lenient(z.read(entry))
            ru_name = entry[: -len("en_us.json")] + "ru_ru.json"
            ru = load_json_lenient(z.read(ru_name)) if ru_name in names else {}
            sources.append((m.group(1), en, ru))
    if vanilla_index is not None and vanilla_index.is_file():
        en, ru = vanilla_langs(vanilla_index)
        sources.append(("minecraft", en, ru))
    vanilla_names = {
        v.strip() for modid, en, _ in sources if modid == "minecraft"
        for k, v in en.items() if isinstance(v, str) and k.startswith(NAME_PREFIXES)
    }
    for modid, en, ru in sources:
        for key, value in en.items():
            if not key.startswith(NAME_PREFIXES) or not isinstance(value, str):
                continue
            # A name, not a sentence: tooltips and descriptions live under the
            # same prefixes and would only bury the names.
            if any(part in key for part in (".desc", ".tooltip", ".description", ".info", ".lore")):
                continue
            value = value.strip()
            if len(value) < 4 or len(value.split()) > 5 or value.endswith(".") or not value[0].isalpha():
                continue
            if not occurs(value):
                continue
            translated = ru.get(key)
            if isinstance(translated, str) and translated.strip() and translated.strip() != value:
                # When one English name is several things - Wither the boss and
                # Wither the effect - the thing a quest is more likely to mean
                # wins: blocks and items, then creatures, then effects. Vanilla
                # outranks a mod that borrowed the name.
                kind = key.split(".", 1)[0]
                weight = {"item": 3, "block": 3, "entity": 2, "fluid": 2, "fluid_type": 2}.get(kind, 1)
                if modid == "minecraft":
                    weight *= 2
                votes[value][translated.strip()] += weight
            else:
                without.add(value)
    # A single common word - Armor, Fire, Bucket - means too many things across
    # nine hundred mods to be trusted from any one of them; those come from
    # vanilla or not at all. Two words and more are the names of things.
    glossary = {
        en: ru.most_common(1)[0][0]
        for en, ru in sorted(votes.items())
        if len(en.split()) > 1 or en in vanilla_names
    }
    without -= set(glossary)
    # A single word without a Russian name is a word like Casing or Token: it
    # may well be a plain word in the sentence, and the translator decides.
    without = {name for name in without if len(name.split()) > 1}
    payload = {
        "_about": "English name as it stands in the quest text -> the name the player sees in a Russian game, "
                  "taken from the mods' own ru_ru.json (vanilla from the asset index). Built by ru.py glossary; "
                  "do not edit by hand - put corrections into terms.json, which wins.",
        "names": glossary,
        "no_russian_name": sorted(without),
    }
    GLOSSARY.write_text(json.dumps(payload, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    print(f"glossary: {len(glossary)} names with a Russian name, {len(without)} without (they stay English)")


def load_glossary() -> tuple[dict[str, str], set[str]]:
    if not GLOSSARY.is_file():
        return {}, set()
    data = json.loads(GLOSSARY.read_text(encoding="utf-8"))
    names = dict(data.get("names", {}))
    if TERMS.is_file():
        terms = json.loads(TERMS.read_text(encoding="utf-8"))
        names.update(terms.get("names", {}))
    return names, set(data.get("no_russian_name", []))


# ---------------------------------------------------------------- chunks
def sample_structure(pt: dict, keys: list[str], limit: int = 4) -> list[dict]:
    """A few pt_br lines for the same keys: lists, &-codes, escapes kept intact."""
    picked = []
    for key in keys:
        value = pt.get(key)
        if value is None:
            continue
        flat = value if isinstance(value, str) else " ".join(value)
        if isinstance(value, list) and len(value) > 1 or "&" in flat or "{" in flat or '"' in flat:
            picked.append({"key": key, "pt_br": value})
        if len(picked) >= limit:
            break
    return picked


def make_chunks(only_changed: bool) -> None:
    en = read_lang(EN_US)
    pt = read_lang(PT_BR) if PT_BR.is_file() else {}
    owner = chapter_of_ids()
    titles = chapter_titles(en)
    glossary, without = load_glossary()

    keys = list(en)
    if only_changed:
        if not SNAPSHOT.is_file():
            sys.exit("no snapshot to compare with; run `ru.py snapshot` after the first translation")
        old = read_lang(SNAPSHOT)
        keys = [k for k in keys if k not in old or old[k] != en[k]]
        print(f"only-changed: {len(keys)} key(s) new or changed against the snapshot")

    by_chapter: dict[str, list[str]] = defaultdict(list)
    for key in keys:
        by_chapter[chapter_for(key, owner)].append(key)

    def order(name: str) -> tuple:
        return (FIRST_CHAPTERS.index(name) if name in FIRST_CHAPTERS else len(FIRST_CHAPTERS), name)

    # Pieces first: a chapter of CHUNK_WORDS or less is one piece; a larger one
    # is cut along quest lines, and a short tail is folded back into the piece
    # before it rather than sent out alone. Then pieces are packed into portions
    # in chapter order, up to CHUNK_WORDS each - so small chapters ride together
    # and no agent opens for eighty-eight words, and a quest never straddles two.
    pieces: list[tuple[str, list[str], int]] = []   # (chapter, keys, words)
    for name in sorted(by_chapter, key=order):
        chapter_keys = by_chapter[name]
        total = sum(words_of(en[k]) for k in chapter_keys)
        if total <= CHUNK_WORDS:
            pieces.append((name, chapter_keys, total))
            continue
        piece: list[str] = []
        piece_words = 0
        last_quest = None
        cut: list[tuple[list[str], int]] = []
        for key in chapter_keys:
            quest = key.split(".", 2)[1]
            w = words_of(en[key])
            if piece and piece_words + w > CHUNK_WORDS and quest != last_quest:
                cut.append((piece, piece_words))
                piece, piece_words = [], 0
            piece.append(key)
            piece_words += w
            last_quest = quest
        if piece:
            if cut and piece_words < TAIL_WORDS:
                keys_before, words_before = cut[-1]
                cut[-1] = (keys_before + piece, words_before + piece_words)
            else:
                cut.append((piece, piece_words))
        pieces.extend((name, keys_, words_) for keys_, words_ in cut)

    # Packing: the first chapters go out first and on their own; everything
    # else is packed largest piece first into whichever portion still has room,
    # so three small chapters share one agent instead of taking three.
    bins: list[dict] = []
    for name, piece_keys, piece_words in pieces:
        if name in FIRST_CHAPTERS:
            if bins and bins[-1]["first"] and bins[-1]["words"] + piece_words <= CHUNK_WORDS:
                bins[-1]["pieces"].append((name, piece_keys))
                bins[-1]["words"] += piece_words
            else:
                bins.append({"first": True, "pieces": [(name, piece_keys)], "words": piece_words})
    rest = sorted((p for p in pieces if p[0] not in FIRST_CHAPTERS), key=lambda p: -p[2])
    for name, piece_keys, piece_words in rest:
        for b in bins:
            if not b["first"] and b["words"] + piece_words <= CHUNK_WORDS:
                b["pieces"].append((name, piece_keys))
                b["words"] += piece_words
                break
        else:
            bins.append({"first": False, "pieces": [(name, piece_keys)], "words": piece_words})
    portions: list[tuple[list[str], list[str]]] = []   # (chapter names, keys)
    for b in bins:
        names_now: list[str] = []
        keys_now: list[str] = []
        # Inside a portion the keys keep en_us order, chapter by chapter.
        for name, piece_keys in sorted(b["pieces"], key=lambda p: order(p[0])):
            if name not in names_now:
                names_now.append(name)
            keys_now.extend(piece_keys)
        portions.append((names_now, keys_now))

    WORK.mkdir(exist_ok=True)
    for stale in WORK.glob("*.json"):
        if not stale.name.endswith(".ru.json"):
            stale.unlink()
    for number, (names, portion_keys) in enumerate(portions, 1):
        text = " ".join(
            (en[k] if isinstance(en[k], str) else " ".join(en[k])) for k in portion_keys)
        slice_ = {
            name: ru for name, ru in glossary.items()
            if re.search(r"(?<![A-Za-z])" + re.escape(name) + r"(?![A-Za-z])", text)
        }
        # Names of things that have no Russian name in their mod: the player
        # sees them in English, so the quest text keeps them in English too.
        stays = sorted(
            name for name in without
            if re.search(r"(?<![A-Za-z])" + re.escape(name) + r"(?![A-Za-z])", text))
        payload = {
            "chunk": number,
            "chapters": [
                {"name": n, "title": titles.get(n, ("", ""))[0], "subtitle": titles.get(n, ("", ""))[1]}
                for n in names
            ],
            "words": sum(words_of(en[k]) for k in portion_keys),
            "glossary": slice_,
            "keep_english_names": stays,
            "structure_examples_pt_br": sample_structure(pt, portion_keys),
            "entries": [{"key": k, "en": en[k]} for k in portion_keys],
        }
        label = "-".join(names)[:40]
        (WORK / f"{number:02d}-{label}.json").write_text(
            json.dumps(payload, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    print(f"chunks: {len(portions)} portion(s), {len(keys)} key(s), "
          f"{sum(words_of(en[k]) for k in keys)} English words -> {WORK}")
    for path in sorted(WORK.glob("[0-9][0-9]-*.json")):
        if path.name.endswith(".ru.json"):
            continue
        data = json.loads(path.read_text(encoding="utf-8"))
        print(f"  {path.name:48s} {len(data['entries']):4d} keys {data['words']:5d} words")


# ---------------------------------------------------------------- assemble
def read_chunk_pair(source: Path) -> tuple[dict, dict]:
    ru_path = source.with_name(source.name[:-5] + ".ru.json")
    if not ru_path.is_file():
        raise FileNotFoundError(f"{ru_path.name} is missing")
    return json.loads(source.read_text(encoding="utf-8")), json.loads(ru_path.read_text(encoding="utf-8"))


def assemble() -> None:
    en = read_lang(EN_US)
    ru: "OrderedDict[str, str | list[str]]" = OrderedDict()
    if RU_RU.is_file():
        # Start from what is already there: a partial pass replaces only its keys.
        ru.update(read_lang(RU_RU))
    for source in sorted(WORK.glob("[0-9][0-9]-*.json")):
        if source.name.endswith(".ru.json"):
            continue
        try:
            _, translated = read_chunk_pair(source)
        except FileNotFoundError as exc:
            print(f"skip: {exc}")
            continue
        for entry in translated.get("entries", []):
            ru[entry["key"]] = entry["ru"]
    ordered: "OrderedDict[str, str | list[str]]" = OrderedDict()
    for key in en:
        if key in ru:
            ordered[key] = ru[key]
    dropped = [k for k in ru if k not in en]
    RU_RU.parent.mkdir(parents=True, exist_ok=True)
    RU_RU.write_bytes(format_lang(ordered).encode("utf-8"))
    print(f"assemble: {len(ordered)} of {len(en)} keys -> {RU_RU.relative_to(REPO)}"
          + (f"; {len(dropped)} key(s) no longer in en_us dropped" if dropped else ""))
    print(f"sha256 {sha256_of(RU_RU)}")


def snapshot() -> None:
    SNAPSHOT.write_bytes(EN_US.read_bytes())
    print(f"snapshot: en_us.snbt as of now -> {SNAPSHOT.relative_to(REPO)}")


# ---------------------------------------------------------------- check
CODE = re.compile(r"&[0-9a-fk-orA-FK-OR]")
MARKER = re.compile(r"\{[^{}]*\}")


def fingerprint(value: "str | list[str]") -> dict:
    flat = value if isinstance(value, str) else "\n".join(value)
    return {
        "codes": Counter(CODE.findall(flat)),
        "markers": Counter(MARKER.findall(flat)),
        "amp": flat.count("\\&"),
        "quotes": flat.count('"'),
    }


LATIN_WORD = re.compile(r"[A-Za-z][A-Za-z'\-]*")
CYRILLIC = re.compile(r"[А-Яа-яЁё]")


ANY_WORD = re.compile(r"[A-Za-zА-Яа-яЁё][A-Za-zА-Яа-яЁё'-]*")


URL = re.compile(r"(?:https?://|www\.)\S+")


_NAME_PATTERNS: "dict[str, re.Pattern[str]]" = {}


def name_pattern(name: str) -> "re.Pattern[str]":
    """One compiled pattern per allowed name, kept for the whole run.

    They are the same few thousand patterns for every entry in the file, and
    rebuilding them per entry was most of what `check` spent its time on: 342
    seconds of a 570 second CI job.
    """
    pattern = _NAME_PATTERNS.get(name)
    if pattern is None:
        pattern = re.compile(r"(?<![A-Za-z])" + re.escape(name) + r"(?![A-Za-z])")
        _NAME_PATTERNS[name] = pattern
    return pattern


def cover_names(text: str, allowed: set[str]) -> list[bool]:
    """Which characters of the text sit inside an allowed name.

    The plain `in` test before the regex is what makes this cheap: hardly any
    name occurs in any one entry, and a substring scan settles that far faster
    than a match with look-arounds. What ends up covered is the same either way.
    """
    covered = [False] * len(text)
    for name in allowed:
        if name not in text:
            continue
        for m in name_pattern(name).finditer(text):
            covered[m.start():m.end()] = [True] * (m.end() - m.start())
    return covered


def english_left(ru_flat: str, allowed: set[str]) -> str | None:
    """A run of LATIN_RUN Latin words in a row that no allowed name covers.
    Colour codes, {markers} and web addresses are not words; a Russian word
    ends the run."""
    text = MARKER.sub(" ", CODE.sub(" ", URL.sub(" ", ru_flat)))
    # No Latin at all, so no Latin left behind, and no need to cover anything.
    if not LATIN_WORD.search(text):
        return None
    covered = cover_names(text, allowed)
    run: list[str] = []
    for m in ANY_WORD.finditer(text):
        word = m.group(0)
        if CYRILLIC.search(word) or any(covered[m.start():m.end()]):
            run = []
            continue
        run.append(word)
        if len(run) >= LATIN_RUN:
            return " ".join(run)
    return None


def covered_by_names(text: str, allowed: set[str]) -> bool:
    """True when every Latin word of the text sits inside an allowed name -
    a title such as "TNP Limitless 8" is nothing to translate."""
    plain = MARKER.sub(" ", CODE.sub(" ", URL.sub(" ", text)))
    covered = cover_names(plain, allowed)
    return all(any(covered[m.start():m.end()]) for m in LATIN_WORD.finditer(plain))


def compare_entries(en_value, ru_value, allowed: set[str]) -> list[str]:
    problems: list[str] = []
    if isinstance(en_value, list) != isinstance(ru_value, list):
        return ["a list must stay a list and a string a string"]
    if isinstance(en_value, list) and len(en_value) != len(ru_value):
        return [f"the list has {len(en_value)} line(s) in English and {len(ru_value)} in Russian"]
    a, b = fingerprint(en_value), fingerprint(ru_value)
    if a["codes"] != b["codes"]:
        problems.append(f"colour codes differ: {dict(a['codes'])} vs {dict(b['codes'])}")
    if a["markers"] != b["markers"]:
        problems.append(f"{{...}} markers differ: {dict(a['markers'])} vs {dict(b['markers'])}")
    if a["amp"] != b["amp"]:
        problems.append(f"\\& count differs: {a['amp']} vs {b['amp']}")
    if isinstance(en_value, list):
        for i, (x, y) in enumerate(zip(en_value, ru_value)):
            if (x.strip() == "") != (y.strip() == ""):
                problems.append(f"line {i + 1}: a blank line has to stay blank and a text line stay text")
    en_flat = en_value if isinstance(en_value, str) else "\n".join(en_value)
    ru_flat = ru_value if isinstance(ru_value, str) else "\n".join(ru_value)
    if len(LATIN_WORD.findall(en_flat)) >= 2 and not CYRILLIC.search(ru_flat):
        # Two or more English words and no Cyrillic at all: not translated -
        # unless the whole thing is a name that stays English on purpose, or a
        # title made of nothing but such names ("TNP Limitless 8").
        stripped = re.sub(r"[^A-Za-z]+", " ", en_flat).strip()
        # Either side may be nothing but a name that stays in Latin letters: the
        # English original ("TNP Limitless 8"), or the Russian, when the pack
        # wrote one thing and the mod shows another ("Golden Chalk" is Yellow
        # Chalk in the game, and untranslated there).
        if (stripped not in allowed
                and not covered_by_names(en_flat, allowed)
                and not covered_by_names(ru_flat, allowed)):
            problems.append("no Cyrillic in the Russian text")
    leftover = english_left(ru_flat, allowed)
    if leftover:
        problems.append(f"English left in the Russian text: '{leftover}'")
    if ru_flat.strip() == "" and en_flat.strip() != "":
        problems.append("empty translation")
    return problems


def allowed_latin() -> set[str]:
    """Names that stay in Latin letters: glossary keys without a Russian name,
    mod names, and whatever terms.json lists under keep_english."""
    glossary, without = load_glossary()
    allowed = set(without) | set(glossary)
    if TERMS.is_file():
        terms = json.loads(TERMS.read_text(encoding="utf-8"))
        allowed |= set(terms.get("keep_english", []))
    return allowed


def check_chunk(number: int) -> int:
    matches = [p for p in WORK.glob(f"{number:02d}-*.json") if not p.name.endswith(".ru.json")]
    if not matches:
        print(f"no chunk {number:02d} in {WORK}")
        return 2
    source = matches[0]
    try:
        original, translated = read_chunk_pair(source)
    except FileNotFoundError as exc:
        print(str(exc))
        return 2
    allowed = allowed_latin()
    en = {e["key"]: e["en"] for e in original["entries"]}
    ru = {}
    for e in translated.get("entries", []):
        if "key" not in e or "ru" not in e:
            print(f"an entry without key/ru: {e}")
            return 1
        ru[e["key"]] = e["ru"]
    errors = 0
    for key in en:
        if key not in ru:
            print(f"{key}: missing")
            errors += 1
            continue
        for problem in compare_entries(en[key], ru[key], allowed):
            print(f"{key}: {problem}")
            errors += 1
    for key in ru:
        if key not in en:
            print(f"{key}: not in this chunk")
            errors += 1
    print(f"chunk {number:02d}: {len(en)} keys, {errors} problem(s)")
    return 1 if errors else 0


def check(report: bool) -> int:
    en = read_lang(EN_US)
    errors = 0
    if not RU_RU.is_file():
        print(f"{RU_RU.relative_to(REPO)} does not exist")
        return 1
    try:
        ru = read_lang(RU_RU)
    except ValueError as exc:
        print(f"ru_ru.snbt does not parse: {exc}")
        return 1
    # Byte-exact shape: writing it back must give the same bytes.
    if format_lang(ru).encode("utf-8") != RU_RU.read_bytes():
        print("ru_ru.snbt is not written the way en_us.snbt is written (CRLF, tabs, inline one-item lists)")
        errors += 1
    missing = [k for k in en if k not in ru]
    extra = [k for k in ru if k not in en]
    if missing:
        errors += 1
        print(f"{len(missing)} key(s) of en_us have no Russian text (the game falls back to English):")
        for key in missing[:20]:
            print(f"  {key}")
        if len(missing) > 20:
            print(f"  ... and {len(missing) - 20} more")
    if extra:
        errors += 1
        print(f"{len(extra)} key(s) are not in en_us any more: {extra[:10]}")
    allowed = allowed_latin()
    entry_problems = 0
    for key in en:
        if key not in ru:
            continue
        for problem in compare_entries(en[key], ru[key], allowed):
            entry_problems += 1
            if entry_problems <= 60:
                print(f"{key}: {problem}")
    if entry_problems:
        errors += 1
        print(f"{entry_problems} entry problem(s)")
    # The overlay carries the file into the pack; its hash has to be this file's.
    if OVERLAY.is_file():
        overlay = json.loads(OVERLAY.read_text(encoding="utf-8"))
        pinned = [f for f in overlay.get("files", []) if f.get("target") == RU_RU_TARGET]
        if not pinned:
            errors += 1
            print(f"tools/overlay.json does not pin {RU_RU_TARGET}")
        elif pinned[0].get("sha256") != sha256_of(RU_RU):
            errors += 1
            print(f"tools/overlay.json sha256 for {RU_RU_TARGET} is stale: file is {sha256_of(RU_RU)}")
    # Terminology, as a report: the glossary name in the English text should
    # leave its Russian stem in the translation. Russian declines, so the stem
    # is the first five letters of each word - a hint, not a verdict.
    glossary, _ = load_glossary()
    if report:
        misses = 0
        for key in en:
            if key not in ru:
                continue
            en_flat = en[key] if isinstance(en[key], str) else " ".join(en[key])
            ru_flat = ru[key] if isinstance(ru[key], str) else " ".join(ru[key])
            for name, russian in glossary.items():
                if not re.search(r"(?<![A-Za-z])" + re.escape(name) + r"(?![A-Za-z])", en_flat):
                    continue
                stems = [w[:5].lower() for w in re.findall(r"[А-Яа-яЁё]+", russian) if len(w) >= 4]
                if stems and not all(s in ru_flat.lower() for s in stems):
                    misses += 1
                    if misses <= 40:
                        print(f"term? {key}: '{name}' -> '{russian}' not seen")
        print(f"terminology: {misses} place(s) where a glossary name may not have been used")
    # What the next pass has to do, if upstream moved en_us since the snapshot.
    if SNAPSHOT.is_file():
        old = read_lang(SNAPSHOT)
        new_keys = [k for k in en if k not in old]
        changed = [k for k in en if k in old and old[k] != en[k]]
        gone = [k for k in old if k not in en]
        if new_keys or changed or gone:
            print(f"since the snapshot: {len(new_keys)} new, {len(changed)} changed, {len(gone)} gone "
                  f"- run `ru.py chunks --only-changed`, translate, `assemble`, `snapshot`")
            for key in (new_keys + changed)[:20]:
                print(f"  {key}")
    translated = len(en) - len(missing)
    print(f"check: {translated}/{len(en)} keys translated, {errors} error group(s)")
    return 1 if errors else 0


# ---------------------------------------------------------------- main
def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = parser.add_subparsers(dest="command", required=True)
    g = sub.add_parser("glossary")
    g.add_argument("--vanilla-index", type=Path, default=None,
                   help="assets/indexes/<n>.json of a game runtime, for the vanilla names")
    c = sub.add_parser("chunks")
    c.add_argument("--only-changed", action="store_true")
    sub.add_parser("assemble")
    sub.add_parser("snapshot")
    k = sub.add_parser("check")
    k.add_argument("--chunk", type=int, default=None)
    k.add_argument("--report", action="store_true")
    args = parser.parse_args()
    if args.command == "glossary":
        build_glossary(args.vanilla_index)
        return 0
    if args.command == "chunks":
        make_chunks(args.only_changed)
        return 0
    if args.command == "assemble":
        assemble()
        return 0
    if args.command == "snapshot":
        snapshot()
        return 0
    if args.command == "check":
        return check_chunk(args.chunk) if args.chunk is not None else check(args.report)
    return 2


if __name__ == "__main__":
    sys.exit(main())
