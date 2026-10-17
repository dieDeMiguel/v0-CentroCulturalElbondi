import type { CSSProperties } from 'react'

type Leaf = {
  top: number
  delay: number
  flutter: number
  size: number
  tone: 'leaf-a' | 'leaf-b' | 'leaf-c'
}

// Two gusts on different cycles so the wind never feels like a fixed loop.
const gusts: { cycle: number; offset: number; leaves: Leaf[] }[] = [
  {
    cycle: 19,
    offset: 3,
    leaves: [
      { top: 22, delay: 0, flutter: 2.2, size: 1.1, tone: 'leaf-a' },
      { top: 30, delay: 0.4, flutter: 2.8, size: 0.9, tone: 'leaf-b' },
      { top: 18, delay: 0.9, flutter: 2.4, size: 1.2, tone: 'leaf-c' },
      { top: 38, delay: 1.3, flutter: 3.1, size: 0.8, tone: 'leaf-a' },
      { top: 26, delay: 1.8, flutter: 2.6, size: 1, tone: 'leaf-b' },
    ],
  },
  {
    cycle: 27,
    offset: 13,
    leaves: [
      { top: 34, delay: 0, flutter: 2.5, size: 1, tone: 'leaf-c' },
      { top: 24, delay: 0.6, flutter: 3, size: 0.85, tone: 'leaf-a' },
      { top: 42, delay: 1.1, flutter: 2.3, size: 1.15, tone: 'leaf-b' },
    ],
  },
]

export function HeroSceneWind() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="scene-shooting-star" />
      {gusts.flatMap((gust, g) =>
        gust.leaves.map((leaf, i) => (
          <span
            key={`${g}-${i}`}
            className="scene-gust"
            style={
              {
                top: `${leaf.top}%`,
                animationDuration: `${gust.cycle}s`,
                animationDelay: `${gust.offset + leaf.delay}s`,
              } as CSSProperties
            }
          >
            <span
              className={`scene-leaf ${leaf.tone}`}
              style={{ width: `${leaf.size}%`, animationDuration: `${leaf.flutter}s` }}
            />
          </span>
        )),
      )}
    </div>
  )
}
