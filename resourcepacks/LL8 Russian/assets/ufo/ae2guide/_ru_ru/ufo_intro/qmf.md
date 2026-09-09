---
navigation:
  parent: ufo_intro/index.md
  title: Quantum Matter Fabricator
  position: 42
item_ids:
  - ufo:quantum_matter_fabricator_controller
  - ufo:quantum_pattern_hatch
---

# Quantum Matter Fabricator

<BlockImage id="ufo:quantum_matter_fabricator_controller" scale="4"></BlockImage>

**QMF** — эволюция мультиблока DMA для тяжёлой автоматизации, массового крафта и рабочих процессов паттернов AE2.

## Основные преимущества

- До **27 параллельных потоков** в стандартном режиме
- **9 параллельных потоков** в безопасном режиме
- Принимает как собственные **рецепты QMF** так и **рецепты DMA**
- Поддерживает автокрафт AE2 через **Quantum Pattern Hatch**
- Прямое считывание ингредиентов из подключённой сети ME
- Автоматический возврат вывода в ME

## Quantum Pattern Hatch

<BlockImage id="ufo:quantum_pattern_hatch" scale="3"></BlockImage>

- Хранит до **72 закодированных паттернов**
- Связывается с контроллером при сборке структуры
- Выявляет мультиблок как машину крафта для AE2
- Позволяет контроллеру выполнять несколько работ параллельно

## Тепловой профиль

- Базовая генерация тепла: **1 HU за активный поток за тик**.
- Генерация тепла разгона: **5 HU за активный поток за тик**.
- Пассивное охлаждение холостого хода: **-1 HU каждые 40 тиков**.
- Значения танка охлаждения используют общую универсальную лестницу мультиблоков:
- Gelid Cryotheum удаляет **1 HU за 120 mB**, до **1000 mB/tick**.
- Stable Coolant удаляет **50 HU за mB**, до **10 mB/tick**.
- Temporal Fluid удаляет **100 HU за mB**, до **10 mB/tick**.
