// Yes Steve Model hands its models to a client over the network, and that
// handover goes missing on its own. The host loses it every time: the screen
// sits on "YSM Model Sync State: Loading" with one model in the list, the eight
// YSM Worker threads stand in an empty queue, and the mod says nothing at any
// log level. The server half is healthy - it packs the whole set into
// config/yes_steve_model/cache/server, twenty-six files and 19 MB of them, at
// startup. What never happens is the sending.
//
// "/ysm model reload" reloads the set and distributes it to everyone online,
// and after it the models are simply there. So the server runs it itself and
// nobody has to know the command exists. It hangs off a player joining, not off
// the world loading: on this pack the integrated server is up forty-eight
// seconds before the player is in the world, and a reload in that gap
// distributes to nobody at all.
//
// One reload five seconds after the join is what this used to do, and it is not
// enough. A guest lost the handover too, and her log says exactly why:
//
//   01:26:10  KubeJS: YSM: handing the models to the players who just joined
//   01:26:11  [YSM] Все модели перезагружены (985 мс)
//   01:26:18  [EMI] Reloading item groups on client thread took 31557ms
//   01:26:19  【YSM】Ошибка выдачи моделей игроку : anuvenn
//
// The models went out while her client was half a minute deep inside EMI
// rebuilding its index, deaf to everything on the network. A fixed delay cannot
// dodge a freeze of unknown length, so this waits for the client to prove it is
// awake, and keeps trying until an attempt lands on one that is.
//
// Awake means moved. A frozen client sends no movement packets whatsoever, so a
// position that changes is proof the other end is running. A position that does
// not change proves nothing - the player may just be standing there reading the
// quest book - so after a minute of stillness we try anyway rather than wait
// forever.
//
// There is no success to wait for. The mod tells the server nothing about how a
// handover went; the failure above was printed on her machine, not ours. So
// "until it works" means until an attempt was made under conditions that can
// work - one the client was awake to receive - and that attempt is the last.
// The cap of four is for the player who joins and never moves at all.

const CHECK_EVERY_TICKS = 20 // once a second; nothing here needs to be finer
const GRACE_TICKS = 200 // 10 s, the earliest the world is drawn and worth a try
const AWAKE_TICKS = 100 // moved within the last 5 s counts as awake
const STILL_TICKS = 1200 // a minute of stillness: try anyway, awake or not
const RETRY_TICKS = 1800 // 90 s between attempts, long enough for a freeze to end
const MAX_ATTEMPTS = 4

// Name -> what we know about that player's wait. Empty means nothing is pending
// and the tick handler costs one modulo.
const waiting = {}
let ticks = 0

PlayerEvents.loggedIn(event => {
  const player = event.player
  waiting[player.getName().getString()] = {
    player: player,
    online: 0,
    still: 0,
    attempts: 0,
    lastAttempt: -RETRY_TICKS,
    x: player.getX(),
    y: player.getY(),
    z: player.getZ(),
  }
})

PlayerEvents.loggedOut(event => {
  delete waiting[event.player.getName().getString()]
})

ServerEvents.unloaded(event => {
  Object.keys(waiting).forEach(name => delete waiting[name])
})

ServerEvents.tick(event => {
  ticks++
  if (ticks % CHECK_EVERY_TICKS !== 0) return

  const names = Object.keys(waiting)
  if (names.length === 0) return

  // A reload distributes to everybody online at once, so however many players
  // are due this second, they are all served by a single run of the command.
  let due = false

  names.forEach(name => {
    const state = waiting[name]
    const player = state.player
    const moved =
      Math.abs(player.getX() - state.x) +
        Math.abs(player.getY() - state.y) +
        Math.abs(player.getZ() - state.z) >
      0.01

    state.x = player.getX()
    state.y = player.getY()
    state.z = player.getZ()
    state.online += CHECK_EVERY_TICKS
    state.still = moved ? 0 : state.still + CHECK_EVERY_TICKS

    if (state.online < GRACE_TICKS) return
    if (state.online - state.lastAttempt < RETRY_TICKS) return

    const awake = state.still <= AWAKE_TICKS
    if (!awake && state.still < STILL_TICKS) return

    state.attempts++
    state.lastAttempt = state.online
    due = true

    // Says so in the log, so that a run that did nothing can be told from a run
    // that never happened. This is the only trace either side leaves us.
    console.info(
      'YSM: handing the models to ' +
        name +
        ' (attempt ' +
        state.attempts +
        ', client ' +
        (awake ? 'awake' : 'quiet') +
        ')'
    )

    if (awake) {
      delete waiting[name]
    } else if (state.attempts >= MAX_ATTEMPTS) {
      console.info('YSM: ' + name + ' never moved; that was the last attempt')
      delete waiting[name]
    }
  })

  if (due) event.server.runCommandSilent('ysm model reload')
})
