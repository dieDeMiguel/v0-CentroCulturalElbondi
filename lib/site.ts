import type { Metadata } from 'next'
import { OG_ALT, OG_SIZE } from '@/lib/og-image'

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000'

export const siteName = 'El Bondi'

type PageMetadataInput = {
  title: string
  description: string
  path: string
  image?: { url: string; alt: string }
  noIndex?: boolean
}

export function pageMetadata({ title, description, path, image, noIndex }: PageMetadataInput): Metadata {
  const fullTitle = `${title} | ${siteName}`
  // Overriding openGraph/twitter drops the root opengraph-image/twitter-image, so fall back to them explicitly.
  // Content image paths contain spaces (e.g. "WhatsApp Image ...jpeg"); crawlers need them encoded.
  const ogImages = image
    ? [{ url: encodeURI(image.url), alt: image.alt }]
    : [{ url: '/opengraph-image', alt: OG_ALT, ...OG_SIZE }]
  const twitterImages = image
    ? [{ url: encodeURI(image.url), alt: image.alt }]
    : [{ url: '/twitter-image', alt: OG_ALT, ...OG_SIZE }]

  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName,
      locale: 'es_AR',
      type: 'website',
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: twitterImages,
    },
    ...(noIndex && { robots: { index: false, follow: true } }),
  }
}
