import { useEffect, useState } from 'react'

export type Platform = 'apple' | 'android' | 'windows' | 'linux'

function detectPlatform(): Platform {
  const ua = navigator.userAgent

  // Android UAs also contain "Linux", so check it first.
  if (/Android/.test(ua)) return 'android'
  // iPadOS 13+ reports as "Macintosh" but is still an Apple device.
  if (/iPhone|iPad|iPod|Macintosh|Mac OS X/.test(ua)) return 'apple'
  if (/Windows/.test(ua)) return 'windows'
  if (/Linux/.test(ua)) return 'linux'

  return 'apple'
}

export function useDetectedPlatform(): { platform: Platform; hasDetected: boolean } {
  const [platform, setPlatform] = useState<Platform>('apple')
  const [hasDetected, setHasDetected] = useState(false)

  useEffect(() => {
    setPlatform(detectPlatform())
    setHasDetected(true)
  }, [])

  return { platform, hasDetected }
}
