// Overenchanted 0.0.7 spells four of its own enchantments with a dot where the
// colon belongs - "overenchanted.reflect" instead of "overenchanted:reflect",
// "enchantment.overenchanted.combo" instead of "overenchanted:combo". A dot is
// legal in a resource path, so they parse cleanly as ids in the minecraft
// namespace and then resolve to nothing.
//
// The game does not skip an entry it cannot resolve. TagLoader collects the
// failures and, if there are any, drops the whole tag - vanilla's entries and
// every other mod's with it. Five tags die that way and three more follow,
// because they point at the dead ones: the enchanting table has no pool,
// librarians nothing to trade, mobs no enchanted gear, loot no enchantments,
// and Create's Blaze Enchanter cannot see its own super-enchanting set.
//
// This has to be done here rather than in a datapack. A datapack can only add
// or remove entries that resolve; these do not. KubeJS edits the raw entry list
// before resolution - it matches the id and drops the entry outright - which is
// the only thing that reaches a broken entry at all.
ServerEvents.tags('enchantment', event => {
  const broken = [
    'minecraft:enchantment.overenchanted.combo',
    'minecraft:enchantment.overenchanted.multi_jump',
    'minecraft:overenchanted.reflect',
    'minecraft:overenchanted.ricochet'
  ]
  const tags = [
    'minecraft:in_enchanting_table',
    'minecraft:tradeable',
    'minecraft:treasure',
    'minecraft:on_mob_spawn_equipment',
    'minecraft:on_random_loot'
  ]
  tags.forEach(tag => broken.forEach(id => event.remove(tag, id)))

  // Put them back where the mod meant them to be. All four are registered.
  event.add('minecraft:in_enchanting_table', 'overenchanted:combo', 'overenchanted:multi_jump', 'overenchanted:reflect', 'overenchanted:ricochet')
  event.add('minecraft:tradeable', 'overenchanted:combo', 'overenchanted:multi_jump', 'overenchanted:reflect', 'overenchanted:ricochet')
  event.add('minecraft:treasure', 'overenchanted:combo', 'overenchanted:multi_jump')
  event.add('minecraft:on_mob_spawn_equipment', 'overenchanted:reflect', 'overenchanted:ricochet')
  event.add('minecraft:on_random_loot', 'overenchanted:reflect', 'overenchanted:ricochet')
})
