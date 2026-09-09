---
navigation:
  parent: ufo_intro/index.md
  title: Quantum Cryoforge
  position: 44
item_ids:
  - ufo:quantum_cryoforge_controller
---

# Quantum Cryoforge

<BlockImage id="ufo:quantum_cryoforge_controller" scale="4"></BlockImage>

**Quantum Cryoforge** — это универсальный мультиблок, посвящённый крупномасштабному производству охладителя.

- Использует тот же контроллерный поток, что и другие универсальные мультиблоки.
- Принимает универсальные люки в действительных позициях корпуса.
- Ориентирован на пропускную способность охладителя и тепловой жидкости.
- Уровень машины происходит из установленных генераторов Stellar Field.

## Тепловой профиль

- Генерация тепла снижена до **50%** от нормальной скорости универсального мультиблока.
- Базовая генерация тепла: **ceil(активные потоки x 0.5) HU/tick**.
- Генерация тепла разгона: **ceil(активные потоки x 5 x 0.5) HU/tick**.
- Пассивное охлаждение холостого хода: **-1 HU каждые 40 тиков**.

## Танк охлаждения

- **Gelid Cryotheum** удаляет **1 HU за 120 mB**, до **1000 mB/tick**.
- **Stable Coolant** удаляет **50 HU за mB**, до **10 mB/tick**.
- **Temporal Fluid** удаляет **100 HU за mB**, до **10 mB/tick**.

## Затвор Stable Coolant

Stable Coolant — это рецепт **MK3 Quantum Cryoforge**.

Замените каждую позицию генератора поля на **MK3 Stellar Field Generators**, прежде чем ожидать выполнения рецепта Stable Coolant. Gelid Cryotheum остаётся ранней дорожкой охлаждения.
