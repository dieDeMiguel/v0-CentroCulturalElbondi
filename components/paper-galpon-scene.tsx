import type { CSSProperties } from 'react'
import { preload } from 'react-dom'
import { FallingLights } from '@/components/falling-lights'

const HERO_SRC = '/images/colectivo-galpon-papel-v11-1584.webp'
const HERO_SRCSET =
  '/images/colectivo-galpon-papel-v11-960.webp 960w, /images/colectivo-galpon-papel-v11-1584.webp 1584w'
const HERO_SIZES = '(min-width: 860px) 100vw, (min-width: 768px) 860px, 620px'

export function PaperGalponScene() {
  // Hoists a responsive preload into <head> so the hero starts downloading before CSS/JS.
  preload(HERO_SRC, {
    as: 'image',
    imageSrcSet: HERO_SRCSET,
    imageSizes: HERO_SIZES,
    fetchPriority: 'high',
  })

  return (
    <div className="relative w-full overflow-x-clip">
      {/* Same aspect and min-width as PaperBuildingScene so both heroes share the same height. */}
      <div
        className="relative left-1/2 aspect-[1744/608] w-full min-w-[620px] -translate-x-1/2 overflow-hidden md:min-w-[860px]"
        style={{ containerType: 'size' }}
      >
        <img
          src={HERO_SRC}
          srcSet={HERO_SRCSET}
          sizes={HERO_SIZES}
          alt="Ilustración en papel recortado del interior del galpón del Colectivo Cultural: paredes de ladrillo cubiertas de enredaderas, mural de papeles de colores y guarda geométrica a los costados, cabreadas de madera bajo un cielo morado estrellado, pared violeta con ventanal en arco, marquesina iluminada, guirnaldas de lamparitas, faroles de papel y un pequeño escenario de madera"
          width={1584}
          height={649}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 size-full object-cover object-top"
        />
        <SideStars />
      </div>
    </div>
  )
}

// Positions are % of the scene box, kept inside the open sky between the truss and the wall tops.
const LEFT_STARS = [
  { x: 3.5, y: 7, size: 1.5, rotate: -12, delay: 0 },
  { x: 9, y: 22, size: 1.1, rotate: 18, delay: 1.1 },
  { x: 13, y: 9, size: 0.8, rotate: 6, delay: 2.2 },
  { x: 18, y: 4, size: 1.7, rotate: -20, delay: 0.6 },
  { x: 21, y: 21, size: 1, rotate: 10, delay: 1.8 },
  { x: 26, y: 11, size: 1.3, rotate: -6, delay: 2.7 },
  { x: 31, y: 4, size: 0.9, rotate: 24, delay: 0.3 },
  { x: 35, y: 15, size: 1.2, rotate: -16, delay: 1.5 },
  { x: 6, y: 15, size: 0.7, rotate: 0, delay: 2.4 },
]
const STARS = [
  ...LEFT_STARS,
  ...LEFT_STARS.map((star, i) => ({
    x: 100 - star.x - (i % 2 ? 1.5 : -1),
    y: star.y + (i % 3 === 0 ? 3 : -1),
    size: star.size,
    rotate: -star.rotate,
    delay: star.delay + 0.9,
  })),
]

function SideStars() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {STARS.map((star, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="animate-paper-twinkle absolute fill-paper-star drop-shadow-[0_1px_1px_rgba(40,10,70,0.35)]"
          style={
            {
              left: `${star.x}%`,
              top: `${Math.max(star.y, 2)}%`,
              width: `${star.size}cqw`,
              height: `${star.size}cqw`,
              animationDelay: `${star.delay}s`,
              '--star-rotate': `${star.rotate}deg`,
            } as CSSProperties
          }
        >
          <path d="M12 1.5l3.1 6.6 7.2.9-5.3 5 1.4 7.1L12 17.6l-6.4 3.5 1.4-7.1-5.3-5 7.2-.9z" />
        </svg>
      ))}
    </div>
  )
}

export function GalponFallingLights() {
  return <FallingLights className="inset-x-0 top-0 h-[calc(100%+9rem)] lg:h-[calc(100%+11.5rem)]" />
}
