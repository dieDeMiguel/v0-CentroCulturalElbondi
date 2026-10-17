import type { CSSProperties } from 'react'

type Petal = {
  left: number
  drift: number
  fall: number
  delay: number
  sway: number
  size: number
  tone: 'petal-a' | 'petal-b' | 'petal-c'
}

// Petals leave the jacarandá canopy and drift right as they fall, landing across the title.
const petals: Petal[] = [
  { left: 18, drift: 30, fall: 14, delay: 0, sway: 3.2, size: 11, tone: 'petal-a' },
  { left: 22, drift: 22, fall: 16, delay: 2.5, sway: 3.8, size: 9, tone: 'petal-b' },
  { left: 15, drift: 40, fall: 15, delay: 5, sway: 3.4, size: 12, tone: 'petal-c' },
  { left: 25, drift: 34, fall: 17, delay: 7.5, sway: 4.1, size: 10, tone: 'petal-a' },
  { left: 20, drift: 18, fall: 13, delay: 9.5, sway: 3, size: 9, tone: 'petal-c' },
  { left: 17, drift: 46, fall: 18, delay: 11, sway: 3.6, size: 11, tone: 'petal-b' },
  { left: 24, drift: 26, fall: 15, delay: 13, sway: 3.9, size: 10, tone: 'petal-a' },
  { left: 21, drift: 38, fall: 16, delay: 3.8, sway: 3.3, size: 8, tone: 'petal-b' },
]

export function JacarandaPetals() {
  return (
    <div aria-hidden="true" className="jacaranda-petals">
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
