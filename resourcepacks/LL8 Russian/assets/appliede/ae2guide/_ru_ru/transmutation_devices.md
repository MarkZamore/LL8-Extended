---
navigation:
  parent: appliede-index.md
  title: Устройства трансмутации
  icon: emc_interface
  position: 10
categories:
  - appliede
item_ids:
  - appliede:emc_interface
  - appliede:cable_emc_interface
  - appliede:emc_export_bus
  - appliede:emc_import_bus
  - appliede:learning_card
---

# Устройства трансмутации

<GameScene zoom="4" background="transparent">
  <ImportStructure src="assemblies/transmutation_devices.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

В качестве дополнения к существующим устройствам AE2: <ItemLink id="ae2:interface" />, <ItemLink id="ae2:export_bus" /> и <ItemLink id="ae2:import_bus" />, AppliedE предлагает свои аналоги этих устройств, которые работают почти идентично нативным устройствам AE2 и по-прежнему совместимы с обычными предметами. Ключевое отличие заключается в том, что предметы трансмутируются в ЭМС или из ЭМС во время каждой операции.

Хотя каждое устройство можно отфильтровать для любого предмета, оно сможет выполнять свою функцию только на предметах, которые были выучены хотя бы одним игроком, отслеживаемым <ItemLink id="appliede:emc_module">модулем трансмутации</ItemLink> в сети. В случае с <ItemLink id="appliede:emc_interface" /> предметы не будут приняты во внутреннее хранилище для конвертации в ЭМС, если они не были выучены и не известны сети заранее. Аналогично, <ItemLink id="appliede:emc_import_bus" /> не будет извлекать неизученные предметы.

## Карта алхимического мастерства

<ItemImage id="learning_card" scale="4" />

Однако для пользователя было бы утомительно выучивать каждый предмет заранее перед тем, как его можно было бы автоматически вытащить в МЭ систему для преобразования в ЭМС. По этой причине <ItemLink id="appliede:learning_card" /> можно установить либо в <ItemLink id="appliede:emc_interface" />, либо в <ItemLink id="appliede:emc_import_bus" />, чтобы они автоматически выучивали входящие предметы, при условии, что они имеют значение ЭМС.

Однако помните, что эти предметы будут выучены только владельцем устройства, то есть игроком, который разместил шину импорта, интерфейс или сетевое устройство, отправляющее предметы в интерфейс.

## Рецепты

<Recipe id="appliede:emc_interface" />
<RecipeFor id="appliede:emc_export_bus" />
<RecipeFor id="appliede:emc_import_bus" />
<RecipeFor id="appliede:learning_card" />
