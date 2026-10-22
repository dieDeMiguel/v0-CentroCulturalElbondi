import type { MetadataRoute } from 'next'
import { getAllItems } from '@/lib/data'
import { siteUrl } from '@/lib/site'

const staticPaths = [
  '',
  '/programacion',
  '/talleres',
  '/centro-cultural',
  '/colectivo-cultural',
  '/educacion',
  '/radio-espacio',
  '/redes',
  '/faq',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) => ({ url: `${siteUrl}${path}` })),
    ...getAllItems().map((item) => ({ url: `${siteUrl}/evento/${item.slug}` })),
  ]
}
