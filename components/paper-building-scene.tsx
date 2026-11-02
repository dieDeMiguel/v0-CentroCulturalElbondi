import type { CSSProperties } from 'react'
import { preload } from 'react-dom'
import { round, seeded } from '@/lib/seeded'

/** Jacaranda canopies in the illustration, as % of its width / height. */
const JACARANDAS = [
  { x: 5, y: 22, spread: 4 },
  { x: 14, y: 24, spread: 4 },
  { x: 25, y: 20, spread: 4.5 },
  { x: 38, y: 22, spread: 4 },
  { x: 47, y: 29, spread: 3 },
  { x: 55, y: 25, spread: 4 },
  { x: 64, y: 20, spread: 4 },
  { x: 75, y: 24, spread: 4 },
  { x: 86, y: 25, spread: 4 },
  { x: 95, y: 20, spread: 3.5 },
]

const PETALS_PER_TREE = 5

const petals = JACARANDAS.flatMap((tree, treeIndex) =>
  Array.from({ length: PETALS_PER_TREE }, (_, i) => {
    const r = (k: number) => seeded(treeIndex, i, k)
    // Most petals keep falling past the illustration into the next section.
    const reach = round(r(9) < 0.2 ? 0.1 : 0.45 + r(10) * 0.55)
    const size = round(9 + r(3) * 8, 1)
    return {
      id: `${treeIndex}-${i}`,
      left: round(tree.x + (r(1) - 0.5) * tree.spread * 2),
      top: round(tree.y + (r(2) - 0.5) * 6),
      size,
      height: round(size * 0.72, 1),
      duration: round(10 + r(4) * 8 + reach * 6),
      delay: round(-r(5) * 20),
      sway: round((r(6) - 0.5) * 10),
      drift: round((r(7) - 0.5) * 16),
      fall: `calc(${100 - tree.y}cqh + var(--petal-reach) * ${reach})`,
      light: r(8) > 0.55,
    }
  }),
)

const HERO_SRC = '/images/bondi-edificio-papel-v6-1744.webp'
const HERO_SRCSET =
  '/images/bondi-edificio-papel-v6-960.webp 960w, /images/bondi-edificio-papel-v6-1744.webp 1744w'
const HERO_SIZES = '(min-width: 860px) 100vw, (min-width: 768px) 860px, 620px'

export function PaperBuildingScene() {
  // Hoists a responsive preload into <head> so the hero starts downloading before CSS/JS.
  preload(HERO_SRC, {
    as: 'image',
    imageSrcSet: HERO_SRCSET,
    imageSizes: HERO_SIZES,
    fetchPriority: 'high',
  })
  preload('/images/logo-dark.webp', { as: 'image', fetchPriority: 'high' })

  return (
    <div className="relative w-full overflow-x-clip">
      <div
        className="paper-scene relative left-1/2 aspect-[1744/608] w-full min-w-[620px] -translate-x-1/2 md:min-w-[860px]"
        style={{ containerType: 'size' }}
      >
        <img
          src={HERO_SRC}
          srcSet={HERO_SRCSET}
          sizes={HERO_SIZES}
          alt="Ilustración en papel del edificio de El Bondi: fachadas de colores con el cartel del centro cultural, el portal con arco arcoíris cubierto de enredadera, pequeños árboles verdes en las esquinas y una hilera de jacarandás florecidas detrás de los techos"
          width={1744}
          height={608}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 size-full object-cover object-bottom"
        />

        <img
          src="/images/logo-dark.webp"
          alt=""
          width={600}
          height={153}
          fetchPriority="high"
          decoding="async"
          className="pointer-events-none absolute left-[42.3%] top-[70.8%] w-[14%] opacity-90 mix-blend-multiply"
        />

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
                  height: `${petal.height}px`,
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
