'use client'

import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollReveal } from '@/components/scroll-reveal'

const FORMSPREE_ENDPOINT = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? ''}`

export function CommunitySection() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)

    if (!process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID) {
      setError('El formulario no esta configurado todavia.')
      return
    }

    setSubmitting(true)
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        const data = await response.json().catch(() => null)
        setError(
          data?.errors?.map((err: { message: string }) => err.message).join(', ') ??
            'No pudimos enviar tu mensaje. Intenta de nuevo.',
        )
      }
    } catch {
      setError('No pudimos enviar tu mensaje. Revisa tu conexion e intenta de nuevo.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="comunidad" className="flex min-h-[640px] items-center bg-background py-16">
      <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left - CTA */}
          <ScrollReveal direction="left" scaleFrom={0.95} duration={800}>
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-4xl tracking-wide text-foreground md:text-5xl">
              Se parte de nuestra comunidad
            </h2>
            <p className="max-w-md leading-relaxed text-muted-foreground">
              Te invitamos a formar parte de esta iniciativa, ya sea como docente de un taller, alumno, artista o amigo del espacio. Sumate!
            </p>
          </div>
          </ScrollReveal>

          {/* Right - Form */}
          <ScrollReveal direction="right" delay={200}>
          <Card className="border-border/50 bg-card shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-card-foreground">Para mas informacion</CardTitle>
              <p className="text-sm text-muted-foreground">
                Completa el formulario y nos pondremos en contacto. Tambien nos podes escribir a nuestras redes.
              </p>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="py-8 text-center">
                  <p className="text-lg font-medium text-foreground">{'Gracias por escribirnos!'}</p>
                  <p className="mt-1 text-sm text-muted-foreground">Nos pondremos en contacto pronto.</p>
                </div>
              ) : (
                <form
                  className="flex flex-col gap-4"
                  action={FORMSPREE_ENDPOINT}
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="nombre">Nombre</Label>
                      <Input id="nombre" name="nombre" placeholder="Tu nombre" required />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="tu@email.com" required />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="asunto">Asunto</Label>
                    <Input id="asunto" name="_subject" placeholder="De que se trata?" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="mensaje">Mensaje</Label>
                    <Textarea id="mensaje" name="mensaje" placeholder="Escribi tu mensaje..." rows={4} required />
                  </div>
                  <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                  {error && (
                    <p role="alert" className="text-sm text-destructive">
                      {error}
                    </p>
                  )}
                  <Button type="submit" className="w-full" disabled={submitting}>
                    {submitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
