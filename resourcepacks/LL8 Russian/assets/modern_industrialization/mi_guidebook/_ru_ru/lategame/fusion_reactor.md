---
navigation:
  title: "СИНТЕЗЗЗ"
  icon: "modern_industrialization:fusion_reactor"
  position: 302
  parent: modern_industrialization:endgame.md
item_ids:
  - modern_industrialization:fusion_reactor
  - modern_industrialization:plasma_turbine
---

# СИНТЕЗЗЗ

## Термоядерный реактор

<GameScene zoom="1" interactive={true} fullWidth={true}>
    <MultiblockShape controller="fusion_reactor" />
</GameScene>

Термоядерный реактор — это предельный источник энергии! Он может объединять дейтерий, тритий и/или гелий-3 в гелиевую плазму — самое мощное топливо в игре! Однако для воспламенения реакции требуется большое количество энергии.

<Recipe id="modern_industrialization:electric_age/machine/fusion_reactor_asbl" />

## Плазменная турбина

<GameScene zoom="2" interactive={true} fullWidth={true}>
    <MultiblockShape controller="plasma_turbine" />
</GameScene>

Плазменная турбина может преобразовывать гелиевую плазму в EU со скоростью 100 кEU за миллибакет. Её максимальная производительность составляет примерно 1 МEU/т.

<Recipe id="modern_industrialization:electric_age/machine/plasma_turbine_asbl" />
