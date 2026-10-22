import Link from 'next/link'
import { CheckCircle, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/scroll-reveal'

type TicketConfirmationProps = {
  variant: 'success' | 'pending'
  title: string
  description: React.ReactNode
  nextSteps: string[]
  primaryHref?: string
  primaryLabel?: string
}

export function TicketConfirmation({
  variant,
  title,
  description,
  nextSteps,
  primaryHref = '/programacion',
  primaryLabel = 'Ver programacion',
}: TicketConfirmationProps) {
  const Icon = variant === 'success' ? CheckCircle : Clock

  return (
    <ScrollReveal>
      <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center" role="status">
        <div className="flex size-20 items-center justify-center rounded-full bg-primary/10">
          <Icon className="size-10 text-primary" aria-hidden="true" />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-balance text-foreground">{title}</h2>
          <p className="mt-2 leading-relaxed text-pretty text-muted-foreground">{description}</p>
        </div>

        <div className="w-full rounded-lg border border-border bg-card p-5 text-left">
          <h3 className="text-sm font-semibold text-foreground">Proximos pasos</h3>
          <ol className="mt-3 flex flex-col gap-2.5">
            {nextSteps.map((text, i) => (
              <li key={text} className="flex items-start gap-3 text-sm">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {i + 1}
                </span>
                <span className="text-muted-foreground">{text}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex w-full gap-3">
          <Button variant="outline" size="lg" className="flex-1 rounded-lg" asChild>
            <Link href={primaryHref}>{primaryLabel}</Link>
          </Button>
          <Button size="lg" className="flex-1 rounded-lg" asChild>
            <Link href="/">Volver al inicio</Link>
          </Button>
        </div>
      </div>
    </ScrollReveal>
  )
}
