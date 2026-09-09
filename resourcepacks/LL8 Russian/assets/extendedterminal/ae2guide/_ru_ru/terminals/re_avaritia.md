---
navigation:
  title: Re:Avaritia Crafting Terminal
  icon: avaritia:extreme_crafting_table
  parent: index.md
  position: 020
categories:
  - extendedterminal
item_ids:
  - sculk_terminal
  - nether_terminal
  - end_terminal
  - extreme_terminal
---

# Re:Avaritia Crafting Terminal

<myotus:condition load="re-avaritia">


<GameScene zoom={4} interactive={true}>
    <ImportStructure src="../structures/reavaritia.snbt" />
    <IsometricCamera yaw="225" pitch="20" />
</GameScene>

## Терминал крафта Sculk

<Row>
<ItemImage id="extendedterminal:sculk_terminal" scale={3}/>
<ItemImage id="avaritia:sculk_crafting_table" scale={3}/>
</Row>
<ItemLink id="extendedterminal:sculk_terminal" /> — это вариант <ItemLink
    id="avaritia:sculk_crafting_table"/> в виде терминала.
## Терминал крафта Nether
<Row>
<ItemImage id="extendedterminal:nether_terminal" scale={3}/>
<ItemImage id="avaritia:nether_crafting_table" scale={3}/>
</Row>
<ItemLink id="extendedterminal:nether_terminal" /> — это вариант <ItemLink
    id="avaritia:nether_crafting_table"/> в виде терминала.
## Терминал крафта End
<Row>
<ItemImage id="extendedterminal:end_terminal" scale={3}/>
<ItemImage id="avaritia:end_crafting_table" scale={3}/>
</Row>
<ItemLink id="extendedterminal:end_terminal" /> — это вариант <ItemLink
    id="avaritia:end_crafting_table"/> в виде терминала.
## Экстремальный терминал крафта
<Row>
<ItemImage id="extendedterminal:extreme_terminal" scale={3}/>
<ItemImage id="avaritia:extreme_crafting_table" scale={3}/>
</Row>
<ItemLink id="extendedterminal:extreme_terminal" /> — это вариант <ItemLink
    id="avaritia:extreme_crafting_table"/> в виде терминала.

## Рецепты

<Column>
    <Row>
        <RecipeFor id="extendedterminal:sculk_terminal" />
        <RecipeFor id="extendedterminal:end_terminal" />
    </Row>
    <Row>
        <RecipeFor id="extendedterminal:nether_terminal" />
        <RecipeFor id="extendedterminal:extreme_terminal" />
    </Row>
</Column>

</myotus:condition>
