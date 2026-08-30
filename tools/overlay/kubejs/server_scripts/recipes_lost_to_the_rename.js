// Minecraft 1.21 renamed the folders a data pack is read from: recipes became
// recipe, advancements became advancement, and so on for eight of them. A mod
// built for 1.20 and released for 1.21 without that rename ships its recipes
// where nothing looks, and nothing says so: no error, no warning, just an item
// with no recipe. EMI shows none either, so the item reads as uncraftable and
// the player believes it.
//
// Two mods in this build still ship the old path. Titanium's three are its
// own test recipes - dirt into a diamond among them - and stay where they are.
// The one below is real, and is registered exactly as its author wrote it, out
// of the file 1.21 never reads. Sanity: Renewed was the third, and its garland
// was made here the same way until the mod was taken out of the build.

ServerEvents.recipes(event => {
  // The railgun, out of data/orbital_railgun/recipes/orbital_railgun.json - a
  // nether star, a block of netherite and two ingots of it, an emerald, lapis,
  // redstone and a pane of glass, in the author's own arrangement.
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
