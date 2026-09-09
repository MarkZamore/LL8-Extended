---
navigation:
  title: Контроллер
  icon: "synergy:quantum_reactor_controller"
  parent: nuclear.md
  position: 1
categories:
  - nuclear
item_ids:
  - synergy:quantum_reactor_controller
---

# Контроллер

Ядро квантовых реакторов

Производит тепло и энергию на основе топливных элементов, когдаn actived with a redstone signal

It has an AOE to define all valid blocks

Right clicking on it will show Heat and FE rate

## MODES:

- waiting
  -> no redstone signal provided

- overheated
  -> heated

- no fuel
  -> recipe output is full / recipe input is empty / no valid fuel cells

- production
  -> produce and continue recipes

<ItemImage id="synergy:quantum_reactor_controller" scale="4.0"/>

<RecipeFor id="synergy:quantum_reactor_controller" />
