// Minecraft 1.21 renamed the folders a data pack is read from: recipes became
// recipe, advancements became advancement, and so on for eight of them. A mod
// built for 1.20 and released for 1.21 without that rename ships its recipes
// where nothing looks, and nothing says so: no error, no warning, just an item
// with no recipe. EMI shows none either, so the item reads as uncraftable and
// the player believes it.
//
// Three mods in this build still ship the old path. Titanium's three are its
// own test recipes - dirt into a diamond among them - and stay where they are.
// The two below are real, and are registered exactly as their authors wrote
// them, out of the files 1.21 never reads.

ServerEvents.recipes(event => {
  if (Item.exists('sanity_renewed:garland')) {
    event
      .shaped(Item.of('sanity_renewed:garland'), ['xxx', 'x x', 'xxx'], { x: '#minecraft:flowers' })
      .id('tnp:sanity_renewed_garland')
  }

  // And the railgun the same way, out of
  // data/orbital_railgun/recipes/orbital_railgun.json - a nether star, a block
  // of netherite and two ingots of it, an emerald, lapis, redstone and a pane
  // of glass, in the author's own arrangement.
  if (Item.exists('orbital_railgun:orbital_railgun')) {
    event
      .shaped(Item.of('orbital_railgun:orbital_railgun'), ['GNE', 'SBN', 'LR '], {
        G: 'minecraft:glass_pane',
        N: 'minecraft:netherite_ingot',
        E: 'minecraft:emerald',
        S: 'minecraft:nether_star',
        B: 'minecraft:netherite_block',
        L: 'minecraft:lapis_lazuli',
        R: 'minecraft:redstone',
      })
      .id('tnp:orbital_railgun')
  }
})
