import Image from 'next/image'
import { HeroSceneMotion } from '@/components/hero-scene-motion'

export function ImmersiveHero() {
  return (
    <div>
      <section className="relative w-full overflow-hidden bg-background">
        <div className="relative h-[60svh] w-full md:h-auto md:aspect-[1584/672]">
          <div className="scene-drift absolute inset-0">
          <Image
            src="/images/el-bondi-scene.png"
            alt="Ilustración en papel recortado 3D de la fachada de El Bondi de noche, centrada: una pared de rayas verticales rosa, celeste, rojo, amarillo, verde y lila con un cartel blanco que lleva el logo de El Bondi, junto a un edificio con arcos de colores alrededor de una ventana cubierto por una enredadera. Arriba, una estructura con luces y banderines donde una artista en telas aéreas, una chica en el trapecio y un acróbata en la soga se suspenden en lo alto; pegados a los costados, edificios vecinos con balcones y detrás, árboles de papel. En la vereda, chicos en monociclo y con aro, una pareja bailando tango y músicos con acordeón, guitarras, batería y violín."
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Locked to the image's aspect ratio so the logo stays on the banner when object-cover crops the sides on mobile. */}
          <div className="pointer-events-none absolute top-0 left-1/2 aspect-[1584/672] h-full -translate-x-1/2">
            <Image
              src="/images/logo-dark.png"
              alt=""
              width={1200}
              height={306}
              sizes="15vw"
              className="absolute top-[62%] left-[35.9%] w-[10.4%] -rotate-1 opacity-90 mix-blend-multiply"
            />
            <HeroSceneMotion />
          </div>
          </div>
        </div>
      </section>

      <section id="contenido" className="scroll-mt-20 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl tracking-wide text-balance text-foreground md:text-6xl lg:text-7xl">
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
