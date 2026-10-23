'use client'

import Link from 'next/link'
import { FireJuggler } from '@/components/fire-juggler'
import { Home } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
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
import faqData from '@/content/faq.json'

type FaqCategory = {
  category: string
  questions: { question: string; answer: string }[]
}

const faqCategories: FaqCategory[] = faqData

export default function FaqPage() {
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
                <BreadcrumbPage>Preguntas Frecuentes</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Header */}
      <section className="relative isolate flex min-h-[384px] flex-col overflow-hidden border-b border-border/40 bg-primary pt-16 lg:pt-24">
        <InteractiveGlow />
        <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
          <ScrollReveal>
            <InteractivePageHeader
              title="Preguntas Frecuentes"
              description="Encontrá las respuestas a las preguntas más comunes sobre El Bondi, nuestros eventos, talleres, la radio comunitaria y cómo colaborar."
            />
          </ScrollReveal>
        </div>
        <div className="mt-6 w-full px-4">
          <FireJuggler />
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-12">
            {faqCategories.map((category, catIndex) => (
              <ScrollReveal key={category.category} delay={catIndex * 100}>
                <div>
                  <h2 className="mb-4 font-display text-2xl tracking-wide text-foreground md:text-3xl">
                    {category.category}
                  </h2>
                  <div className="rounded-lg border border-border bg-card p-2">
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((item, qIndex) => (
                        <AccordionItem
                          key={qIndex}
                          value={`${category.category}-${qIndex}`}
                          className="border-border/50 px-4"
                        >
                          <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
