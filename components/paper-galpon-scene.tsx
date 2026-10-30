import { preload } from 'react-dom'
import { FallingLights } from '@/components/falling-lights'

const HERO_SRC = '/images/colectivo-galpon-papel-v5-1584.webp'
const HERO_SRCSET =
  '/images/colectivo-galpon-papel-v5-960.webp 960w, /images/colectivo-galpon-papel-v5-1584.webp 1584w'
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
        className="relative left-1/2 aspect-[1744/608] w-full min-w-[620px] -translate-x-1/2 md:min-w-[860px]"
        style={{ containerType: 'size' }}
      >
        <img
          src={HERO_SRC}
          srcSet={HERO_SRCSET}
          sizes={HERO_SIZES}
          alt="Ilustración en papel recortado del interior del galpón del Colectivo Cultural: paredes de ladrillo con enredaderas, mural de papeles de colores y guarda geométrica a los costados, cabreadas de madera bajo un cielo morado estrellado, pared violeta con ventanal en arco, marquesina iluminada, guirnaldas de lamparitas, faroles de papel y un pequeño escenario de madera"
          width={1584}
          height={672}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 size-full object-cover"
          style={{ objectPosition: '50% 25%' }}
        />

        <div aria-hidden="true" className="paper-scene-sky pointer-events-none absolute inset-0" />
      </div>
    </div>
  )
}

export function GalponFallingLights() {
  return <FallingLights className="inset-x-0 top-0 h-[calc(100%+9rem)] lg:h-[calc(100%+11.5rem)]" />
}
