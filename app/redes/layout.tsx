import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Redes',
  description:
    'Seguí al Centro Cultural El Bondi en nuestras redes: Instagram @cccelbondi y el canal de YouTube del Colectivo Cultural. Enterate de eventos, talleres y la vida del espacio.',
  path: '/redes',
})

export default function RedesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
