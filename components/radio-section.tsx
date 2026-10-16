'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { radio } from '@/lib/radio'

export function RadioSection() {
  return (
    <section className="relative flex min-h-[640px] items-center overflow-hidden bg-primary py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,oklch(0.55_0.18_305/0.2),transparent)]" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-4 lg:flex-row lg:gap-16 lg:px-8">
        {/* Radio Image */}
        <ScrollReveal direction="left" className="w-full max-w-md shrink-0 lg:w-2/5">
          <div className="paper-card group overflow-hidden rounded-lg border border-primary-foreground/10">
            <img
              src={radio.home.image}
              alt={radio.home.imageAlt}
              className="aspect-square w-full object-cover transition-transform duration-700 ease-cinematic group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            {/* Live "on air" indicator */}
            <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 shadow-md backdrop-blur-sm">
              <span className="relative flex size-2.5">
                <span className="animate-pulse-ring absolute inline-flex size-full rounded-full bg-red-500" />
                <span className="relative inline-flex size-2.5 rounded-full bg-red-500" />
              </span>
              <span className="text-[10px] font-bold tracking-wider text-foreground uppercase">
                En vivo
              </span>
            </div>
            <div className="absolute bottom-4 left-4">
              <span className="font-display text-5xl text-primary-foreground drop-shadow-lg md:text-6xl">{radio.frequency}</span>
              <div className="text-xs font-bold tracking-wider text-primary-foreground/80 uppercase">
                {radio.name}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Radio Info */}
        <ScrollReveal direction="right" className="flex w-full flex-col gap-6" delay={200}>
          <div>
            <h2 className="font-display text-4xl tracking-wide text-primary-foreground md:text-5xl">
              {radio.name}
            </h2>
            <p className="mt-3 max-w-lg leading-relaxed text-primary-foreground/80">
              {radio.home.description}
            </p>
          </div>
          <Link
            href="/radio-espacio"
            className="inline-flex w-fit items-center gap-2 rounded-md bg-background px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-background/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            Conocé la radio
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
