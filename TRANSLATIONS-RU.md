# Русские переводы в этой сборке

Моды в LL8 Extended переводят на русский три силы: сами моды (их файлы
`ru_ru.json`), сообщество (ресурспаки ниже) и сама сборка (`tnp_resources`, где
лежит то, чего нет нигде). Minecraft склеивает языковые файлы построчно, а не
заменяет их целиком, поэтому каждый пак отвечает только за те строки, которые у
него есть, а за остальные — тот, кто ниже.

Порядок задан в `launcher/resourcepacks-default.txt` (кто ниже в файле, тот выше
в игре) и заперт в `config/global_packs.toml`. Снизу вверх: машинный пак, потом
большой общий, потом маленькие ручные, потом однобазовые, и над всеми —
`tnp_resources`, чтобы правка сборки всегда побеждала.

Всё, что перечислено ниже, — чужая работа. Паки вложены под именами файлов их
авторов и, кроме одного оговорённого случая, без единого изменения.

| Пак | Автор | Лицензия | Страница |
|---|---|---|---|
| MPLOCmods v37 (LL8 gap subset) | Slava_vas (проект MPLOC) | CC BY-NC-SA 4.0 | https://www.curseforge.com/minecraft/texture-packs/mplocmods |
| RTF Extension 2.7.0 (LL8, no en_us) | Guardian_50 / Starwine Studios | AGPL-3.0 | https://modrinth.com/resourcepack/rtf-extension |
| Русская локализация для модов 1.21-1.1 | Rushan Mukhutdinov (Deflecta, RushanM) | MIT | https://modrinth.com/resourcepack/mods-ru |
| Перевод Модов 10.0.2 | BizCub | MIT | https://modrinth.com/resourcepack/mod-translate |
| Not Enough Translations [RU] a1.0.3 | Red_Mertvyak | CC BY-NC-SA 4.0 | https://modrinth.com/resourcepack/not-enough-translations-ru |
| Create: Russified 3.0 | G0ludo | CC BY-SA 4.0 | https://modrinth.com/resourcepack/create-russified |
| Re:Avaritia Russian Translation 1.0.0 | Tewek | CC0 1.0 | https://modrinth.com/resourcepack/reavaritia-russian-translation |
| Translation into Russian by Kastik404 V6 (LL8 gap subset) | Kastik404 | GNU GPL v3 | https://www.curseforge.com/minecraft/texture-packs/translation-into-russian-by-kastik404 |
| Russian Ars Nouveau 1.0.0 (LL8 gap subset) | necromancer777 | MIT | https://modrinth.com/resourcepack/ars-nouveau-ru-translation |
| Create: Essential Russian 1.1 (LL8 gap subset) | zilibobiksus | AGPL-3.0-or-later | https://modrinth.com/resourcepack/create-essential-russian |
| Russian Delight 1.0 (LL8 gap subset) | nazarbatrider | MIT | https://modrinth.com/resourcepack/russian-delight |
| Starcatcher-RU 2.3.5.1 (LL8 gap subset) | Worvib | MIT | https://modrinth.com/resourcepack/starcatcher-ru |
| Upstream Russian - Mekanism, MI, Chest Tracker (LL8 gap subset) | xGronox (Mekanism PR #8565); команда Modern Industrialization (2.5.8); переводчики Chest Tracker на Crowdin | MIT; LGPL-3.0-only (Chest Tracker) | https://github.com/mekanism/Mekanism/pull/8565, https://modrinth.com/mod/modern-industrialization, https://github.com/JackFred2/ChestTracker |
| Occultism Russian by Heimdallr-1 (LL8 gap subset) | Heimdallr-1 | MIT (прислан в репозиторий Occultism) | https://github.com/klikli-dev/occultism/pull/1473 |
| Draconic Evolution Russian by Ocle42 (LL8 gap subset) | Ocle42 | «Don't Be a Jerk» (CoFH), модпаки разрешены | https://github.com/Draconic-Inc/Draconic-Evolution/pull/1914 |
| Assorted ready Russian (LL8 gap subset) | Slava_vas (MPLOCmods v40.1); RushanM; Refined Mods (Refined Storage 2); G0ludo (Horrors Russified); KlimeGM (RTC 4.0); xaxilin (ERP); CrychicTeam (Champions-Unofficial); GinDoyr (Draconic Evolution PR #1735); Povstalec (Stargate Journey); Hidoni (Transmog) | у каждого файла своя: CC BY-NC-SA 4.0; MIT; MIT; CC BY-SA 4.0; MIT; Apache-2.0; LGPL-3.0; «Don't Be a Jerk»; CC BY-NC-SA 4.0; MIT | см. `LL8-MODIFICATION.txt` внутри |

RTF Extension содержит переводы **RTF** © Exelerium, MIT —
https://modrinth.com/resourcepack/rtf

## Правило: перевод мода не трогаем

Ресурспак всегда перекрывает языковой файл мода — так устроен Minecraft. Значит
пак, вложенный целиком, молча переписывает и то, что мод уже перевёл сам. У нас
таких строк было 19 448: например, у Oritech режим прометеевой кирки назывался
«Эффект, действующий на область», а RTF Extension переименовывал его в
«Областной эффект».

Поэтому каждый пак здесь урезан: в нём оставлены только ключи, которых нет ни у
одного мода сборки. Строки не правились, внутри каждого архива лежит
`LL8-MODIFICATION.txt` с тем, что и почему вырезано — как просят лицензии.
Сколько убрано: RTF Extension 41 271, Rus-For-Mods 917, Mod-Translate 312,
Create: Russified 252, Not Enough Translations 130, Re:Avaritia 0.

## Что изменено и почему

**RTF Extension** ужат: убраны 34 файла английской локали (`assets/*/lang/en_us.json`
и `*/en_US.lang`). У трёх модов — rootsclassic (462 строки), immersivepetroleum
(211) и iris — под ключами английского языка лежит русский текст, а сборка
оставляет английский рабочим языком. Внутри архива лежит `LL8-MODIFICATION.txt`,
где это записано, как просит AGPL. Больше ничего не тронуто.

**MPLOCmods** ужат до дыр. В оригинале 2144 языковых файла, переведённых
машинно, и целиком он лёг бы поверх собственного русского каждого мода. В
сборке остались только те 20 305 строк из 164 пространств имён, которых нет ни у
модов, ни у остальных паков, ни у самой сборки; сами строки не изменены.
Внутри — `LICENSE-NOTICE.txt` с тем же объяснением. Пак стоит ниже всех
переводов, поэтому любая ручная работа его перекрывает.

**Выжимки 14 сентября 2026.** Шесть паков внизу таблицы с самого начала
собраны только из ключей, которых в сборке нет ни у одного мода и ни у одного
другого пака: всего 2463 строки. Ars Nouveau 337 строк (всё Ars Elemental),
Create Essential 279 (Dragons Plus и Create Connected), Russian Delight 150
(Fright's Delight), Kastik404 17, Starcatcher-RU 2 и 1678 из репозиториев самих
модов. Эти 1678 строк ещё не вошли в версии модов, которые стоят в сборке:
Mekanism из закрытого PR #8565, Modern Industrialization из релиза 2.5.8 и
Chest Tracker из ветки Crowdin. Целиком не годился ни один: каждый переписал бы
собственный перевод мода, от 5 строк у Russian Delight до 1374 у Kastik404,
а Starcatcher-RU ещё и сделан под старую версию мода. Готовый перевод лучше
написанного сборкой, поэтому 1464 строки LL8 Russian (Mekanism 1451, Create
Connected 13) убраны и теперь приходят из выжимок. Исключение Kastik404: это
машинный перевод под 1.20.1, он только заполняет пустоты и строк сборки не
заменяет. Когда Mekanism, Modern Industrialization или Chest Tracker выпустят
эти строки сами, выжимку «Upstream Russian» надо урезать заново, иначе она
перекроет перевод мода.

Ещё две выжимки из закрытых и открытых PR к самим модам: 1323 строки Occultism от
Heimdallr-1 (PR #1473 закрыт, потому что русский переехал на Crowdin, но в
Occultism 1.224.4 так и лежат английские копии) и 10 строк Draconic Evolution от
Ocle42 (PR #1914). Из Occultism не взяты четыре списка ритуалов под старый набор,
вступление эссенции марида со ссылкой на африта и строки, у которых ссылки или
подстановки расходятся с установленным английским.

**Книги Patchouli, где страница состоит из ключей.** Многие книги (Ars Nouveau,
Mystical Agriculture, Psi, Touhou Little Maid и другие) пишут на странице не
текст, а ключ перевода, и русский приходит из `ru_ru.json` самого мода. Страница
в LL8 Russian заменяет английскую целиком, поэтому 530 наших страниц были пустым
повтором английских, а в четырёх страницах Ars Nouveau 94 поля стояли своим
текстом поверх перевода мода. Эти поля возвращены к ключам, повторы удалены.

**Сверка перед своим переводом.** Перед тем как переводить остаток самим,
всё, что лежало на машине (скачанные русификаторы, распакованные моды,
история LL8 Russian), сверено с очередью, а каждый найденный источник
проверен на лицензию, версию и качество, а для модов с немногими строками
отдельно просмотрены их репозитории, pull request'ы и свежие релизы. Кроме уже
названных, взяты 29 строк из десяти мелких источников (выжимка «Assorted ready
Russian»). Не взяты
машинные и чужие по лицензии: Life in the Village 4 RUS, русификатор Lee's
Zombie Apocalypse, Immersive Engineering RU, Liminal Industries, VINREY'S
Translate, Contained Opolis RU, «Творить». Из очереди убраны строки, которые
по правилу остаются английскими: названия предметов, блоков и модов, которые
никто не переводит, ники авторов картин, римские цифры и ключи, которые игра
не показывает.

Где английская копия в паке выше закрывала готовый русский ниже, русский
теперь виден: пять строк (Iron Furnaces, вкладки Macaw's) подняты в LL8 Russian,
а из Cobblemon Translation [RU] убрана английская строка сообщения Xaero
(записано в `LL8-MODIFICATION.txt` внутри архива, как просит CC BY-NC-SA).

## Чего здесь нет

Ещё четыре пака закрывали бы вместе меньше сотни строк, и все четыре на
Modrinth помечены «все права защищены», то есть вложить их без разрешения
автора нельзя: `All the Mods 10 - Complex Russian Translation` (ngk22),
`Take me, Translate!` (iMeeTake), `Random Russian Mod Translations` (ytskay),
`Русский перевод` (Solar4099). Если у автора будет спрошено и он разрешит —
добавить их сюда несложно.

`Create Aeronautics RU` (mishtok) не взят по другой причине: все его строки уже
закрыты паками выше, а автор просит не распространять перевод через сторонние
архивы.

`Mods RU / ru_ru` (Proxwian, WTFPL) не взят: из всей сборки он закрывает одно
название и сделан под формат ресурспаков 1.18–1.19.

Проверка 14 сентября 2026 отклонила ещё несколько. Лицензия не позволяет:
`RQB V2.1` (все права защищены, к тому же машинный), `TrueToRu 2.7` для ProjectE
(лицензия прямо запрещает сборки и заимствование строк), `Translate RU v1.1`
(все права защищены), `Linggango Russian Translation` от SaloEater (лицензии нет),
`ribbits.ru` (все права защищены), правки русского Immersive Engineering из PR
#6317 и #6390 (лицензия IE запрещает распространять без разрешения автора).
Закрыть нечего: `ReRT v3`, `rftools-1.20_RU`, новый перевод Mekanism с Crowdin
(всё полезное уже есть в PR #8565) и MPLOCmods v40.1, который добавил бы к v37
всего 12 строк.

## Как это обновлять

Паки закреплены в `tools/overlay.json` (`tools/overlay/packs/*.zip` → 
`resourcepacks/*.zip`), поэтому переживают обновление сборки. Порядок и замок
сверяет `python tools/check_pack_locks.py`, хэши — `python tools/check_overlay.py`.
Новая версия любого пака: положить zip в оба места, обновить sha256 в оверлее,
прогнать обе проверки.
