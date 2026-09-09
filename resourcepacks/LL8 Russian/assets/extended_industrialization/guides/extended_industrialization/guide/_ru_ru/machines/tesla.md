---
navigation:
  title: "Тесла"
  icon: "tesla_coil"
  parent: extended_industrialization:machines.md
categories:
  - machines
item_ids:
  - extended_industrialization:tesla_calibrator
  - extended_industrialization:tesla_handheld_receiver
  - extended_industrialization:tesla_interdimensional_upgrade
  - extended_industrialization:tesla_coil
  - extended_industrialization:tesla_receiver
  - extended_industrialization:lv_tesla_receiver_hatch
  - extended_industrialization:mv_tesla_receiver_hatch
  - extended_industrialization:hv_tesla_receiver_hatch
  - extended_industrialization:ev_tesla_receiver_hatch
  - extended_industrialization:superconductor_tesla_receiver_hatch
  - extended_industrialization:tesla_tower
  - extended_industrialization:aluminum_tesla_winding
  - extended_industrialization:annealed_copper_tesla_winding
  - extended_industrialization:copper_tesla_winding
  - extended_industrialization:electrum_tesla_winding
  - extended_industrialization:superconductor_tesla_winding
---

# Тесла

Катушки Теслы и приёмники позволяют вам передавать ЭЕ по воздуху с затратами. Сеть Теслы ограничена одним передатчиком (Катушка Теслы или Башня Теслы) и не имеет внутреннего ограничения количества Приёмников Теслы. Каждый передатчик будет иметь свой собственный определённый диапазон и пассивные расходы.

## Калибратор Теслы

Чтобы привязать передатчик Теслы к приёмникам, сначала нажмите **<KeyBind id="key.sneak" />** + **<KeyBind id="key.use" />** удерживая Калибратор Теслы на передатчике. Затем просто нажмите **<KeyBind id="key.use" />** с калибратором на любом приёмнике, чтобы привязать его.

<RecipeFor id="extended_industrialization:tesla_calibrator" />

## Передатчики Теслы

Передатчики Теслы — источник каждой сети Теслы.

Передатчик не может передавать энергию приёмнику, который не имеет точно такого же напряжения. Например, Катушка Теслы с продвинутым корпусом машины не может передавать Приёмнику Теслы без корпуса, но может передавать тому, который также имеет продвинутый корпус машины.

Пассивный расход ЭЕ/т Катушки Теслы определяется напряжением установленного корпуса (или его отсутствием).

<RecipeFor id="extended_industrialization:tesla_coil" />

Напряжение, передаваемое Башней Теслы, определяется используемыми входными люками энергии.

Пассивный расход ЭЕ/т, лимит передачи и дальность Башни Теслы определяются используемыми обмотками. Подробности каждой обмотки описаны в их соответствующих подсказках.

<Row>
	<GameScene zoom="0.75" interactive={true} fullWidth={false}>
		<MultiblockShape controller="extended_industrialization:tesla_tower" />
	</GameScene>
	<RecipeFor id="extended_industrialization:tesla_tower" />
</Row>

## Приёмники Теслы

Приёмники Теслы — это пункты назначения для передачи энергии от вашего передатчика.

Приёмник Теслы накапливает полученную энергию и выбрасывает её из своей выходной грани. Энергия также может быть извлечена из него, используя кабели, как с любым другим блоком вывода энергии.

<RecipeFor id="extended_industrialization:tesla_receiver" />

Приёмный люк Теслы получает энергию таким же образом, как обычный Приёмник Теслы, однако функционирует как входной люк энергии для многоблочной конструкции. Вместо необходимости иметь приёмник и затем также входной люк энергии для выброса в него, это объединяет оба в один люк.

<RecipeFor id="extended_industrialization:lv_tesla_receiver_hatch" />
