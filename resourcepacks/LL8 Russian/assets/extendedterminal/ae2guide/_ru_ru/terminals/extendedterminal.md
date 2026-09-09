---
navigation:
  title: Extended Terminal
  icon: et_terminal
  parent: index.md
  position: 1
categories:
  - extendedterminal
item_ids:
  - et_terminal
  - wireless_et_terminal
---

# Extended Terminal

<ItemImage id="extendedterminal:et_terminal" scale={3}/>

<ItemLink id="extendedterminal:et_terminal" /> — это универсальный терминал, который включает верстак, кузницу, камнерез и наковальню.

## Рецепт
<RecipeFor id="extendedterminal:et_terminal" />

<myotus:condition load="ae2wtlib" silent="true">
# Беспроводной терминал
<ItemLink id="extendedterminal:wireless_et_terminal" /> — это беспроводной вариант <ItemLink id="extendedterminal:et_terminal" />. Для работы требуется <ItemLink id="ae2:wireless_access_point"/>.
## Рецепт
<RecipeFor id="extendedterminal:wireless_et_terminal" />

### Универсальный беспроводной терминал
<ItemLink id="extendedterminal:wireless_et_terminal"/> можно объединить с <ItemLink id="ae2wtlib:wireless_universal_terminal"/>
<Row>
    <Recipe id="ae2wtlib/etc" />
    <Recipe id="ae2wtlib/etp" />
    <Recipe id="ae2wtlib/upgrade_wireless_et_terminal" />
</Row>

</myotus:condition>
