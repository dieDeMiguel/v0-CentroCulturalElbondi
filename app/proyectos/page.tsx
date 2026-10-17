import Link from 'next/link'
import { Home, ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { InteractivePageHeader } from '@/components/interactive-page-header'
import { InteractiveGlow } from '@/components/interactive-glow'
import { ProjectCard } from '@/components/project-card'
import { projects } from '@/lib/proyectos'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export default function ProyectosPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border/40 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-4 lg:px-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="flex items-center gap-1.5">
                    <Home className="size-4" />
                    <span className="sr-only sm:not-sr-only">Inicio</span>
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Proyectos</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      <section className="relative isolate flex min-h-[384px] items-center overflow-hidden border-b border-border/40 bg-primary py-16 lg:py-24">
        <InteractiveGlow />
        <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
          <ScrollReveal>
            <InteractivePageHeader
              title="Proyectos"
              description="Todo lo que ocurre en El Bondi, en un solo lugar. Cada proyecto tiene su propia forma de andar, pero comparte el mismo espíritu: aprender, crear y organizarnos entre todas y todos."
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 80}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-12 flex flex-col items-center gap-4 rounded-lg border border-primary/20 bg-primary/5 p-8 text-center">
              <h2 className="text-balance text-xl font-semibold text-foreground">
                ¿Querés sumarte a algún proyecto?
              </h2>
              <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
                Escribinos y te contamos cómo participar. Las puertas del Bondi están abiertas.
              </p>
              <a
                href="mailto:mailcolectivocultural@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Escribinos
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
