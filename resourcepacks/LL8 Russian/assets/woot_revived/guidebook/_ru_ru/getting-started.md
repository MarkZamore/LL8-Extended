---
navigation:
  title: "Начало"
  position: 10
  icon: "woot_revived:stygian_ingot"
---
# Начало

## Получение самородка Stygian

Чтобы начать работу с Woot Revived, сначала вам нужно создать <ItemImage id="stygian_dust" scale="0.5"/> Stygian Dust
<Recipe id="stygian_dust" />

Затем вам нужно их обработать, чтобы получить <ItemImage id="stygian_ingot" scale="0.5"/> Stygian Ingot
<Recipe id="stygian_ingot_cook" />

## Получение форм

Сначала вам нужна <ItemImage id="stygian_anvil" scale="0.5"/> Stygian Anvil и <ItemImage id="stygian_hammer" scale="0.5"/> Stygian Hammer
<Row>
    <Recipe id="stygian_anvil" />
    <Recipe id="stygian_hammer" />
</Row>

Затем вам нужно поместить Stygian Anvil на <ItemImage id="minecraft:magma_block" scale="0.5"/> Magma Block

Чтобы создавать предметы с помощью Stygian Anvil, вам нужно щёлкнуть по ней правой кнопкой мыши со Stygian Hammer

Для каждой формы вам понадобится <ItemImage id="minecraft:quartz" scale="0.5"/> Quartz и <ItemImage id="stygian_ingot" scale="0.5"/> Stygian Ingot

Обратите внимание, что формы не расходуются при создании предметов, вам нужна только одна

<Row alignItems="center">
  <GameScene zoom="5">
    <ImportStructure src="assets/anvil/plate_mold.snbt" />
    <IsometricCamera yaw="180" pitch="40" />
  </GameScene>
  <ItemImage id="plate_mold" scale="2"/>
  Чтобы создать форму пластины, вам нужна <ItemImage id="minecraft:iron_trapdoor" scale="0.5"/> Iron Trapdoor
</Row>

<Row alignItems="center">
  <GameScene zoom="5">
    <ImportStructure src="assets/anvil/shard_mold.snbt" />
    <IsometricCamera yaw="180" pitch="40" />
  </GameScene>
  <ItemImage id="shard_mold" scale="2"/>
  Чтобы создать форму осколка, вам нужен <ItemImage id="minecraft:prismarine_shard" scale="0.5"/> Prismarine Shard
</Row>

<Row alignItems="center">
  <GameScene zoom="5">
    <ImportStructure src="assets/anvil/dye_casing_mold.snbt" />
    <IsometricCamera yaw="180" pitch="40" />
  </GameScene>
  <ItemImage id="dye_casing_mold" scale="2"/>
  Чтобы создать форму корпуса красителя, вам нужен <ItemImage id="minecraft:white_dye" scale="0.5"/> любой краситель
</Row>

## Создание основы фабрики

Чтобы создать все блоки мода, вам нужно создать Factory Base

Сначала вам нужна <ItemImage id="stygian_plate" scale="0.5"/> Stygian Plate

<Row alignItems="center">
  <GameScene zoom="5">
    <ImportStructure src="assets/anvil/stygian_plate.snbt" />
    <IsometricCamera yaw="180" pitch="40" />
  </GameScene>
  <ItemImage id="stygian_plate" scale="2"/>
  Чтобы создать её, вам нужна форма пластины <ItemImage id="plate_mold" scale="0.5"/> и <ItemImage id="stygian_ingot" scale="0.5"/> Stygian Ingot
</Row>

Затем вы сможете создать блок Factory Base

<Recipe id="factory_base" />

## А что дальше?

Теперь вы можете начать [ловить мобов](mob-shard.md), или вы можете начать [строить свою первую фабрику](factory/copper.md)!
