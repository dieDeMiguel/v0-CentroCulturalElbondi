'use client'

import { useEffect, useRef, type CSSProperties } from 'react'

type Petal = {
  left: number
  drift: number
  fall: number
  delay: number
  sway: number
  size: number
  tone: 'petal-a' | 'petal-b' | 'petal-c'
}

// Petals leave the jacarandás on both sides and drift toward the centre, landing on the Eventos title.
const petals: Petal[] = [
  { left: 4, drift: 28, fall: 21, delay: 1.2, sway: 3.5, size: 10, tone: 'petal-b' },
  { left: 13, drift: 30, fall: 20, delay: 0, sway: 3.2, size: 11, tone: 'petal-a' },
  { left: 15, drift: 22, fall: 23, delay: 5.5, sway: 3.8, size: 9, tone: 'petal-c' },
  { left: 28, drift: 20, fall: 21, delay: 3, sway: 3.4, size: 12, tone: 'petal-a' },
  { left: 30, drift: 14, fall: 24, delay: 9, sway: 4.1, size: 9, tone: 'petal-b' },
  { left: 8, drift: 36, fall: 25, delay: 12, sway: 3.6, size: 10, tone: 'petal-c' },
  { left: 82, drift: -26, fall: 21, delay: 1.8, sway: 3.3, size: 11, tone: 'petal-a' },
  { left: 80, drift: -18, fall: 23, delay: 6.5, sway: 3.9, size: 9, tone: 'petal-c' },
  { left: 94, drift: -32, fall: 20, delay: 4, sway: 3, size: 10, tone: 'petal-b' },
  { left: 92, drift: -22, fall: 24, delay: 10, sway: 3.7, size: 12, tone: 'petal-a' },
  { left: 85, drift: -34, fall: 25, delay: 13.5, sway: 4, size: 8, tone: 'petal-b' },
]

export function JacarandaPetals({ landingSelector }: { landingSelector: string }) {
  const layerRef = useRef<HTMLDivElement>(null)

  // The fall length depends on how far below the canopy the landing title ends up, which varies with viewport and content.
  useEffect(() => {
    const layer = layerRef.current
    const container = layer?.parentElement
    const landing = document.querySelector<HTMLElement>(landingSelector)
    if (!layer || !container || !landing) return

    const measure = () => {
      const layerTop = layer.getBoundingClientRect().top
      const landingRect = landing.getBoundingClientRect()
      const distance = landingRect.top + landingRect.height / 2 - layerTop
      if (distance > 0) layer.style.setProperty('--fall-distance', `${Math.round(distance)}px`)
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(container)
    return () => observer.disconnect()
  }, [landingSelector])

  return (
    <div ref={layerRef} aria-hidden="true" className="jacaranda-petals">
      {petals.map((p) => (
        <span
          key={`${p.left}-${p.delay}`}
          className="petal-fall"
          style={
            {
              left: `${p.left}%`,
              '--drift': `${p.drift}vw`,
              animationDuration: `${p.fall}s`,
              animationDelay: `${p.delay}s`,
            } as CSSProperties
          }
        >
          <span className="petal-sway" style={{ animationDuration: `${p.sway}s` }}>
            <span className={`petal ${p.tone}`} style={{ width: `${p.size}px` }} />
          </span>
        </span>
      ))}
    </div>
  )
}
