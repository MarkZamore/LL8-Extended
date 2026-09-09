---
navigation:
  title: "Соединитель механизмов"
  icon: "machine_chainer"
  parent: extended_industrialization:machines.md
categories:
  - machines
item_ids:
  - extended_industrialization:machine_chainer
  - extended_industrialization:machine_chainer_relay
---

# Соединитель механизмов

<GameScene zoom="2" interactive={true} fullWidth={true}>
	<ImportStructure src="machine_chainer_example.nbt" />
	<IsometricCamera yaw="180" pitch="30" />
</GameScene>

Соединитель механизмов может соединяться со множеством машин, бочек или любого другого блока-инвентаря с тегом #extended_industrialization:machine_chainer/linkable по прямой линии на расстояние до 64 блоков. Связанные инвентари объединяются в один общий инвентарь соединителя. Соединитель можно ориентировать в любом направлении, включая вверх и вниз.

Соединитель поддерживает передачу предметов, жидкостей и энергии! Однако передача энергии ограничена 3-кратной скоростью передачи кабеля его уровня, и не может взаимодействовать с энергией связанных машин, которые не соответствуют его напряжению.

## Реле соединителя механизмов

Реле — это блок, который может быть связан соединителем, но не имеет инвентаря. Его можно использовать как заполнитель в ваших соединённых машинах, не требуя при этом размещения машины в щели.

<RecipeFor id="extended_industrialization:machine_chainer_relay" />
