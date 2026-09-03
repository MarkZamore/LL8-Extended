// Yes Steve Model draws its own body instead of the player's, and there are two
// moments on this pack when that is the wrong body to draw.
//
// The first is armour. YSM cancels RenderPlayerEvent.Pre and draws its model
// with four layers of its own - held items, elytra, shoulder parrot, head item.
// Everything the vanilla renderer would have added is gone with it: helmet,
// chestplate, leggings, boots, cape, and every Curios slot and Icarus wing,
// because those are appended to the VANILLA player renderer through
// EntityRenderersEvent.AddLayers and YSM never gets there. Its own builtin Steve
// and Alex have no armour bones and never will. So a player who picks one of
// those two is asking for the ordinary player body, and on this pack that is
// what they now get - the real one, with armour and accessories, at the price of
// YSM's animations. Pick any other model and YSM comes straight back.
//
// The second is a Jenny scene. The scene draws its partner from a bone group
// inside the companion's own model, textured with the player's skin, and Jenny
// tries to hide the real player by cancelling the same RenderPlayerEvent.Pre.
// Both mods subscribe bare, at NORMAL priority, and the bus stops at the first
// cancel - so whichever is called first wins, and it is YSM. That is the two
// bodies: the scene's partner where it belongs, and the player's YSM model stuck
// in the middle of it, frozen there by the scene's own anchor.
//
// One flag settles both. "/ysm model disable <player> <bool>" writes to a
// server-side data attachment and YSM broadcasts it to everyone tracking that
// player, so what this does is seen by the whole server and not only by the
// player it happens to. With it set, YSM's handler returns without cancelling
// and without drawing - which lets the vanilla renderer run in the first case,
// and lets Jenny's cancel land in the second.
//
// It has to be a poll. YSM fires no event when a model is chosen in its screen -
// the choice arrives as a raw packet and is written straight into the attachment
// - and Jenny fires no event on a scene starting or ending. Twice a second is
// far more often than either can change and costs one small NBT read per player.

const CHECK_EVERY_TICKS = 10 // twice a second

// YSM's own Steve and Alex, as the model id reads. The id is <pack>_<folder>,
// and these two live in the builtin "misc" pack. If a future YSM renames them
// the log line below will say so on the first switch, which is why it is there.
const PLAIN_PLAYER_MODELS = ['misc_2_steve', 'misc_1_alex']

const YSM_ATTACHMENT = 'yes_steve_model:model_id'
const COMPANION_CLASS = 'com.trolmastercard.sexmod.entity.CompanionEntity'
// A scene puts the player at the companion's exact coordinates every tick, so
// anything further away than a step is not the companion they are in a scene
// with.
const SCENE_RADIUS = 4

let ticks = 0
let lookup = null // resolved once, on the first tick that has a server
let lookupFailed = false
const lastSeenModel = {} // player name -> the id last written to the log

// Both of these are looked up by name rather than imported, so that a pack
// without one of the two mods loads this script and quietly does nothing.
function resolveLookup() {
  if (lookup !== null || lookupFailed) return lookup

  try {
    const registries = Java.loadClass('net.neoforged.neoforge.registries.NeoForgeRegistries')
    const resourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
    const attachment = registries.ATTACHMENT_TYPES.get(
      resourceLocation.fromNamespaceAndPath('yes_steve_model', 'model_id')
    )
    if (attachment === null) {
      console.warn('YSM: no ' + YSM_ATTACHMENT + ' attachment; nothing to stand down')
      lookupFailed = true
      return null
    }

    let companion = null
    try {
      companion = Java.loadClass(COMPANION_CLASS)
    } catch (missing) {
      // Jenny is not here. The armour half still works.
      console.info('YSM: no companion mod, so only the model rule is in force')
    }

    lookup = { attachment: attachment, companion: companion }
  } catch (error) {
    console.warn('YSM: could not reach the model attachment (' + error + '); standing aside')
    lookupFailed = true
  }

  return lookup
}

// What YSM knows about this player, read through the serialisable interface
// rather than through the mod's own getters: the class name and its methods are
// obfuscated and change between releases, while these NBT keys have not.
function readModelState(player, attachment) {
  const existing = player.getExistingData(attachment)
  if (existing === null || !existing.isPresent()) return null

  const nbt = existing.get().serializeNBT(player.level().registryAccess())
  return { id: nbt.getString('model_id'), disabled: nbt.getBoolean('disabled') }
}

function isInScene(player, companion) {
  if (companion === null) return false

  const nearby = player.level().getEntities(player, player.getBoundingBox().inflate(SCENE_RADIUS))
  for (let index = 0; index < nearby.size(); index++) {
    const entity = nearby.get(index)
    if (!companion.isInstance(entity)) continue
    if (!entity.isInScene()) continue

    const partner = entity.scenePartnerId()
    if (partner.isPresent() && partner.get().equals(player.getUUID())) return true
  }

  return false
}

ServerEvents.tick(event => {
  ticks++
  if (ticks % CHECK_EVERY_TICKS !== 0) return

  const resolved = resolveLookup()
  if (resolved === null) return

  event.server.getPlayerList().getPlayers().forEach(player => {
    let state
    try {
      state = readModelState(player, resolved.attachment)
    } catch (error) {
      console.warn('YSM: could not read the model of ' + player.getName().getString() + ' (' + error + ')')
      return
    }
    // Nobody has sent this player a model yet; there is nothing to stand down.
    if (state === null) return

    const name = player.getName().getString()
    if (lastSeenModel[name] !== state.id) {
      lastSeenModel[name] = state.id
      console.info('YSM: ' + name + ' is on model "' + state.id + '"')
    }

    const wantsPlainBody = PLAIN_PLAYER_MODELS.indexOf(state.id) >= 0
    const shouldStandDown = wantsPlainBody || isInScene(player, resolved.companion)
    if (shouldStandDown === state.disabled) return

    console.info(
      shouldStandDown
        ? 'YSM: standing down for ' + name + (wantsPlainBody ? ' (plain player model)' : ' (scene)')
        : 'YSM: drawing again for ' + name
    )
    event.server.runCommandSilent('ysm model disable ' + name + ' ' + shouldStandDown)
  })
})

PlayerEvents.loggedOut(event => {
  delete lastSeenModel[event.player.getName().getString()]
})
