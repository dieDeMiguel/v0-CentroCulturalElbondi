import Image from 'next/image'

const skyFade =
  'linear-gradient(to bottom, var(--primary) 0%, var(--primary) 4%, color-mix(in oklch, var(--primary) 55%, transparent) 14%, transparent 30%)'

export function PaperGalponScene() {
  return (
    <div className="relative w-full overflow-x-clip">
      <div
        className="relative left-1/2 aspect-[1744/608] w-full min-w-[860px] -translate-x-1/2"
        style={{ containerType: 'size' }}
      >
        <Image
          src="/images/colectivo-galpon-papel.png"
          alt="Ilustración en papel del galpón del Colectivo Cultural de noche: cabreadas de hierro oxidado, pared de ladrillo con ventanal en arco, un cartel de marquesina con luces, guirnaldas, enredadera, un árbol, murales geométricos de colores, un pequeño escenario y el público de espaldas, todo bañado en luz violeta"
          fill
          priority
          sizes="(min-width: 860px) 100vw, 860px"
          className="object-cover object-bottom"
        />

        <p
          aria-hidden="true"
          className="pointer-events-none absolute left-[44.2%] top-[37%] flex h-[18%] w-[11.7%] flex-col items-center justify-center text-center font-display leading-none tracking-wide"
          style={{ fontSize: '1.9cqw', color: 'oklch(0.38 0.13 25)' }}
        >
          <span>Colectivo</span>
          <span>Cultural</span>
        </p>

        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: skyFade }} />
      </div>
    </div>
  )
}
