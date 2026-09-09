---
navigation:
  title: "Многоблочные партионные обработчики"
  icon: "processing_array"
  parent: extended_industrialization:machines.md
categories:
  - machines
item_ids:
  - extended_industrialization:large_steam_furnace
  - extended_industrialization:large_steam_macerator
  - extended_industrialization:large_electric_furnace
  - extended_industrialization:large_electric_macerator
  - extended_industrialization:processing_array
---

# Многоблочные партионные обработчики

Определённые многоблочные конструкции способны функционировать как обычная машина своего типа, но с множителем, применённым к количеству входов, которые она может обрабатывать одновременно. То есть многоблочная конструкция, способная запускать рецепты определённого типа партиями по Y, может потреблять от 1x до Yx входов за раз, а затем производить результаты в соответствии с размером партии. Количество потребляемой машиной ЭЕ/т также будет умножено на количество партий, которые она в данный момент выполняет.

Количество партий, которые могут выполняться многоблочным партионным обработчиком, варьируется. Для получения конкретных значений обратитесь к подсказке предмета машины.

Как и другие машины, они не могут выполнять более одного рецепта одновременно.

## Большая печь

Количество партий, которые может запускать Большая электрическая печь, определяется обмотками, используемыми в многоблочной конструкции, подобно тому, как строится Электрическая доменная печь. Для размера партий, которые обмотка обеспечивает в печи, обратитесь к подсказке самой обмотки.

<Row>
	<RecipeFor id="extended_industrialization:large_steam_furnace" />
	<RecipeFor id="extended_industrialization:large_electric_furnace" />
</Row>

<GameScene zoom="2" interactive={true} fullWidth={true}>
    <MultiblockShape controller="extended_industrialization:large_steam_furnace" />
    <MultiblockShape controller="extended_industrialization:large_electric_furnace" x="-6" y="-1" z="-6" />
</GameScene>

## Большой измельчитель

<Row>
	<RecipeFor id="extended_industrialization:large_steam_macerator" />
	<RecipeFor id="extended_industrialization:large_electric_macerator" />
</Row>

<GameScene zoom="2" interactive={true} fullWidth={true}>
    <MultiblockShape controller="extended_industrialization:large_steam_macerator" />
    <MultiblockShape controller="extended_industrialization:large_electric_macerator" x="-6" z="-6" />
</GameScene>

## Обрабатывающий массив

Обрабатывающий массив способен запускать партии любой неблочной электрической машины для крафта, предоставленной в его интерфейс. Размер партий, которые может запускать Обрабатывающий массив, ограничен его размером и количеством машин, помещённых в него.

<RecipeFor id="extended_industrialization:processing_array" />

<GameScene zoom="2" interactive={true} fullWidth={true}>
    <MultiblockShape controller="extended_industrialization:processing_array" />
    <MultiblockShape controller="extended_industrialization:processing_array" useBigShape={true} x="-6" z="-8" />
</GameScene>
