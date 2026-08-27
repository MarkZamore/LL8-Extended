// Minecraft 1.21 renamed the folders a data pack is read from: recipes became
// recipe, advancements became advancement, and so on for eight of them. A mod
// built for 1.20 and released for 1.21 without that rename ships its recipes
// where nothing looks, and nothing says so: no error, no warning, just an item
// with no recipe. EMI shows none either, so the item reads as uncraftable and
// the player believes it.
//
// Three mods in this build still ship the old path. Titanium's three are its
// own test recipes - dirt into a diamond among them - and stay where they are.
// The one below is real, and is registered here exactly as its author wrote it:
// a ring of eight flowers, which is the recipe in
// data/sanity_renewed/recipes/garland.json that 1.21 never reads.

ServerEvents.recipes(event => {
  if (Item.exists('sanity_renewed:garland')) {
    event
      .shaped(Item.of('sanity_renewed:garland'), ['xxx', 'x x', 'xxx'], { x: '#minecraft:flowers' })
      .id('tnp:sanity_renewed_garland')
  }
})
