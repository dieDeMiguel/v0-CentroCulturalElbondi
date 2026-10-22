import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { getItemBySlug } from '@/lib/data'
import { pageMetadata } from '@/lib/site'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const item = getItemBySlug(slug)
  if (!item) return { title: 'No encontrado | El Bondi', robots: { index: false } }

  const isWorkshop = item.category === 'taller'
  return pageMetadata({
    title: `${isWorkshop ? 'Reservar' : 'Entradas'}: ${item.title}`,
    description: `${item.date} · ${item.time} · ${item.location}. ${item.description}`,
    path: `/entradas/${item.slug}`,
    image: { url: item.image, alt: item.title },
    // Checkout pages shouldn't compete with the event page in search; link previews still work.
    noIndex: true,
  })
}

export default function EntradasLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
