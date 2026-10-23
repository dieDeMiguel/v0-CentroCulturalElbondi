import Image from 'next/image'
import { FallingLights } from '@/components/falling-lights'

const topFade =
  'linear-gradient(to bottom, var(--primary) 0%, color-mix(in oklch, var(--primary) 40%, transparent) 4%, transparent 10%)'

export function PaperGalponScene() {
  return (
    <div className="relative w-full overflow-x-clip">
      <div
        className="relative left-1/2 aspect-[1584/672] w-full min-w-[760px] -translate-x-1/2"
        style={{ containerType: 'size' }}
      >
        <Image
          src="/images/colectivo-galpon-papel-v2.png"
          alt="Ilustración en papel del galpón del Colectivo Cultural de noche bajo un cielo azul con luna y estrellas: techo completo de cabreadas de hierro oxidado, pared de ladrillo violeta con ventanal en arco, cartel de marquesina con luces, guirnaldas de lamparitas, murales geométricos, enredadera y un pequeño escenario de madera"
          fill
          priority
          sizes="(min-width: 760px) 100vw, 760px"
          className="object-cover"
        />

        <p
          aria-hidden="true"
          className="pointer-events-none absolute left-[42.8%] top-[38%] flex h-[10%] w-[14.4%] items-center justify-center text-center font-display leading-none tracking-wide"
          style={{ fontSize: '1.7cqw', color: 'oklch(0.38 0.13 25)' }}
        >
          Colectivo Cultural
        </p>

        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: topFade }} />
      </div>
    </div>
  )
}

export function GalponFallingLights() {
  return <FallingLights className="inset-x-0 top-[46%] h-[calc(54%+9rem)] lg:h-[calc(54%+11.5rem)]" />
}
