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

RTF Extension содержит переводы **RTF** © Exelerium, MIT —
https://modrinth.com/resourcepack/rtf

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

## Как это обновлять

Паки закреплены в `tools/overlay.json` (`tools/overlay/packs/*.zip` → 
`resourcepacks/*.zip`), поэтому переживают обновление сборки. Порядок и замок
сверяет `python tools/check_pack_locks.py`, хэши — `python tools/check_overlay.py`.
Новая версия любого пака: положить zip в оба места, обновить sha256 в оверлее,
прогнать обе проверки.
