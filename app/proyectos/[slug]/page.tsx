import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Clock, MapPin, User, Mail, ArrowRight, Home, MessageCircle, Instagram } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { DisplayText } from '@/components/display-text'
import { Card, CardContent } from '@/components/ui/card'
import { ProjectCard } from '@/components/project-card'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { projects, getProjectBySlug, getOtherProjects } from '@/lib/proyectos'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: `${project.title} | Proyectos | El Bondi`,
    description: project.description,
  }
}

function DetailRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Clock
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
      <div className="min-w-0">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</span>
        <div className="text-sm font-medium text-foreground">{children}</div>
      </div>
    </div>
  )
}

export default async function ProyectoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  const others = getOtherProjects(slug, 3)
  const isExternalLink = project.link?.startsWith('http')

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
                <BreadcrumbLink asChild>
                  <Link href="/proyectos">Proyectos</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{project.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-14">
        <div className="flex flex-col gap-10 lg:flex-row">
          <aside className="flex w-full flex-col gap-6 lg:w-[400px]">
            <Card className="overflow-hidden border-border/50 py-0">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img src={project.image || '/placeholder.svg'} alt="" className="size-full object-cover" />
                <Badge className="absolute left-4 top-4 bg-primary/90 text-primary-foreground">Proyecto</Badge>
              </div>
              <CardContent className="flex flex-col gap-4 p-6">
                <h2 className="text-lg font-semibold text-foreground">Ficha</h2>

                {project.schedule && (
                  <DetailRow icon={Clock} label="Cuándo">
                    {project.schedule}
                  </DetailRow>
                )}
                {project.location && (
                  <DetailRow icon={MapPin} label="Lugar">
                    {project.location}
                  </DetailRow>
                )}
                {project.referent && (
                  <DetailRow icon={User} label="Coordina">
                    {project.referent}
                  </DetailRow>
                )}

                {project.contact && (
                  <>
                    <hr className="border-border/50" />
                    <DetailRow icon={Mail} label="Contacto">
                      <a
                        href={`mailto:${project.contact}`}
                        className="block break-all text-primary underline underline-offset-2 transition-colors hover:text-primary/80"
                      >
                        {project.contact}
                      </a>
                    </DetailRow>
                  </>
                )}

                {(project.whatsapp || project.instagram) && (
                  <div className="flex flex-wrap gap-2">
                    {project.whatsapp && (
                      <a
                        href={`https://wa.me/${project.whatsapp.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        <MessageCircle className="size-4" aria-hidden="true" />
                        WhatsApp
                      </a>
                    )}
                    {project.instagram && (
                      <a
                        href={project.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-primary/30 px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        <Instagram className="size-4" aria-hidden="true" />
                        Instagram
                      </a>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </aside>

          <div className="flex flex-1 flex-col gap-8">
            <div>
              <Badge variant="outline" className="mb-3 border-primary/30 text-primary">
                Proyecto
              </Badge>
              <h1 className="font-display text-4xl tracking-wide text-foreground md:text-5xl">
                <DisplayText>{project.title}</DisplayText>
              </h1>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">{project.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">Acerca de este proyecto</h2>
              <p className="mt-4 whitespace-pre-line text-pretty text-base leading-relaxed text-muted-foreground">
                {project.fullDescription}
              </p>
            </div>

            {project.link && (
              <div>
                {isExternalLink ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    {project.linkLabel || 'Más información'}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                ) : (
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    {project.linkLabel || 'Más información'}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="border-t border-border/50 bg-secondary/30 py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-center font-display text-3xl tracking-wide text-foreground md:text-4xl">
              Otros proyectos
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((other) => (
                <ProjectCard key={other.slug} project={other} />
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                Ver todos los proyectos
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
