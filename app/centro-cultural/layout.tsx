import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Centro Cultural',
  description:
    'Más de 15 años construyendo comunidad a través de la cultura, la educación y la comunicación en Ingeniero Maschwitz. Conocé el espacio, su historia y su galería.',
  path: '/centro-cultural',
})

export default function CentroCulturalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
