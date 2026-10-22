import Image from 'next/image'
import type { CSSProperties } from 'react'

/** Jacaranda canopies in the illustration, as % of its width / height. */
const JACARANDAS = [
  { x: 4.3, y: 26, spread: 4 },
  { x: 13.8, y: 28, spread: 4.5 },
  { x: 29.6, y: 27, spread: 4 },
  { x: 82, y: 28, spread: 4.5 },
  { x: 95.5, y: 26, spread: 3.5 },
]

const PETALS_PER_TREE = 8

// Deterministic pseudo-random so server and client render the same petals.
function seeded(n: number) {
  const value = Math.sin(n * 12.9898) * 43758.5453
  return value - Math.floor(value)
}

const petals = JACARANDAS.flatMap((tree, treeIndex) =>
  Array.from({ length: PETALS_PER_TREE }, (_, i) => {
    const seed = treeIndex * 31 + i * 7 + 1
    const r = (k: number) => seeded(seed + k)
    // Most petals keep falling past the illustration into the next section.
    const reach = r(9) < 0.2 ? 0.1 : 0.45 + r(10) * 0.55
    return {
      id: `${treeIndex}-${i}`,
      left: tree.x + (r(1) - 0.5) * tree.spread * 2,
      top: tree.y + (r(2) - 0.5) * 6,
      size: 9 + r(3) * 8,
      duration: 10 + r(4) * 8 + reach * 6,
      delay: -r(5) * 20,
      sway: (r(6) - 0.5) * 10,
      drift: (r(7) - 0.5) * 16,
      fall: `calc(${100 - tree.y}cqh + var(--petal-reach) * ${reach.toFixed(2)})`,
      light: r(8) > 0.55,
    }
  }),
)

export function PaperBuildingScene() {
  return (
    <div className="relative w-full overflow-x-clip">
      <div
        className="paper-scene relative left-1/2 aspect-[1842/442] w-full min-w-[860px] -translate-x-1/2"
        style={{ containerType: 'size' }}
      >
        <Image
          src="/images/bondi-edificio-papel.png"
          alt="Ilustración en papel del edificio de El Bondi: fachadas de colores, el portal con arco arcoíris cubierto de enredadera, acróbatas aéreas y jacarandás florecidas"
          fill
          priority
          sizes="(min-width: 860px) 100vw, 860px"
          className="object-cover object-bottom"
        />

        <div aria-hidden="true" className="paper-scene-sky pointer-events-none absolute inset-0" />

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 [perspective:600px]">
          {petals.map((petal) => (
            <span
              key={petal.id}
              className="jacaranda-petal absolute"
              data-tone={petal.light ? 'light' : 'deep'}
              style={
                {
                  left: `${petal.left}%`,
                  top: `${petal.top}%`,
                  width: `${petal.size}px`,
                  height: `${petal.size * 0.72}px`,
                  animationDuration: `${petal.duration}s`,
                  animationDelay: `${petal.delay}s`,
                  '--sway': `${petal.sway}cqw`,
                  '--drift': `${petal.drift}cqw`,
                  '--fall': petal.fall,
                } as CSSProperties
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}
