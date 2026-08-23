# Русский текст квестов

Квесты держат слова в языковых таблицах `config/ftbquests/quests/lang/<locale>.snbt`.
Русская — `ru_ru.snbt`; живёт она в `tools/overlay/config/ftbquests/quests/lang/`,
потому что `config/` при обновлении upstream (`tools/update_ll8.py`) очищается от
лишних файлов, а оверлей кладёт свои обратно. Игра отдаёт игроку таблицу его языка,
а ключ, которого в ней нет, берёт из `en_us` — поключево, так что неполный файл
никого не оставит с пустой строкой.

Всё делает `ru.py`:

| команда | что |
|---|---|
| `python tools/quests-ru/ru.py glossary --vanilla-index <runtime>/assets/indexes/17.json` | `glossary.json`: английские имена предметов из квестов → как они называются в русской игре (из `ru_ru.json` самих модов). Ванильные — из индекса ассетов игры. |
| `python tools/quests-ru/ru.py chunks [--only-changed]` | режет `en_us.snbt` на порции ~1500 слов по главам в `work/NN-<chapter>.json`; с `--only-changed` — только ключи, новые или изменённые против `en_us.snapshot.snbt`. |
| перевод | по одному агенту (или человеку) на порцию: `work/NN-<chapter>.ru.json` — `{"entries":[{"key","ru"}]}`; правила стиля и сквозные термины — `terms.json`. |
| `python tools/quests-ru/ru.py check --chunk NN` | проверка одной порции: все ключи, длина списков, коды цвета, `\&`, кириллица. |
| `python tools/quests-ru/ru.py assemble` | собирает `ru_ru.snbt` из существующего файла + порций, байт-в-байт в формате `en_us`. Печатает sha256 — его в `tools/overlay.json`. |
| `python tools/quests-ru/ru.py snapshot` | запоминает `en_us.snbt` как переведённый. |
| `python tools/quests-ru/ru.py check [--report]` | ворота (и шаг CI): файл цел, ключи совпадают с `en_us`, sha оверлея верен; печатает, что изменилось с момента снимка. `--report` — подсказки по терминологии. |

## После обновления upstream

1. `python tools/quests-ru/ru.py check` — покажет «since the snapshot: N new, M changed, K gone».
2. `python tools/quests-ru/ru.py chunks --only-changed` → перевести порции → `check --chunk`.
3. `assemble` → sha256 в `tools/overlay.json` → `snapshot` → `check` без ошибок → коммит.

Изменился глоссарий (новые моды)? Перегенерируй его первым шагом; `check` не блокирует
по терминологии, только сообщает.
