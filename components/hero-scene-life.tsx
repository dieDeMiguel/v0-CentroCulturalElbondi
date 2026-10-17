import type { CSSProperties } from 'react'

const IMAGE_WIDTH = 1584
const IMAGE_HEIGHT = 672
const SCENE_SRC = '/images/el-bondi-scene.png'

type Motion = 'sway'

type Cutout = {
  name: string
  x: number
  y: number
  w: number
  h: number
  motion: Motion
  origin: string
  duration: number
  delay: number
}

// Regions are in source-image pixels; each one is a masked copy of a single figure animated in place around its own pivot.
const cutouts: Cutout[] = [
  { name: 'tree-left-1', x: 0, y: 105, w: 150, h: 170, motion: 'sway', origin: '50% 100%', duration: 7, delay: 0 },
  { name: 'tree-left-2', x: 145, y: 165, w: 150, h: 115, motion: 'sway', origin: '50% 100%', duration: 8, delay: 1.2 },
  { name: 'tree-left-3', x: 275, y: 100, w: 150, h: 180, motion: 'sway', origin: '50% 100%', duration: 7.5, delay: 2.4 },
  { name: 'tree-right-1', x: 1120, y: 85, w: 170, h: 185, motion: 'sway', origin: '50% 100%', duration: 8.5, delay: 0.6 },
  { name: 'tree-right-2', x: 1290, y: 140, w: 150, h: 135, motion: 'sway', origin: '50% 100%', duration: 7, delay: 1.8 },
  { name: 'tree-right-3', x: 1440, y: 90, w: 144, h: 180, motion: 'sway', origin: '50% 100%', duration: 9, delay: 3 },
]

function cutoutStyle({ x, y, w, h, origin, duration, delay }: Cutout): CSSProperties {
  return {
    left: `${(x / IMAGE_WIDTH) * 100}%`,
    top: `${(y / IMAGE_HEIGHT) * 100}%`,
    width: `${(w / IMAGE_WIDTH) * 100}%`,
    height: `${(h / IMAGE_HEIGHT) * 100}%`,
    backgroundImage: `url(${SCENE_SRC})`,
    backgroundSize: `${(IMAGE_WIDTH / w) * 100}% ${(IMAGE_HEIGHT / h) * 100}%`,
    backgroundPosition: `${(x / (IMAGE_WIDTH - w)) * 100}% ${(y / (IMAGE_HEIGHT - h)) * 100}%`,
    transformOrigin: origin,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
  }
}

export function HeroSceneLife() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {cutouts.map((cutout) => (
        <span
          key={cutout.name}
          className={`scene-cutout scene-${cutout.motion}`}
          style={cutoutStyle(cutout)}
        />
      ))}
    </div>
  )
}
