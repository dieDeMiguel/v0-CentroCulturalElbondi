import type { CSSProperties } from 'react'

type Point = { x: number; y: number; delay: number }

const IMAGE_WIDTH = 1584
const IMAGE_HEIGHT = 672

const stars: Point[] = [
  { x: 65, y: 37, delay: 0 },
  { x: 285, y: 62, delay: 1.4 },
  { x: 472, y: 30, delay: 0.7 },
  { x: 508, y: 100, delay: 2.2 },
  { x: 1055, y: 35, delay: 1.1 },
  { x: 1148, y: 70, delay: 2.8 },
  { x: 1400, y: 110, delay: 0.4 },
  { x: 1500, y: 42, delay: 1.9 },
]

const bulbs: Point[] = [
  { x: 520, y: 165, delay: 0.3 },
  { x: 555, y: 115, delay: 1.2 },
  { x: 625, y: 75, delay: 0 },
  { x: 690, y: 75, delay: 0.9 },
  { x: 760, y: 75, delay: 0.4 },
  { x: 850, y: 75, delay: 1.5 },
  { x: 935, y: 75, delay: 0.6 },
  { x: 1000, y: 120, delay: 1.8 },
  { x: 1030, y: 170, delay: 1.0 },
]

const windows: Point[] = [
  { x: 255, y: 395, delay: 0 },
  { x: 195, y: 535, delay: 2.5 },
  { x: 1390, y: 395, delay: 1.2 },
  { x: 1355, y: 535, delay: 3.4 },
  { x: 1530, y: 380, delay: 0.8 },
]

function position({ x, y, delay }: Point): CSSProperties {
  return {
    left: `${(x / IMAGE_WIDTH) * 100}%`,
    top: `${(y / IMAGE_HEIGHT) * 100}%`,
    animationDelay: `${delay}s`,
  }
}

export function HeroSceneMotion() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <span className="scene-moon-glow" style={position({ x: 175, y: 80, delay: 0 })} />
      {stars.map((star) => (
        <span key={`star-${star.x}`} className="scene-star" style={position(star)} />
      ))}
      {bulbs.map((bulb) => (
        <span key={`bulb-${bulb.x}-${bulb.y}`} className="scene-bulb" style={position(bulb)} />
      ))}
      {windows.map((pane) => (
        <span key={`window-${pane.x}-${pane.y}`} className="scene-window" style={position(pane)} />
      ))}
    </div>
  )
}
