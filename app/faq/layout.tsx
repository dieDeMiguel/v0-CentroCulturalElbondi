import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Preguntas Frecuentes',
  description:
    'Respuestas a las preguntas más comunes sobre El Bondi: eventos, entradas, talleres, la radio comunitaria y cómo colaborar con el espacio.',
  path: '/faq',
})

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
