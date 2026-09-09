---
navigation:
  title: Сборщик урожая
  icon: "synergy:harvester"
  parent: automation.md
  position: 2
categories:
  - automation
item_ids:
  - synergy:harvester
---

# Сборщик урожая

Блок, который собирает и рубит материалы

Он автоматически экспортирует предметы в ближайшее хранилище, размещённое на одной из его сторон, иначе бросает всё собранное!

Конфигуратор может показать зону действия этой машины

Требует FE для работы

<BlockImage id="synergy:harvester" scale="4.0" p:enabled="true"/>

Может собирать:

- any crop mono-block
- any type of tree and nether fungus
- any tall-crop (<ItemLink id="minecraft:sugar_cane"/> , <ItemLink id="minecraft:cactus"/> , <ItemLink id="minecraft:bamboo"/>)
- <ItemLink id="minecraft:cocoa_beans"/>
- <ItemLink id="minecraft:melon"/> and <ItemLink id="minecraft:pumpkin"/>
- <ItemLink id="minecraft:sweet_berries"/>
- <ItemLink id="synergy:azalea_seeds"/>
- <ItemLink id="minecraft:nether_wart"/>

Примечание: может собирать деревья, но не пересаживает саженцы!

<GameScene zoom="2" interactive={true}>

  <ImportStructure src="../templates/base.nbt" pos="1 0 1"/>

  <Block x="5" y="1" z="10" id="synergy:harvester" p:facing="north" p:enabled="true"/>

<Block x="7" y="1" z="3" id="synergy:azalea" p:age="5"/>
<Block x="2" y="1" z="1" id="synergy:azalea" p:age="6"/>
<Block x="4" y="1" z="7" id="synergy:azalea" p:age="0"/>
<Block x="6" y="1" z="2" id="synergy:azalea" p:age="3"/>
<Block x="1" y="1" z="6" id="synergy:azalea" p:age="2"/>
<Block x="3" y="1" z="8" id="synergy:azalea" p:age="4"/>
<Block x="5" y="1" z="9" id="synergy:azalea" p:age="1"/>
<Block x="9" y="1" z="4" id="synergy:azalea" p:age="7"/>
<Block x="2" y="1" z="9" id="synergy:azalea" p:age="0"/>
<Block x="8" y="1" z="5" id="synergy:azalea" p:age="6"/>
<Block x="7" y="1" z="1" id="synergy:azalea" p:age="5"/>
<Block x="3" y="1" z="3" id="synergy:azalea" p:age="2"/>
<Block x="6" y="1" z="8" id="synergy:azalea" p:age="7"/>
<Block x="1" y="1" z="2" id="synergy:azalea" p:age="3"/>
<Block x="9" y="1" z="6" id="synergy:azalea" p:age="0"/>
<Block x="4" y="1" z="9" id="synergy:azalea" p:age="4"/>
<Block x="2" y="1" z="5" id="synergy:azalea" p:age="1"/>
<Block x="8" y="1" z="7" id="synergy:azalea" p:age="6"/>
<Block x="5" y="1" z="3" id="synergy:azalea" p:age="3"/>
<Block x="3" y="1" z="4" id="synergy:azalea" p:age="2"/>
<Block x="7" y="1" z="2" id="synergy:azalea" p:age="0"/>
<Block x="6" y="1" z="7" id="synergy:azalea" p:age="5"/>
<Block x="1" y="1" z="5" id="synergy:azalea" p:age="4"/>
<Block x="9" y="1" z="8" id="synergy:azalea" p:age="7"/>
<Block x="4" y="1" z="6" id="synergy:azalea" p:age="1"/>
<Block x="5" y="1" z="1" id="synergy:azalea" p:age="2"/>
<Block x="2" y="1" z="2" id="synergy:azalea" p:age="0"/>
<Block x="8" y="1" z="9" id="synergy:azalea" p:age="6"/>
<Block x="6" y="1" z="5" id="synergy:azalea" p:age="3"/>
<Block x="3" y="1" z="7" id="synergy:azalea" p:age="4"/>
<Block x="7" y="1" z="6" id="synergy:azalea" p:age="1"/>

  <BoxAnnotation color="#00FF00" min="1.0 1.0 1.0" max="10.0 2.0 10.0">
       Area of Effect (9x9) <br/> Can be unlocked in-game using a <ItemImage id="synergy:configurator" scale="0.75"/> <ItemLink id="synergy:configurator"/>
  </BoxAnnotation>

</GameScene>

<RecipeFor id="synergy:harvester" />

_Also Сборщик урожая include an entire custom API to allow other mods to add support without need to use mixin_
