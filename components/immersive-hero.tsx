import Image from 'next/image'
import { HeroSceneMotion } from '@/components/hero-scene-motion'
import { HeroSceneLife } from '@/components/hero-scene-life'
import { HeroSceneWind } from '@/components/hero-scene-wind'

const SKY_STARS = [
  { left: '6%', top: '55%', delay: '0s', size: '1.1%' },
  { left: '17%', top: '25%', delay: '1.4s', size: '0.9%' },
  { left: '29%', top: '70%', delay: '2.6s', size: '1.2%' },
  { left: '41%', top: '35%', delay: '0.8s', size: '0.8%' },
  { left: '56%', top: '60%', delay: '2s', size: '1%' },
  { left: '68%', top: '22%', delay: '3s', size: '1.2%' },
  { left: '79%', top: '65%', delay: '1.1s', size: '0.9%' },
  { left: '91%', top: '32%', delay: '2.3s', size: '1.1%' },
]

export function ImmersiveHero() {
  return (
    <div>
      <section className="relative w-full overflow-hidden bg-background">
        {/* Solid fill sampled from the illustration's top edge so the extra sky joins it seamlessly. */}
        <div aria-hidden="true" className="relative h-20 w-full bg-scene-sky md:h-[9vw]">
          {SKY_STARS.map((star) => (
            <span
              key={`${star.left}-${star.top}`}
              className="scene-star"
              style={{ left: star.left, top: star.top, animationDelay: star.delay, width: star.size }}
            />
          ))}
        </div>
        <div className="relative h-[60svh] w-full md:h-auto md:aspect-[1584/672]">
          <div className="absolute inset-0">
          <Image
            src="/images/el-bondi-scene.png"
            alt="Ilustración en papel recortado 3D de la fachada de El Bondi de noche, centrada: una pared de rayas verticales rosa, celeste, rojo, amarillo, verde y lila con un cartel blanco que lleva el logo de El Bondi, junto a un edificio con arcos de colores alrededor de una ventana cubierto por una enredadera. Arriba, una estructura con luces y banderines donde una artista en telas aéreas, una chica en el trapecio y un acróbata en la soga se suspenden en lo alto; pegados a los costados, edificios vecinos con balcones y detrás, árboles de papel. En la vereda, chicos en monociclo y con aro, una pareja bailando tango y músicos con acordeón, guitarras, batería y violín."
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[14%] bg-gradient-to-b from-scene-sky to-transparent" />
          {/* Locked to the image's aspect ratio so the logo stays on the banner when object-cover crops the sides on mobile. */}
          <div className="pointer-events-none absolute top-0 left-1/2 aspect-[1584/672] h-full -translate-x-1/2">
            <HeroSceneLife />
            <Image
              src="/images/logo-dark.png"
              alt=""
              width={1200}
              height={306}
              sizes="15vw"
              className="absolute top-[62%] left-[35.9%] w-[10.4%] -rotate-1 opacity-90 mix-blend-multiply"
            />
            <HeroSceneMotion />
            <HeroSceneWind />
          </div>
          </div>
        </div>
      </section>

      <section id="contenido" className="scroll-mt-20 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
            <h1 className="mx-auto max-w-[12em] font-display text-4xl tracking-tight text-balance text-foreground md:text-6xl lg:text-7xl">
              Un espacio para la comunidad
            </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
            Donde el arte, la cultura y los vecinos se encuentran. Un centro cultural vivo,
            construido por y para la comunidad de Maschwitz.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/programacion"
              className="rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-shadow hover:shadow-lg hover:shadow-primary/25"
            >
              Ver Programación
            </a>
            <a
              href="/centro-cultural"
              className="rounded-lg border border-border bg-background/80 px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background"
            >
              Conocé El Bondi
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
