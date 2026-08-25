// Yes Steve Model hands its models to a client over the network, and the host's
// own client loses that handover every time. The screen sits on "YSM Model Sync
// State: Loading" with one model in the list - "default", which is the only one
// that loads by a path of its own and never travels - while the eight YSM Worker
// threads stand in an empty queue and the mod says nothing at any log level.
//
// The server half is healthy: it packs the whole set into
// config/yes_steve_model/cache/server, twenty-six files and 19 MB of them, at
// startup. What never happens is the sending. A remote client is fine - joining
// somebody else's world fills cache/client in three minutes flat - so it is the
// player who arrives in the same moment the integrated server does that is
// missed, which is the host, every time, whoever hosts.
//
// "/ysm model reload" reloads the set and distributes it, and after it the
// models are simply there. So the server runs it once itself, ten seconds after
// the world is up, and nobody has to know the command exists.
//
// Ten seconds rather than one: the reload is the fix for arriving too early, and
// there is no sense in repeating that mistake from the other side. It is also
// far enough after the join that the player is in the world to receive what
// comes back.

const RELOAD_DELAY_TICKS = 200
const YSM = 'yes_steve_model'

// -1 means nothing is pending; the tick handler counts up from 0 after a load.
let sinceLoad = -1

ServerEvents.loaded(event => {
  sinceLoad = Platform.isLoaded(YSM) ? 0 : -1
})

ServerEvents.unloaded(event => {
  sinceLoad = -1
})

ServerEvents.tick(event => {
  if (sinceLoad < 0) return
  sinceLoad++
  if (sinceLoad < RELOAD_DELAY_TICKS) return
  sinceLoad = -1
  event.server.runCommandSilent('ysm model reload')
})
