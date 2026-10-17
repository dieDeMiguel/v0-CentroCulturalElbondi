import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Clock, User } from 'lucide-react'
import type { Project } from '@/lib/proyectos'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 ease-cinematic hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image || '/placeholder.svg'}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-cinematic group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="sheen absolute inset-y-0 -left-1/4 w-1/3 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        </div>
        <div className="absolute right-3 top-3 flex size-8 translate-y-1 items-center justify-center rounded-full bg-background/90 text-primary opacity-0 shadow-md transition-all duration-300 ease-cinematic group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 text-lg font-semibold leading-6 text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        {project.schedule && (
          <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="size-3.5 shrink-0" aria-hidden="true" />
            {project.schedule}
          </p>
        )}
        <p className="mt-2 line-clamp-3 text-sm leading-5 text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-auto flex items-center justify-between gap-2 border-t border-border pt-3">
          {project.referent ? (
            <span className="flex min-w-0 items-center gap-1.5 text-xs text-muted-foreground">
              <User className="size-3.5 shrink-0" aria-hidden="true" />
              <span className="truncate">Coordina: {project.referent}</span>
            </span>
          ) : (
            <span />
          )}
          <span className="shrink-0 text-sm font-medium text-primary">Ver ficha</span>
        </div>
      </div>
    </Link>
  )
}
