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
// "/ysm model reload" reloads the set and distributes it to everyone online, and
// after it the models are simply there. So the server runs it itself and nobody
// has to know the command exists.
//
// It hangs off the player joining, not off the world loading. Those are not the
// same moment and not even close: on this pack the integrated server is up
// forty-eight seconds before the player is in the world, and a reload in that
// gap distributes to nobody at all - which is what the first version of this
// did. A join is the one moment there is certainly somebody to give models to.
//
// Five seconds after it, not none: the reload is the fix for arriving too early,
// and there is no sense repeating that mistake from the other side.

const RELOAD_DELAY_TICKS = 100

// -1 means nothing is pending; anything else counts ticks since a player joined.
// A second player arriving during the countdown does not start a second one:
// the reload distributes to everybody online, so one covers them all.
let countdown = -1

PlayerEvents.loggedIn(event => {
  if (countdown < 0) countdown = 0
})

ServerEvents.unloaded(event => {
  countdown = -1
})

ServerEvents.tick(event => {
  if (countdown < 0) return
  countdown++
  if (countdown < RELOAD_DELAY_TICKS) return
  countdown = -1
  // Says so in the log, so that a run that did nothing can be told from a run
  // that never happened. This is the only trace the mod leaves either way.
  console.info('YSM: handing the models to the players who just joined')
  event.server.runCommandSilent('ysm model reload')
})
