import type { CSSProperties } from 'react'

const IMAGE_WIDTH = 1584
const IMAGE_HEIGHT = 672

// Sits over the tree beside the stage, in source-image pixels; the box is square so blob percentages stay round.
const TREE = { x: 255, y: 88, size: 200 }

type Blob = { cx: number; cy: number; r: number; tone: 'deep' | 'mid' | 'light' }

// Back-to-front paper layers forming a wide umbrella canopy, in % of the tree box.
const canopy: Blob[] = [
  { cx: 26, cy: 64, r: 15, tone: 'deep' },
  { cx: 74, cy: 64, r: 15, tone: 'deep' },
  { cx: 50, cy: 66, r: 14, tone: 'deep' },
  { cx: 20, cy: 40, r: 22, tone: 'deep' },
  { cx: 50, cy: 26, r: 26, tone: 'deep' },
  { cx: 80, cy: 40, r: 22, tone: 'deep' },
  { cx: 32, cy: 56, r: 18, tone: 'deep' },
  { cx: 68, cy: 56, r: 18, tone: 'deep' },
  { cx: 50, cy: 52, r: 20, tone: 'deep' },
  { cx: 27, cy: 34, r: 16, tone: 'mid' },
  { cx: 52, cy: 18, r: 17, tone: 'mid' },
  { cx: 75, cy: 32, r: 16, tone: 'mid' },
  { cx: 44, cy: 44, r: 15, tone: 'mid' },
  { cx: 64, cy: 50, r: 13, tone: 'mid' },
  { cx: 38, cy: 24, r: 10, tone: 'light' },
  { cx: 62, cy: 26, r: 11, tone: 'light' },
  { cx: 20, cy: 46, r: 9, tone: 'light' },
  { cx: 80, cy: 46, r: 9, tone: 'light' },
  { cx: 50, cy: 40, r: 9, tone: 'light' },
]

const branches = [
  { left: 45, top: 52, height: 48, rotate: 0, width: 9 },
  { left: 40, top: 46, height: 26, rotate: -38, width: 5 },
  { left: 55, top: 46, height: 26, rotate: 36, width: 5 },
]

export function HeroJacaranda() {
  return (
    <div
      aria-hidden="true"
      className="jacaranda"
      style={{
        left: `${(TREE.x / IMAGE_WIDTH) * 100}%`,
        top: `${(TREE.y / IMAGE_HEIGHT) * 100}%`,
        width: `${(TREE.size / IMAGE_WIDTH) * 100}%`,
        height: `${(TREE.size / IMAGE_HEIGHT) * 100}%`,
      }}
    >
      {branches.map((b) => (
        <span
          key={`${b.left}-${b.rotate}`}
          className="jacaranda-branch"
          style={{
            left: `${b.left}%`,
            top: `${b.top}%`,
            width: `${b.width}%`,
            height: `${b.height}%`,
            transform: `rotate(${b.rotate}deg)`,
          }}
        />
      ))}
      {canopy.map((blob) => (
        <span
          key={`${blob.cx}-${blob.cy}-${blob.tone}`}
          className={`jacaranda-blob jacaranda-${blob.tone}`}
          style={
            {
              left: `${blob.cx - blob.r}%`,
              top: `${blob.cy - blob.r}%`,
              width: `${blob.r * 2}%`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
