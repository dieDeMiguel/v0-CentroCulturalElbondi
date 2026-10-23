import Image from 'next/image'
import { FallingLights } from '@/components/falling-lights'

export function PaperGalponScene() {
  return (
    <div className="relative w-full overflow-x-clip">
      {/* Same aspect and min-width as PaperBuildingScene so both heroes share the same height. */}
      <div
        className="relative left-1/2 aspect-[1744/608] w-full min-w-[860px] -translate-x-1/2"
        style={{ containerType: 'size' }}
      >
        <Image
          src="/images/colectivo-galpon-papel-v5.png"
          alt="Ilustración en papel recortado del interior del galpón del Colectivo Cultural: paredes de ladrillo con enredaderas, mural de papeles de colores y guarda geométrica a los costados, cabreadas de madera bajo un cielo morado estrellado, pared violeta con ventanal en arco, cartel de marquesina con luces, guirnaldas de lamparitas, faroles de papel y un pequeño escenario de madera"
          fill
          priority
          sizes="(min-width: 860px) 100vw, 860px"
          className="object-cover"
          style={{ objectPosition: '50% 25%' }}
        />

        <p
          aria-hidden="true"
          className="pointer-events-none absolute left-[45.7%] top-[67%] flex h-[7.6%] w-[8.6%] items-center justify-center text-center font-display leading-none tracking-wide"
          style={{ fontSize: '1.15cqw', color: 'oklch(0.38 0.13 25)' }}
        >
          Colectivo Cultural
        </p>

        <div aria-hidden="true" className="paper-scene-sky pointer-events-none absolute inset-0" />
      </div>
    </div>
  )
}

export function GalponFallingLights() {
  return <FallingLights className="inset-x-0 top-0 h-[calc(100%+9rem)] lg:h-[calc(100%+11.5rem)]" />
}
