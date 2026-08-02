import { useCallback, useRef } from 'react'

// Lazily-created, shared across every button so we don't spawn one
// AudioContext per component instance (Hero + Footer both use this hook).
let sharedCtx: AudioContext | null = null

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null
  const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!Ctor) return null
  if (!sharedCtx) sharedCtx = new Ctor()
  // Browsers start the context suspended until a user gesture unlocks it;
  // this resume() is a no-op once that's already happened.
  if (sharedCtx.state === 'suspended') void sharedCtx.resume()
  return sharedCtx
}

function playTone(freq: number, durationMs: number, gainValue = 0.05) {
  const ctx = getAudioContext()
  if (!ctx) return

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
