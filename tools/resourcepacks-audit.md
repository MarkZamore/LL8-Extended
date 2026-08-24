# Ресурспаки сборки

Сверху вниз, как их видно в игре: №1 рисуется поверх всех остальных, последний лежит в самом низу и служит подложкой. Где два пака трогают один и тот же файл, побеждает тот, что выше в этой таблице.

Правило порядка одно: чем шире пак, тем ниже он лежит. Поэтому Gray's Mob Overhaul, переделывающий всех ванильных мобов, стоит почти в самом низу и отдаёт наверх ровно тех мобов, для которых выбран отдельный пак; всё остальное рисует он.

**Набор закрыт.** Двадцать паков лежат в `config/locked-resourcepacks`, объявленной обязательной папкой в `config/global_packs.toml`. Мод Global Packs выдаёт таким пакам `PackSelectionConfig(required, TOP, fixedPosition)` — в экране ресурспаков у них нет ни галочки, чтобы снять, ни ручки, чтобы перетащить. Порядок задаёт `launcher/resourcepacks-default.txt`, и лаунчер возвращает его каждый запуск.

Исключение одно и помечено в таблице: жители. Luigi включён, THICC лежит рядом выключенным, оба в одном месте порядка, переключаются одной галочкой.

| № | Пак | Что добавляет | Скачать |
|---|-----|---------------|---------|
| 1 | **Bad Dream Death** | Заменяет один-единственный звук — смерть игрока (entity.player.death) — на резкий вдох, будто «это был просто плохой сон». Никакой графики в паке… | [modrinth.com](https://modrinth.com/resourcepack/bad-dream-death) | |
| 2 | **Vignette Removed (файлы автор называет "No Vignette")** | Подменяет единственную текстуру assets/minecraft/textures/misc/vignette.png на полностью непрозрачный чёрный квадрат 256×256, из-за чего затемнение… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/vignette-removed) | |
| 3 | **Sun & Moon Fusion** | Меняет солнце и луну на чистые мультяшные: sun.png и moon_phases.png, вместе 1,5 КБ на две текстуры — весь пак. Стоит выше обоих других паков светил и перерисовывает ровно те же два файла, так что в игре видно только его… | [modrinth.com](https://modrinth.com/resourcepack/sun-moon-fusion) | |
| 4 | **Lilac Jackson** | Перерисовывает ровно один блок — сирень: lilac_top.png и lilac_bottom.png (обе 512×512) собраны из фотографий лица Майкла Джексона, затонированных в… | [modrinth.com](https://modrinth.com/resourcepack/lilac-jackson) | |
| 5 | **Totem of :GAGAGA: 7tv emote** | Заменяет тотем бессмертия на 7tv-эмоцию :GAGAGA: — своя текстура assets/minecraft/textures/item/gagaga.png и переписанная модель… | [modrinth.com](https://modrinth.com/resourcepack/gagaga) | |
| 6 | **Gigachad Villager** | Превращает железного голема в "гигачада"-жителя из мема: своя Blockbench-модель assets/minecraft/optifine/cem/iron_golem.jem (textureSize 128x128,… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/gigachad-villager) | |
| 7 | **Mugget's Standing Cow** | Ставит корову на задние ноги: одна CEM-модель cow.jem разворачивает тело вертикально (поворот body на -90° с компенсацией подмоделей), голова и рога… | [modrinth.com](https://modrinth.com/resourcepack/standing-cow) | |
| 8 | **'Thicc' Phantom - Spartan ReTexture (в pack.mcmeta: "Thicc phantom [Optifine] MAKE BY Huge Cat and edited by Spartan on PMC!")** | Меняет фантома: своя Blockbench-модель assets/minecraft/optifine/cem/phantom.jem (textureSize 128x128, тело перестроено в фигуристый силуэт) плюс… | [planetminecraft.com](https://www.planetminecraft.com/texture-pack/thicc-phantom-spartan-retexture/) | |
| 9 | **Breeze Girl** | Полностью переделывает бриза (breeze) в антропоморфную девушку-персонажа: собственная Blockbench-модель assets/minecraft/optifine/cem/breeze.jem с… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/breeze-girl) | |
| 10 | **LET SKELETONS HAVE HANDS (67 edition)** | Через CEM-модель skeleton.jem даёт скелетам настоящие кисти с отдельными пальцами вместо культяпок. Скелет, переименованный биркой в «67», «six… | [modrinth.com](https://modrinth.com/resourcepack/let-skeletons-have-hands-(67-edition)) | |
| 11 | **Cherry-Creeper (remake) — With Animation** | Делает из крипера вишнёвое деревце: CEM-модель optifine/cem/creeper.jem с подмоделями кроны (body_cherry, body_cherry_rotation) и анимацией, текстура… | [planetminecraft.com](https://www.planetminecraft.com/texture-pack/cherry-creeper-remake-6321265/)&nbsp;⚠️ | |
| 12 | **Betty Witch** | Заменяет ванильную ведьму на анимированную девушку-ведьму: CEM-модель assets/minecraft/optifine/cem/witch.jem с процедурными анимациями (моргание,… | [modrinth.com](https://modrinth.com/resourcepack/betty-witch) | |
| 13 | **LLama Girls** | Полностью заменяет модель и текстуры лам: обычная лама, лама торговца и слой ковра-декора получают кастомные CEM-модели 128x128 с анимациями… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/llama-girls) | |
| 14 | **Neco-Arc Cats** | Превращает всех кошек и оцелота в Neco-Arc: заменены все 11 ванильных окрасов кошки (tabby, black, red, siamese, british_shorthair, calico, persian,… | [modrinth.com](https://modrinth.com/resourcepack/neco-arc-cats) | |
| 15 | **Luigi Villagers** *(можно заменить, см. ниже)* | Перекрашивает всех жителей в Луиджи, а странствующего торговца — в Марио: заменены базовая villager.png, все 13 текстур профессий, 5 значков уровня… | [modrinth.com](https://modrinth.com/resourcepack/luigi-villagers) | |
| 16 | **My Monster Girls** | Заменяет модели четырёх мобов на женские: зомби, кадавра (husk), утопленника (вместе с внешним слоем drowned_outer) и эндермена — через CEM .jem с… | [modrinth.com](https://modrinth.com/resourcepack/my-monster-girls) | |
| 17 | **Baby Animals Remastered** | Даёт детёнышам собственные модели и текстуры вместо ванильных «большеголовых»: отдельные CEM-модели и png для поросёнка (piglet.png), ягнёнка… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/baby-animals-remastered) | |
| 18 | **3D Reinforced Armor** | Заменяет плоские слои брони объёмными CEM-моделями: 26 .jem-файлов на внутренний и внешний слой для игрока (обычная и тонкая модель), стойки для… | [modrinth.com](https://modrinth.com/resourcepack/3d-reinforced-armor) | |
| 19 | **3D Items-Vanillaism** | Переводит 176 ванильных предметов из плоских спрайтов в объёмные модели: еду и напитки, слитки/самородки, сырые руды, все 16 красителей, зелья,… | [modrinth.com](https://modrinth.com/resourcepack/3d-items-vanillaism) | |
| 20 | **Gray's Mob Overhaul** | Переделывает модели и текстуры почти всех ванильных мобов: 117 CEM-моделей (.jem) и ~1038 файлов случайных вариантов — больше всего у кошек (262),… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/grays-mob-overhaul) | |
| 21 | **Stay True (файл релиза «Stay True 1.21»)** | Аккуратный ремастер ванильных текстур в исходной палитре: 1104 текстуры блоков (467 семейств) и 140 blockstates с весовыми случайными вариантами —… | [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/stay-true) | |

## Лежит в сборке, но выключен

### THICC VILLAGERS (в pack.mcmeta — «THICC. (req. EMF)»)

Файл: `Thicc Villagers v1.2.zip`. Занимает то же место в порядке, что и «Luigi Villagers», и включается одной галочкой — включённый, он его заменяет. Это единственные два пака сборки, которые игрок может трогать.

Полностью переделывает модели и текстуры жителей — все 14 профессий, 7 биомных типов, 5 уровней значков — а также детей-жителей, зомби-жителей,…

Скачать: [planetminecraft.com](https://www.planetminecraft.com/texture-pack/thicc-villagers-by-jxrk-1-14-1-20-of-v1-0/)&nbsp;⚠️

## Приезжает отдельно

`config/paxi/resourcepacks` — вторая обязательная папка, тем же механизмом и так же неотключаемая. Эти паки в порядок выше не входят: ни один пак сборки не трогает то, что рисуют они, так что их место в стопке ни на что не влияет.

- **Authentic Shadows** (`Authentic_Shadows_1.21+.zip`) — Заменяет ровно одну текстуру: круглую тень под всеми сущностями (assets/minecraft/textures/misc/shadow.png), уменьшая её до 16x16 с жёстким… [curseforge.com](https://www.curseforge.com/minecraft/texture-packs/authentic-shadows) |
- `EclecticTrove-noconfig-1.20.2-1.3.0.zip`
- `EmbellishedStone-1.19-1.0.0.zip`
- `From-The-Fog-1.21-1.21.1-v1.9.4-Data-Resource-Pack.zip`
- `Pretty X Smart Pipez.zip`
- `The Brazilian Project [1.21.1-1.3.0].zip`
- `waystones_1.21.1.zip`
