import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export function ImmersiveHero() {
  return (
    <div>
      <section className="relative w-full overflow-hidden bg-background">
        <div className="relative h-[60svh] w-full md:h-auto md:aspect-[1584/672]">
          <Image
            src="/images/el-bondi-scene.png"
            alt="Ilustración en papel recortado 3D de la fachada de El Bondi de noche: estructura de madera, banderines, faroles, una artista tatuada en telas aéreas, una chica en el trapecio, un acróbata en la soga, chicos en monociclo y con aro, una pareja bailando tango y músicos con guitarra, acordeón, bombo y violín frente a la pared de rayas de colores."
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <a
            href="#contenido"
            className="absolute inset-x-0 bottom-4 z-10 mx-auto flex w-fit flex-col items-center gap-2 rounded-full px-4 py-2 text-white/80 transition-colors hover:text-white sm:bottom-8"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] drop-shadow">
              Explorá
            </span>
            <ChevronDown className="size-5 drop-shadow sm:size-6" aria-hidden="true" />
          </a>
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
