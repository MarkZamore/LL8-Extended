# Ресурспаки сборки

Сверху вниз, как их видно в игре: №1 рисуется поверх всех остальных, последний
лежит в самом низу и служит подложкой. Где два пака трогают один и тот же файл,
побеждает тот, что выше в этой таблице.

Правило порядка одно: чем шире пак, тем ниже он лежит. Поэтому Gray's Mob
Overhaul, переделывающий всех ванильных мобов, стоит почти в самом низу таблицы
и отдаёт наверх ровно тех мобов, для которых выбран отдельный пак; всё
остальное рисует он. Ни один маленький пак не перекрыт: из 22 выбранных у 21 не
скрыто ничего, и только Gray's отдаёт 127 своих ассетов из 1481.

Порядок задаётся файлом `launcher/resourcepacks-default.txt` — там он записан в
обратную сторону, снизу вверх, потому что игра читает его так. Лаунчер этот
порядок держит: каждый запуск возвращает паки сборки на свои места и включает их
обратно. Паки, которые игрок добавил сам, не трогаются никогда.

| № | Пак | Что добавляет | Скачать |
|---|-----|---------------|---------|
| 1 | **Bad Dream Death** | Заменяет один-единственный звук — смерть игрока (entity.player.death) — на резкий вдох, будто «это был просто плохой сон». Никакой графики в паке… | [modrinth.com](https://modrinth.com/resourcepack/bad-dream-death) |
| 2 | **Vignette Removed (файлы автор называет "No Vignette")** | Подменяет единственную текстуру assets/minecraft/textures/misc/vignette.png на полностью непрозрачный чёрный квадрат 256×256, из-за чего затемнение… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/vignette-removed) |
| 3 | **Authentic Shadows** | Заменяет ровно одну текстуру: круглую тень под всеми сущностями (assets/minecraft/textures/misc/shadow.png), уменьшая её до 16x16 с жёстким… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/authentic-shadows) |
| 4 | **Sun & Moon Fusion** | Меняет солнце и луну на чистые мультяшные: sun.png и moon_phases.png, вместе 1,5 КБ на две текстуры — весь пак. Стоит выше обоих других паков светил и перерисовывает ровно те же два файла, так что в игре видно только его… | [modrinth.com](https://modrinth.com/resourcepack/sun-moon-fusion) |
| 5 | **Lilac Jackson** | Перерисовывает ровно один блок — сирень: lilac_top.png и lilac_bottom.png (обе 512×512) собраны из фотографий лица Майкла Джексона, затонированных в… | [modrinth.com](https://modrinth.com/resourcepack/lilac-jackson) |
| 6 | **Totem of :GAGAGA: 7tv emote** | Заменяет тотем бессмертия на 7tv-эмоцию :GAGAGA: — своя текстура assets/minecraft/textures/item/gagaga.png и переписанная модель… | [modrinth.com](https://modrinth.com/resourcepack/gagaga) |
| 7 | **Gigachad Villager** | Превращает железного голема в "гигачада"-жителя из мема: своя Blockbench-модель assets/minecraft/optifine/cem/iron_golem.jem (textureSize 128x128,… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/gigachad-villager) |
| 8 | **Mugget's Standing Cow** | Ставит корову на задние ноги: одна CEM-модель cow.jem разворачивает тело вертикально (поворот body на -90° с компенсацией подмоделей), голова и рога… | [modrinth.com](https://modrinth.com/resourcepack/standing-cow) |
| 9 | **'Thicc' Phantom - Spartan ReTexture (в pack.mcmeta: "Thicc phantom [Optifine] MAKE BY Huge Cat and edited by Spartan on PMC!")** | Меняет фантома: своя Blockbench-модель assets/minecraft/optifine/cem/phantom.jem (textureSize 128x128, тело перестроено в фигуристый силуэт) плюс… | [planetminecraft.com](https://www.planetminecraft.com/texture-pack/thicc-phantom-spartan-retexture/) |
| 10 | **Breeze Girl** | Полностью переделывает бриза (breeze) в антропоморфную девушку-персонажа: собственная Blockbench-модель assets/minecraft/optifine/cem/breeze.jem с… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/breeze-girl) |
| 11 | **LET SKELETONS HAVE HANDS (67 edition)** | Через CEM-модель skeleton.jem даёт скелетам настоящие кисти с отдельными пальцами вместо культяпок. Скелет, переименованный биркой в «67», «six… | [modrinth.com](https://modrinth.com/resourcepack/let-skeletons-have-hands-(67-edition)) |
| 12 | **Cherry-Creeper (remake) — With Animation** | Делает из крипера вишнёвое деревце: CEM-модель optifine/cem/creeper.jem с подмоделями кроны (body_cherry, body_cherry_rotation) и анимацией, текстура… | [planetminecraft.com](https://www.planetminecraft.com/texture-pack/cherry-creeper-remake-6321265/)&nbsp;⚠️ |
| 13 | **Betty Witch** | Заменяет ванильную ведьму на анимированную девушку-ведьму: CEM-модель assets/minecraft/optifine/cem/witch.jem с процедурными анимациями (моргание,… | [modrinth.com](https://modrinth.com/resourcepack/betty-witch) |
| 14 | **LLama Girls** | Полностью заменяет модель и текстуры лам: обычная лама, лама торговца и слой ковра-декора получают кастомные CEM-модели 128x128 с анимациями… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/llama-girls) |
| 15 | **Neco-Arc Cats** | Превращает всех кошек и оцелота в Neco-Arc: заменены все 11 ванильных окрасов кошки (tabby, black, red, siamese, british_shorthair, calico, persian,… | [modrinth.com](https://modrinth.com/resourcepack/neco-arc-cats) |
| 16 | **Luigi Villagers** *(можно заменить, см. ниже)* | Перекрашивает всех жителей в Луиджи, а странствующего торговца — в Марио: заменены базовая villager.png, все 13 текстур профессий, 5 значков уровня… | [modrinth.com](https://modrinth.com/resourcepack/luigi-villagers) |
| 17 | **My Monster Girls** | Заменяет модели четырёх мобов на женские: зомби, кадавра (husk), утопленника (вместе с внешним слоем drowned_outer) и эндермена — через CEM .jem с… | [modrinth.com](https://modrinth.com/resourcepack/my-monster-girls) |
| 18 | **Baby Animals Remastered** | Даёт детёнышам собственные модели и текстуры вместо ванильных «большеголовых»: отдельные CEM-модели и png для поросёнка (piglet.png), ягнёнка… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/baby-animals-remastered) |
| 19 | **3D Reinforced Armor** | Заменяет плоские слои брони объёмными CEM-моделями: 26 .jem-файлов на внутренний и внешний слой для игрока (обычная и тонкая модель), стойки для… | [modrinth.com](https://modrinth.com/resourcepack/3d-reinforced-armor) |
| 20 | **3D Items-Vanillaism** | Переводит 176 ванильных предметов из плоских спрайтов в объёмные модели: еду и напитки, слитки/самородки, сырые руды, все 16 красителей, зелья,… | [modrinth.com](https://modrinth.com/resourcepack/3d-items-vanillaism) |
| 21 | **Gray's Mob Overhaul** | Переделывает модели и текстуры почти всех ванильных мобов: 117 CEM-моделей (.jem) и ~1038 файлов случайных вариантов — больше всего у кошек (262),… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/grays-mob-overhaul) |
| 22 | **Stay True (файл релиза «Stay True 1.21»)** | Аккуратный ремастер ванильных текстур в исходной палитре: 1104 текстуры блоков (467 семейств) и 140 blockstates с весовыми случайными вариантами —… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/stay-true) |

## Лежит в сборке, но не выбран

### THICC VILLAGERS (в pack.mcmeta — «THICC. (req. EMF)»)

Файл: `Thicc Villagers v1.2.zip`. Пак едет в сборке, но в выборе снят. Он занимает то же место в порядке, что и «Luigi Villagers», и включается одной галочкой в экране ресурспаков — включённый, он заменяет его.

Полностью переделывает модели и текстуры жителей — все 14 профессий, 7 биомных типов, 5 уровней значков — а также детей-жителей, зомби-жителей,…

Скачать: [planetminecraft.com](https://www.planetminecraft.com/texture-pack/thicc-villagers-by-jxrk-1-14-1-20-of-v1-0/)&nbsp;⚠️
