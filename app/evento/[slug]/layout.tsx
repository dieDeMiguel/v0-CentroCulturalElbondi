import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { getAllItems, getItemBySlug } from '@/lib/data'
import { pageMetadata } from '@/lib/site'

export function generateStaticParams() {
  return getAllItems().map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const item = getItemBySlug(slug)
  if (!item) return { title: 'No encontrado | El Bondi', robots: { index: false } }

  return pageMetadata({
    title: item.title,
    description: `${item.date} · ${item.time} · ${item.location}. ${item.description}`,
    path: `/evento/${item.slug}`,
    image: { url: item.image, alt: item.title },
  })
}

export default function EventoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
