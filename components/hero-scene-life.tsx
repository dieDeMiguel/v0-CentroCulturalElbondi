import type { CSSProperties } from 'react'
import { PRIMARY_GUST } from '@/components/hero-scene-wind'

const IMAGE_WIDTH = 1584
const IMAGE_HEIGHT = 672
const SCENE_SRC = '/images/el-bondi-scene.png'

type Cutout = {
  name: string
  x: number
  y: number
  w: number
  h: number
  origin: string
  /** Gentle continuous breathing; omit for plants that only move when the wind passes. */
  sway?: { duration: number; delay: number }
}

// Regions are in source-image pixels; each one is a masked copy of a single plant animated in place around its own pivot.
const cutouts: Cutout[] = [
  { name: 'tree-left-1', x: 0, y: 105, w: 150, h: 170, origin: '50% 100%', sway: { duration: 7, delay: 0 } },
  { name: 'tree-left-2', x: 145, y: 165, w: 150, h: 115, origin: '50% 100%', sway: { duration: 8, delay: 1.2 } },
  { name: 'tree-right-1', x: 1120, y: 85, w: 170, h: 185, origin: '50% 100%', sway: { duration: 8.5, delay: 0.6 } },
  { name: 'tree-right-2', x: 1290, y: 140, w: 150, h: 135, origin: '50% 100%', sway: { duration: 7, delay: 1.8 } },
  { name: 'tree-right-3', x: 1440, y: 90, w: 144, h: 180, origin: '50% 100%', sway: { duration: 9, delay: 3 } },
  { name: 'street-tree-left', x: 0, y: 320, w: 100, h: 330, origin: '30% 100%' },
  { name: 'street-tree-right', x: 1490, y: 390, w: 94, h: 265, origin: '70% 100%' },
  { name: 'ivy-crown', x: 900, y: 195, w: 165, h: 150, origin: '80% 15%' },
]

function cutoutStyle({ x, y, w, h, origin, sway }: Cutout): CSSProperties {
  // The gust reaches each plant as the leaves cross the scene from left to right.
  const gustDelay = PRIMARY_GUST.offset + (x / IMAGE_WIDTH) * PRIMARY_GUST.crossing
  const names = ['scene-plant-gust']
  const durations = [`${PRIMARY_GUST.cycle}s`]
  const delays = [`${gustDelay}s`]
  if (sway) {
    names.push('scene-sway')
    durations.push(`${sway.duration}s`)
    delays.push(`${sway.delay}s`)
  }

  return {
    left: `${(x / IMAGE_WIDTH) * 100}%`,
    top: `${(y / IMAGE_HEIGHT) * 100}%`,
    width: `${(w / IMAGE_WIDTH) * 100}%`,
    height: `${(h / IMAGE_HEIGHT) * 100}%`,
    backgroundImage: `url(${SCENE_SRC})`,
    backgroundSize: `${(IMAGE_WIDTH / w) * 100}% ${(IMAGE_HEIGHT / h) * 100}%`,
    backgroundPosition: `${(x / (IMAGE_WIDTH - w)) * 100}% ${(y / (IMAGE_HEIGHT - h)) * 100}%`,
    transformOrigin: origin,
    animationName: names.join(', '),
    animationDuration: durations.join(', '),
    animationDelay: delays.join(', '),
  }
}

export function HeroSceneLife() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {cutouts.map((cutout) => (
        <span key={cutout.name} className="scene-cutout" style={cutoutStyle(cutout)} />
      ))}
    </div>
  )
}
