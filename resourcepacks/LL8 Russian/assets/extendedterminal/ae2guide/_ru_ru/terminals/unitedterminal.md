---
navigation:
  title: United Terminal
  icon: united_terminal
  parent: index.md
  position: 021
categories:
  - extendedterminal
item_ids:
  - united_terminal
  - wireless_united_terminal
---
# United Terminal
<ItemImage id="extendedterminal:united_terminal" scale={3}/>

<ItemLink id="extendedterminal:united_terminal" /> объединяет инструменты Extended Terminal с поддержкой расширённого крафта в одном терминале.
Используйте его, когда вам нужен один терминал для обычного крафта, кузнечного дела, резки камня, работы с наковальней и расширённого крафта.

## Рецепт
<RecipeFor id="extendedterminal:united_terminal" />

<myotus:condition load="ae2wtlib" silent="true">
## Беспроводной объединённый терминал
<ItemLink id="extendedterminal:wireless_united_terminal" /> — это беспроводной вариант <ItemLink id="extendedterminal:united_terminal" />.
Для работы требуется <ItemLink id="ae2:wireless_access_point"/>.

## Рецепт
<RecipeFor id="extendedterminal:wireless_united_terminal" />

### Универсальный беспроводной терминал
<ItemLink id="extendedterminal:wireless_united_terminal"/> можно объединить с <ItemLink id="ae2wtlib:wireless_universal_terminal"/>.
<Row>
    <Recipe id="extendedterminal:ae2wtlib/united_etc" />
    <Recipe id="extendedterminal:ae2wtlib/united_etp" />
    <Recipe id="extendedterminal:ae2wtlib/upgrade_wireless_united_terminal" />
</Row>
</myotus:condition>
