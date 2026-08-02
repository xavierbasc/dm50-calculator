import { useCallback, useRef } from 'react'

// Lazily-created, shared across every button so we don't spawn one
// AudioContext per component instance (Hero + Footer both use this hook).
let sharedCtx: AudioContext | null = null
let unlockRegistered = false

// Browsers only allow resume() to actually take effect when it runs inside
// a genuine user-gesture handler. Calling it from a hover (mouseenter isn't
// a gesture) just gets rejected and logs "AudioContext was not allowed to
// start" on every single hover. Instead, wire the one resume attempt to the
// first real gesture anywhere on the page, and let playTone() silently skip
// until that has happened.
function registerUnlock() {
  if (unlockRegistered || typeof window === 'undefined') return
  unlockRegistered = true
  const tryResume = () => {
    if (sharedCtx && sharedCtx.state === 'suspended') void sharedCtx.resume()
  }
  window.addEventListener('pointerdown', tryResume, { once: true })
  window.addEventListener('keydown', tryResume, { once: true })
}

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null
  if (!sharedCtx) {
    const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!Ctor) return null
    sharedCtx = new Ctor()
    registerUnlock()
  }
  return sharedCtx
}

function playTone(freq: number, durationMs: number, gainValue = 0.05) {
  const ctx = getAudioContext()
  // Silently skip until a real user gesture has unlocked the context —
  // calling resume()/start() before that just re-triggers the browser warning.
  if (!ctx || ctx.state !== 'running') return

  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.type = 'square'
  osc.frequency.value = freq

  const now = ctx.currentTime
  gain.gain.setValueAtTime(gainValue, now)
  gain.gain.exponentialRampToValueAtTime(0.0001, now + durationMs / 1000)

  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.start(now)
  osc.stop(now + durationMs / 1000)
}

export function useBeep() {
  // Debounce hover ticks: moving the mouse across adjacent buttons can fire
  // mouseenter in rapid bursts, which would otherwise stack overlapping tones.
  const lastHoverAt = useRef(0)

  const playHover = useCallback(() => {
    const now = performance.now()
    if (now - lastHoverAt.current < 60) return
    lastHoverAt.current = now
    playTone(880, 40, 0.035)
  }, [])

  const playDetect = useCallback(() => {
    playTone(660, 70, 0.05)
    setTimeout(() => playTone(990, 90, 0.05), 90)
  }, [])

  return { playHover, playDetect }
}
