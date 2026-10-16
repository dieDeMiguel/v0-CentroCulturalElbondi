'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Home, Radio, ExternalLink, MapPin, Phone, Mail } from 'lucide-react'
import { radio } from '@/lib/radio'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/scroll-reveal'
import { InteractivePageHeader } from '@/components/interactive-page-header'
import { InteractiveGlow } from '@/components/interactive-glow'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

const RADIO_WEBSITE_URL = radio.listenUrl
const galleryImages = radio.gallery
const socialLinks = radio.socials

export default function RadioEspacioPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumb */}
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
                <BreadcrumbPage>Radio Espacio</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero Header */}
      <section className="relative isolate flex min-h-[384px] items-center overflow-hidden border-b border-border/40 bg-primary py-16 lg:py-24">
        <InteractiveGlow />
        <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              {/* Radio Info */}
              <div className="flex-1">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary-foreground/20">
                    <Radio className="size-6 text-primary-foreground" />
                  </div>
                  <span className="font-display text-5xl text-primary-foreground md:text-6xl">{radio.frequency}</span>
                </div>
                <InteractivePageHeader title={radio.name} description={radio.heroDescription} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Radio Section */}
      <section className="border-b border-border/40 bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Description */}
            <ScrollReveal>
              <div>
                <h2 className="font-display text-3xl tracking-wide text-foreground md:text-4xl">
                  {radio.aboutTitle}
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  {radio.about.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Mission & Values */}
                <div className="mt-8 space-y-4">
                  {radio.mission ? (
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Nuestra misión</h3>
                      <p className="mt-2 leading-relaxed text-muted-foreground">{radio.mission}</p>
                    </div>
                  ) : null}
                  {radio.values.length > 0 ? (
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Nuestros valores</h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {radio.values.map((valor) => (
                        <li
                          key={valor}
                          className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm text-foreground"
                        >
                          {valor}
                        </li>
                      ))}
                    </ul>
                  </div>
                  ) : null}
                </div>

                {/* Contact info */}
                <div className="mt-8 space-y-3">
                  {radio.contact.address ? (
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <MapPin className="size-4 text-primary" />
                      <span>{radio.contact.address}</span>
                    </div>
                  ) : null}
                  {radio.contact.phone ? (
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Phone className="size-4 text-primary" />
                      <span>{radio.contact.phone}</span>
                    </div>
                  ) : null}
                  {radio.contact.email ? (
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Mail className="size-4 text-primary" />
                      <a href={`mailto:${radio.contact.email}`} className="hover:text-primary transition-colors">
                        {radio.contact.email}
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            </ScrollReveal>

            {/* Social Media */}
            <ScrollReveal delay={100}>
              <div>
                <h3 className="font-display text-2xl tracking-wide text-foreground">
                  Seguinos en Redes
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Encontranos en todas las plataformas y no te pierdas nada.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-md"
                      >
                        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{social.name}</p>
                          <p className="text-xs text-muted-foreground">{social.handle}</p>
                        </div>
                        <ExternalLink className="ml-auto size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="border-b border-border/40 bg-secondary/30 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl tracking-wide text-foreground md:text-4xl">
              {radio.galleryTitle}
            </h2>
            {radio.galleryDescription ? (
              <p className="mt-2 max-w-xl text-muted-foreground">{radio.galleryDescription}</p>
            ) : null}
          </ScrollReveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <div className="group relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-xs font-medium text-white">{image.alt}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Listen CTA Section */}
      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-12 text-center lg:px-8 lg:py-16">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,oklch(0.55_0.18_305/0.25),transparent)]" />
              <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
                <div className="flex size-16 items-center justify-center rounded-full bg-primary-foreground/20">
                  <Radio className="size-8 text-primary-foreground" />
                </div>
                <h2 className="font-display text-3xl tracking-wide text-primary-foreground md:text-4xl text-balance">
                  {radio.ctaSection.title}
                </h2>
                {radio.ctaSection.description ? (
                  <p className="max-w-lg leading-relaxed text-primary-foreground/80 text-pretty">
                    {radio.ctaSection.description}
                  </p>
                ) : null}
                <Button
                  size="lg"
                  asChild
                  className="gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <a href={RADIO_WEBSITE_URL} target="_blank" rel="noopener noreferrer">
                    {radio.ctaSection.cta}
                    <ExternalLink className="size-4" />
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
