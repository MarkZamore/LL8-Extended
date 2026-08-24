# Ресурспаки сборки: полный разбор

Разобраны все **23** паков из `resourcepacks/`. Каждый архив вскрыт, содержимое сверено со списком включения `launcher/resourcepacks-default.txt` и с составом `mods/`; ссылки проверены открытием страницы.

## Что важно знать до таблицы

**Перекрытие — это арифметика, а не мнение.** Для каждого файла-ассета посчитано, какой из паков стоит выше в порядке загрузки. Доля в колонке «Перекрыт» — сколько процентов ассетов пака в игре не видно, потому что их перерисовывает пак выше.

**Половина паков зависит от формата OptiFine, и он покрыт лишь частично.** В сборке стоят Entity Model Features и Entity Texture Features — они дают модели сущностей (`optifine/cem`) и случайные текстуры (`optifine/random`), на которых держится большинство модельных паков. Стоит и Fusion — свой формат соединённых текстур и эмиссивных слоёв. А вот **Continuity/NeoContinuity нет** (соединённые текстуры формата OptiFine, `optifine/ctm`) и **CIT Resewn нет** (`optifine/cit`). Всё, что паки кладут в эти две папки, не проявляется: самый заметный пострадавший — Stay True, у которого 1327 файлов соединённых текстур и оверлеев травы просто не читаются.

## Сводная таблица

| # | Пак | Что добавляет | Скачать | Перекрыт | Вердикт |
|---|---|---|---|---|---|
| 1 | **Stay True (файл релиза «Stay True 1.21»)** | Аккуратный ремастер ванильных текстур в исходной палитре: 1104 текстуры блоков (467 семейств) и 140 blockstates с весовыми случайными вариантами —… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/stay-true) | **0%** | 🟢 оставить |
| 2 | **Gray's Mob Overhaul** | Переделывает модели и текстуры почти всех ванильных мобов: 117 CEM-моделей (.jem) и ~1038 файлов случайных вариантов — больше всего у кошек (262),… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/grays-mob-overhaul) | **9%** | 🟢 оставить |
| 3 | **3D Items-Vanillaism** | Переводит 176 ванильных предметов из плоских спрайтов в объёмные модели: еду и напитки, слитки/самородки, сырые руды, все 16 красителей, зелья,… | [modrinth.com](https://modrinth.com/resourcepack/3d-items-vanillaism) | **0%** | 🟢 оставить |
| 4 | **THICC VILLAGERS (в pack.mcmeta — «THICC. (req. EMF)»)** | Полностью переделывает модели и текстуры жителей — все 14 профессий, 7 биомных типов, 5 уровней значков — а также детей-жителей, зомби-жителей,… | [planetminecraft.com](https://www.planetminecraft.com/texture-pack/thicc-villagers-by-jxrk-1-14-1-20-of-v1-0/)&nbsp;⚠️ | не выбран | 🟢 оставить |
| 5 | **3D Reinforced Armor** | Заменяет плоские слои брони объёмными CEM-моделями: 26 .jem-файлов на внутренний и внешний слой для игрока (обычная и тонкая модель), стойки для… | [modrinth.com](https://modrinth.com/resourcepack/3d-reinforced-armor) | нет | 🟢 оставить |
| 6 | **Baby Animals Remastered** | Даёт детёнышам собственные модели и текстуры вместо ванильных «большеголовых»: отдельные CEM-модели и png для поросёнка (piglet.png), ягнёнка… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/baby-animals-remastered) | нет | 🟢 оставить |
| 7 | **Luigi Villagers** | Перекрашивает всех жителей в Луиджи, а странствующего торговца — в Марио: заменены базовая villager.png, все 13 текстур профессий, 5 значков уровня… | [modrinth.com](https://modrinth.com/resourcepack/luigi-villagers) | нет | 🔴 удалить |
| 8 | **My Monster Girls** | Заменяет модели четырёх мобов на женские: зомби, кадавра (husk), утопленника (вместе с внешним слоем drowned_outer) и эндермена — через CEM .jem с… | [modrinth.com](https://modrinth.com/resourcepack/my-monster-girls) | нет | 🟢 оставить |
| 9 | **Neco-Arc Cats** | Превращает всех кошек и оцелота в Neco-Arc: заменены все 11 ванильных окрасов кошки (tabby, black, red, siamese, british_shorthair, calico, persian,… | [modrinth.com](https://modrinth.com/resourcepack/neco-arc-cats) | **4%** | 🟢 оставить |
| 10 | **LLama Girls** | Полностью заменяет модель и текстуры лам: обычная лама, лама торговца и слой ковра-декора получают кастомные CEM-модели 128x128 с анимациями… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/llama-girls) | **4%** | 🟢 оставить |
| 11 | **Mugget's Standing Cow** | Ставит корову на задние ноги: одна CEM-модель cow.jem разворачивает тело вертикально (поворот body на -90° с компенсацией подмоделей), голова и рога… | [modrinth.com](https://modrinth.com/resourcepack/standing-cow) | **25%** | 🟢 оставить |
| 12 | **Betty Witch** | Заменяет ванильную ведьму на анимированную девушку-ведьму: CEM-модель assets/minecraft/optifine/cem/witch.jem с процедурными анимациями (моргание,… | [modrinth.com](https://modrinth.com/resourcepack/betty-witch) | **7%** | 🟢 оставить |
| 13 | **Cherry-Creeper (remake) — With Animation** | Делает из крипера вишнёвое деревце: CEM-модель optifine/cem/creeper.jem с подмоделями кроны (body_cherry, body_cherry_rotation) и анимацией, текстура… | [planetminecraft.com](https://www.planetminecraft.com/texture-pack/cherry-creeper-remake-6321265/)&nbsp;⚠️ | нет | 🟢 оставить |
| 14 | **Breeze Girl** | Полностью переделывает бриза (breeze) в антропоморфную девушку-персонажа: собственная Blockbench-модель assets/minecraft/optifine/cem/breeze.jem с… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/breeze-girl) | нет | 🟢 оставить |
| 15 | **'Thicc' Phantom - Spartan ReTexture (в pack.mcmeta: "Thicc phantom [Optifine] MAKE BY Huge Cat and edited by Spartan on PMC!")** | Меняет фантома: своя Blockbench-модель assets/minecraft/optifine/cem/phantom.jem (textureSize 128x128, тело перестроено в фигуристый силуэт) плюс… | [planetminecraft.com](https://www.planetminecraft.com/texture-pack/thicc-phantom-spartan-retexture/) | нет | 🟢 оставить |
| 16 | **Gigachad Villager** | Превращает железного голема в "гигачада"-жителя из мема: своя Blockbench-модель assets/minecraft/optifine/cem/iron_golem.jem (textureSize 128x128,… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/gigachad-villager) | нет | 🟢 оставить |
| 17 | **Bad Dream Death** | Заменяет один-единственный звук — смерть игрока (entity.player.death) — на резкий вдох, будто «это был просто плохой сон». Никакой графики в паке… | [modrinth.com](https://modrinth.com/resourcepack/bad-dream-death) | нет | 🟢 оставить |
| 18 | **Totem of :GAGAGA: 7tv emote** | Заменяет тотем бессмертия на 7tv-эмоцию :GAGAGA: — своя текстура assets/minecraft/textures/item/gagaga.png и переписанная модель… | [modrinth.com](https://modrinth.com/resourcepack/gagaga) | нет | 🟢 оставить |
| 19 | **LET SKELETONS HAVE HANDS (67 edition)** | Через CEM-модель skeleton.jem даёт скелетам настоящие кисти с отдельными пальцами вместо культяпок. Скелет, переименованный биркой в «67», «six… | [modrinth.com](https://modrinth.com/resourcepack/let-skeletons-have-hands-(67-edition)) | нет | 🟢 оставить |
| 20 | **Vignette Removed (файлы автор называет "No Vignette")** | Подменяет единственную текстуру assets/minecraft/textures/misc/vignette.png на полностью непрозрачный чёрный квадрат 256×256, из-за чего затемнение… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/vignette-removed) | нет | 🟢 оставить |
| 21 | **Sun & Moon Fusion** | Меняет солнце и луну на чистые мультяшные: sun.png и moon_phases.png, вместе 1,5 КБ на две текстуры — весь пак. Стоит выше обоих других паков светил и перерисовывает ровно те же два файла, так что в игре видно только его… | [modrinth.com](https://modrinth.com/resourcepack/sun-moon-fusion) | нет | 🟢 оставить, светила теперь его |
| 22 | **Lilac Jackson** | Перерисовывает ровно один блок — сирень: lilac_top.png и lilac_bottom.png (обе 512×512) собраны из фотографий лица Майкла Джексона, затонированных в… | [modrinth.com](https://modrinth.com/resourcepack/lilac-jackson) | нет | 🟢 оставить |
| 23 | **Authentic Shadows** | Заменяет ровно одну текстуру: круглую тень под всеми сущностями (assets/minecraft/textures/misc/shadow.png), уменьшая её до 16x16 с жёстким… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/authentic-shadows) | нет | 🟢 оставить |

⚠️ — страница похожа на нужную, но подтвердить автора и название по ней не удалось.

## Требуют решения (0)

Все шесть прежних пометок закрыты, и ни одна не на бумаге. Пять паков, на
которые они указывали, из сборки убраны: Fresh Animations, Slavic Villagers,
Moaning Mobs, The Sky Sun and Moon и zazu sun and moon. Шестая была про Luigi
Villagers, которого перекрывал THICC VILLAGERS, — теперь THICC лежит в сборке
снятым с выбора, и жители Luigi видны целиком.

Порядок паков пересобран по одному правилу: чем шире пак, тем ниже он стоит.
Мелких перекрытий после этого не осталось вовсе, а единственный пак, который
что-то отдаёт, — Gray's Mob Overhaul: 9% его ассетов уходят ровно тем мобам,
для которых кто-то выбрал отдельный пак. Это и есть цель, а не потеря.

## Все паки по порядку загрузки

Снизу вверх, как их читает игра: пак, стоящий в этом списке ниже, — это подложка,
а всё, что идёт после него, рисуется поверх. Порядок задаётся
`launcher/resourcepacks-default.txt`.


### 1. Stay True (файл релиза «Stay True 1.21») 🟢

- **Файл:** `Stay True 1.21.zip`
- **Автор:** HaiMcFly (на CurseForge — haimcyfly); в pack.mcmeta: «By HaiMcFly Update:31»
- **Что добавляет:** Аккуратный ремастер ванильных текстур в исходной палитре: 1104 текстуры блоков (467 семейств) и 140 blockstates с весовыми случайными вариантами — булыжник в 10 вариациях, камень в 8 плюс зеркальные и повёрнутые модели, земля в 13, гравий в 8, доски дуба в 13, верх травяного блока в 9. Плюс переделаны сундуки и таблички (включая подвесные), корова, эндермен с глазами, кальмар, колокол, облака, солнце, дождь, снег, небо Энда, виньетка, подводный оверлей, силовое поле, иконки HUD (icons.png, widgets.png) и загрузочный логотип Mojang.
- **Область:** Только ваниль (assets/minecraft, 3879 файлов). Блоки: 1195 моделей, 1104 текстуры, 140 blockstates. Предметы: 39 текстур (двери всех пород, фонарь и душевой фонарь, цепь, удочка, слиток и инструменты незерита, пшеница, порох, вагонетки, яйцо черепахи). Сущности: 36 текстур. Мир: environment (5),…
- **Адресат:** vanilla — модовых namespace'ов нет ни одного.
- **Формат:** pack_format 34 — это ровно 1.21/1.21.1, supported_formats не объявлен. Совпадает с целевой версией сборки точно.
- **Нужен формат OptiFine:** да
- **Скачать:** https://www.curseforge.com/minecraft/texture-packs/stay-true
- **Его перерисовывают:** 3D Items-Vanillaism-1.21.1 (5), Grays Mob Overhaul v13 (3), Cherry_Creeper_remake(3.0) (2)
- **Вердикт:** 🟢 оставить
- **Заметки:** ВАЖНО про флаг: 1327 файлов лежат в assets/minecraft/optifine/ctm (93 .properties + 1232 .png), из них 795 — в _overlays (оверлеи для grass_block, podzol, moss_block, nylium, netherrack, rooted_dirt, sand/red_sand, suspicious_sand/gravel, ores, log_dirt_cmt на 126 файлов) и 49 — стекло. Это CTM/оверлеи, а НЕ CEM/CIT/random-entity, поэтому установленные в сборке entity_model_features-3.2.4 и entity_texture_features_7.1 их не покрывают. Нужен Continuity / NeoContinuity / OptiFine — в c:/Users/Oscar/Documents/LL8/mods ничего из этого НЕТ (Fusion есть, но он читает только собственный формат, не optifine/ctm). Практический вывод: соединённые текстуры, оверлеи травы/подзола и биомная окраска…

### 2. Authentic Shadows 🟢

- **Файл:** `Authentic Shadows_1.21+.zip`
- **Автор:** liahim85 (на Modrinth — Liahim)
- **Что добавляет:** Заменяет ровно одну текстуру: круглую тень под всеми сущностями (assets/minecraft/textures/misc/shadow.png), уменьшая её до 16x16 с жёстким пиксельным краем вместо ванильного мягкого размытого градиента. Идущий в комплекте shadow.png.mcmeta с "clamp": true не даёт тени растекаться за края при масштабировании.
- **Область:** vanilla, только одна глобальная текстура misc/shadow.png (тень под всеми мобами, игроками и падающими сущностями). Ни мобы, ни блоки, ни GUI, ни предметы не перерисованы. Весь пак — 4 файла: pack.mcmeta, pack.png и пара shadow.png + shadow.png.mcmeta.
- **Адресат:** vanilla
- **Формат:** pack_format 16, плюс supported_formats {min 16, max 99}. Формат 1.21.1 (34) попадает в этот диапазон, поэтому пак грузится как совместимый, без предупреждения…
- **Нужен формат OptiFine:** нет
- **Скачать:** https://www.curseforge.com/minecraft/texture-packs/authentic-shadows
- **Он перерисовывает:** Stay True 1.21 (2)
- **Вердикт:** 🟢 оставить
- **Заметки:** Проверено фетчем страницы CurseForge: проект "Authentic Shadows", владелец liahim85, файл называется буквально "Authentic Shadows_1.21+.zip" — точное совпадение с именем зипа на диске; заявлена поддержка 1.21.1–1.21.5. Прямая страница именно этого файла: https://www.curseforge.com/minecraft/texture-packs/authentic-shadows/files/6052198. Зеркало на Modrinth: https://modrinth.com/resourcepack/authentic-shadows (автор Liahim, лицензия ARR, 16x, категория Environment). Папки assets/minecraft/optifine/** нет, никаких CEM/CIT/random entity — работает на чистом ванильном рендере, дополнительные моды не нужны. Конфликтует с любым другим паком, который трогает misc/shadow.png (важен порядок в списке…

### 3. Vignette Removed (файлы автор называет "No Vignette") 🟢

- **Файл:** `No Vignette 1.21.zip`
- **Автор:** Gbergz
- **Что добавляет:** Подменяет единственную текстуру assets/minecraft/textures/misc/vignette.png на полностью непрозрачный чёрный квадрат 256×256, из-за чего затемнение по краям экрана перестаёт рисоваться вообще. В архиве больше ничего нет — только этот png, его .mcmeta с "blur": true и текстовый файл с копирайтом автора.
- **Область:** GUI/HUD-оверлей ванильного Minecraft: только виньетка. Ни мобов, ни блоков, ни предметов, ни ассетов модов.
- **Адресат:** vanilla
- **Формат:** pack_format 34, supported_formats нет. 34 — это ровно 1.21/1.21.1, то есть заявлена поддержка целевой версии точь-в-точь.
- **Нужен формат OptiFine:** нет
- **Скачать:** https://www.curseforge.com/minecraft/texture-packs/vignette-removed
- **Он перерисовывает:** Stay True 1.21 (2)
- **Вердикт:** 🟢 оставить
- **Заметки:** Ссылку проверил фетчем страницы: проект "Vignette Removed", владелец Gbergz, 16x Miscellaneous, ~323 тыс. загрузок; файлы релизов там называются "No Vignette", что и совпадает с именем зипа. Внутри архива лежит by_gbergz_credit.txt: автор просит качать только с CurseForge. Технический нюанс: ванилла той же текстурой рисует красную подсветку у границы мира, поэтому вместе с виньеткой пропадёт и она (это же указано в описании проекта). Файл уникальный, конфликтовать с остальными паками из папки не может.

### 4. Totem of :GAGAGA: 7tv emote 🟢

- **Файл:** `Totem of GAGAGA 7tv emote 1.0.zip`
- **Автор:** HarryTheCat (Modrinth team owner)
- **Что добавляет:** Заменяет тотем бессмертия на 7tv-эмоцию :GAGAGA: — своя текстура assets/minecraft/textures/item/gagaga.png и переписанная модель totem_of_undying.json с собственными display-трансформациями (в руках, на земле, в слоте головы). Звук срабатывания тотема тоже подменён файлом sounds/item/totem/use_totem.ogg.
- **Область:** vanilla items — один предмет (totem_of_undying): модель, текстура и звук item.totem.use
- **Адресат:** vanilla
- **Формат:** pack_format 34, без supported_formats. 34 = ровно 1.21/1.21.1 — совместимость точная, предупреждений не будет.
- **Нужен формат OptiFine:** нет
- **Скачать:** https://modrinth.com/resourcepack/gagaga
- **Он перерисовывает:** 3D Items-Vanillaism-1.21.1 (1)
- **Вердикт:** 🟢 оставить
- **Заметки:** Проверено: страница Modrinth «Totem of :GAGAGA: 7tv emote» (project 6WhiwaS2, slug gagaga), /members → HarryTheCat (Owner), версия 1.0 с файлом gagaga.zip — на диске переименован в «Totem of GAGAGA 7tv emote 1.0.zip». Звук переопределяется по пути, без своего sounds.json — это работает, так как ванильный item.totem.use ссылается ровно на item/totem/use_totem. В архиве забыт исходник Paint.NET textures/item/gagaga.pdn — безвредный мусор, игра его игнорирует.

### 5. 3D Reinforced Armor 🟢

- **Файл:** `3D Reinforced Armor v1.zip`
- **Автор:** Konz1z
- **Что добавляет:** Заменяет плоские слои брони объёмными CEM-моделями: 26 .jem-файлов на внутренний и внешний слой для игрока (обычная и тонкая модель), стойки для брони и 12 носящих броню мобов — зомби, зомби-житель, кадавр, утопленник, скелет, страж (stray), боггед, пиглин, брут и зомбифицированный пиглин. Плюс перерисованные иконки и слои всех материалов, все 18 узоров трима с 14 палитрами и core-шейдер, из-за которого трим пульсирующе светится.
- **Область:** Ванильная броня и тримы: optifine/cem/*_inner_armor.jem и *_outer_armor.jem (26 шт.), textures/item/ иконки chainmail/iron/gold/diamond/netherite, textures/models/armor/*_layer_1\|2.png для кожи, кольчуги, железа, золота, алмаза, незерита и панциря черепахи, весь textures/trims/** (18 узоров +…
- **Адресат:** vanilla
- **Формат:** pack_format 34, поля supported_formats нет — это ровно 1.21/1.21.1, полное совпадение с модпаком, предупреждения о несовместимости не будет.
- **Нужен формат OptiFine:** да
- **Скачать:** https://modrinth.com/resourcepack/3d-reinforced-armor
- **Вердикт:** 🟢 оставить
- **Заметки:** Проверено двумя запросами: страница Modrinth называется «3D Reinforced Armor», версия игры 1.21, описание — «completely revamps all armor into new, more realistic armor» через Entity Model Features; страница пользователя https://modrinth.com/user/Konz1z перечисляет этот проект среди трёх своих (совпадает с pack.mcmeta «§7by §bKonz1z»). Автор прямо пишет, что на OptiFine пак НЕ работает — нужен именно EMF; entity_model_features-3.2.4-1.21-neoforge.jar в mods/ присутствует. Замечания по содержимому: (1) assets/minecraft/optifine/cem/New folder/elytra.jem лежит во вложенной папке, а EMF читает .jem только из корня cem/ — эта модель элитр мёртвая и ни на что не влияет; (2) в…

### 6. Baby Animals Remastered 🟢

- **Файл:** `Baby Animals Remastered 1.21 v1.3.zip`
- **Автор:** Futureazoo
- **Что добавляет:** Даёт детёнышам собственные модели и текстуры вместо ванильных «большеголовых»: отдельные CEM-модели и png для поросёнка (piglet.png), ягнёнка (lamb.png + lamb_wool.png), цыплёнка (chick.png), телёнка (calf.png) и обоих грибных телят (red/brown_mooshroom_calf.png), а также уменьшенные модели волчонка с ошейником. Котята, оцелоты и волчата всех 9 окрасов переключаются на детские скины через random entity .properties с условием baby=true.
- **Область:** Только ванильные мобы-детёныши: свинья, овца (тело + шерсть), курица, корова, грибная корова (красная и коричневая), волк (+ ошейник), кошка (9 окрасов + ошейник), оцелот. Ни GUI, ни блоков, ни предметов, ни модовых ассетов не трогает.
- **Адресат:** vanilla — всё лежит в assets/minecraft/, ни одного модового namespace
- **Формат:** pack_format 34, supported_formats не задан. 34 — это ровно 1.21–1.21.1, так что для 1.21.1 подходит без оговорок.
- **Нужен формат OptiFine:** да
- **Скачать:** https://www.curseforge.com/minecraft/texture-packs/baby-animals-remastered
- **Он перерисовывает:** Grays Mob Overhaul v13 (36)
- **Вердикт:** 🟢 оставить
- **Заметки:** Почти весь пак живёт в assets/minecraft/optifine/: 8 папок cem/ с парами .jem (обычный/детский) и .properties вида «models.1=2, baby.1=true», плюс random/entity/ для кошек, оцелота и волка. Без CEM/random-entity ничего не сработает — в LL8 нужные моды стоят: entity_model_features-3.2.4-1.21-neoforge.jar и entity_texture_features_1.21-neoforge-7.1.jar. Обычных текстур всего 6 штук, и они бесполезны сами по себе — на них ссылаются .jem. Внутри лежит мусорный .DS_Store (безвредно). Заявленных на странице панд и лис в этой версии пака нет — только перечисленные мобы. Ссылка подтверждена: страница CurseForge называет автором Futureazoo, что совпадает с description в pack.mcmeta («by…

### 7. 3D Items-Vanillaism 🟢

- **Файл:** `3D Items-Vanillaism-1.21.1.zip`
- **Автор:** Snow_Wolf_324
- **Что добавляет:** Переводит 176 ванильных предметов из плоских спрайтов в объёмные модели: еду и напитки, слитки/самородки, сырые руды, все 16 красителей, зелья, книги, кузнечные шаблоны и все 18 шаблонов трима, узоры знамён, тотем бессмертия, булаву и фонари. Дополнительно делает объёмными коричневый/красный гриб и багровый/искажённый грибок, включая варианты в цветочном горшке.
- **Область:** Только ванильные предметы и четыре блока-растения: 176 файлов в assets/minecraft/models/item/, 8 в models/block/ (brown_mushroom, red_mushroom, crimson_fungus, warped_fungus + их potted-версии) и 181 текстура. Ни мобов, ни GUI, ни мира не трогает.
- **Адресат:** vanilla
- **Формат:** pack_format 34 плюс supported_formats {min_inclusive:15, max_inclusive:50} — 1.21.1 (формат 34) поддерживается явно, лаунчер не пометит пак как несовместимый.
- **Нужен формат OptiFine:** нет
- **Скачать:** https://modrinth.com/resourcepack/3d-items-vanillaism
- **Он перерисовывает:** Stay True 1.21 (5)
- **Его перерисовывают:** Totem of GAGAGA 7tv emote 1.0 (1)
- **Вердикт:** 🟢 оставить
- **Заметки:** Проверено: страница Modrinth называется «3D Items-Vanillaism», в списке версий есть 1.21.1, владелец команды по API — Snow_Wolf_324 (совпадает с описанием в pack.mcmeta: «Completed on Jane 24, 2026 By Snow_Wolf_324»). Есть и зеркало на CurseForge (s3d-items-vanillaism). Папки assets/minecraft/optifine/ в паке нет вообще — работает на чистом NeoForge, EMF/ETF/CIT не нужны. Все модели наследуются от item/display с gui_light:"front", поэтому иконка в инвентаре остаётся плоской и «ванильной», а объём виден в руке, на земле и в рамке. Текстуры перенесены в подпапки (item/food_and_drinks/, item/ingredients/ores/ и т.д.), в именах опечатки автора: glow_barries.png и sweet_barries.png. Пространство…

### 8. Gray's Mob Overhaul 🟢

- **Файл:** `Grays Mob Overhaul v13.zip`
- **Автор:** CanineGray (pack.mcmeta: "Made By §9CanineGray §6New Mobs!"; CurseForge owner: caninegray)
- **Что добавляет:** Переделывает модели и текстуры почти всех ванильных мобов: 117 CEM-моделей (.jem) и ~1038 файлов случайных вариантов — больше всего у кошек (262), лошадей (189), свиней (69), коров (64), кроликов (60), волков (56), жителей (40), пиглинов и куриц (по 30), зомби (23), овец (20). Плюс 325 базовых текстур сущностей (включая 23 файла в textures/entity/equipment — брони/сёдла) и светящиеся слои по суффиксу _e через optifine/emissive.properties.
- **Область:** Только ванильные мобы (assets/minecraft). 1481 файл: 1038 в optifine/random/entity, 325 в textures/entity, 117 в optifine/cem, 1 emissive.properties. GUI, блоки, предметы и мир не трогает.
- **Адресат:** vanilla
- **Формат:** pack_format 22, supported_formats 22–55. 1.21.1 = формат 34, попадает в диапазон, так что пак грузится. На CurseForge файл v13 подписан как "Gray's Mob…
- **Нужен формат OptiFine:** да
- **Скачать:** https://www.curseforge.com/minecraft/texture-packs/grays-mob-overhaul
- **Его перерисовывают:** Baby Animals Remastered 1.21 v1.3 (36), Luigi Villagers (30), LLama Girls (26)
- **Он перерисовывает:** Stay True 1.21 (3)
- **Вердикт:** 🟢 оставить
- **Заметки:** URL проверен фетчем: название "Gray's Mob Overhaul", владелец caninegray, в описании прямо "OptiFine OR mods: EMF / ETF Required"; в списке файлов есть релиз v13 (18.06.2025). Весь пак завязан на OptiFine-фичи: CEM (117 .jem), Random Entities (1038 файлов) и Emissive Textures. В c:/Users/Oscar/Documents/LL8/mods есть entity_model_features-3.2.4-1.21-neoforge.jar и entity_texture_features_1.21-neoforge-7.1.jar — то есть CEM и random/emissive отработают. License.txt внутри зипа: CC BY-NC 4.0, перезалив запрещён.

### 9. LET SKELETONS HAVE HANDS (67 edition) 🟢

- **Файл:** `Skeletons Hands 67.zip`
- **Автор:** Radok (Modrinth team owner)
- **Что добавляет:** Через CEM-модель skeleton.jem даёт скелетам настоящие кисти с отдельными пальцами вместо культяпок. Скелет, переименованный биркой в «67», «six seven» или «sixseven», подхватывает вторую модель skeleton2.jem с текстурой sixseven.png и держит в руках цифры 6 и 7.
- **Область:** vanilla mobs — только скелет (модель + именованный вариант); текстур ванильных мобов не трогает, свою sixseven.png использует только вторая модель
- **Адресат:** vanilla
- **Формат:** pack_format 15 (1.20.1), но объявлен supported_formats min_inclusive 6 / max_inclusive 255 — 1.21.1 (34) в диапазон входит, пак грузится без предупреждения. На…
- **Нужен формат OptiFine:** да
- **Скачать:** https://modrinth.com/resourcepack/let-skeletons-have-hands-(67-edition)
- **Он перерисовывает:** Grays Mob Overhaul v13 (1)
- **Вердикт:** 🟢 оставить
- **Заметки:** Всё содержимое лежит в assets/minecraft/optifine/cem/ — без OptiFine или EMF+ETF пак не делает ничего. В сборке c:/Users/Oscar/Documents/LL8/mods есть entity_model_features-3.2.4-1.21-neoforge.jar и entity_texture_features_1.21-neoforge-7.1.jar, так что работать будет. skeleton.properties задаёт models.2/3/4 = 2 с name.2=iregex:(67), name.3=iregex:(six seven), name.4=iregex:(sixseven) — то есть все три имени ведут на skeleton2.jem. Проверено через api.modrinth.com/v2/project/let-skeletons-have-hands-(67-edition) (id 3Qby3x6b, описание дословно совпадает с поведением .properties) и /members → Radok (Owner). Лицензия ARR. ВНИМАНИЕ на конфликт: Fresh Animations v1.10.4 в этой же папке…

### 10. Cherry-Creeper (remake) — With Animation 🟢

- **Файл:** `Cherry_Creeper_remake(3.0).zip`
- **Автор:** Poolb, Kotisimo
- **Что добавляет:** Делает из крипера вишнёвое деревце: CEM-модель optifine/cem/creeper.jem с подмоделями кроны (body_cherry, body_cherry_rotation) и анимацией, текстура creeper_cherry.png (64x64) плюс emissive-слой creeper_cherry_e.png, и отдельная head_creeper.jem для головы крипера. Заодно подменяет модель и текстуру ТНТ (models/block/tnt.json + textures/block/tnt/tnt.png), иконку пороха и картину creebet, а через lang en_us/ru_ru крипер становится «Вишневым Крипером».
- **Область:** ванильный моб creeper (модель+текстура+emissive) и голова крипера, блок ТНТ (модель и текстура), предмет gunpowder, картина creebet, локализация en/ru
- **Адресат:** vanilla
- **Формат:** pack_format 15 (1.20-1.20.1), НО есть supported_formats min 0 / max 1024 — то есть 1.21 покрыта явно, плашки «другая версия» не будет
- **Нужен формат OptiFine:** да
- **Скачать:** https://www.planetminecraft.com/texture-pack/cherry-creeper-remake-6321265/ (не подтверждена)
- **Он перерисовывает:** Stay True 1.21 (2), Grays Mob Overhaul v13 (2), Neco-Arc Cats (2)
- **Вердикт:** 🟢 оставить
- **Заметки:** PlanetMinecraft отдаёт WebFetch HTTP 403, страницу напрямую прочитать не вышло. Подтверждение косвенное: поиск (в т.ч. с ограничением по домену planetminecraft.com) стабильно даёт этот URL с заголовком «Cherry-Creeper(remake) - With Animation» и авторами poolb + kotisimo — пара авторов в точности совпадает с pack.mcmeta «by Poolb, Kotisimo», а внутри creeper.jem стоит credit «made by Poolb, Kotisimo». Сниппет упоминает апдейт 2.1 от 17.07.2024, у нас на диске 3.0 — вероятно более позднее обновление той же страницы. КОНФЛИКТ: Fresh Animations v1.10.4 тоже содержит optifine/cem/creeper.jem (и creeper_animations.jpm) — победит тот, что выше по списку. ТНТ-модель кастомная и ссылается на свою…

### 11. Sun & Moon Fusion 🟢

- **Файл:** `Sun & Moon Fusion 2.1.zip`
- **Автор:** OrkaMC
- **Что добавляет:** Меняет солнце и луну на чистые мультяшные: sun.png и moon_phases.png — и всё, в архиве больше нет ни одного ассета. Обе текстуры крошечные, 711 и 778 байт, то есть рисунок простой и мелкий по сетке фаз.
- **Область:** Ванильное окружение (assets/minecraft/textures/environment): только солнце и луна.
- **Адресат:** vanilla
- **Формат:** pack_format 10 (1.19), supported_formats нет. Поддержка 1.21 НЕ заявлена — игра пометит пак как устаревший, но оба пути textures/environment/ с 1.19 не менялись, так что он читается.
- **Нужен формат OptiFine:** нет
- **Скачать:** https://modrinth.com/resourcepack/sun-moon-fusion
- **Он перерисовывает:** Stay True 1.21 (1)
- **Вердикт:** 🟢 оставить, светила теперь его
- **Заметки:** Третий пак светил в сборке и единственный, который видно: он стоит выше обоих остальных и переопределяет ровно те же два файла. Пришёл позже аудита, коммитом «Add Windy, Spawn Animations, Cursors Extended and a new sun and moon», и молча погасил zazu, который до него был виден. Ссылка сверена через Modrinth API: единственный проект с этим названием, slug sun-moon-fusion, автор OrkaMC — тот же, что подписан в pack.mcmeta («Retextured Sun & Moon By: OrkaMC»). Держать три пака на два файла смысла нет: два нижних можно убрать, ничего не изменится.

### 12. Lilac Jackson 🟢

- **Файл:** `Lilac Jackson.zip`
- **Автор:** Kostya_Pictures
- **Что добавляет:** Перерисовывает ровно один блок — сирень: lilac_top.png и lilac_bottom.png (обе 512×512) собраны из фотографий лица Майкла Джексона, затонированных в розово-фиолетовый и разложенных по «пикселям» соцветия, стебель при этом остаётся обычным пиксельно-зелёным. Ничего, кроме двух половинок сирени, пак не трогает.
- **Область:** Ванильный мир/блоки: только двухблочный цветок lilac. Ни GUI, ни мобов, ни предметов.
- **Адресат:** vanilla
- **Формат:** pack_format 15 (1.20.1), supported_formats нет. 1.21 формально не заявлена, лаунчер покажет предупреждение, но пути…
- **Нужен формат OptiFine:** нет
- **Скачать:** https://modrinth.com/resourcepack/lilac-jackson
- **Он перерисовывает:** Stay True 1.21 (2)
- **Вердикт:** 🟢 оставить
- **Заметки:** Проверено: страница Modrinth "Lilac Jackson", описание "a Michel Jackson inside a lilac", теги cursed/realistic, заявлены 1.13.x–1.21.x; владельца уточнил через api.modrinth.com/v2/project/lilac-jackson/members — Kostya_Pictures. Мем-пак: 512×512 на блок, то есть в 32 раза выше ванильного 16×16, ради двух текстур. Ни папки optifine/, ни чужих неймспейсов — конфликтов с остальными паками нет.

### 13. Bad Dream Death 🟢

- **Файл:** `Bad Dream Death.zip`
- **Автор:** JustImagine436 (Modrinth team owner)
- **Что добавляет:** Заменяет один-единственный звук — смерть игрока (entity.player.death) — на резкий вдох, будто «это был просто плохой сон». Никакой графики в паке нет: только assets/minecraft/sounds/custom/mydeath.ogg и sounds.json с "replace": true.
- **Область:** vanilla sounds only — переопределение события entity.player.death; ни текстур, ни моделей, ни GUI
- **Адресат:** vanilla
- **Формат:** pack_format 55, без supported_formats. 55 = 1.21.5, то есть 1.21.1 НЕ заявлена — игра пометит пак как «сделан для более новой версии». Формат sounds.json с…
- **Нужен формат OptiFine:** нет
- **Скачать:** https://modrinth.com/resourcepack/bad-dream-death
- **Он перерисовывает:** Muggets Standing Cow v1.0 (2)
- **Вердикт:** 🟢 оставить
- **Заметки:** Проверено через api.modrinth.com/v2/project/bad-dream-death (id FfdhTk6z, description «Like the memes. For when you are playing with keepInventory + doImmediateRespawn.», game_versions: только 1.21.5) и /members → JustImagine436 (Owner). Файл релиза на Modrinth называется dreambad.zip, версия bad_dream_death_1.21.5-1 — на диске переименован. В архиве мусор от macOS: assets/.DS_Store, assets/minecraft/.DS_Store, sounds/.DS_Store. Задуман для игры с keepInventory + doImmediateRespawn.

### 14. Luigi Villagers 🔴

- **Файл:** `Luigi Villagers.zip`
- **Автор:** jadeghost
- **Что добавляет:** Перекрашивает всех жителей в Луиджи, а странствующего торговца — в Марио: заменены базовая villager.png, все 13 текстур профессий, 5 значков уровня (stone/iron/gold/emerald/diamond) и 7 биомных типов, плюс wandering_trader.png. Дополнительно подменяет 41 ванильный .ogg — все реплики, торг, урон и смерть жителя и странствующего торговца.
- **Область:** Ванильные житель и странствующий торговец: текстуры сущностей + их звуки. Иллагеры, зомби-житель и что-либо ещё не затронуты; GUI, блоков, предметов и мира нет.
- **Адресат:** vanilla — только assets/minecraft/, модовых namespace нет
- **Формат:** pack_format 18 (1.20.2) с supported_formats [18, 2147483647]. Верхняя граница фактически бесконечная, поэтому на 1.21.1 (формат 34) пак грузится без…
- **Нужен формат OptiFine:** нет
- **Скачать:** https://modrinth.com/resourcepack/luigi-villagers
- **Он перерисовывает:** Grays Mob Overhaul v13 (30)
- **Вердикт:** 🔴 удалить — Перекрыт полностью: все 71 его ассетов перерисовывает «Thicc Villagers v1.2», который стоит выше. В игре от пака не видно ничего.
- **Заметки:** Единственный пак в батче, которому вообще ничего не нужно — папки assets/minecraft/optifine/ нет, всё подменяется по ванильным путям и работает на голом NeoForge. Файлы .png.mcmeta рядом с текстурами — это не анимация, а ванильные villager-метаданные {"villager":{"hat":"full"}}, они говорят игре скрывать шляпу профессии под шляпой биома. sounds.json в паке нет: .ogg просто лежат по ванильным путям mob/villager/** и mob/wandering_trader/**, которые ванильный sounds.json уже адресует, так что звук подменяется корректно. Ссылка подтверждена: Modrinth-проект luigi-villagers, владелец команды — jadeghost, описание «The Villagers are Luigi», Mario как wandering trader, и прямо сказано, что…

### 15. THICC VILLAGERS (в pack.mcmeta — «THICC. (req. EMF)») 🟢

- **Файл:** `Thicc Villagers v1.2.zip`
- **Автор:** JXRK
- **Что добавляет:** Полностью переделывает модели и текстуры жителей — все 14 профессий, 7 биомных типов, 5 уровней значков — а также детей-жителей, зомби-жителей, странствующего торговца, ведьму, железного голема и иллагеров (пиллагер, виндикатор, эвокер, иллюзионер) в женские фигуры с 5 вариантами внешности и морганием глаз. Заодно подменяет весь их звуковой набор (108 ogg-файлов) на аниме-озвучку и текстуру тотема бессмертия.
- **Область:** Ванильные мобы деревни и рейда: villager (+baby), zombie_villager (+baby), wandering_trader, witch, iron_golem (включая три текстуры трещин), illager/evoker, illusioner, pillager, vindicator, ravager (только текстура). Плюс assets/minecraft/sounds/mob/** и sounds/entity/witch/** — своя озвучка…
- **Адресат:** vanilla
- **Формат:** pack_format 46 (это 1.21.4), поле supported_formats отсутствует — 1.21.1 использует формат 34, поэтому игра пометит пак как «сделан для более новой версии».…
- **Нужен формат OptiFine:** да
- **Скачать:** https://www.planetminecraft.com/texture-pack/thicc-villagers-by-jxrk-1-14-1-20-of-v1-0/ (не подтверждена)
- **Перекрытие:** не измеряется - пак лежит в сборке, но снят с выбора, так что в стопке его нет
- **Вердикт:** 🟢 оставить
- **Заметки:** URL не удалось подтвердить прямой загрузкой: PlanetMinecraft отдаёт WebFetch HTTP 403 (Cloudflare) и на слэш-версию, и без слэша. Два независимых поисковых запроса возвращают ровно эту страницу с заголовком «THICC VILLAGERS [by JXRK; 1.14-1.21] [OF] v1.2» — совпадают имя, автор JXRK (в pack.mcmeta «§dJXRK») и версия v1.2 (совпадает с именем zip). На Modrinth пака нет (поиск по API даёт 0 результатов). Поэтому urlConfidence = likely, а не verified. Требует OptiFine-функций: 11 CEM-моделей в optifine/cem/ (villager, villager_baby, zombie_villager, zombie_villager_baby, wandering_trader, witch, iron_golem, evoker, illusioner, pillager, vindicator), 13 анимаций моргания в optifine/anim/ и 20…

### 16. LLama Girls 🟢

- **Файл:** `LLama Girls.zip`
- **Автор:** Pitonixrex
- **Что добавляет:** Полностью заменяет модель и текстуры лам: обычная лама, лама торговца и слой ковра-декора получают кастомные CEM-модели 128x128 с анимациями (покачивание при ходьбе, моргание, подмигивание, злая морда при агрессии, реакция на урон) и антропоморфный «девчачий» вид. Плюс перерисованы четыре ванильные текстуры лам (brown, creamy, gray, white) и комплект ковров-попон на 16 цветов.
- **Область:** vanilla mobs — llama, trader_llama и их decor/carpet-слой; больше ничего не трогает (ни GUI, ни блоки, ни предметы)
- **Адресат:** vanilla
- **Формат:** pack_format 15 (это 1.20–1.20.1). 1.21 НЕ объявлен и supported_formats нет — в 1.21.1 грузится с предупреждением «сделан для старой версии»
- **Нужен формат OptiFine:** да
- **Скачать:** https://www.curseforge.com/minecraft/texture-packs/llama-girls
- **Его перерисовывают:** Betty Witch v1.0 (1), Breeze Girl v1.0 (1)
- **Он перерисовывает:** Grays Mob Overhaul v13 (26)
- **Вердикт:** 🟢 оставить
- **Заметки:** Ссылка проверена фетчем: страница CurseForge озаглавлена «LLama Girls», автор Pitonixrex — совпадает с pack.mcmeta («By: Pitonixrex (use optifine or EMF & ETF)»). Модели: assets/minecraft/optifine/cem/{llama,llama_decor,trader_llama,trader_llama_decor}.jem; llama.jem/llama_decor.jem тянут ванильные пути текстур (пак их и переопределяет), trader_llama*.jem указывают на cem/trader_llama.png. EMF 3.2.4 и ETF 7.1 в mods/ есть, так что модели заработают. ВАЖНО: текстуры попоны лежат в assets/minecraft/textures/entity/equipment/llama_body/*.png — это путь 1.21.4+; в 1.21.1 игра читает entity/llama/decor/*.png, поэтому на 1.21.1 ковры останутся ванильными при изменённой модели decor — вероятен…

### 17. My Monster Girls 🟢

- **Файл:** `My Monster Girls.zip`
- **Автор:** ozzyv_
- **Что добавляет:** Заменяет модели четырёх мобов на женские: зомби, кадавра (husk), утопленника (вместе с внешним слоем drowned_outer) и эндермена — через CEM .jem с текстурами 128x128 в скрытой папке assets/minecraft/textures/entity/.ozzyv/thicc/. Вдобавок подменяет 68 ванильных .ogg — все реплики, урон, смерть и шаги этих мобов на женскую озвучку.
- **Область:** Ванильные враждебные мобы: zombie, husk, drowned (+ drowned_outer), enderman — модели, текстуры и звуки. Блоки, предметы, GUI и мир не трогает.
- **Адресат:** vanilla — только assets/minecraft/, модовых namespace нет
- **Формат:** pack_format 34, supported_formats не задан. 34 = 1.21–1.21.1, то есть заявлена поддержка ровно этой версии.
- **Нужен формат OptiFine:** да
- **Скачать:** https://modrinth.com/resourcepack/my-monster-girls
- **Он перерисовывает:** Grays Mob Overhaul v13 (5)
- **Вердикт:** 🟢 оставить
- **Заметки:** Визуальная часть держится целиком на CEM: ни одной текстуры по ванильному пути entity/zombie/zombie.png в паке нет, все png лежат в .ozzyv/thicc/ и подтягиваются только строкой "texture" внутри .jem. Без entity_model_features (в LL8 стоит, 3.2.4) не изменится вообще ничего из моделей — а вот звуки заработают в любом случае, они по ванильным путям. Оговорка: в паке есть эмиссивные слои zombie_e.png, drowned_e.png, enderman_e.png, но файла assets/minecraft/optifine/emissive.properties нет — то есть суффикс _e ничем не объявлен и свечение, скорее всего, не включится (сравните с паком Azus, где такой файл есть). Ссылка подтверждена двумя способами: Modrinth-проект my-monster-girls указывает…

### 18. Neco-Arc Cats 🟢

- **Файл:** `Neco-Arc Cats.zip`
- **Автор:** Thetheri (Cult of the pixel)
- **Что добавляет:** Превращает всех кошек и оцелота в Neco-Arc: заменены все 11 ванильных окрасов кошки (tabby, black, red, siamese, british_shorthair, calico, persian, ragdoll, white, jellie, all_black), текстура ошейника и оцелота, плюс CEM-модели cat.jem и ocelot.jem. Заодно подменены 30 ванильных звуков кошки и оцелота (мяуканье, мурлыканье, шипение, попрошайничество, еда, удары, звуки бродячего оцелота) и переименованы яйца призыва в en_us и ru_ru.
- **Область:** ванильные мобы: кошка и оцелот — текстуры, CEM-модели, звуки и названия яиц призыва
- **Адресат:** vanilla — только assets/minecraft, мод-неймспейсов нет
- **Формат:** pack_format 15 (1.20/1.20.1) при supported_formats 15–100; 1.21.1 (34) попадает в диапазон, явной отметки 1.21 нет
- **Нужен формат OptiFine:** да
- **Скачать:** https://modrinth.com/resourcepack/neco-arc-cats
- **Его перерисовывают:** Cherry_Creeper_remake(3.0) (2)
- **Он перерисовывает:** Grays Mob Overhaul v13 (15)
- **Вердикт:** 🟢 оставить
- **Заметки:** Ссылка сверена через Modrinth API: slug neco-arc-cats, автор Thetheri, описание «Replaces all cats with Neco-Arc variations», поддержка 1.21–1.21.8 — автор точно совпадает с pack.mcmeta («§ by Thetheri § Cult of the pixel §») и credits.txt (t.me/cotp_b_the). ВНИМАНИЕ на путаницу: на PlanetMinecraft есть другой пак «[BABIES!] Neco Arc Cats» авторства fandi/veryfandi (на Modrinth — slug fandi-neco-arc-cats) — это НЕ этот архив, ссылку на PMC давать нельзя. Модели лежат в assets/minecraft/optifine/cem/, и вложенный readme.txt прямо предупреждает «This resourcepack needs Optifine or CEM»; entity_model_features-3.2.4 и entity_texture_features-7.1 в модпаке есть, так что модели заработают.…

### 19. Breeze Girl 🟢

- **Файл:** `Breeze Girl v1.0.zip`
- **Автор:** Pitonixrex
- **Что добавляет:** Полностью переделывает бриза (breeze) в антропоморфную девушку-персонажа: собственная Blockbench-модель assets/minecraft/optifine/cem/breeze.jem с текстурой 64x64 и анимациями (моргание "parpadeo" по синусоиде от time и поворот глаз, привязанный к hurt_time). Отдельно переделан вихрь атаки — своя модель breeze_wind.jem и текстура 128x128, положенная и в CEM-папку, и в ванильный путь textures/entity/breeze/breeze_wind.png.
- **Область:** vanilla: один моб — Breeze (сам моб + снаряд/вихрь breeze_wind). Больше ничего.
- **Адресат:** vanilla
- **Формат:** pack_format 15 (это 1.20.1), supported_formats отсутствует — 1.21 НЕ заявлена. В 1.21.1 пак загрузится, но игра пометит его как "сделан для старой версии"; на…
- **Нужен формат OptiFine:** да
- **Скачать:** https://www.curseforge.com/minecraft/texture-packs/breeze-girl
- **Он перерисовывает:** Grays Mob Overhaul v13 (2), LLama Girls (1), Betty Witch v1.0 (1)
- **Вердикт:** 🟢 оставить
- **Заметки:** Ссылка проверена загрузкой страницы: заголовок "Breeze Girl", владелец Pitonixrex, описание "This texture pack gives the Breeze a more feminine look", в списке файлов присутствует ровно "Breeze Girl v1.0.zip" (25 апр 2025) — совпадает с именем файла на диске; есть также более новая v1.1. Зеркало на Modrinth: modrinth.com/resourcepack/breeze-girl. 4 из 6 ассетов лежат в assets/minecraft/optifine/**, поэтому без EMF/ETF модель не подменится. В паке есть assets/minecraft/optifine/emissive.properties с suffix.emissive=_e, но ни одной текстуры с суффиксом _e в архиве нет — правило вхолостую. ВАЖНО: ванильной текстуры textures/entity/breeze/breeze.png в паке нет — сам бриз меняется ТОЛЬКО через…

### 20. Betty Witch 🟢

- **Файл:** `Betty Witch v1.0.zip`
- **Автор:** Pitonixrex (в pack.mcmeta: "By: Pitonixrex (use EMF & ETF or optifine)"; на Modrinth проект издан под именем CursedEntitiesModels)
- **Что добавляет:** Заменяет ванильную ведьму на анимированную девушку-ведьму: CEM-модель assets/minecraft/optifine/cem/witch.jem с процедурными анимациями (моргание, подмигивание, качание корпуса от limb_swing, реакция на hurt_time и на здоровье ниже 50% и 10%), своя witch.png (64x128) и светящийся слой witch_e.png через emissive.properties (suffix.emissive=_e). Дополнительно кладёт 11 своих звуков ведьмы в assets/minecraft/sounds/entity/witch/ (ambient1-5, hurt1-3, death1-3).
- **Область:** ванильный моб witch (модель + текстура + emissive) и звуки ведьмы; блоков, GUI, предметов не трогает
- **Адресат:** vanilla
- **Формат:** pack_format 32 (это 1.20.5-1.20.6), поля supported_formats нет — 1.21 явно НЕ заявлена, в 1.21.1 будет плашка «сделан для другой версии», но CEM/звуки грузятся…
- **Нужен формат OptiFine:** да
- **Скачать:** https://modrinth.com/resourcepack/betty-witch
- **Он перерисовывает:** Grays Mob Overhaul v13 (2), LLama Girls (1)
- **Его перерисовывают:** Breeze Girl v1.0 (1)
- **Вердикт:** 🟢 оставить
- **Заметки:** Ссылка подтверждена: на странице версии https://modrinth.com/resourcepack/betty-witch/version/v1.0 файл называется ровно «Betty Witch v1.0.zip» — совпадает с зипом на диске; заявлены 1.16.x-1.21.10. Есть также страница на CurseForge (curseforge.com/minecraft/texture-packs/betty-witch) и на PlanetMinecraft у автора pitonixrex. EMF (entity_model_features-3.2.4) и ETF (entity_texture_features_1.21-neoforge-7.1) в c:/Users/Oscar/Documents/LL8/mods присутствуют, так что пак заработает. ВАЖНЫЙ КОНФЛИКТ: Fresh Animations v1.10.4 в этом же наборе тоже содержит assets/minecraft/optifine/cem/witch.jem — выиграет тот пак, что выше в списке ресурспаков; одновременно обе ведьмы не получатся. sounds.json…

### 21. Mugget's Standing Cow 🟢

- **Файл:** `Muggets Standing Cow v1.0.zip`
- **Автор:** Mugget
- **Что добавляет:** Ставит корову на задние ноги: одна CEM-модель cow.jem разворачивает тело вертикально (поворот body на -90° с компенсацией подмоделей), голова и рога переезжают наверх. Идёт с одной перерисованной текстурой коровы 64x32; поведение, доение и разведение не меняются.
- **Область:** vanilla mob — только корова (модель + текстура)
- **Адресат:** vanilla
- **Формат:** pack_format 34 — это ровно 1.21/1.21.1, версия объявлена корректно
- **Нужен формат OptiFine:** да
- **Скачать:** https://modrinth.com/resourcepack/standing-cow
- **Его перерисовывают:** Bad Dream Death (2)
- **Он перерисовывает:** Grays Mob Overhaul v13 (2), Stay True 1.21 (1)
- **Вердикт:** 🟢 оставить
- **Заметки:** Проверено через Modrinth API: проект standing-cow, название «Mugget's Standing Cow», описание «Adds the most requested feature for Minecraft: Standing cows.»; в списке версий есть v1.0 с игровыми версиями 1.21/1.21.1 и файлом «Standing Cow v1.0.zip» — это ровно наш пак (локальное имя «Muggets Standing Cow v1.0.zip», pack.mcmeta «Standing Cow (by Mugget)»). Модель лежит в assets/minecraft/optifine/cem/cow.jem и без EMF не применится — сама текстура коровы при этом наложится и на ванильную модель. EMF 3.2.4 и ETF 7.1 в mods/ присутствуют. Архив собран на macOS: внутри мусор __MACOSX/ и .DS_Store в каждой папке — на работу не влияет, но захламляет.

### 22. 'Thicc' Phantom - Spartan ReTexture (в pack.mcmeta: "Thicc phantom [Optifine] MAKE BY Huge Cat and edited by Spartan on PMC!") 🟢

- **Файл:** `Thicc Phantom.zip`
- **Автор:** SpartanHarv (правка модели HugeCat)
- **Что добавляет:** Меняет фантома: своя Blockbench-модель assets/minecraft/optifine/cem/phantom.jem (textureSize 128x128, тело перестроено в фигуристый силуэт) плюс текстура высокого разрешения 512x512. Текстуры продублированы и в ванильные пути textures/entity/phantom.png и phantom_eyes.png, поэтому раскраска применится даже без EMF, а вот новая форма — только с ним.
- **Область:** vanilla: один моб — Phantom (тело + светящиеся глаза phantom_eyes). Ни блоков, ни GUI, ни предметов.
- **Адресат:** vanilla
- **Формат:** pack_format 9 (это 1.19.x), supported_formats отсутствует — 1.21 НЕ заявлена. В 1.21.1 загрузится с предупреждением "сделан для старой версии"; на CEM/текстуры…
- **Нужен формат OptiFine:** да
- **Скачать:** https://www.planetminecraft.com/texture-pack/thicc-phantom-spartan-retexture/
- **Он перерисовывает:** Grays Mob Overhaul v13 (3)
- **Вердикт:** 🟢 оставить
- **Заметки:** Страница загружена и проверена: <title> = "'Thicc' Phantom - Spartan ReTexture Minecraft Texture Pack", автор SpartanHarv, на странице многократно упомянут HugeCat как автор исходной модели — ровно то, что написано в pack.mcmeta этого архива. Это НЕ страница planetminecraft.com/texture-pack/thicc-phantom-optifine/ (то оригинал HugeCat, 64x, 1.19); данный файл — правка Spartan'а, поэтому дана именно она. Оба .png лежат и в optifine/cem/, и в ванильных путях, так что деградация без EMF мягкая: текстура применится, модель останется ванильной. EMF (entity_model_features-3.2.4) и ETF (entity_texture_features 7.1) в c:/Users/Oscar/Documents/LL8/mods есть — пак заработает полностью. Разрешение…

### 23. Gigachad Villager 🟢

- **Файл:** `Gigachad Villager.zip`
- **Автор:** Super_Jose
- **Что добавляет:** Превращает железного голема в "гигачада"-жителя из мема: своя Blockbench-модель assets/minecraft/optifine/cem/iron_golem.jem (textureSize 128x128, тело полностью перестроено) и телесного цвета текстура 128x128 вместо железной. Файлы повреждений iron_golem_crackiness_low/medium/high.png переделаны из трещин в стадии злости — по мере получения урона голем поднимает бровь и всё больше свирепеет.
- **Область:** vanilla: один моб — Iron Golem (модель + основная текстура + три оверлея повреждений). Ничего больше не трогает.
- **Адресат:** vanilla
- **Формат:** pack_format 16, supported_formats 16–256 — 1.21 попадает в диапазон, поддержка заявлена.
- **Нужен формат OptiFine:** да
- **Скачать:** https://www.curseforge.com/minecraft/texture-packs/gigachad-villager
- **Он перерисовывает:** Grays Mob Overhaul v13 (5)
- **Вердикт:** 🟢 оставить
- **Заметки:** Страница проверена загрузкой: автор Super_Jose (совпадает с "By: Super_Jose" в pack.mcmeta), описание — железный голем становится "villager chad from this meme" (мем SepthGear), заявлено "When you hit him enough he will raise his eyebrow, then he'll be mad and before dying he'll be extreamly mad" — это ровно то, что видно в трёх файлах crackiness. Версии 1.20–1.21.3, требуется OptiFine. Зеркало на Modrinth: modrinth.com/project/1kIX9z6L (там загружено под аккаунтом CursedEntitiesModels). Несмотря на название "Villager", ассетов жителя (textures/entity/villager/**) в архиве НЕТ ни одного — меняется только железный голем. В optifine/cem лежит только .jem без своей текстуры: модель ссылается…
