'use client'

import { useEffect, useState } from 'react'

const VISIBLE_MS = 1100
const EXIT_MS = 900

export const SPLASH_SEEN_KEY = 'elbondi-splash-seen'

/*
 * Runs before first paint so that, once the splash has been shown in this
 * browser session, full page loads hide it via CSS without a purple flash.
 */
export const splashSeenScript = `try{if(sessionStorage.getItem('${SPLASH_SEEN_KEY}')){document.documentElement.dataset.splashSeen=''}}catch(e){}`

export function SplashScreen() {
  const [phase, setPhase] = useState<'visible' | 'leaving' | 'gone'>('visible')

  useEffect(() => {
    let alreadySeen = false
    try {
      alreadySeen = sessionStorage.getItem(SPLASH_SEEN_KEY) !== null
      sessionStorage.setItem(SPLASH_SEEN_KEY, '1')
    } catch {}

    if (alreadySeen) {
      setPhase('gone')
      return
    }

    const leave = setTimeout(() => setPhase('leaving'), VISIBLE_MS)
    const remove = setTimeout(() => setPhase('gone'), VISIBLE_MS + EXIT_MS)
    return () => {
      clearTimeout(leave)
      clearTimeout(remove)
    }
  }, [])

  if (phase === 'gone') return null

  return (
    <div
      role="status"
      aria-label="Cargando El Bondi"
      data-leaving={phase === 'leaving'}
      className="splash-screen fixed inset-0 z-[100] flex items-center justify-center bg-splash"
    >
      <img
        src="/images/logo-white.png"
        alt=""
        aria-hidden="true"
        className="splash-logo h-16 w-auto md:h-20"
      />
    </div>
  )
}
