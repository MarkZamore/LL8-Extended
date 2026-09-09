---
navigation:
  title: Смеситель парадоксов
  icon: "justdynathings:paradox_mixer"
  position: 7
  parent: justdynathings:other.md
item_ids:
  - justdynathings:paradox_mixer
---

# Смеситель парадоксов

_Нестабильный_ блок, который позволяет массово создавать рецепты жидких капель

<BlockImage id="justdynathings:paradox_mixer" scale="4.0" p:alive="false"/>
<BlockImage id="justdynathings:paradox_mixer" scale="4.0" p:alive="true"/>

Требует по крайней мере один energized Стабилизатор для выживания

<GameScene zoom="4" interactive={true}>
  <Block id="justdynathings:stabilizer" p:active="true" p:facing="down" p:goo_found="true" p:energized="true"/>
  <Block y="1" id="justdynathings:paradox_mixer" p:alive="true"/>
</GameScene>

<Recipe id="justdynathings:paradox_mixer" />
