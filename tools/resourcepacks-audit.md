# Ресурспаки сборки: полный разбор

Разобраны все **42** паков из `resourcepacks/`. Каждый архив вскрыт, содержимое сверено со списком включения `launcher/resourcepacks-default.txt` и с составом `mods/`; ссылки проверены открытием страницы.

## Что важно знать до таблицы

**Перекрытие — это арифметика, а не мнение.** Для каждого файла-ассета посчитано, какой из паков стоит выше в порядке загрузки. Доля в колонке «Перекрыт» — сколько процентов ассетов пака в игре не видно, потому что их перерисовывает пак выше.

**Половина паков зависит от формата OptiFine, и он покрыт лишь частично.** В сборке стоят Entity Model Features и Entity Texture Features — они дают модели сущностей (`optifine/cem`) и случайные текстуры (`optifine/random`), на которых держится большинство модельных паков. Стоит и Fusion — свой формат соединённых текстур и эмиссивных слоёв. А вот **Continuity/NeoContinuity нет** (соединённые текстуры формата OptiFine, `optifine/ctm`) и **CIT Resewn нет** (`optifine/cit`). Всё, что паки кладут в эти две папки, не проявляется: самый заметный пострадавший — Stay True, у которого 1327 файлов соединённых текстур и оверлеев травы просто не читаются.

## Сводная таблица

| # | Пак | Что добавляет | Скачать | Перекрыт | Вердикт |
|---|---|---|---|---|---|
| 1 | **Glowing Emissive Ores (GEO)** | Делает руды светящимися в темноте: рядом с каждой текстурой руды кладётся её `_e`-копия (4741 файл `_e.png` против 4760 обычных), которая рисуется… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/glowing-emissive-ores) | нет | 🟡 оставить, но он тяжёлый |
| 2 | **Glowing Emissive Ores - Fusion** | Не самостоятельный пак, а аддон-мост: переводит эмиссивные слои основного GEO на формат мода Fusion. Кладёт 3916 дескрипторов… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/glowing-emissive-ores-fusion) | — | 🟢 оставить, обязателен для GEO |
| 3 | **Stay True (файл релиза «Stay True 1.21»)** | Аккуратный ремастер ванильных текстур в исходной палитре: 1104 текстуры блоков (467 семейств) и 140 blockstates с весовыми случайными вариантами —… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/stay-true) | **2%** | 🟢 оставить |
| 4 | **Cute Mob Models Resource Pack (CMMRP)** | Полностью заменяет модели почти всех ванильных мобов на аниме-девочек: 113 .jem-моделей CEM — от криперов, скелетов, зомби и жителей до варденов,… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/cute-mob-models-resource-pack) | **26%** | 🟢 оставить |
| 5 | **Gray's Mob Overhaul** | Переделывает модели и текстуры почти всех ванильных мобов: 117 CEM-моделей (.jem) и ~1038 файлов случайных вариантов — больше всего у кошек (262),… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/grays-mob-overhaul) | **9%** | 🟢 оставить |
| 6 | **Torturable Healthbars** | Показывает здоровье моба прямо на его модели: по мере урона на нём появляются кровь, трещины и другие варианты текстуры — 589 файлов случайных… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/torturable-healthbars) | **16%** | 🟢 оставить |
| 7 | **AE2 Blackout** | Перекрашивает Applied Energistics 2 и его аддоны в тёмную тему: 253 файла в assets/ae2 (118 текстур блоков — контроллер, сундук ME, инскрайбер,… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/ae2-blackout) | нет | 🟢 оставить |
| 8 | **Fresh Animations (1.10.4 BETA)** | Даёт ванильным мобам живую покадровую анимацию: 128 CEM-моделей (.jem) и 83 файла анимаций (.jpm) практически на всех — жители, иллагеры (эвокер,… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/fresh-animations) | **65%** | 🟠 решить, кто главный по мобам |
| 9 | **3D Items-Vanillaism** | Переводит 176 ванильных предметов из плоских спрайтов в объёмные модели: еду и напитки, слитки/самородки, сырые руды, все 16 красителей, зелья,… | [modrinth.com](https://modrinth.com/resourcepack/3d-items-vanillaism) | нет | 🟢 оставить |
| 10 | **THICC VILLAGERS (в pack.mcmeta — «THICC. (req. EMF)»)** | Полностью переделывает модели и текстуры жителей — все 14 профессий, 7 биомных типов, 5 уровней значков — а также детей-жителей, зомби-жителей,… | [planetminecraft.com](https://www.planetminecraft.com/texture-pack/thicc-villagers-by-jxrk-1-14-1-20-of-v1-0/)&nbsp;⚠️ | **7%** | 🟢 оставить |
| 11 | **3D Reinforced Armor** | Заменяет плоские слои брони объёмными CEM-моделями: 26 .jem-файлов на внутренний и внешний слой для игрока (обычная и тонкая модель), стойки для… | [modrinth.com](https://modrinth.com/resourcepack/3d-reinforced-armor) | нет | 🟢 оставить |
| 12 | **Blue's Better Zombies** | Даёт зомби, кадаврам, утопленникам и зомби-жителям около 30 CEM-моделей с покадровыми анимациями (ползающие, с отрывающимися конечностями, разные… | [modrinth.com](https://modrinth.com/resourcepack/blues-better-zombies) | **12%** | 🟢 оставить |
| 13 | **Baby Animals Remastered** | Даёт детёнышам собственные модели и текстуры вместо ванильных «большеголовых»: отдельные CEM-модели и png для поросёнка (piglet.png), ягнёнка… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/baby-animals-remastered) | **32%** | 🟢 оставить |
| 14 | **Luigi Villagers** | Перекрашивает всех жителей в Луиджи, а странствующего торговца — в Марио: заменены базовая villager.png, все 13 текстур профессий, 5 значков уровня… | [modrinth.com](https://modrinth.com/resourcepack/luigi-villagers) | **100%** | 🔴 удалить |
| 15 | **My Monster Girls** | Заменяет модели четырёх мобов на женские: зомби, кадавра (husk), утопленника (вместе с внешним слоем drowned_outer) и эндермена — через CEM .jem с… | [modrinth.com](https://modrinth.com/resourcepack/my-monster-girls) | **1%** | 🟢 оставить |
| 16 | **Azu's Enhanced Zombie Variants & Fresh Animations** | Разворачивает обычного зомби в 8 CEM-моделей и около сорока текстур-вариантов — шахтёр (minero), ковбой (vaquero), воин (guerrero), болотный… | [modrinth.com](https://modrinth.com/resourcepack/azus-enhanced-zombie-variants-fresh-animations) | **3%** | 🟢 оставить |
| 17 | **Golems Refreshed** | Полностью переделывает железного голема: 28 CEM-моделей (iron_golem.jem и iron_golem2–17, 20–30) плюс 27 текстур-скинов, которые подставляются по… | [modrinth.com](https://modrinth.com/resourcepack/golems-refreshed) | **8%** | 🟢 оставить |
| 18 | **Neco-Arc Cats** | Превращает всех кошек и оцелота в Neco-Arc: заменены все 11 ванильных окрасов кошки (tabby, black, red, siamese, british_shorthair, calico, persian,… | [modrinth.com](https://modrinth.com/resourcepack/neco-arc-cats) | **4%** | 🟢 оставить |
| 19 | **Anime Paintings** | Заменяет 47 текстур картин на аниме-арты в высоком разрешении — весь обычный ассортимент от старых kebab, aztec, creebet, donkey_kong, burning_skull… | [modrinth.com](https://modrinth.com/resourcepack/anime-paintings) | **2%** | 🟢 оставить |
| 20 | **LLama Girls** | Полностью заменяет модель и текстуры лам: обычная лама, лама торговца и слой ковра-декора получают кастомные CEM-модели 128x128 с анимациями… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/llama-girls) | **4%** | 🟢 оставить |
| 21 | **jax** | Превращает эндермена в Джакса (фиолетовый кролик из The Amazing Digital Circus): кастомная CEM-модель enderman.jem со своей текстурой 128x128 —… | — не найдена | нет | 🟢 оставить |
| 22 | **Slavic Villagers** | Переодевает всех жителей в славянскую одежду разных эпох и регионов — перерисованы все семь биомных текстур (plains, taiga, savanna, swamp, snow,… | [modrinth.com](https://modrinth.com/resourcepack/slavic-villagers) | **88%** | 🟠 спорный |
| 23 | **Mugget's Standing Cow** | Ставит корову на задние ноги: одна CEM-модель cow.jem разворачивает тело вертикально (поворот body на -90° с компенсацией подмоделей), голова и рога… | [modrinth.com](https://modrinth.com/resourcepack/standing-cow) | **50%** | 🟢 оставить |
| 24 | **Betty Witch** | Заменяет ванильную ведьму на анимированную девушку-ведьму: CEM-модель assets/minecraft/optifine/cem/witch.jem с процедурными анимациями (моргание,… | [modrinth.com](https://modrinth.com/resourcepack/betty-witch) | нет | 🟢 оставить |
| 25 | **3D Beetroots to Tomatoes** | Превращает грядку свёклы в объёмный куст помидоров: свои модели block/beetroots_stage0-3 (с листвой, деревянной подпоркой, табличкой и узлом лида) и… | [planetminecraft.com](https://www.planetminecraft.com/texture-pack/3d-beetroots-to-tomatoes/)&nbsp;⚠️ | **8%** | 🟢 оставить |
| 26 | **Cherry-Creeper (remake) — With Animation** | Делает из крипера вишнёвое деревце: CEM-модель optifine/cem/creeper.jem с подмоделями кроны (body_cherry, body_cherry_rotation) и анимацией, текстура… | [planetminecraft.com](https://www.planetminecraft.com/texture-pack/cherry-creeper-remake-6321265/)&nbsp;⚠️ | **20%** | 🟢 оставить |
| 27 | **Skeleton Girlies** | Заменяет три ванильных скелета на женские CEM-модели: skeleton.jem/skeleton.png, wither_skeleton.jem/wither_skeleton.png и стрей сразу двумя слоями —… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/skeleton-girlies) | нет | 🟢 оставить |
| 28 | **funnyrain (в pack.mcmeta подписан как "Vanilla Tweaks 1.21 / vanillatweaks.net" — это остаточное описание от Vanilla Tweaks, содержимое к VT отношения не имеет)** | Заменяет текстуру дождя и снега (assets/minecraft/textures/environment/rain.png и snow.png — оба файла байт-в-байт одинаковые, 894x2048) на падающие… | — не найдена | нет | 🟢 оставить |
| 29 | **Breeze Girl** | Полностью переделывает бриза (breeze) в антропоморфную девушку-персонажа: собственная Blockbench-модель assets/minecraft/optifine/cem/breeze.jem с… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/breeze-girl) | **17%** | 🟢 оставить |
| 30 | **'Thicc' Phantom - Spartan ReTexture (в pack.mcmeta: "Thicc phantom [Optifine] MAKE BY Huge Cat and edited by Spartan on PMC!")** | Меняет фантома: своя Blockbench-модель assets/minecraft/optifine/cem/phantom.jem (textureSize 128x128, тело перестроено в фигуристый силуэт) плюс… | [planetminecraft.com](https://www.planetminecraft.com/texture-pack/thicc-phantom-spartan-retexture/) | нет | 🟢 оставить |
| 31 | **Gigachad Villager** | Превращает железного голема в "гигачада"-жителя из мема: своя Blockbench-модель assets/minecraft/optifine/cem/iron_golem.jem (textureSize 128x128,… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/gigachad-villager) | нет | 🟢 оставить |
| 32 | **Bad Dream Death** | Заменяет один-единственный звук — смерть игрока (entity.player.death) — на резкий вдох, будто «это был просто плохой сон». Никакой графики в паке… | [modrinth.com](https://modrinth.com/resourcepack/bad-dream-death) | нет | 🟢 оставить |
| 33 | **Totem of :GAGAGA: 7tv emote** | Заменяет тотем бессмертия на 7tv-эмоцию :GAGAGA: — своя текстура assets/minecraft/textures/item/gagaga.png и переписанная модель… | [modrinth.com](https://modrinth.com/resourcepack/gagaga) | **33%** | 🟢 оставить |
| 34 | **LET SKELETONS HAVE HANDS (67 edition)** | Через CEM-модель skeleton.jem даёт скелетам настоящие кисти с отдельными пальцами вместо культяпок. Скелет, переименованный биркой в «67», «six… | [modrinth.com](https://modrinth.com/resourcepack/let-skeletons-have-hands-(67-edition)) | **25%** | 🟢 оставить |
| 35 | **CowGirl** | Полностью перемоделирует ванильную корову в антропоморфную девушку-корову: CEM-модель cow.jem (голова, рога, волосы, тело заново) плюс текстура… | [modrinth.com](https://modrinth.com/resourcepack/cowgirl) | нет | 🟢 оставить |
| 36 | **Vignette Removed (файлы автор называет "No Vignette")** | Подменяет единственную текстуру assets/minecraft/textures/misc/vignette.png на полностью непрозрачный чёрный квадрат 256×256, из-за чего затемнение… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/vignette-removed) | нет | 🟢 оставить |
| 37 | **Sun & Moon Fusion** | Меняет солнце и луну на чистые мультяшные: sun.png и moon_phases.png, вместе 1,5 КБ на две текстуры — весь пак. Стоит выше обоих других паков светил и перерисовывает ровно те же два файла, так что в игре видно только его… | [modrinth.com](https://modrinth.com/resourcepack/sun-moon-fusion) | нет | 🟢 оставить, светила теперь его |
| 38 | **zazu sun & moon** | Меняет светила на фотографию полосатого кота: sun.png (128×128) — цветная кошачья морда на прозрачном фоне, moon_phases.png (1280×640) — сетка 4×2 из… | [modrinth.com](https://modrinth.com/resourcepack/zazu-sun-moon) | **100%** | 🔴 удалить |
| 39 | **The Sky, Sun and Moon** | Заменяет ванильные квадратные светила на аккуратные круглые: sun.png 32×32 — мягкий жёлтый диск со свечением, moon_phases.png 128×64 — восемь… | [modrinth.com](https://modrinth.com/resourcepack/the-sky,-sun-and-moon) | **100%** | 🔴 удалить |
| 40 | **Lilac Jackson** | Перерисовывает ровно один блок — сирень: lilac_top.png и lilac_bottom.png (обе 512×512) собраны из фотографий лица Майкла Джексона, затонированных в… | [modrinth.com](https://modrinth.com/resourcepack/lilac-jackson) | нет | 🟢 оставить |
| 41 | **Authentic Shadows** | Заменяет ровно одну текстуру: круглую тень под всеми сущностями (assets/minecraft/textures/misc/shadow.png), уменьшая её до 16x16 с жёстким… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/authentic-shadows) | нет | 🟢 оставить |
| 42 | **Moaning Mobs (в архиве — "MOANING MOBS by Gooey", версия 0.1 «Villagers only»)** | Заменяет ровно один звук: предсмертный крик жителя (assets/minecraft/sounds/mob/villager/death.ogg, ogg на 17 КБ) на «стон Grox». Больше в паке нет… | [modrinth.com](https://modrinth.com/resourcepack/moaning-mobs) | **100%** | 🔴 удалить, он не работает |

⚠️ — страница похожа на нужную, но подтвердить автора и название по ней не удалось.

## Требуют решения (7)

### 🟡 Glowing Emissive Ores (GEO)

`GEO - v1.109.0.zip`

Работает и нужен: подсвечивает руды примерно 33 установленных модов плюс ваниль. Но из 22 404 файлов на сборку приходится около 12% — остальное адресовано модам, которых здесь нет (industrialupgrade, unearthed, alltheores, gtceu, thermal и ещё под три сотни namespace). 27 МБ и 22 тысячи файлов ради восьмой части — единственный пак, который стоит однажды пересобрать под свой список модов.

### 🟠 Fresh Animations (1.10.4 BETA)

`Fresh Animations v1.10.4.zip`

Механика: 65% его ассетов (271 из 415) перекрыты Gray's Mob Overhaul, который стоит выше. То есть анимации Fresh Animations живут только на тех мобах, которых Gray's не трогает. Это не поломка, а осознанный выбор из комментария в resourcepacks-default.txt, но платить 850 КБ и лишний слой за треть эффекта — повод либо поднять Fresh Animations выше Gray's, либо убрать один из них.

### 🔴 Luigi Villagers

`Luigi Villagers.zip`

Перекрыт полностью: все 71 его ассетов перерисовывает «Thicc Villagers v1.2», который стоит выше. В игре от пака не видно ничего.

### 🟠 Slavic Villagers

`Slavic Villagers.zip`

88% ассетов перекрыто паком «Thicc Villagers v1.2».

### 🔴 The Sky, Sun and Moon

`The Sky Sun and Moon.zip`

Перекрыт полностью: оба его ассета перерисовывают и «zazu sun and moon», и «Sun & Moon Fusion 2.1», которые стоят выше. В игре от пака не видно ничего.

### 🔴 zazu sun & moon

`zazu sun and moon.zip`

Перекрыт полностью: оба его ассета перерисовывает «Sun & Moon Fusion 2.1», который стоит выше. Светила в сборке рисуют три пака на два файла, и виден только верхний — два нижних можно убрать без единого изменения на экране.

### 🔴 Moaning Mobs (в архиве — "MOANING MOBS by Gooey", версия 0.1 «Villagers only»)

`MOANING MOBS by Gooey 0.1.zip`

В паке ровно один файл: `assets/minecraft/sounds/mob/villager/death.ogg`. Это путь из версии 1.8; с 1.9 звук смерти жителя лежит по `sounds/entity/villager/death.ogg`, и ни одного `sounds.json`, который переназначил бы событие на старый путь, в паке нет. То есть 1.21.1 этот файл не читает вовсе — пак молчит независимо от порядка загрузки. Вдобавок тот же путь занимают Thicc Villagers и Luigi Villagers, стоящие выше. Ту же мёртвую строку стоит выкинуть и из них.


## Все паки по порядку загрузки

Снизу вверх: пак ниже в этом списке перерисовывает всё, что выше него совпадает. Порядок задаётся `launcher/resourcepacks-default.txt`.


### 1. Stay True (файл релиза «Stay True 1.21») 🟢

- **Файл:** `Stay True 1.21.zip`
- **Автор:** HaiMcFly (на CurseForge — haimcyfly); в pack.mcmeta: «By HaiMcFly Update:31»
- **Что добавляет:** Аккуратный ремастер ванильных текстур в исходной палитре: 1104 текстуры блоков (467 семейств) и 140 blockstates с весовыми случайными вариантами — булыжник в 10 вариациях, камень в 8 плюс зеркальные и повёрнутые модели, земля в 13, гравий в 8, доски дуба в 13, верх травяного блока в 9. Плюс переделаны сундуки и таблички (включая подвесные), корова, эндермен с глазами, кальмар, колокол, облака, солнце, дождь, снег, небо Энда, виньетка, подводный оверлей, силовое поле, иконки HUD (icons.png, widgets.png) и загрузочный логотип Mojang.
- **Область:** Только ваниль (assets/minecraft, 3879 файлов). Блоки: 1195 моделей, 1104 текстуры, 140 blockstates. Предметы: 39 текстур (двери всех пород, фонарь и душевой фонарь, цепь, удочка, слиток и инструменты незерита, пшеница, порох, вагонетки, яйцо черепахи). Сущности: 36 текстур. Мир: environment (5),…
- **Адресат:** vanilla — модовых namespace'ов нет ни одного.
- **Формат:** pack_format 34 — это ровно 1.21/1.21.1, supported_formats не объявлен. Совпадает с целевой версией сборки точно.
- **Нужен формат OptiFine:** да
- **Скачать:** https://www.curseforge.com/minecraft/texture-packs/stay-true
- **Его перерисовывают:** GEO - v1.109.0 (47), funnyrain (6), 3D Items-Vanillaism-1.21.1 (5)
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
- **Он перерисовывает:** Stay True 1.21 (1)
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
- **Он перерисовывает:** Stay True 1.21 (1)
- **Вердикт:** 🟢 оставить
- **Заметки:** Ссылку проверил фетчем страницы: проект "Vignette Removed", владелец Gbergz, 16x Miscellaneous, ~323 тыс. загрузок; файлы релизов там называются "No Vignette", что и совпадает с именем зипа. Внутри архива лежит by_gbergz_credit.txt: автор просит качать только с CurseForge. Технический нюанс: ванилла той же текстурой рисует красную подсветку у границы мира, поэтому вместе с виньеткой пропадёт и она (это же указано в описании проекта). Файл уникальный, конфликтовать с остальными паками из папки не может.

### 4. AE2 Blackout 🟢

- **Файл:** `AE2Blackout-V1.2.8.zip`
- **Автор:** Void_Fractal (в pack.mcmeta автор не указан, только описание "AE2 Dark Mode Texture Pack"; владелец проекта на CurseForge — Void_Fractal)
- **Что добавляет:** Перекрашивает Applied Energistics 2 и его аддоны в тёмную тему: 253 файла в assets/ae2 (118 текстур блоков — контроллер, сундук ME, инскрайбер, хранилища крафта; 87+10 экранов GUI — терминалы, CPU крафта, накопитель, интерфейс; 28 текстур кабельных деталей; 4 иконки предметов) плюс тёмные текстуры для 13 аддонов. Ванильные ассеты не трогает вообще.
- **Область:** Только ассеты модов AE2-экосистемы: ae2 (253), extendedae (94), advanced_ae (62), appgen (58), megacells (30), expandedae (23), bigger_ae2 (10), merequester (7), appliede (7), appflux (3), arseng (2), appex (1), ae2netanalyser (1), ae2importexportcard (1). Ни одного файла в assets/minecraft.
- **Адресат:** ЕСТЬ в mods/: ae2 (appliedenergistics2-19.2.17.jar), extendedae (ExtendedAE-1.21-2.2.35-neoforge.jar), advanced_ae (AdvancedAE-1.6.11-1.21.1.jar), megacells (megacells-4.11.0.jar), merequester (merequester-neoforge-1.21.1-1.4.3.jar), appflux (AppliedFlux-1.21-2.1.5-neoforge.jar), arseng…
- **Формат:** pack_format 34 — ровно 1.21/1.21.1, supported_formats не объявлен. Точное попадание в версию модпака.
- **Нужен формат OptiFine:** нет
- **Скачать:** https://www.curseforge.com/minecraft/texture-packs/ae2-blackout
- **Вердикт:** 🟢 оставить
- **Заметки:** URL проверен фетчем: проект "AE2 Blackout", автор Void_Fractal, описан как улучшенная версия "AE2 Dark Mode"; файл AE2Blackout-V1.2.8 значится основным для Minecraft 1.21.1. Список поддерживаемых аддонов на странице (14 штук: AE2WTLib, Extended AE, Applied Flux, AE2 Import Export Card, MEGA Cells, AdvancedAE, ME Requester, AppliedE, Expanded AE, AE2 Network Analyser, Ars Énergistique, Applied Generators, Bigger AE2, Applied Experienced) совпадает с неймспейсами внутри зипа. Не путать с отдельными проектами "AE2 Blackout Extended" и "AE2 Dark Mode" (Ridanisaurus). OptiFine-фичи не используются — работает как обычный пак, но должен стоять выше ванильных паков в списке.

### 5. Glowing Emissive Ores (GEO) 🟡

- **Файл:** `GEO - v1.109.0.zip`
- **Автор:** DeftestHawk
- **Что добавляет:** Делает руды светящимися в темноте: рядом с каждой текстурой руды кладётся её `_e`-копия (4741 файл `_e.png` против 4760 обычных), которая рисуется как эмиссивный слой. Покрывает ванильные руды (уголь, медь, железо, золото, алмаз, изумруд, лазурит, редстоун + deepslate-варианты, незер-кварц и незер-золото, древние обломки, gilded blackstone, аметистовые блоки/почки/друзы, calibrated sculk sensor) и руды 296 модов.
- **Область:** Только блоки руд и кристаллов: blockstates + models/block + models/item + textures/block. Мобов, GUI, предметов и мира не трогает. 22404 файла, 297 namespace'ов, 12680 json / 9501 png / 222 mcmeta.
- **Адресат:** 296 модовых namespace'ов. Реально установлены в сборке: geore (GeOre-1.21.1-6.2.3.jar), silentgems, silentgear (silent-gear), quark, mekanism, create, immersiveengineering, draconicevolution, powah, ae2 (appliedenergistics2), modern_industrialization, malum, occultism, theurgy, evilcraft,…
- **Формат:** pack_format 15, supported_formats [15, 1000], min_format 15 / max_format 1000 — диапазон покрывает 1.21.1, отдельной строки про 1.21 нет.
- **Нужен формат OptiFine:** да
- **Скачать:** https://www.curseforge.com/minecraft/texture-packs/glowing-emissive-ores
- **Его перерисовывают:** 3D Items-Vanillaism-1.21.1 (2), Betty Witch v1.0 (1)
- **Он перерисовывает:** Stay True 1.21 (47)
- **Вердикт:** 🟡 оставить, но он тяжёлый — Работает и нужен: подсвечивает руды примерно 33 установленных модов плюс ваниль. Но из 22 404 файлов на сборку приходится около 12% — остальное адресовано модам, которых здесь нет (industrialupgrade, unearthed, alltheores, gtceu, thermal и ещё под три сотни namespace). 27 МБ и 22 тысячи файлов ради восьмой части — единственный пак, который стоит однажды пересобрать под свой список модов.
- **Заметки:** ВАЖНО про флаг: единственный optifine-файл — assets/minecraft/optifine/emissive.properties (содержимое: `suffix.emissive=_e`). Это НЕ CEM / CIT / random-entity, поэтому Entity Model Features, Entity Texture Features и CIT Resewn ему НЕ помогут — они работают только по сущностям. Нужен провайдер эмиссивных блочных текстур: Continuity/NeoContinuity, MoreMcMeta+Emissive или Fusion. В сборке есть fusion-1.3.12-neoforge-mc1.21.1.jar, поэтому связка работает через второй пакет — 'GEO - v1.109.0 - Fusion.zip', который обязан лежать ВЫШЕ этого в списке ресурспаков. Сам по себе, без Fusion-аддона, этот пак на NeoForge даст только обычные (несветящиеся) текстуры. 222 .mcmeta — покадровые анимации…

### 6. Glowing Emissive Ores - Fusion 🟢

- **Файл:** `GEO - v1.109.0 - Fusion.zip`
- **Автор:** DeftestHawk
- **Что добавляет:** Не самостоятельный пак, а аддон-мост: переводит эмиссивные слои основного GEO на формат мода Fusion. Кладёт 3916 дескрипторов fusion/model_modifiers/blocks/emissive_*.json, 4267 переопределённых моделей блоков и 4689 .mcmeta для текстур, чтобы Fusion сам подмешал светящийся слой поверх руды.
- **Область:** Только блоки руд, тем же охватом что и базовый GEO. Всё содержимое лежит внутри папки fusion-overrides/ (12902 файла), в корне только pack.mcmeta и pack.png. Структура: fusion/model_modifiers (3916), models/block (4267), textures/block (4701, почти всё .mcmeta), textures/item (3). Файлов: 8183…
- **Адресат:** Требует мод Fusion — fusion-1.3.12-neoforge-mc1.21.1.jar ПРИСУТСТВУЕТ в c:/Users/Oscar/Documents/LL8/mods. Те же 296 namespace'ов, что и у базового GEO (industrialupgrade 852, crystalcraft_unlimited_java 625, unearthed 571, more_ores_more_gems 406, subwild 352, pfw_aesthetic_gems 344, confluence…
- **Формат:** pack_format 15, supported_formats [15, 1000], min_format 15 / max_format 1000; плюс собственная секция "fusion": {"overrides_folder": "fusion-overrides"}.…
- **Нужен формат OptiFine:** нет
- **Скачать:** https://www.curseforge.com/minecraft/texture-packs/glowing-emissive-ores-fusion
- **Вердикт:** 🟢 оставить, обязателен для GEO — Сам по себе почти пуст (32 png), это мост к моду Fusion, который в сборке стоит. Без него базовый GEO даёт обычные несветящиеся текстуры. Должен лежать выше GEO в списке — в текущем порядке так и есть.
- **Заметки:** Папки assets/minecraft/optifine/** здесь нет вообще — ни CEM, ни CIT, ни random entity, EMF/ETF/CIT Resewn не нужны. Зависимость ровно одна: мод Fusion (есть) + базовый пак 'GEO - v1.109.0.zip' (есть). КРИТИЧНО для порядка загрузки: по документации автора 'GEO - Fusion' должен стоять ВЫШЕ 'GEO' в списке ресурспаков, иначе эмиссив не применится. Сам по себе, без базового GEO, бесполезен — он почти не содержит png, только описания слоёв. Проверил классы в fusion-1.3.12: там есть com/supermartijn642/fusion/texture/types/connecting/** и OptifineEntityModelLoader, то есть Fusion читает свой формат (и CEM-модели), но НЕ читает optifine/ctm. Верификация ссылки: страница CurseForge, название…

### 7. Anime Paintings 🟢

- **Файл:** `Anime Paintings 1.0.zip`
- **Автор:** HypX2L
- **Что добавляет:** Заменяет 47 текстур картин на аниме-арты в высоком разрешении — весь обычный ассортимент от старых kebab, aztec, creebet, donkey_kong, burning_skull до добавленных в 1.21 baroque, bouquet, cavebird, meditative, prairie_ride, owlemons и unpacked. Больше пак не трогает ничего: ни блоков, ни мобов, ни интерфейса, поэтому его можно класть поверх любого другого набора.
- **Область:** мир/декор: только assets/minecraft/textures/painting/** — 47 файлов картин
- **Адресат:** vanilla — только assets/minecraft, мод-неймспейсов нет (картины, добавленные модами, не затрагиваются)
- **Формат:** pack_format 15 плюс supported_formats [15, 1000] и нестандартные min_format/max_format; 1.21.1 (34) в диапазон попадает, отдельной отметки 1.21 нет
- **Нужен формат OptiFine:** нет
- **Скачать:** https://modrinth.com/resourcepack/anime-paintings
- **Его перерисовывают:** Cherry_Creeper_remake(3.0) (1)
- **Вердикт:** 🟢 оставить
- **Заметки:** Ссылка сверена по Modrinth API: slug anime-paintings, единственный владелец команды — HypX2L, что совпадает с description в pack.mcmeta («MadeByHypX2L»). Версия в API называется ровно «Anime Paintings 1.0», её файл весит 15,4 МБ — локальный архив 15 371 858 байт, то есть тот же самый файл. Скрытые командные картины earth/wind/fire/water в паке отсутствуют, они останутся ванильными. pack.mcmeta написан криво (одновременно pack_format, min_format, max_format и supported_formats — лишние ключи игра проигнорирует), но на загрузку в 1.21.1 это не влияет. Из-за высокого разрешения пак заметно тяжелее прочих в папке; ни optifine/**, ни мод-ассетов внутри нет, дополнительных модов не требует.

### 8. Totem of :GAGAGA: 7tv emote 🟢

- **Файл:** `Totem of GAGAGA 7tv emote 1.0.zip`
- **Автор:** HarryTheCat (Modrinth team owner)
- **Что добавляет:** Заменяет тотем бессмертия на 7tv-эмоцию :GAGAGA: — своя текстура assets/minecraft/textures/item/gagaga.png и переписанная модель totem_of_undying.json с собственными display-трансформациями (в руках, на земле, в слоте головы). Звук срабатывания тотема тоже подменён файлом sounds/item/totem/use_totem.ogg.
- **Область:** vanilla items — один предмет (totem_of_undying): модель, текстура и звук item.totem.use
- **Адресат:** vanilla
- **Формат:** pack_format 34, без supported_formats. 34 = ровно 1.21/1.21.1 — совместимость точная, предупреждений не будет.
- **Нужен формат OptiFine:** нет
- **Скачать:** https://modrinth.com/resourcepack/gagaga
- **Его перерисовывают:** 3D Items-Vanillaism-1.21.1 (1)
- **Вердикт:** 🟢 оставить
- **Заметки:** Проверено: страница Modrinth «Totem of :GAGAGA: 7tv emote» (project 6WhiwaS2, slug gagaga), /members → HarryTheCat (Owner), версия 1.0 с файлом gagaga.zip — на диске переименован в «Totem of GAGAGA 7tv emote 1.0.zip». Звук переопределяется по пути, без своего sounds.json — это работает, так как ванильный item.totem.use ссылается ровно на item/totem/use_totem. В архиве забыт исходник Paint.NET textures/item/gagaga.pdn — безвредный мусор, игра его игнорирует.

### 9. Moaning Mobs (в архиве — "MOANING MOBS by Gooey", версия 0.1 «Villagers only») 🔴

- **Файл:** `MOANING MOBS by Gooey 0.1.zip`
- **Автор:** Gooey_Gmr
- **Что добавляет:** Заменяет ровно один звук: предсмертный крик жителя (assets/minecraft/sounds/mob/villager/death.ogg, ogg на 17 КБ) на «стон Grox». Больше в паке нет ничего — ни текстур, ни моделей, ни своего sounds.json, так что все прочие звуки жителей и остальных мобов остаются ванильными.
- **Область:** vanilla, один звуковой ивент entity.villager.death. Вопреки названию «MOANING MOBS», затронуты только жители и только их смерть; версия так и подписана автором — «Villagers only».
- **Адресат:** vanilla
- **Формат:** pack_format 8 (это 1.18.x), блока supported_formats нет. Для 1.21.1 нужен формат 34, поэтому игра подсветит пак красным как несовместимый и потребует…
- **Нужен формат OptiFine:** нет
- **Скачать:** https://modrinth.com/resourcepack/moaning-mobs
- **Его перерисовывают:** Thicc Villagers v1.2 (1)
- **Вердикт:** 🔴 удалить, он не работает — В паке ровно один файл: `assets/minecraft/sounds/mob/villager/death.ogg`. Это путь из версии 1.8; с 1.9 звук смерти жителя лежит по `sounds/entity/villager/death.ogg`, и ни одного `sounds.json`, который переназначил бы событие на старый путь, в паке нет. То есть 1.21.1 этот файл не читает вовсе — пак молчит независимо от порядка загрузки. Вдобавок тот же путь занимают Thicc Villagers и Luigi Villagers, стоящие выше. Ту же мёртвую строку стоит выкинуть и из них.
- **Заметки:** Проверено через Modrinth API: проект XYYCziIm, slug moaning-mobs, заголовок "Moaning Mobs", описание "This resource pack makes villagers do the Grox moan when they die", единственная версия 0.1 с именем "Villagers only" и файлом "MOANING MOBS by Gooey.zip" — совпадает с зипом на диске; владелец команды voSf3Jab — Gooey_Gmr, лицензия CC-BY-4.0, заявленные версии 1.18/1.18.1/1.18.2. ВАЖНО: description внутри pack.mcmeta гласит "Custom Villager Sounds for 1.18.1, voiced by AnonJr" — это остаток чужого шаблона, который автор не переписал; к содержимому пака отношения не имеет и в списке ресурспаков будет вводить в заблуждение. Путь sounds/mob/villager/death.ogg — правильный ванильный путь и в…

### 10. Fresh Animations (1.10.4 BETA) 🟠

- **Файл:** `Fresh Animations v1.10.4.zip`
- **Автор:** FreshLX (pack.mcmeta: "§4■ 1.10.4 BETA§8\n■ By FreshLX")
- **Что добавляет:** Даёт ванильным мобам живую покадровую анимацию: 128 CEM-моделей (.jem) и 83 файла анимаций (.jpm) практически на всех — жители, иллагеры (эвокер, пиллагер, виндикатор, иллюзионист), зомби/утопленники/хаски, скелеты/стреи/богги, лошади, ослы, мулы, волки, коровы, свиньи, куры, гасты, эндермены, ифриты, стражи, рыбы и т. д., включая детёнышей и вариант happy_ghast. Плюс 172 текстуры сущностей (в основном глаза и морды, которые нужны новым моделям) и мелочь по частицам.
- **Область:** Только ванильные сущности (assets/minecraft): 240 файлов в optifine/cem (128 .jem, 83 .jpm, 29 .properties), 172 в textures/entity, 2 в textures/particle, 1 particles/mycelium.json. Ни GUI, ни блоков, ни предметов, ни ассетов модов.
- **Адресат:** vanilla
- **Формат:** pack_format 15, supported_formats 15–999 (+ min_format/max_format) — 1.21.1 (формат 34) поддерживается. Есть 4 оверлея: 20-3 (формат 22+) применится на 1.21.1,…
- **Нужен формат OptiFine:** да
- **Скачать:** https://www.curseforge.com/minecraft/texture-packs/fresh-animations
- **Его перерисовывают:** Grays Mob Overhaul v13 (176), Thicc Villagers v1.2 (22), CMMRP_Release_1.2.v5_[1.20.6-1.21.1] (22)
- **Вердикт:** 🟠 решить, кто главный по мобам — Механика: 65% его ассетов (271 из 415) перекрыты Gray's Mob Overhaul, который стоит выше. То есть анимации Fresh Animations живут только на тех мобах, которых Gray's не трогает. Это не поломка, а осознанный выбор из комментария в resourcepacks-default.txt, но платить 850 КБ и лишний слой за треть эффекта — повод либо поднять Fresh Animations выше Gray's, либо убрать один из них.
- **Заметки:** URL проверен: проект "Fresh Animations", автор FreshLX; конкретный файл 1.10.4 — https://www.curseforge.com/minecraft/texture-packs/fresh-animations/files/7670377 (имя файла FreshAnimations_v1.10.4.zip, 24.02.2026), его changelog на сайте дословно совпадает с changelog1.10.4.txt внутри зипа ("fixed pillager, vindicator, evoker, witch swim animation"). Зеркало: https://modrinth.com/resourcepack/fresh-animations. Внутренний changelog сам пишет "Recommended with Entity Model Features & Entity Texture Features" — оба мода в c:/Users/Oscar/Documents/LL8/mods есть (entity_model_features-3.2.4, entity_texture_features 7.1), так что пак заработает. FAterms&conditions.txt разрешает включение в…

### 11. Torturable Healthbars 🟢

- **Файл:** `Torturable Healthbars 2.4.3.zip`
- **Автор:** EnderB_C_ (описание в pack.mcmeta собрано по буквам цветным текстом: "By EnderB_C_ - 2.4.3")
- **Что добавляет:** Показывает здоровье моба прямо на его модели: по мере урона на нём появляются кровь, трещины и другие варианты текстуры — 589 файлов случайных сущностей (больше всего у иллагеров (75), зомби (60), жителей (41), зомби-жителей (40), пиглинов (22), свиней (17), криперов (16), стража (15)) и 321 файл CEM-моделей. Отдельно кладёт CIT для потрескавшейся брони (137 файлов в optifine/cit/armor для diamond/iron/gold и т. д.), анимированную кровь в optifine/anim/blood и свои сплэши.
- **Область:** Ванильные мобы + броня + мелочи интерфейса. 1289 файлов: 589 optifine/random, 321 optifine/cem, 137 optifine/cit/armor, 79 textures/entity, 49 optifine/anim, а также assets/minecraft/texts/splashes.txt, font/default.json + font/menu.json и lang/en_us.json. 100 из 589 random-файлов лежат в…
- **Адресат:** vanilla. Собственный неймспейс torturable_healthbars существует только ради конфигуратора Respackopts (respackopts.json5 в корне + rpo.* ключи в lang) — мода respackopts в c:/Users/Oscar/Documents/LL8/mods НЕТ (он Fabric-only), так что все .rpo-переключатели останутся в состоянии по умолчанию и…
- **Формат:** pack_format 15, supported_formats 15–999 — 1.21.1 (формат 34) поддерживается. Есть overlays: th.1_21_4less (форматы 15–46) применится на 1.21.1 (4 файла…
- **Нужен формат OptiFine:** да
- **Скачать:** https://www.curseforge.com/minecraft/texture-packs/torturable-healthbars
- **Его перерисовывают:** Grays Mob Overhaul v13 (85), CMMRP_Release_1.2.v5_[1.20.6-1.21.1] (79), Azus Enhanced Zombie Variants FA v1.2 (5)
- **Он перерисовывает:** Fresh Animations v1.10.4 (3)
- **Вердикт:** 🟢 оставить
- **Заметки:** URL проверен: на CurseForge проект "Torturable Healthbars", автор EnderB_C_, файл "Torturable Healthbars 2.4.3" — последний релиз; описание "Works only with Optifine or ETF+EMF". Зеркало: https://modrinth.com/resourcepack/torturable-healthbars (там же указан GitHub EnderBC/EnderB_C_-packs). Важные пробелы в модпаке: EMF и ETF на месте (CEM + random entities отработают), но CIT Resewn НЕТ — 137 файлов optifine/cit/armor (потрескавшаяся броня) работать не будут; также нет Animatica/MoreMcmeta, поэтому 49 файлов optifine/anim (анимированная кровь) под вопросом — ETF их не обрабатывает.

### 12. 3D Reinforced Armor 🟢

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

### 13. Baby Animals Remastered 🟢

- **Файл:** `Baby Animals Remastered 1.21 v1.3.zip`
- **Автор:** Futureazoo
- **Что добавляет:** Даёт детёнышам собственные модели и текстуры вместо ванильных «большеголовых»: отдельные CEM-модели и png для поросёнка (piglet.png), ягнёнка (lamb.png + lamb_wool.png), цыплёнка (chick.png), телёнка (calf.png) и обоих грибных телят (red/brown_mooshroom_calf.png), а также уменьшенные модели волчонка с ошейником. Котята, оцелоты и волчата всех 9 окрасов переключаются на детские скины через random entity .properties с условием baby=true.
- **Область:** Только ванильные мобы-детёныши: свинья, овца (тело + шерсть), курица, корова, грибная корова (красная и коричневая), волк (+ ошейник), кошка (9 окрасов + ошейник), оцелот. Ни GUI, ни блоков, ни предметов, ни модовых ассетов не трогает.
- **Адресат:** vanilla — всё лежит в assets/minecraft/, ни одного модового namespace
- **Формат:** pack_format 34, supported_formats не задан. 34 — это ровно 1.21–1.21.1, так что для 1.21.1 подходит без оговорок.
- **Нужен формат OptiFine:** да
- **Скачать:** https://www.curseforge.com/minecraft/texture-packs/baby-animals-remastered
- **Его перерисовывают:** Grays Mob Overhaul v13 (36)
- **Вердикт:** 🟢 оставить
- **Заметки:** Почти весь пак живёт в assets/minecraft/optifine/: 8 папок cem/ с парами .jem (обычный/детский) и .properties вида «models.1=2, baby.1=true», плюс random/entity/ для кошек, оцелота и волка. Без CEM/random-entity ничего не сработает — в LL8 нужные моды стоят: entity_model_features-3.2.4-1.21-neoforge.jar и entity_texture_features_1.21-neoforge-7.1.jar. Обычных текстур всего 6 штук, и они бесполезны сами по себе — на них ссылаются .jem. Внутри лежит мусорный .DS_Store (безвредно). Заявленных на странице панд и лис в этой версии пака нет — только перечисленные мобы. Ссылка подтверждена: страница CurseForge называет автором Futureazoo, что совпадает с description в pack.mcmeta («by…

### 14. Cute Mob Models Resource Pack (CMMRP) 🟢

- **Файл:** `CMMRP_Release_1.2.v5_[1.20.6-1.21.1].zip`
- **Автор:** Команда CMM: Emmie_4 (порт на Java и владелец страницы CurseForge), Minedoll, NGFuji.mp4, Shirotamaya_64; оригинал — _jx, ремейк — yarrmateys, дизайн персонажей — AT2
- **Что добавляет:** Полностью заменяет модели почти всех ванильных мобов на аниме-девочек: 113 .jem-моделей CEM — от криперов, скелетов, зомби и жителей до варденов, бризов, верблюдов, лягушек, волков с бронёй, иллагеров, ифрита, дракона и висера, включая головы-блоки. Сверху 346 текстур сущностей, 180 файлов случайных вариантов (по 30 на профессии жителя и зомби-жителя, овцы, варден, аллей, коты, страйдеры) и 788 файлов покадровой анимации моргания и бликов.
- **Область:** Только ваниль, 1491 файл, все в assets/minecraft. optifine/ (1123 файла): anim 788, random 180, cem 119, cit 34. textures/entity 346. Плюс 8 моделей предметов (dragon_head, fishing_rod, golden_axe/sword, trident_in_hand/throwing, warped_fungus_on_a_stick), 5 текстур вёдер с…
- **Адресат:** vanilla — модовых namespace'ов нет ни одного.
- **Формат:** pack_format 34, supported_formats {min_inclusive: 15, max_inclusive: 34} — 34 это ровно 1.21/1.21.1, поддержка заявлена явно; description внутри: «Release…
- **Нужен формат OptiFine:** да
- **Скачать:** https://www.curseforge.com/minecraft/texture-packs/cute-mob-models-resource-pack
- **Его перерисовывают:** Grays Mob Overhaul v13 (255), Thicc Villagers v1.2 (68), Neco-Arc Cats (15)
- **Он перерисовывает:** Torturable Healthbars 2.4.3 (79), Fresh Animations v1.10.4 (22), Stay True 1.21 (2)
- **Вердикт:** 🟢 оставить
- **Заметки:** Самый зависимый от optifine-фич пак в батче: без сторонних модов он не делает НИЧЕГО, кроме нескольких вёдер, иконок эффектов и логотипа. Разбор по подпапкам и наличию модов в сборке: (1) optifine/cem — 113 .jem + 6 .properties, покрывает практически весь ванильный бестиарий; нужен Entity Model Features — entity_model_features-3.2.4-1.21-neoforge.jar ЕСТЬ, работает. (2) optifine/random — 153 png + 23 .properties + 4 .mcmeta; нужен Entity Texture Features — entity_texture_features_1.21-neoforge-7.1.jar ЕСТЬ, работает. (3) optifine/cit — 34 файла (nametag-варианты: amethystcake и citrine для аллея, blue/cyan/gold/wild аксолотли, seth-летучая мышь, seravex, superstar, superleaf, emoji, sniffer…

### 15. 3D Items-Vanillaism 🟢

- **Файл:** `3D Items-Vanillaism-1.21.1.zip`
- **Автор:** Snow_Wolf_324
- **Что добавляет:** Переводит 176 ванильных предметов из плоских спрайтов в объёмные модели: еду и напитки, слитки/самородки, сырые руды, все 16 красителей, зелья, книги, кузнечные шаблоны и все 18 шаблонов трима, узоры знамён, тотем бессмертия, булаву и фонари. Дополнительно делает объёмными коричневый/красный гриб и багровый/искажённый грибок, включая варианты в цветочном горшке.
- **Область:** Только ванильные предметы и четыре блока-растения: 176 файлов в assets/minecraft/models/item/, 8 в models/block/ (brown_mushroom, red_mushroom, crimson_fungus, warped_fungus + их potted-версии) и 181 текстура. Ни мобов, ни GUI, ни мира не трогает.
- **Адресат:** vanilla
- **Формат:** pack_format 34 плюс supported_formats {min_inclusive:15, max_inclusive:50} — 1.21.1 (формат 34) поддерживается явно, лаунчер не пометит пак как несовместимый.
- **Нужен формат OptiFine:** нет
- **Скачать:** https://modrinth.com/resourcepack/3d-items-vanillaism
- **Он перерисовывает:** Stay True 1.21 (5), GEO - v1.109.0 (2), Totem of GAGAGA 7tv emote 1.0 (1)
- **Вердикт:** 🟢 оставить
- **Заметки:** Проверено: страница Modrinth называется «3D Items-Vanillaism», в списке версий есть 1.21.1, владелец команды по API — Snow_Wolf_324 (совпадает с описанием в pack.mcmeta: «Completed on Jane 24, 2026 By Snow_Wolf_324»). Есть и зеркало на CurseForge (s3d-items-vanillaism). Папки assets/minecraft/optifine/ в паке нет вообще — работает на чистом NeoForge, EMF/ETF/CIT не нужны. Все модели наследуются от item/display с gui_light:"front", поэтому иконка в инвентаре остаётся плоской и «ванильной», а объём виден в руке, на земле и в рамке. Текстуры перенесены в подпапки (item/food_and_drinks/, item/ingredients/ores/ и т.д.), в именах опечатки автора: glow_barries.png и sweet_barries.png. Пространство…

### 16. Gray's Mob Overhaul 🟢

- **Файл:** `Grays Mob Overhaul v13.zip`
- **Автор:** CanineGray (pack.mcmeta: "Made By §9CanineGray §6New Mobs!"; CurseForge owner: caninegray)
- **Что добавляет:** Переделывает модели и текстуры почти всех ванильных мобов: 117 CEM-моделей (.jem) и ~1038 файлов случайных вариантов — больше всего у кошек (262), лошадей (189), свиней (69), коров (64), кроликов (60), волков (56), жителей (40), пиглинов и куриц (по 30), зомби (23), овец (20). Плюс 325 базовых текстур сущностей (включая 23 файла в textures/entity/equipment — брони/сёдла) и светящиеся слои по суффиксу _e через optifine/emissive.properties.
- **Область:** Только ванильные мобы (assets/minecraft). 1481 файл: 1038 в optifine/random/entity, 325 в textures/entity, 117 в optifine/cem, 1 emissive.properties. GUI, блоки, предметы и мир не трогает.
- **Адресат:** vanilla
- **Формат:** pack_format 22, supported_formats 22–55. 1.21.1 = формат 34, попадает в диапазон, так что пак грузится. На CurseForge файл v13 подписан как "Gray's Mob…
- **Нужен формат OptiFine:** да
- **Скачать:** https://www.curseforge.com/minecraft/texture-packs/grays-mob-overhaul
- **Его перерисовывают:** Thicc Villagers v1.2 (69), LLama Girls (25), Neco-Arc Cats (15)
- **Он перерисовывает:** CMMRP_Release_1.2.v5_[1.20.6-1.21.1] (255), Fresh Animations v1.10.4 (176), Torturable Healthbars 2.4.3 (85)
- **Вердикт:** 🟢 оставить
- **Заметки:** URL проверен фетчем: название "Gray's Mob Overhaul", владелец caninegray, в описании прямо "OptiFine OR mods: EMF / ETF Required"; в списке файлов есть релиз v13 (18.06.2025). Весь пак завязан на OptiFine-фичи: CEM (117 .jem), Random Entities (1038 файлов) и Emissive Textures. В c:/Users/Oscar/Documents/LL8/mods есть entity_model_features-3.2.4-1.21-neoforge.jar и entity_texture_features_1.21-neoforge-7.1.jar — то есть CEM и random/emissive отработают. License.txt внутри зипа: CC BY-NC 4.0, перезалив запрещён.

### 17. LET SKELETONS HAVE HANDS (67 edition) 🟢

- **Файл:** `Skeletons Hands 67.zip`
- **Автор:** Radok (Modrinth team owner)
- **Что добавляет:** Через CEM-модель skeleton.jem даёт скелетам настоящие кисти с отдельными пальцами вместо культяпок. Скелет, переименованный биркой в «67», «six seven» или «sixseven», подхватывает вторую модель skeleton2.jem с текстурой sixseven.png и держит в руках цифры 6 и 7.
- **Область:** vanilla mobs — только скелет (модель + именованный вариант); текстур ванильных мобов не трогает, свою sixseven.png использует только вторая модель
- **Адресат:** vanilla
- **Формат:** pack_format 15 (1.20.1), но объявлен supported_formats min_inclusive 6 / max_inclusive 255 — 1.21.1 (34) в диапазон входит, пак грузится без предупреждения. На…
- **Нужен формат OptiFine:** да
- **Скачать:** https://modrinth.com/resourcepack/let-skeletons-have-hands-(67-edition)
- **Его перерисовывают:** Skeleton Girlies (1)
- **Он перерисовывает:** Torturable Healthbars 2.4.3 (2)
- **Вердикт:** 🟢 оставить
- **Заметки:** Всё содержимое лежит в assets/minecraft/optifine/cem/ — без OptiFine или EMF+ETF пак не делает ничего. В сборке c:/Users/Oscar/Documents/LL8/mods есть entity_model_features-3.2.4-1.21-neoforge.jar и entity_texture_features_1.21-neoforge-7.1.jar, так что работать будет. skeleton.properties задаёт models.2/3/4 = 2 с name.2=iregex:(67), name.3=iregex:(six seven), name.4=iregex:(sixseven) — то есть все три имени ведут на skeleton2.jem. Проверено через api.modrinth.com/v2/project/let-skeletons-have-hands-(67-edition) (id 3Qby3x6b, описание дословно совпадает с поведением .properties) и /members → Radok (Owner). Лицензия ARR. ВНИМАНИЕ на конфликт: Fresh Animations v1.10.4 в этой же папке…

### 18. Skeleton Girlies 🟢

- **Файл:** `Skeleton Girlies.zip`
- **Автор:** imsairer
- **Что добавляет:** Заменяет три ванильных скелета на женские CEM-модели: skeleton.jem/skeleton.png, wither_skeleton.jem/wither_skeleton.png и стрей сразу двумя слоями — stray.jem/stray.png и внешний ледяной stray_outer.jem/stray_outer.png; текстуры в повышенном разрешении (textureSize 128x128, у моделей есть отдельные подмодели для волос и накидки). Больше в паке нет ничего — только 4 .jem и 4 .png.
- **Область:** ванильные мобы skeleton, stray, wither_skeleton (модели + текстуры); блоков, GUI, предметов и звуков не трогает
- **Адресат:** vanilla
- **Формат:** pack_format 15 (1.20-1.20.1), supported_formats нет — 1.21 НЕ заявлена, в 1.21.1 будет плашка «сделан для другой версии», но CEM грузится через EMF без проблем
- **Нужен формат OptiFine:** да
- **Скачать:** https://www.curseforge.com/minecraft/texture-packs/skeleton-girlies
- **Он перерисовывает:** Fresh Animations v1.10.4 (4), Grays Mob Overhaul v13 (3), CMMRP_Release_1.2.v5_[1.20.6-1.21.1] (3)
- **Вердикт:** 🟢 оставить
- **Заметки:** Ссылка подтверждена фетчем страницы CurseForge: проект «Skeleton Girlies», автор imsairer, среди файлов есть «Skeleton Girlies.zip» (последний релиз 03.08.2025, отмечен как 1.20.6) — имя файла совпадает с зипом на диске; в описании прямо сказано, что нужен Optifine либо EMF/ETF. Есть и зеркало на PlanetMinecraft (planetminecraft.com/texture-pack/skeleton-girlies/). EMF 3.2.4 и ETF 7.1 в модпаке стоят. КОНФЛИКТ: Fresh Animations v1.10.4 содержит skeleton.jem, stray.jem, stray_outer.jem и wither_skeleton.jem — прямое перекрытие всех четырёх файлов; кроме того FA кладёт *_animations.jpm, которые этот пак не переопределяет, так что при неудачном порядке возможна рассинхронизация модели и…

### 19. Cherry-Creeper (remake) — With Animation 🟢

- **Файл:** `Cherry_Creeper_remake(3.0).zip`
- **Автор:** Poolb, Kotisimo
- **Что добавляет:** Делает из крипера вишнёвое деревце: CEM-модель optifine/cem/creeper.jem с подмоделями кроны (body_cherry, body_cherry_rotation) и анимацией, текстура creeper_cherry.png (64x64) плюс emissive-слой creeper_cherry_e.png, и отдельная head_creeper.jem для головы крипера. Заодно подменяет модель и текстуру ТНТ (models/block/tnt.json + textures/block/tnt/tnt.png), иконку пороха и картину creebet, а через lang en_us/ru_ru крипер становится «Вишневым Крипером».
- **Область:** ванильный моб creeper (модель+текстура+emissive) и голова крипера, блок ТНТ (модель и текстура), предмет gunpowder, картина creebet, локализация en/ru
- **Адресат:** vanilla
- **Формат:** pack_format 15 (1.20-1.20.1), НО есть supported_formats min 0 / max 1024 — то есть 1.21 покрыта явно, плашки «другая версия» не будет
- **Нужен формат OptiFine:** да
- **Скачать:** https://www.planetminecraft.com/texture-pack/cherry-creeper-remake-6321265/ (не подтверждена)
- **Его перерисовывают:** CowGirl v1 (2)
- **Он перерисовывает:** Stay True 1.21 (2), Grays Mob Overhaul v13 (2), CMMRP_Release_1.2.v5_[1.20.6-1.21.1] (2)
- **Вердикт:** 🟢 оставить
- **Заметки:** PlanetMinecraft отдаёт WebFetch HTTP 403, страницу напрямую прочитать не вышло. Подтверждение косвенное: поиск (в т.ч. с ограничением по домену planetminecraft.com) стабильно даёт этот URL с заголовком «Cherry-Creeper(remake) - With Animation» и авторами poolb + kotisimo — пара авторов в точности совпадает с pack.mcmeta «by Poolb, Kotisimo», а внутри creeper.jem стоит credit «made by Poolb, Kotisimo». Сниппет упоминает апдейт 2.1 от 17.07.2024, у нас на диске 3.0 — вероятно более позднее обновление той же страницы. КОНФЛИКТ: Fresh Animations v1.10.4 тоже содержит optifine/cem/creeper.jem (и creeper_animations.jpm) — победит тот, что выше по списку. ТНТ-модель кастомная и ссылается на свою…

### 20. The Sky, Sun and Moon 🔴

- **Файл:** `The Sky Sun and Moon.zip`
- **Автор:** Azturax
- **Что добавляет:** Заменяет ванильные квадратные светила на аккуратные круглые: sun.png 32×32 — мягкий жёлтый диск со свечением, moon_phases.png 128×64 — восемь настоящих фаз бело-голубой луны с кратерами. Несмотря на название, текстур самого неба (облаков, end_sky и т.п.) в архиве нет — только эти два файла.
- **Область:** Ванильное окружение (assets/minecraft/textures/environment): только солнце и луна.
- **Адресат:** vanilla
- **Формат:** pack_format 75 плюс supported_formats [34, 42, 46, 55, 63, 64, 69, 75, 84]. 34 в списке есть, то есть 1.21/1.21.1 поддерживается явно — единственный пак из…
- **Нужен формат OptiFine:** нет
- **Скачать:** https://modrinth.com/resourcepack/the-sky,-sun-and-moon
- **Его перерисовывают:** Sun & Moon Fusion 2.1 (2), zazu sun and moon (2)
- **Вердикт:** 🔴 удалить — Перекрыт полностью: оба его ассета перерисовывают и «zazu sun and moon», и «Sun & Moon Fusion 2.1», которые стоят выше. В игре от пака не видно ничего.
- **Заметки:** Проверено фетчем страницы Modrinth: заголовок "The Sky, Sun and Moon", автор Azturax, описание про замену блочных солнца и луны круглыми небесными телами, поддержка 1.21.x. Есть и параллельный проект на CurseForge (curseforge.com/minecraft/texture-packs/the-sky-sun-and-moon) того же автора. Конфликтует с "zazu sun and moon": файлы совпадают один в один, работать будет только один из двух — надо решить, какой ставить выше.

### 21. zazu sun & moon 🔴

- **Файл:** `zazu sun and moon.zip`
- **Автор:** saopin (на странице подписан как zazu, Instagram @zazubabyman)
- **Что добавляет:** Меняет светила на фотографию полосатого кота: sun.png (128×128) — цветная кошачья морда на прозрачном фоне, moon_phases.png (1280×640) — сетка 4×2 из восьми чёрно-белых копий той же морды, различающихся только яркостью вместо формы фаз. Кроме этих двух файлов в паке нет ничего.
- **Область:** Ванильное окружение (assets/minecraft/textures/environment): только солнце и луна.
- **Адресат:** vanilla
- **Формат:** pack_format 15 (1.20.1), supported_formats нет. Поддержка 1.21 НЕ заявлена — лаунчер пометит пак как устаревший, но пути textures/environment/sun.png и…
- **Нужен формат OptiFine:** нет
- **Скачать:** https://modrinth.com/resourcepack/zazu-sun-moon
- **Он перерисовывает:** The Sky Sun and Moon (2), Stay True 1.21 (1)
- **Его перерисовывают:** Sun & Moon Fusion 2.1 (2)
- **Вердикт:** 🔴 удалить — Перекрыт полностью: оба его ассета перерисовывает «Sun & Moon Fusion 2.1», который стоит выше. В игре от пака не видно ничего. На момент аудита этого пака ещё не было, и zazu был виден.
- **Заметки:** Проверено фетчем: проект "zazu sun & moon" на Modrinth, владелец saopin, описание "replaces the sun and moon with a cat named Zazu", 128x, заявлена только 1.20.1 — совпадает с pack_format 15 в архиве. Есть и зеркало на PlanetMinecraft (zazu-sun-and-moon-6356604), но оно отдало 403 и подтвердить его я не смог, поэтому даю Modrinth. Важное: пак конфликтует с "The Sky Sun and Moon" — оба переопределяют ровно эти два файла, победит тот, что выше в списке паков. Луна тяжёлая: 1280×640, то есть 320×320 на фазу.

### 22. Sun & Moon Fusion 🟢

- **Файл:** `Sun & Moon Fusion 2.1.zip`
- **Автор:** OrkaMC
- **Что добавляет:** Меняет солнце и луну на чистые мультяшные: sun.png и moon_phases.png — и всё, в архиве больше нет ни одного ассета. Обе текстуры крошечные, 711 и 778 байт, то есть рисунок простой и мелкий по сетке фаз.
- **Область:** Ванильное окружение (assets/minecraft/textures/environment): только солнце и луна.
- **Адресат:** vanilla
- **Формат:** pack_format 10 (1.19), supported_formats нет. Поддержка 1.21 НЕ заявлена — игра пометит пак как устаревший, но оба пути textures/environment/ с 1.19 не менялись, так что он читается.
- **Нужен формат OptiFine:** нет
- **Скачать:** https://modrinth.com/resourcepack/sun-moon-fusion
- **Он перерисовывает:** zazu sun and moon (2), The Sky Sun and Moon (2)
- **Вердикт:** 🟢 оставить, светила теперь его
- **Заметки:** Третий пак светил в сборке и единственный, который видно: он стоит выше обоих остальных и переопределяет ровно те же два файла. Пришёл позже аудита, коммитом «Add Windy, Spawn Animations, Cursors Extended and a new sun and moon», и молча погасил zazu, который до него был виден. Ссылка сверена через Modrinth API: единственный проект с этим названием, slug sun-moon-fusion, автор OrkaMC — тот же, что подписан в pack.mcmeta («Retextured Sun & Moon By: OrkaMC»). Держать три пака на два файла смысла нет: два нижних можно убрать, ничего не изменится.

### 23. funnyrain (в pack.mcmeta подписан как "Vanilla Tweaks 1.21 / vanillatweaks.net" — это остаточное описание от Vanilla Tweaks, содержимое к VT отношения не имеет) 🟢

- **Файл:** `funnyrain.zip`
- **Автор:** не указан (описание подставлено от Vanilla Tweaks; настоящий автор неизвестен)
- **Что добавляет:** Заменяет текстуру дождя и снега (assets/minecraft/textures/environment/rain.png и snow.png — оба файла байт-в-байт одинаковые, 894x2048) на падающие смайлики-какашки 💩. Заодно перекрашивает частицы брызг splash_0…3.png (8x8) из голубых в коричнево-оранжевые, чтобы капли на земле совпадали по цвету.
- **Область:** vanilla: погода/окружение (rain.png, snow.png) + частицы брызг дождя (particle/splash_0-3.png). Ни мобов, ни GUI, ни блоков не трогает.
- **Адресат:** vanilla
- **Формат:** pack_format 34, min_format 34, max_format 75, supported_formats 34–75 — 1.21 поддерживается явно. В pack.mcmeta объявлено 26 overlay-каталогов (overlay_34_34,…
- **Нужен формат OptiFine:** нет
- **Скачать:** — ссылка не найдена
- **Он перерисовывает:** Stay True 1.21 (6)
- **Вердикт:** 🟢 оставить
- **Заметки:** Каталог архива целиком: pack.mcmeta, pack.png (стандартная иконка Minecraft, не своя), 2 текстуры окружения и 4 частицы — всего 7 ассетов. Работает на чистой ваниле, ни EMF, ни ETF, ни CIT не требует. Ссылку подтвердить не удалось: PMC-пак с похожим названием (planetminecraft.com/texture-pack/funny-rain/, автор gfhfh) — это 16x пак под Minecraft 1.2.5 с весёлыми рожицами в дожде, а не эти 894x2048 какашки, так что это НЕ он. Поиски по "funnyrain", "poop rain resource pack" и по каталогу Vanilla Tweaks канонической страницы не дали. Похоже на самодельный пак: кто-то скачал сборку с vanillatweaks.net и подменил rain.png/snow.png/splash, не тронув pack.mcmeta.

### 24. Lilac Jackson 🟢

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

### 25. 3D Beetroots to Tomatoes 🟢

- **Файл:** `3D Beetroots to Tomatoes.zip`
- **Автор:** CakeyDoe
- **Что добавляет:** Превращает грядку свёклы в объёмный куст помидоров: свои модели block/beetroots_stage0-3 (с листвой, деревянной подпоркой, табличкой и узлом лида) и переопределённый blockstates/beetroots.json, плюс новые иконки item/beetroot.png и item/beetroot_soup.png. Через lang/en_us.json переименовывает свёклу, семена и суп в Tomato / Tomato Seeds / Tomatoes / Tomato Soup.
- **Область:** один ванильный блок (посевы свёклы) + две иконки предметов + локализация en_us; мобы, GUI, мир не затронуты
- **Адресат:** vanilla
- **Формат:** pack_format 8 (это 1.18), supported_formats нет — 1.21 НЕ заявлена, самый устаревший формат в батче; blockstates/models/lang в 1.21.1 всё ещё валидны, но…
- **Нужен формат OptiFine:** нет
- **Скачать:** https://www.planetminecraft.com/texture-pack/3d-beetroots-to-tomatoes/ (не подтверждена)
- **Его перерисовывают:** CowGirl v1 (1)
- **Он перерисовывает:** Stay True 1.21 (2)
- **Вердикт:** 🟢 оставить
- **Заметки:** PlanetMinecraft отдаёт WebFetch HTTP 403 (блокирует инструмент), поэтому страницу целиком открыть не удалось. Подтверждение косвенное, но сильное: два независимых поиска возвращают ровно этот URL с заголовком «3D Beetroots to Tomatoes Minecraft Texture Pack», автором CakeyDoe и описанием «pulls its textures (except the leaves and tomatoes)… replaces the icons for beetroot soup and beetroots as well as the language for both» — это буквально совпадает с составом зипа: свои текстуры только leaves.png, leaves2.png, extra_tomatos.png, tomatosign.png, а stripped_spruce_log, spruce_planks, farmland_moist и entity/lead_knot модель тянет из текущего пака. КОНФЛИКТЫ в наборе: «Stay True 1.21» тоже…

### 26. Bad Dream Death 🟢

- **Файл:** `Bad Dream Death.zip`
- **Автор:** JustImagine436 (Modrinth team owner)
- **Что добавляет:** Заменяет один-единственный звук — смерть игрока (entity.player.death) — на резкий вдох, будто «это был просто плохой сон». Никакой графики в паке нет: только assets/minecraft/sounds/custom/mydeath.ogg и sounds.json с "replace": true.
- **Область:** vanilla sounds only — переопределение события entity.player.death; ни текстур, ни моделей, ни GUI
- **Адресат:** vanilla
- **Формат:** pack_format 55, без supported_formats. 55 = 1.21.5, то есть 1.21.1 НЕ заявлена — игра пометит пак как «сделан для более новой версии». Формат sounds.json с…
- **Нужен формат OptiFine:** нет
- **Скачать:** https://modrinth.com/resourcepack/bad-dream-death
- **Вердикт:** 🟢 оставить
- **Заметки:** Проверено через api.modrinth.com/v2/project/bad-dream-death (id FfdhTk6z, description «Like the memes. For when you are playing with keepInventory + doImmediateRespawn.», game_versions: только 1.21.5) и /members → JustImagine436 (Owner). Файл релиза на Modrinth называется dreambad.zip, версия bad_dream_death_1.21.5-1 — на диске переименован. В архиве мусор от macOS: assets/.DS_Store, assets/minecraft/.DS_Store, sounds/.DS_Store. Задуман для игры с keepInventory + doImmediateRespawn.

### 27. Slavic Villagers 🟠

- **Файл:** `Slavic Villagers.zip`
- **Автор:** CopperCap
- **Что добавляет:** Переодевает всех жителей в славянскую одежду разных эпох и регионов — перерисованы все семь биомных текстур (plains, taiga, savanna, swamp, snow, jungle, desert) и те же семь вариантов для зомби-жителей. Профессии, уровни торговли и модели не трогаются, меняется только базовый биомный слой одежды.
- **Область:** vanilla mobs — биомные слои villager и zombie_villager; ни GUI, ни блоков, ни предметов
- **Адресат:** vanilla
- **Формат:** pack_format 69 с supported_formats [4, 999] — диапазон перекрывает формат 34 (1.21.1), так что грузится без предупреждений
- **Нужен формат OptiFine:** нет
- **Скачать:** https://modrinth.com/resourcepack/slavic-villagers
- **Его перерисовывают:** Thicc Villagers v1.2 (14)
- **Вердикт:** 🟠 спорный — 88% ассетов перекрыто паком «Thicc Villagers v1.2».
- **Заметки:** Проверено через Modrinth API: проект slavic-villagers (id RqKuug4k), название «Slavic Villagers», владелец команды — CopperCap, что совпадает с pack.mcmeta («By CopperCap on planetminecraft.com»). Автор в описании указывает PMC как свою площадку (https://www.planetminecraft.com/texture-pack/slavic-villagers/ выдаётся поиском), но PMC отдаёт 403 на фетч, поэтому подтверждённой я привожу Modrinth-страницу того же автора. Никакого optifine/ в паке нет — чистые ванильные пути, работает без EMF/ETF. Два файла мёртвые: entity/not_enough_slavic_wandering_trader.png лежит не по ванильному пути (ваниль ждёт entity/wandering_trader.png), то есть странствующий торговец НЕ переодет;…

### 28. Luigi Villagers 🔴

- **Файл:** `Luigi Villagers.zip`
- **Автор:** jadeghost
- **Что добавляет:** Перекрашивает всех жителей в Луиджи, а странствующего торговца — в Марио: заменены базовая villager.png, все 13 текстур профессий, 5 значков уровня (stone/iron/gold/emerald/diamond) и 7 биомных типов, плюс wandering_trader.png. Дополнительно подменяет 41 ванильный .ogg — все реплики, торг, урон и смерть жителя и странствующего торговца.
- **Область:** Ванильные житель и странствующий торговец: текстуры сущностей + их звуки. Иллагеры, зомби-житель и что-либо ещё не затронуты; GUI, блоков, предметов и мира нет.
- **Адресат:** vanilla — только assets/minecraft/, модовых namespace нет
- **Формат:** pack_format 18 (1.20.2) с supported_formats [18, 2147483647]. Верхняя граница фактически бесконечная, поэтому на 1.21.1 (формат 34) пак грузится без…
- **Нужен формат OptiFine:** нет
- **Скачать:** https://modrinth.com/resourcepack/luigi-villagers
- **Его перерисовывают:** Thicc Villagers v1.2 (71)
- **Вердикт:** 🔴 удалить — Перекрыт полностью: все 71 его ассетов перерисовывает «Thicc Villagers v1.2», который стоит выше. В игре от пака не видно ничего.
- **Заметки:** Единственный пак в батче, которому вообще ничего не нужно — папки assets/minecraft/optifine/ нет, всё подменяется по ванильным путям и работает на голом NeoForge. Файлы .png.mcmeta рядом с текстурами — это не анимация, а ванильные villager-метаданные {"villager":{"hat":"full"}}, они говорят игре скрывать шляпу профессии под шляпой биома. sounds.json в паке нет: .ogg просто лежат по ванильным путям mob/villager/** и mob/wandering_trader/**, которые ванильный sounds.json уже адресует, так что звук подменяется корректно. Ссылка подтверждена: Modrinth-проект luigi-villagers, владелец команды — jadeghost, описание «The Villagers are Luigi», Mario как wandering trader, и прямо сказано, что…

### 29. Blue's Better Zombies 🟢

- **Файл:** `Blues Better Zombies v0.13.zip`
- **Автор:** MrBlueYeti
- **Что добавляет:** Даёт зомби, кадаврам, утопленникам и зомби-жителям около 30 CEM-моделей с покадровыми анимациями (ползающие, с отрывающимися конечностями, разные варианты смерти) и светящимися глазами через emissive-текстуры. Отдельные варианты вызываются именем в бирке: рудные зомби (медь, железо, редстоун, золото, алмаз, изумруд), фермер, наездник на корове, «чомпер», а также пасхалка с Херобрином.
- **Область:** Ванильная нежить: zombie, husk, drowned, zombie_villager и голова зомби (head_zombie.jem). Заменяет базовые текстуры textures/entity/zombie/zombie.png, husk.png, drowned.png, drowned_outer_layer.png, zombie_villager.png и добавляет ~30 .jem-моделей с парными _e (emissive) текстурами. Ни GUI, ни…
- **Адресат:** vanilla
- **Формат:** pack_format 42 с supported_formats [12,42] — формат 1.21.1 (34) попадает внутрь диапазона, пак совместим без предупреждений; в описании автор указывает «mc…
- **Нужен формат OptiFine:** да
- **Скачать:** https://modrinth.com/resourcepack/blues-better-zombies
- **Его перерисовывают:** Azus Enhanced Zombie Variants FA v1.2 (8), My Monster Girls (3), Betty Witch v1.0 (1)
- **Он перерисовывает:** Grays Mob Overhaul v13 (5), CMMRP_Release_1.2.v5_[1.20.6-1.21.1] (5), Fresh Animations v1.10.4 (5)
- **Вердикт:** 🟢 оставить
- **Заметки:** Проверено загрузкой страницы: заголовок «Blue's Better Zombies», автор MrBlueYeti, версии 1.19.2-1.21.4, в описании прямо сказано, что нужен парсер CEM — либо Entity Model Features + Entity Texture Features, либо OptiFine. Совпадает с pack.mcmeta («by §3MrBlueYeti») и с вложенным в архив safety.txt, где сам автор называет тремя официальными источниками именно эту ссылку Modrinth, а также CurseForge (minecraft-better-zombies) и PlanetMinecraft. Оба нужных мода в mods/ есть (entity_model_features-3.2.4, entity_texture_features_7.1). Из zombie.properties видно устройство: правила 1-13 — это name.N=iregex по бирке (wooden/stone/iron/diamond sword, herobrine, copper, iron, redstone, gold,…

### 30. Azu's Enhanced Zombie Variants & Fresh Animations 🟢

- **Файл:** `Azus Enhanced Zombie Variants FA v1.2.zip`
- **Автор:** AZUHCK / AzuhWorks
- **Что добавляет:** Разворачивает обычного зомби в 8 CEM-моделей и около сорока текстур-вариантов — шахтёр (minero), ковбой (vaquero), воин (guerrero), болотный (pantano), серный (azufre), тундровый (tundra), «особый» (especial) и детализированный базовый — с эмиссивными слоями _e. Раздача идёт по биому и высоте через .properties: ковбои в бэдлендсах, болотные в swamp/mangrove_swamp, шахтёры на глубине от -100 до -15, отдельные скины только для pale_garden и deep_dark.
- **Область:** Ровно один ванильный моб — зомби: модели, текстуры и их случайный подбор. Ни husk, ни drowned, ни GUI, ни блоков, ни предметов, ни модовых ассетов.
- **Адресат:** vanilla — только assets/minecraft/, модовых namespace нет
- **Формат:** pack_format 15 с supported_formats [15,128] и min/max_format 15/128 — 1.21.1 (формат 34) попадает в диапазон. Но объявленные overlays указывают на каталоги…
- **Нужен формат OptiFine:** да
- **Скачать:** https://modrinth.com/resourcepack/azus-enhanced-zombie-variants-fresh-animations
- **Его перерисовывают:** My Monster Girls (1), Betty Witch v1.0 (1)
- **Он перерисовывает:** Blues Better Zombies v0.13 (8), Torturable Healthbars 2.4.3 (5), Fresh Animations v1.10.4 (1)
- **Вердикт:** 🟢 оставить
- **Заметки:** Это аддон к Fresh Animations, а не самостоятельный пак: во всех восьми .jem стоит "credit": "Created by FreshLX for Fresh Animations", и рядом лежит zombie_animations.jpm. Значит нужны сразу три вещи — сам Fresh Animations (в resourcepacks есть, Fresh Animations v1.10.4.zip), EMF и ETF (оба стоят в mods). Порядок загрузки важен: страница проекта требует ставить пак ВЫШЕ Fresh Animations. Эмиссивность здесь настроена правильно — есть assets/minecraft/optifine/emissive.properties с suffix.emissive=_e. Найденный баг в assets/minecraft/optifine/cem/zombie.properties: ключ models.2 (вместе с biomes.2 и weights.2) определён ТРИЖДЫ — для лесов, для серных пещер и для снежных биомов. В формате…

### 31. Golems Refreshed 🟢

- **Файл:** `Golems Refreshed v2.1.zip`
- **Автор:** lukidonu (lukidon)
- **Что добавляет:** Полностью переделывает железного голема: 28 CEM-моделей (iron_golem.jem и iron_golem2–17, 20–30) плюс 27 текстур-скинов, которые подставляются по биому (снежные равнины, пустыня, саванна, тайга, джунгли, болото, океан, Незер, Энд, тёмный лес, грибные поля, бэдленды, глубокий мрак) или по имени на бирке — Wood, Cobblestone, Coal, Resin, Amethyst, Lapis, Redstone, Gold, Emerald, Diamond, Netherite. Заодно заменены ванильные текстуры голема с тремя стадиями трещин и модель со текстурой снежного голема (snow_golem.jem, snow_golem.png).
- **Область:** ванильные мобы: железный голем (модели + биомные/именные варианты) и снежный голем
- **Адресат:** vanilla — только assets/minecraft, ни одного мод-неймспейса
- **Формат:** pack_format 16 (1.20.2) при supported_formats 9–99; формат 1.21.1 (34) попадает в диапазон, но явно 1.21 не объявлен
- **Нужен формат OptiFine:** да
- **Скачать:** https://modrinth.com/resourcepack/golems-refreshed
- **Его перерисовывают:** Gigachad Villager (5)
- **Он перерисовывает:** Grays Mob Overhaul v13 (2), CMMRP_Release_1.2.v5_[1.20.6-1.21.1] (2), Fresh Animations v1.10.4 (2)
- **Вердикт:** 🟢 оставить
- **Заметки:** Ссылка сверена по Modrinth API: проект jfJzIg2G, slug golems-refreshed, владелец lukidonu, версия 2.1 с файлом golems-refreshed-v2.1.zip (у нас тот же файл, переименован). Описание пака в pack.mcmeta — только дискорд-ссылка discord.gg/eyNrN2bQG8, она же указана у автора на странице. Всё содержимое лежит в assets/minecraft/optifine/cem/** (.jem + .properties) и assets/minecraft/optifine/mob/iron_golem/** (random entity), то есть без CEM-мода работать не будет — в c:/Users/Oscar/Documents/LL8/mods есть entity_model_features-3.2.4-1.21-neoforge.jar и entity_texture_features_1.21-neoforge-7.1.jar, так что условие выполнено. Конкретный дефект в обоих .properties: у вариантов Lapis (#7), Diamond…

### 32. THICC VILLAGERS (в pack.mcmeta — «THICC. (req. EMF)») 🟢

- **Файл:** `Thicc Villagers v1.2.zip`
- **Автор:** JXRK
- **Что добавляет:** Полностью переделывает модели и текстуры жителей — все 14 профессий, 7 биомных типов, 5 уровней значков — а также детей-жителей, зомби-жителей, странствующего торговца, ведьму, железного голема и иллагеров (пиллагер, виндикатор, эвокер, иллюзионер) в женские фигуры с 5 вариантами внешности и морганием глаз. Заодно подменяет весь их звуковой набор (108 ogg-файлов) на аниме-озвучку и текстуру тотема бессмертия.
- **Область:** Ванильные мобы деревни и рейда: villager (+baby), zombie_villager (+baby), wandering_trader, witch, iron_golem (включая три текстуры трещин), illager/evoker, illusioner, pillager, vindicator, ravager (только текстура). Плюс assets/minecraft/sounds/mob/** и sounds/entity/witch/** — своя озвучка…
- **Адресат:** vanilla
- **Формат:** pack_format 46 (это 1.21.4), поле supported_formats отсутствует — 1.21.1 использует формат 34, поэтому игра пометит пак как «сделан для более новой версии».…
- **Нужен формат OptiFine:** да
- **Скачать:** https://www.planetminecraft.com/texture-pack/thicc-villagers-by-jxrk-1-14-1-20-of-v1-0/ (не подтверждена)
- **Его перерисовывают:** Betty Witch v1.0 (12), Gigachad Villager (5)
- **Он перерисовывает:** Luigi Villagers (71), Grays Mob Overhaul v13 (69), CMMRP_Release_1.2.v5_[1.20.6-1.21.1] (68)
- **Вердикт:** 🟢 оставить
- **Заметки:** URL не удалось подтвердить прямой загрузкой: PlanetMinecraft отдаёт WebFetch HTTP 403 (Cloudflare) и на слэш-версию, и без слэша. Два независимых поисковых запроса возвращают ровно эту страницу с заголовком «THICC VILLAGERS [by JXRK; 1.14-1.21] [OF] v1.2» — совпадают имя, автор JXRK (в pack.mcmeta «§dJXRK») и версия v1.2 (совпадает с именем zip). На Modrinth пака нет (поиск по API даёт 0 результатов). Поэтому urlConfidence = likely, а не verified. Требует OptiFine-функций: 11 CEM-моделей в optifine/cem/ (villager, villager_baby, zombie_villager, zombie_villager_baby, wandering_trader, witch, iron_golem, evoker, illusioner, pillager, vindicator), 13 анимаций моргания в optifine/anim/ и 20…

### 33. LLama Girls 🟢

- **Файл:** `LLama Girls.zip`
- **Автор:** Pitonixrex
- **Что добавляет:** Полностью заменяет модель и текстуры лам: обычная лама, лама торговца и слой ковра-декора получают кастомные CEM-модели 128x128 с анимациями (покачивание при ходьбе, моргание, подмигивание, злая морда при агрессии, реакция на урон) и антропоморфный «девчачий» вид. Плюс перерисованы четыре ванильные текстуры лам (brown, creamy, gray, white) и комплект ковров-попон на 16 цветов.
- **Область:** vanilla mobs — llama, trader_llama и их decor/carpet-слой; больше ничего не трогает (ни GUI, ни блоки, ни предметы)
- **Адресат:** vanilla
- **Формат:** pack_format 15 (это 1.20–1.20.1). 1.21 НЕ объявлен и supported_formats нет — в 1.21.1 грузится с предупреждением «сделан для старой версии»
- **Нужен формат OptiFine:** да
- **Скачать:** https://www.curseforge.com/minecraft/texture-packs/llama-girls
- **Его перерисовывают:** Betty Witch v1.0 (1)
- **Он перерисовывает:** Grays Mob Overhaul v13 (25), CMMRP_Release_1.2.v5_[1.20.6-1.21.1] (8), Fresh Animations v1.10.4 (8)
- **Вердикт:** 🟢 оставить
- **Заметки:** Ссылка проверена фетчем: страница CurseForge озаглавлена «LLama Girls», автор Pitonixrex — совпадает с pack.mcmeta («By: Pitonixrex (use optifine or EMF & ETF)»). Модели: assets/minecraft/optifine/cem/{llama,llama_decor,trader_llama,trader_llama_decor}.jem; llama.jem/llama_decor.jem тянут ванильные пути текстур (пак их и переопределяет), trader_llama*.jem указывают на cem/trader_llama.png. EMF 3.2.4 и ETF 7.1 в mods/ есть, так что модели заработают. ВАЖНО: текстуры попоны лежат в assets/minecraft/textures/entity/equipment/llama_body/*.png — это путь 1.21.4+; в 1.21.1 игра читает entity/llama/decor/*.png, поэтому на 1.21.1 ковры останутся ванильными при изменённой модели decor — вероятен…

### 34. My Monster Girls 🟢

- **Файл:** `My Monster Girls.zip`
- **Автор:** ozzyv_
- **Что добавляет:** Заменяет модели четырёх мобов на женские: зомби, кадавра (husk), утопленника (вместе с внешним слоем drowned_outer) и эндермена — через CEM .jem с текстурами 128x128 в скрытой папке assets/minecraft/textures/entity/.ozzyv/thicc/. Вдобавок подменяет 68 ванильных .ogg — все реплики, урон, смерть и шаги этих мобов на женскую озвучку.
- **Область:** Ванильные враждебные мобы: zombie, husk, drowned (+ drowned_outer), enderman — модели, текстуры и звуки. Блоки, предметы, GUI и мир не трогает.
- **Адресат:** vanilla — только assets/minecraft/, модовых namespace нет
- **Формат:** pack_format 34, supported_formats не задан. 34 = 1.21–1.21.1, то есть заявлена поддержка ровно этой версии.
- **Нужен формат OptiFine:** да
- **Скачать:** https://modrinth.com/resourcepack/my-monster-girls
- **Его перерисовывают:** Jax Enderman (1)
- **Он перерисовывает:** Grays Mob Overhaul v13 (4), Fresh Animations v1.10.4 (4), Blues Better Zombies v0.13 (3)
- **Вердикт:** 🟢 оставить
- **Заметки:** Визуальная часть держится целиком на CEM: ни одной текстуры по ванильному пути entity/zombie/zombie.png в паке нет, все png лежат в .ozzyv/thicc/ и подтягиваются только строкой "texture" внутри .jem. Без entity_model_features (в LL8 стоит, 3.2.4) не изменится вообще ничего из моделей — а вот звуки заработают в любом случае, они по ванильным путям. Оговорка: в паке есть эмиссивные слои zombie_e.png, drowned_e.png, enderman_e.png, но файла assets/minecraft/optifine/emissive.properties нет — то есть суффикс _e ничем не объявлен и свечение, скорее всего, не включится (сравните с паком Azus, где такой файл есть). Ссылка подтверждена двумя способами: Modrinth-проект my-monster-girls указывает…

### 35. Neco-Arc Cats 🟢

- **Файл:** `Neco-Arc Cats.zip`
- **Автор:** Thetheri (Cult of the pixel)
- **Что добавляет:** Превращает всех кошек и оцелота в Neco-Arc: заменены все 11 ванильных окрасов кошки (tabby, black, red, siamese, british_shorthair, calico, persian, ragdoll, white, jellie, all_black), текстура ошейника и оцелота, плюс CEM-модели cat.jem и ocelot.jem. Заодно подменены 30 ванильных звуков кошки и оцелота (мяуканье, мурлыканье, шипение, попрошайничество, еда, удары, звуки бродячего оцелота) и переименованы яйца призыва в en_us и ru_ru.
- **Область:** ванильные мобы: кошка и оцелот — текстуры, CEM-модели, звуки и названия яиц призыва
- **Адресат:** vanilla — только assets/minecraft, мод-неймспейсов нет
- **Формат:** pack_format 15 (1.20/1.20.1) при supported_formats 15–100; 1.21.1 (34) попадает в диапазон, явной отметки 1.21 нет
- **Нужен формат OptiFine:** да
- **Скачать:** https://modrinth.com/resourcepack/neco-arc-cats
- **Его перерисовывают:** CowGirl v1 (2)
- **Он перерисовывает:** Grays Mob Overhaul v13 (15), CMMRP_Release_1.2.v5_[1.20.6-1.21.1] (15), Fresh Animations v1.10.4 (14)
- **Вердикт:** 🟢 оставить
- **Заметки:** Ссылка сверена через Modrinth API: slug neco-arc-cats, автор Thetheri, описание «Replaces all cats with Neco-Arc variations», поддержка 1.21–1.21.8 — автор точно совпадает с pack.mcmeta («§ by Thetheri § Cult of the pixel §») и credits.txt (t.me/cotp_b_the). ВНИМАНИЕ на путаницу: на PlanetMinecraft есть другой пак «[BABIES!] Neco Arc Cats» авторства fandi/veryfandi (на Modrinth — slug fandi-neco-arc-cats) — это НЕ этот архив, ссылку на PMC давать нельзя. Модели лежат в assets/minecraft/optifine/cem/, и вложенный readme.txt прямо предупреждает «This resourcepack needs Optifine or CEM»; entity_model_features-3.2.4 и entity_texture_features-7.1 в модпаке есть, так что модели заработают.…

### 36. Breeze Girl 🟢

- **Файл:** `Breeze Girl v1.0.zip`
- **Автор:** Pitonixrex
- **Что добавляет:** Полностью переделывает бриза (breeze) в антропоморфную девушку-персонажа: собственная Blockbench-модель assets/minecraft/optifine/cem/breeze.jem с текстурой 64x64 и анимациями (моргание "parpadeo" по синусоиде от time и поворот глаз, привязанный к hurt_time). Отдельно переделан вихрь атаки — своя модель breeze_wind.jem и текстура 128x128, положенная и в CEM-папку, и в ванильный путь textures/entity/breeze/breeze_wind.png.
- **Область:** vanilla: один моб — Breeze (сам моб + снаряд/вихрь breeze_wind). Больше ничего.
- **Адресат:** vanilla
- **Формат:** pack_format 15 (это 1.20.1), supported_formats отсутствует — 1.21 НЕ заявлена. В 1.21.1 пак загрузится, но игра пометит его как "сделан для старой версии"; на…
- **Нужен формат OptiFine:** да
- **Скачать:** https://www.curseforge.com/minecraft/texture-packs/breeze-girl
- **Его перерисовывают:** Betty Witch v1.0 (1)
- **Он перерисовывает:** Grays Mob Overhaul v13 (1), CMMRP_Release_1.2.v5_[1.20.6-1.21.1] (1)
- **Вердикт:** 🟢 оставить
- **Заметки:** Ссылка проверена загрузкой страницы: заголовок "Breeze Girl", владелец Pitonixrex, описание "This texture pack gives the Breeze a more feminine look", в списке файлов присутствует ровно "Breeze Girl v1.0.zip" (25 апр 2025) — совпадает с именем файла на диске; есть также более новая v1.1. Зеркало на Modrinth: modrinth.com/resourcepack/breeze-girl. 4 из 6 ассетов лежат в assets/minecraft/optifine/**, поэтому без EMF/ETF модель не подменится. В паке есть assets/minecraft/optifine/emissive.properties с suffix.emissive=_e, но ни одной текстуры с суффиксом _e в архиве нет — правило вхолостую. ВАЖНО: ванильной текстуры textures/entity/breeze/breeze.png в паке нет — сам бриз меняется ТОЛЬКО через…

### 37. Betty Witch 🟢

- **Файл:** `Betty Witch v1.0.zip`
- **Автор:** Pitonixrex (в pack.mcmeta: "By: Pitonixrex (use EMF & ETF or optifine)"; на Modrinth проект издан под именем CursedEntitiesModels)
- **Что добавляет:** Заменяет ванильную ведьму на анимированную девушку-ведьму: CEM-модель assets/minecraft/optifine/cem/witch.jem с процедурными анимациями (моргание, подмигивание, качание корпуса от limb_swing, реакция на hurt_time и на здоровье ниже 50% и 10%), своя witch.png (64x128) и светящийся слой witch_e.png через emissive.properties (suffix.emissive=_e). Дополнительно кладёт 11 своих звуков ведьмы в assets/minecraft/sounds/entity/witch/ (ambient1-5, hurt1-3, death1-3).
- **Область:** ванильный моб witch (модель + текстура + emissive) и звуки ведьмы; блоков, GUI, предметов не трогает
- **Адресат:** vanilla
- **Формат:** pack_format 32 (это 1.20.5-1.20.6), поля supported_formats нет — 1.21 явно НЕ заявлена, в 1.21.1 будет плашка «сделан для другой версии», но CEM/звуки грузятся…
- **Нужен формат OptiFine:** да
- **Скачать:** https://modrinth.com/resourcepack/betty-witch
- **Он перерисовывает:** Thicc Villagers v1.2 (12), Grays Mob Overhaul v13 (2), CMMRP_Release_1.2.v5_[1.20.6-1.21.1] (2)
- **Вердикт:** 🟢 оставить
- **Заметки:** Ссылка подтверждена: на странице версии https://modrinth.com/resourcepack/betty-witch/version/v1.0 файл называется ровно «Betty Witch v1.0.zip» — совпадает с зипом на диске; заявлены 1.16.x-1.21.10. Есть также страница на CurseForge (curseforge.com/minecraft/texture-packs/betty-witch) и на PlanetMinecraft у автора pitonixrex. EMF (entity_model_features-3.2.4) и ETF (entity_texture_features_1.21-neoforge-7.1) в c:/Users/Oscar/Documents/LL8/mods присутствуют, так что пак заработает. ВАЖНЫЙ КОНФЛИКТ: Fresh Animations v1.10.4 в этом же наборе тоже содержит assets/minecraft/optifine/cem/witch.jem — выиграет тот пак, что выше в списке ресурспаков; одновременно обе ведьмы не получатся. sounds.json…

### 38. Mugget's Standing Cow 🟢

- **Файл:** `Muggets Standing Cow v1.0.zip`
- **Автор:** Mugget
- **Что добавляет:** Ставит корову на задние ноги: одна CEM-модель cow.jem разворачивает тело вертикально (поворот body на -90° с компенсацией подмоделей), голова и рога переезжают наверх. Идёт с одной перерисованной текстурой коровы 64x32; поведение, доение и разведение не меняются.
- **Область:** vanilla mob — только корова (модель + текстура)
- **Адресат:** vanilla
- **Формат:** pack_format 34 — это ровно 1.21/1.21.1, версия объявлена корректно
- **Нужен формат OptiFine:** да
- **Скачать:** https://modrinth.com/resourcepack/standing-cow
- **Его перерисовывают:** CowGirl v1 (1)
- **Он перерисовывает:** Grays Mob Overhaul v13 (1), CMMRP_Release_1.2.v5_[1.20.6-1.21.1] (1), Fresh Animations v1.10.4 (1)
- **Вердикт:** 🟢 оставить
- **Заметки:** Проверено через Modrinth API: проект standing-cow, название «Mugget's Standing Cow», описание «Adds the most requested feature for Minecraft: Standing cows.»; в списке версий есть v1.0 с игровыми версиями 1.21/1.21.1 и файлом «Standing Cow v1.0.zip» — это ровно наш пак (локальное имя «Muggets Standing Cow v1.0.zip», pack.mcmeta «Standing Cow (by Mugget)»). Модель лежит в assets/minecraft/optifine/cem/cow.jem и без EMF не применится — сама текстура коровы при этом наложится и на ванильную модель. EMF 3.2.4 и ETF 7.1 в mods/ присутствуют. Архив собран на macOS: внутри мусор __MACOSX/ и .DS_Store в каждой папке — на работу не влияет, но захламляет.

### 39. CowGirl 🟢

- **Файл:** `CowGirl v1.zip`
- **Автор:** Poolb (Owner) и _kotisimo (Member); pack.mcmeta: «By Poolb & Kotisimo»
- **Что добавляет:** Полностью перемоделирует ванильную корову в антропоморфную девушку-корову: CEM-модель cow.jem (голова, рога, волосы, тело заново) плюс текстура assets/minecraft/textures/entity/cow/cowgirl.png размером 128×128. Дополнительно переименовывает саму корову и её яйцо призыва в en_us и ru_ru — в русском это «Пастушка» и «Яйцо призыва Пастушки».
- **Область:** vanilla mobs — корова (модель + текстура) и строки локализации entity.minecraft.cow / item.minecraft.cow_spawn_egg
- **Адресат:** vanilla
- **Формат:** pack_format 6 (1.16.x), но объявлен supported_formats min_inclusive 6 / max_inclusive 9999 — 1.21.1 покрыт, предупреждения не будет. На Modrinth game_versions…
- **Нужен формат OptiFine:** да
- **Скачать:** https://modrinth.com/resourcepack/cowgirl
- **Он перерисовывает:** Neco-Arc Cats (2), Cherry_Creeper_remake(3.0) (2), 3D Beetroots to Tomatoes (1)
- **Вердикт:** 🟢 оставить
- **Заметки:** Модель лежит в assets/minecraft/optifine/cem/cow.jem — без OptiFine или EMF пак покажет только плоскую текстуру на ванильной модели коровы. EMF и ETF в сборке присутствуют (entity_model_features-3.2.4-1.21-neoforge.jar, entity_texture_features_1.21-neoforge-7.1.jar). Проверено: api.modrinth.com/v2/project/cowgirl → id 6p963qHl, title «CowGirl», description «Replaces vanilla cows with cowgirls (female cow)»; /members → Poolb (Owner) + _kotisimo (Member), что дословно совпадает с pack.mcmeta «By Poolb & Kotisimo» и с credit «Made Poolb & Kotisimo» внутри cow.jem; единственная версия v1, файл Cowgirl_v1.zip. Отдельно отметить: lang-переопределение меняет имя коровы во всём интерфейсе (чат о…

### 40. 'Thicc' Phantom - Spartan ReTexture (в pack.mcmeta: "Thicc phantom [Optifine] MAKE BY Huge Cat and edited by Spartan on PMC!") 🟢

- **Файл:** `Thicc Phantom.zip`
- **Автор:** SpartanHarv (правка модели HugeCat)
- **Что добавляет:** Меняет фантома: своя Blockbench-модель assets/minecraft/optifine/cem/phantom.jem (textureSize 128x128, тело перестроено в фигуристый силуэт) плюс текстура высокого разрешения 512x512. Текстуры продублированы и в ванильные пути textures/entity/phantom.png и phantom_eyes.png, поэтому раскраска применится даже без EMF, а вот новая форма — только с ним.
- **Область:** vanilla: один моб — Phantom (тело + светящиеся глаза phantom_eyes). Ни блоков, ни GUI, ни предметов.
- **Адресат:** vanilla
- **Формат:** pack_format 9 (это 1.19.x), supported_formats отсутствует — 1.21 НЕ заявлена. В 1.21.1 загрузится с предупреждением "сделан для старой версии"; на CEM/текстуры…
- **Нужен формат OptiFine:** да
- **Скачать:** https://www.planetminecraft.com/texture-pack/thicc-phantom-spartan-retexture/
- **Он перерисовывает:** Grays Mob Overhaul v13 (3), CMMRP_Release_1.2.v5_[1.20.6-1.21.1] (3), Torturable Healthbars 2.4.3 (2)
- **Вердикт:** 🟢 оставить
- **Заметки:** Страница загружена и проверена: <title> = "'Thicc' Phantom - Spartan ReTexture Minecraft Texture Pack", автор SpartanHarv, на странице многократно упомянут HugeCat как автор исходной модели — ровно то, что написано в pack.mcmeta этого архива. Это НЕ страница planetminecraft.com/texture-pack/thicc-phantom-optifine/ (то оригинал HugeCat, 64x, 1.19); данный файл — правка Spartan'а, поэтому дана именно она. Оба .png лежат и в optifine/cem/, и в ванильных путях, так что деградация без EMF мягкая: текстура применится, модель останется ванильной. EMF (entity_model_features-3.2.4) и ETF (entity_texture_features 7.1) в c:/Users/Oscar/Documents/LL8/mods есть — пак заработает полностью. Разрешение…

### 41. jax 🟢

- **Файл:** `Jax Enderman.zip`
- **Автор:** kingsar
- **Что добавляет:** Превращает эндермена в Джакса (фиолетовый кролик из The Amazing Digital Circus): кастомная CEM-модель enderman.jem со своей текстурой 128x128 — длинные уши вместо головы, полосатый торс, руки в два сегмента. Дополнительно перерисованы светящиеся глаза эндермена (enderman_eyes.png) и лежат четыре доп-текстуры (base, cage, eye, wind) для частей модели.
- **Область:** vanilla mob — только эндермен (модель, текстура, слой глаз) плюс папка звуков эндермена
- **Адресат:** vanilla
- **Формат:** pack_format 7 (это 1.17). 1.21 НЕ объявлен, supported_formats отсутствует — грузится в 1.21.1 только с предупреждением о старом формате
- **Нужен формат OptiFine:** да
- **Скачать:** — ссылка не найдена
- **Он перерисовывает:** Grays Mob Overhaul v13 (2), CMMRP_Release_1.2.v5_[1.20.6-1.21.1] (2), Fresh Animations v1.10.4 (2)
- **Вердикт:** 🟢 оставить
- **Заметки:** Ссылку подтвердить не удалось: PlanetMinecraft отдаёт 403 на фетч, а поиск по Modrinth/CurseForge по «jax enderman», «kingsar», «digital circus» даёт только чужие паки (Jax Rabbits — кролики, Jax of Totem — тотем, NOTLIVES's Jax Plushie, Digital Circus Plushies) — ни один не является этим паком. Ставить наугад не стал. Содержимое опознал по картинкам: pack.png и cem/enderman.png — фиолетовый кролик с длинными ушами на красно-чёрном шахматном фоне, то есть Джакс из TADC. Основная часть (enderman.jem + enderman.png в assets/minecraft/optifine/cem/) требует EMF/ETF — они в mods/ есть (entity_model_features 3.2.4, entity_texture_features 7.1). Глаза (textures/entity/enderman/enderman_eyes.png)…

### 42. Gigachad Villager 🟢

- **Файл:** `Gigachad Villager.zip`
- **Автор:** Super_Jose
- **Что добавляет:** Превращает железного голема в "гигачада"-жителя из мема: своя Blockbench-модель assets/minecraft/optifine/cem/iron_golem.jem (textureSize 128x128, тело полностью перестроено) и телесного цвета текстура 128x128 вместо железной. Файлы повреждений iron_golem_crackiness_low/medium/high.png переделаны из трещин в стадии злости — по мере получения урона голем поднимает бровь и всё больше свирепеет.
- **Область:** vanilla: один моб — Iron Golem (модель + основная текстура + три оверлея повреждений). Ничего больше не трогает.
- **Адресат:** vanilla
- **Формат:** pack_format 16, supported_formats 16–256 — 1.21 попадает в диапазон, поддержка заявлена.
- **Нужен формат OptiFine:** да
- **Скачать:** https://www.curseforge.com/minecraft/texture-packs/gigachad-villager
- **Он перерисовывает:** Thicc Villagers v1.2 (5), Golems Refreshed v2.1 (5), Grays Mob Overhaul v13 (5)
- **Вердикт:** 🟢 оставить
- **Заметки:** Страница проверена загрузкой: автор Super_Jose (совпадает с "By: Super_Jose" в pack.mcmeta), описание — железный голем становится "villager chad from this meme" (мем SepthGear), заявлено "When you hit him enough he will raise his eyebrow, then he'll be mad and before dying he'll be extreamly mad" — это ровно то, что видно в трёх файлах crackiness. Версии 1.20–1.21.3, требуется OptiFine. Зеркало на Modrinth: modrinth.com/project/1kIX9z6L (там загружено под аккаунтом CursedEntitiesModels). Несмотря на название "Villager", ассетов жителя (textures/entity/villager/**) в архиве НЕТ ни одного — меняется только железный голем. В optifine/cem лежит только .jem без своей текстуры: модель ссылается…
