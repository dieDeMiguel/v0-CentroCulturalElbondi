import type { CSSProperties } from 'react'

const IMAGE_WIDTH = 1584
const IMAGE_HEIGHT = 672
const SCENE_SRC = '/images/el-bondi-scene.png'

type Motion =
  | 'sway'
  | 'swing'
  | 'groove'
  | 'drum'
  | 'tango'
  | 'hula'
  | 'pedal'
  | 'juggle'
  | 'toss'

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

  { name: 'silks', x: 578, y: 40, w: 130, h: 232, motion: 'swing', origin: '50% 0%', duration: 6, delay: 0 },
  { name: 'trapeze', x: 745, y: 64, w: 90, h: 212, motion: 'swing', origin: '50% 0%', duration: 4.6, delay: 0.8 },
  { name: 'rope', x: 856, y: 40, w: 72, h: 208, motion: 'swing', origin: '55% 0%', duration: 5.4, delay: 1.6 },

  { name: 'juggler', x: 330, y: 528, w: 74, h: 118, motion: 'juggle', origin: '50% 100%', duration: 1.4, delay: 0 },
  { name: 'juggler-balls', x: 332, y: 486, w: 60, h: 44, motion: 'toss', origin: '50% 100%', duration: 0.7, delay: 0 },
  { name: 'unicycle', x: 466, y: 508, w: 70, h: 140, motion: 'pedal', origin: '50% 100%', duration: 2.4, delay: 0.3 },
  { name: 'hula', x: 566, y: 512, w: 78, h: 134, motion: 'hula', origin: '50% 100%', duration: 0.9, delay: 0 },
  { name: 'tango', x: 790, y: 512, w: 100, h: 136, motion: 'tango', origin: '50% 100%', duration: 3.6, delay: 0 },

  { name: 'accordion', x: 936, y: 518, w: 66, h: 128, motion: 'groove', origin: '50% 100%', duration: 1, delay: 0 },
  { name: 'guitar-1', x: 1004, y: 516, w: 64, h: 130, motion: 'groove', origin: '50% 100%', duration: 1, delay: 0.25 },
  { name: 'drummer', x: 1082, y: 532, w: 54, h: 56, motion: 'drum', origin: '50% 100%', duration: 0.5, delay: 0 },
  { name: 'violin', x: 1152, y: 516, w: 64, h: 130, motion: 'groove', origin: '50% 100%', duration: 1, delay: 0.5 },
  { name: 'guitar-2', x: 1218, y: 516, w: 72, h: 130, motion: 'groove', origin: '50% 100%', duration: 1, delay: 0.75 },
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
