import type { ReactNode } from 'react'
import { DisplayText } from '@/components/display-text'

interface InteractivePageHeaderProps {
  title: string
  description?: string
  children?: ReactNode
  /** `onPrimary` for purple backgrounds, `light` for text on the dark page background. */
  tone?: 'onPrimary' | 'light'
}

export function InteractivePageHeader({
  title,
  description,
  children,
  tone = 'onPrimary',
}: InteractivePageHeaderProps) {
  const titleColor = tone === 'light' ? 'text-foreground' : 'text-primary-foreground'
  const descriptionColor = tone === 'light' ? 'text-foreground/85' : 'text-primary-foreground/80'

  return (
    <div className="relative z-10">
      <h1 className={`font-display text-4xl leading-tight text-balance md:text-5xl lg:text-6xl ${titleColor}`}>
        <DisplayText>{title}</DisplayText>
      </h1>
      {description && (
        <p className={`mt-2 max-w-2xl text-base md:text-lg ${descriptionColor}`}>{description}</p>
      )}
      {children}
    </div>
  )
}
