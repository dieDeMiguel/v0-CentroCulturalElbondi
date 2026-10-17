import type { CSSProperties } from 'react'

const IMAGE_WIDTH = 1584
const IMAGE_HEIGHT = 672
const SCENE_SRC = '/images/el-bondi-scene.png'

type Cutout = {
  name: string
  x: number
  y: number
  w: number
  h: number
  motion: 'sway' | 'swing' | 'bob' | 'bounce' | 'rock'
  origin: string
  duration: number
  delay: number
}

// Regions are in source-image pixels; each one is a masked copy of the scene animated around a pivot.
const cutouts: Cutout[] = [
  { name: 'tree-left-1', x: 0, y: 105, w: 150, h: 170, motion: 'sway', origin: '50% 100%', duration: 7, delay: 0 },
  { name: 'tree-left-2', x: 145, y: 165, w: 150, h: 115, motion: 'sway', origin: '50% 100%', duration: 8, delay: 1.2 },
  { name: 'tree-left-3', x: 275, y: 100, w: 150, h: 180, motion: 'sway', origin: '50% 100%', duration: 7.5, delay: 2.4 },
  { name: 'tree-right-1', x: 1120, y: 85, w: 170, h: 185, motion: 'sway', origin: '50% 100%', duration: 8.5, delay: 0.6 },
  { name: 'tree-right-2', x: 1290, y: 140, w: 150, h: 135, motion: 'sway', origin: '50% 100%', duration: 7, delay: 1.8 },
  { name: 'tree-right-3', x: 1440, y: 90, w: 144, h: 180, motion: 'sway', origin: '50% 100%', duration: 9, delay: 3 },
  { name: 'tree-front-left', x: 0, y: 320, w: 130, h: 200, motion: 'sway', origin: '30% 100%', duration: 6.5, delay: 0.9 },
  { name: 'tree-front-right', x: 1480, y: 380, w: 104, h: 160, motion: 'sway', origin: '60% 100%', duration: 7.2, delay: 2.1 },

  { name: 'silks', x: 575, y: 40, w: 145, h: 230, motion: 'swing', origin: '50% 0%', duration: 6, delay: 0 },
  { name: 'trapeze', x: 745, y: 62, w: 92, h: 215, motion: 'swing', origin: '50% 0%', duration: 4.8, delay: 0.8 },
  { name: 'rope', x: 852, y: 40, w: 78, h: 210, motion: 'swing', origin: '55% 0%', duration: 5.4, delay: 1.6 },

  { name: 'juggler-balls', x: 330, y: 482, w: 75, h: 55, motion: 'bounce', origin: '50% 100%', duration: 1.4, delay: 0 },
  { name: 'unicycle', x: 468, y: 535, w: 70, h: 112, motion: 'rock', origin: '50% 100%', duration: 2.2, delay: 0.3 },
  { name: 'hula', x: 568, y: 540, w: 72, h: 105, motion: 'rock', origin: '50% 100%', duration: 1.6, delay: 0.5 },
  { name: 'tango', x: 790, y: 512, w: 95, h: 135, motion: 'rock', origin: '50% 100%', duration: 3.2, delay: 0 },

  { name: 'accordion', x: 938, y: 518, w: 64, h: 128, motion: 'bob', origin: '50% 100%', duration: 1.2, delay: 0 },
  { name: 'guitar-1', x: 1004, y: 515, w: 62, h: 130, motion: 'bob', origin: '50% 100%', duration: 1.2, delay: 0.3 },
  { name: 'drums', x: 1080, y: 530, w: 70, h: 60, motion: 'bob', origin: '50% 100%', duration: 0.6, delay: 0.15 },
  { name: 'violin', x: 1155, y: 515, w: 62, h: 130, motion: 'bob', origin: '50% 100%', duration: 1.2, delay: 0.6 },
  { name: 'guitar-2', x: 1220, y: 515, w: 70, h: 130, motion: 'bob', origin: '50% 100%', duration: 1.2, delay: 0.9 },
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
