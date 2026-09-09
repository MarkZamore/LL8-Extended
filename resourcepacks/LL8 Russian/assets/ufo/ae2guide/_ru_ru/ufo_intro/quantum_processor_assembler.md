---
navigation:
  parent: ufo_intro/index.md
  title: Quantum Processor Assembler
  position: 44
item_ids:
  - ufo:quantum_processor_assembler_controller
  - ufo:quantum_pattern_hatch
---

# Quantum Processor Assembler

<BlockImage id="ufo:quantum_processor_assembler_controller" scale="4"></BlockImage>

**Quantum Processor Assembler** — это мультиблок массовой доработки процессоров.

## Возможности

- До **27 параллельных работ** в стандартном режиме
- **9 параллельных работ** в безопасном режиме
- Поддержка паттернов AE2 через **Quantum Pattern Hatch**
- Поддержка рецептов универсальных мультиблоков для семей процессоров
- Прямое поведение получения и возврата сети ME для предметов и жидкостей

## Люк паттерна

- **Quantum Pattern Hatch** хранит **72 закодированных паттерна**
- Он выявляет контроллер для AE2 как машину крафта
- Каждый загруженный паттерн резервирует один свободный поток

## Тепловой профиль

- Базовая генерация тепла: **1 HU за активный поток за тик**.
- Генерация тепла разгона: **5 HU за активный поток за тик**.
- Пассивное охлаждение холостого хода: **-1 HU каждые 40 тиков**.
- Значения танка охлаждения используют общую универсальную лестницу мультиблоков:
- Gelid Cryotheum удаляет **1 HU за 120 mB**, до **1000 mB/tick**.
- Stable Coolant удаляет **50 HU за mB**, до **10 mB/tick**.
- Temporal Fluid удаляет **100 HU за mB**, до **10 mB/tick**.
