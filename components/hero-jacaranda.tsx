import type { CSSProperties } from 'react'

const IMAGE_WIDTH = 1584
const IMAGE_HEIGHT = 672

type Tree = { x: number; y: number; size: number; sway: number; mirror?: boolean }

// Source-image pixels. Each top sits below the neighbouring paper trees so the jacarandás nestle into the tree line.
const trees: Tree[] = [
  { x: 20, y: 168, size: 112, sway: 0.4 },
  { x: 165, y: 158, size: 128, sway: 1.6, mirror: true },
  { x: 405, y: 172, size: 116, sway: 2.8 },
  { x: 1235, y: 150, size: 132, sway: 0.9, mirror: true },
  { x: 1455, y: 166, size: 114, sway: 2.2 },
]

type Blob = { cx: number; cy: number; r: number; tone: 'deep' | 'mid' | 'light' }

// Back-to-front paper layers forming a wide umbrella canopy, in % of the tree box.
const canopy: Blob[] = [
  { cx: 26, cy: 64, r: 15, tone: 'deep' },
  { cx: 74, cy: 64, r: 15, tone: 'deep' },
  { cx: 50, cy: 66, r: 14, tone: 'deep' },
  { cx: 20, cy: 42, r: 21, tone: 'deep' },
  { cx: 50, cy: 30, r: 24, tone: 'deep' },
  { cx: 80, cy: 42, r: 21, tone: 'deep' },
  { cx: 34, cy: 56, r: 17, tone: 'deep' },
  { cx: 66, cy: 56, r: 17, tone: 'deep' },
  { cx: 28, cy: 36, r: 15, tone: 'mid' },
  { cx: 54, cy: 22, r: 15, tone: 'mid' },
  { cx: 74, cy: 36, r: 14, tone: 'mid' },
  { cx: 46, cy: 46, r: 14, tone: 'mid' },
  { cx: 40, cy: 28, r: 9, tone: 'light' },
  { cx: 64, cy: 30, r: 9, tone: 'light' },
  { cx: 22, cy: 48, r: 8, tone: 'light' },
]

const branches = [
  { left: 45, top: 54, height: 46, rotate: 0, width: 9 },
  { left: 40, top: 48, height: 24, rotate: -38, width: 5 },
  { left: 55, top: 48, height: 24, rotate: 36, width: 5 },
]

function Jacaranda({ tree }: { tree: Tree }) {
  return (
    <div
      className="jacaranda"
      style={{
        left: `${(tree.x / IMAGE_WIDTH) * 100}%`,
        top: `${(tree.y / IMAGE_HEIGHT) * 100}%`,
        width: `${(tree.size / IMAGE_WIDTH) * 100}%`,
        height: `${(tree.size / IMAGE_HEIGHT) * 100}%`,
        animationDelay: `${tree.sway}s`,
      }}
    >
      <div className="absolute inset-0" style={tree.mirror ? { transform: 'scaleX(-1)' } : undefined}>
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
    </div>
  )
}

export function HeroJacaranda() {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      {trees.map((tree) => (
        <Jacaranda key={`${tree.x}-${tree.y}`} tree={tree} />
      ))}
    </div>
  )
}
