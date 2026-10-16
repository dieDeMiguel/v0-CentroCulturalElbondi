import Link from 'next/link'
import { Megaphone } from 'lucide-react'
import anuncioData from '@/content/anuncio.json'

interface Announcement {
  enabled?: boolean
  highlight?: string
  text?: string
  linkLabel?: string
  linkHref?: string
}

export function AnnouncementBar() {
  const { enabled, highlight, text, linkLabel, linkHref } = anuncioData as Announcement

  if (!enabled || (!highlight && !text)) return null

  const hasLink = Boolean(linkHref && linkLabel)
  const isExternal = hasLink && /^https?:\/\//.test(linkHref!)

  return (
    <aside
      aria-label="Anuncio"
      className="bg-primary px-4 py-2 text-center text-sm text-primary-foreground"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2">
        <Megaphone className="hidden size-4 shrink-0 sm:block" aria-hidden="true" />
        <p>
          {highlight ? <span className="font-medium">{highlight}</span> : null}
          {text ? ` ${text} ` : ' '}
          {hasLink ? (
            isExternal ? (
              <a
                href={linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 hover:opacity-80"
              >
                {linkLabel}
              </a>
            ) : (
              <Link
                href={linkHref!}
                className="font-semibold underline underline-offset-2 hover:opacity-80"
              >
                {linkLabel}
              </Link>
            )
          ) : null}
        </p>
      </div>
    </aside>
  )
}
