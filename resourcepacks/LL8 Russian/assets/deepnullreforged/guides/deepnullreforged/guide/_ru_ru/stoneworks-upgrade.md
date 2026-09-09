---
navigation:
  title: Улучшение каменных работ
  icon: deepnullreforged:stoneworks_upgrade
  parent: upgrades.md
  position: 18
item_ids:
  - deepnullreforged:stoneworks_upgrade
---

# Улучшение каменных работ

<Column alignItems="center" fullWidth={true}>
  <ItemImage id="deepnullreforged:stoneworks_upgrade" />
</Column>

Stoneworks сохраняет обработанные каменные материалы в стоке, преобразуя сохранённый булыжник вниз по цепи карусели.

## Доступность

- Только DeepNull
- Все уровни

## Отслеживаемые выходы

- Dirt (грязь)
- Gravel (гравий)
- Sand (песок)
- Dust (пыль), если в пакете существует совпадающий рецепт
- Clay (глина), когда переносимый DampNull имеет воду
- Glass (стекло), когда также установлено улучшение автопереплавки

## Примечания

- Использует значение монитора `Stoneworks Amount`
- Средняя кнопка мыши может установить пользовательские минимумы извлечения для сохранённых предметов

## Крафт

<RecipeFor id="deepnullreforged:stoneworks_upgrade" fallbackText="Смотрите текущий рецепт в JEI." />
