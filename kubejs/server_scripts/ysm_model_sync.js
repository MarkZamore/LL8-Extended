// Yes Steve Model hands its models to a client after the connection handshake, and on this
// pack that handover goes missing: the host sits on "YSM Model Sync State: Loading", and a guest
// lost it while their client was frozen for half a minute inside EMI rebuilding its index.
//
// This used to answer by running "/ysm model reload", which rereads the whole model set from disk
// and sends it to every player online. Retried for one late client, that cost everybody: ten
// reloads in one session, one of them a 3.6 second server stall. It now calls the method YSM itself
// calls after the handshake, the one that sends the set to a single player, and YSM reports how
// that went through the Consumer it is given - so a send that landed is the last one, and a send
// that failed while the client was awake is retried, which the old poll could not tell apart.
//
// It sends only to players whose connection negotiated YSM's channel, yes_steve_model:2_6_0:
// NeoForge disconnects a client that is sent a payload on a channel it does not have. An answer
// that arrives after its attempt was given up on is ignored. Four failed attempts and it stops.
//
// The class and both methods are obfuscated names from YSM 2.6.5 and change between releases. If
// they are gone the script says so once and stands aside, and models then need "/ysm model reload"
// by hand. Everything is var inside a function, because KubeJS runs every server script in one
// shared scope and a top-level name here would be declared for every other script too.

;(function () {
  var CHECK_EVERY_TICKS = 20, GRACE_TICKS = 200, AWAKE_TICKS = 100, STILL_TICKS = 1200, RETRY_TICKS = 1800, ANSWER_TICKS = 2400, MAX_ATTEMPTS = 4
  var manager = null, registry = null, ysmChannel = null
  try {
    // YSM 2.6.5: серверный менеджер моделей, имя обфусцировано и сменится с релизом
    manager = Java.loadClass('com.elfmcys.yesstevemodel.O0Ooo000O0ooO00Oooo00oOO')
    registry = Java.loadClass('net.neoforged.neoforge.network.registration.NetworkRegistry')
    // канал YSM: o0ooOoOO0Oo0OoOO00oo0ooo <clinit> = fromNamespaceAndPath("yes_steve_model", "2.6.0".replace('.', '_'))
    ysmChannel = Java.loadClass('net.minecraft.resources.ResourceLocation').fromNamespaceAndPath('yes_steve_model', '2_6_0')
  } catch (e) { manager = null; console.warn('YSM: model manager not found (' + e + '); model sync stands aside') }
  var waiting = {}, tick = 0

  PlayerEvents.loggedIn(function (event) {
    if (manager === null) return
    var p = event.player
    waiting[p.getName().getString()] = { player: p, online: 0, still: 0, attempts: 0, lastAttempt: -RETRY_TICKS, sentAt: -1, answer: null, token: null, x: p.getX(), y: p.getY(), z: p.getZ() }
  })
  PlayerEvents.loggedOut(function (event) { delete waiting[event.player.getName().getString()] })
  ServerEvents.unloaded(function () { waiting = {} })

  ServerEvents.tick(function (event) {
    tick++
    if (tick % CHECK_EVERY_TICKS !== 0 || manager === null) return
    var broken = false
    Object.keys(waiting).forEach(function (name) {
      var s = waiting[name]
      if (broken || !s) return
      var p = s.player
      var moved = Math.abs(p.getX() - s.x) + Math.abs(p.getY() - s.y) + Math.abs(p.getZ() - s.z) > 0.01
      s.x = p.getX(); s.y = p.getY(); s.z = p.getZ()
      s.online += CHECK_EVERY_TICKS
      s.still = moved ? 0 : s.still + CHECK_EVERY_TICKS

      if (s.sentAt >= 0) {
        var r = s.answer
        if (r === null && s.online - s.sentAt < ANSWER_TICKS) return
        var ok = r !== null && r.oOo0OO0O0o000OO0O000oo0o() && r.OOo0o0000Ooo0o00OO0oOOoO().isEmpty()
        s.sentAt = -1; s.answer = null; s.token = null
        if (ok) { console.info('YSM: models reached ' + name + ' on attempt ' + s.attempts); delete waiting[name]; return }
        console.info('YSM: attempt ' + s.attempts + ' for ' + name + ' failed' + (r === null ? ' (no answer)' : ''))
        if (s.attempts >= MAX_ATTEMPTS) { console.info('YSM: giving up on ' + name); delete waiting[name] }
        return
      }
      if (s.online < GRACE_TICKS || s.online - s.lastAttempt < RETRY_TICKS) return
      var awake = s.still <= AWAKE_TICKS
      if (!awake && s.still < STILL_TICKS) return
      try {
        // YSM сам шлёт только после рукопожатия, а рассылка reload пропускает клиентов без канала. Без этой проверки клиента без YSM NeoForge отключит.
        if (!registry.hasChannel(p.connection, ysmChannel)) { console.info('YSM: ' + name + ' has no Yes Steve Model channel; nothing to send'); delete waiting[name]; return }
        s.attempts++; s.lastAttempt = s.online; s.sentAt = s.online
        var token = {}; s.token = token; s.answer = null
        console.info('YSM: sending the models to ' + name + ' alone (attempt ' + s.attempts + ', client ' + (awake ? 'awake' : 'quiet') + ')')
        // ответ приходит из потока YSM; только запоминаем, и только для этой попытки
        manager.oOo0OO0O0o000OO0O000oo0o(p, function (result) { if (s.token === token) s.answer = result })
      } catch (e) {
        console.warn('YSM: could not send to ' + name + ' (' + e + '); standing aside')
        broken = true
      }
    })
    if (broken) { manager = null; waiting = {} }
  })
})()
