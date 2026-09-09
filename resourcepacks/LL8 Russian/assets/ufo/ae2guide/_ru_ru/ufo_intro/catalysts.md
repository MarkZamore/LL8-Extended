---
navigation:
  parent: ufo_intro/index.md
  title: Система катализаторов
  position: 35
item_ids:
  - ufo:matterflow_catalyst_t1
  - ufo:matterflow_catalyst_t2
  - ufo:matterflow_catalyst_t3
  - ufo:chrono_catalyst_t1
  - ufo:chrono_catalyst_t2
  - ufo:chrono_catalyst_t3
  - ufo:overflux_catalyst_t1
  - ufo:overflux_catalyst_t2
  - ufo:overflux_catalyst_t3
  - ufo:quantum_catalyst_t1
  - ufo:quantum_catalyst_t2
  - ufo:quantum_catalyst_t3
  - ufo:dimensional_catalyst
---

# Катализаторы DMA

Катализаторы — это высокоразвитые карты процессоров, помещаемые в слоты расширения **Dimensional Matter Assembler (DMA)**. В отличие от стандартных карт ускорения ME, катализаторы вводят огромные бонусы, сопровождаемые балансирующими штрафами, которые требуют осторожного управления базой, чтобы избежать катастрофических расплавлений.

## Катализаторы Matterflow (эффективность)
<div style="display: flex; gap: 10px; margin-bottom: 20px;">
  <ItemImage id="ufo:matterflow_catalyst_t1" scale="2" />
  <ItemImage id="ufo:matterflow_catalyst_t2" scale="2" />
  <ItemImage id="ufo:matterflow_catalyst_t3" scale="2" />
</div>
**Катализаторы Matterflow** оптимизируют скорость потребления энергии во время агрегации материи.

- **T1:** `0.8x` множитель энергии
- **T2:** `0.6x` множитель энергии
- **T3:** `0.4x` множитель энергии

**Штраф:** немного увеличивает время крафта и снижает целостность теплового экрана, то есть окружающее тепло машины рассеивается медленнее.

## Катализаторы Chrono (скорость)
<div style="display: flex; gap: 10px; margin-bottom: 20px;">
  <ItemImage id="ufo:chrono_catalyst_t1" scale="2" />
  <ItemImage id="ufo:chrono_catalyst_t2" scale="2" />
  <ItemImage id="ufo:chrono_catalyst_t3" scale="2" />
</div>
**Катализаторы Chrono** переписывают локальные поля замедления времени, резко ускоряя рецепты.

- **T1:** `1.5x` множитель скорости
- **T2:** `2.5x` множитель скорости
- **T3:** `4.0x` множитель скорости

**Штрафы:** огромный множитель тепла. Катализатор Chrono T3 заставит машину генерировать значительно больше тепла за тик! Складирование их без крепкой инфраструктуры охлаждения — это прямой путь к взрыву в пустоту.

## Катализаторы Overflux (стабильность)
<div style="display: flex; gap: 10px; margin-bottom: 20px;">
  <ItemImage id="ufo:overflux_catalyst_t1" scale="2" />
  <ItemImage id="ufo:overflux_catalyst_t2" scale="2" />
  <ItemImage id="ufo:overflux_catalyst_t3" scale="2" />
</div>
**Катализаторы Overflux** стабилизируют массив образования материи.

- Они часто являются строгим требованием для синтеза Infinity Cell в эндгейме.
- Увеличивает абсолютную тепловую ёмкость машины, предотвращая расплавления.
- **T3** практически утраивает допустимость к скачкам тепла.

**Штрафы:** снижает базовую скорость крафта и увеличивает границы ёмкости энергии, увеличивая мерцание сетей питания, если вам не хватает AE2 Dense Energy Cells.

## Квантовые катализаторы (выход)
<div style="display: flex; gap: 10px; margin-bottom: 20px;">
  <ItemImage id="ufo:quantum_catalyst_t1" scale="2" />
  <ItemImage id="ufo:quantum_catalyst_t2" scale="2" />
  <ItemImage id="ufo:quantum_catalyst_t3" scale="2" />
</div>
**Квантовые катализаторы** используют вероятностные аномалии, чтобы потенциально дать дополнительные материалы и побочные продукты!

- Используется для фарма чрезвычайно редких аномалий, таких как `SCAR` или дополнительная `Proto-Matter`.
- **T3** заставляет симуляцию развёртывать таблицы результатов три раза.

**Штрафы:** крайне нестабильны. Увеличивает зоны дестабилизации и делает рецепты жестоко непоследовательными в требованиях мощности.

## Dimensional Catalyst
<div style="display: flex; gap: 10px; margin-bottom: 20px;">
  <ItemImage id="ufo:dimensional_catalyst" scale="2" />
</div>
**Dimensional Catalyst** — это творческий уровень катализаторов, который обеспечивает:
- Мгновенная обработка
- Бонус к падению 100%
- Риск отказа 0%
- Нулевая стоимость энергии

При этом также снижает температуру размерного сборщика. Используйте с экстремальной осторожностью.
