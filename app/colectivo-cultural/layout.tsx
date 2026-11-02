import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Colectivo Cultural',
  description:
    'El Colectivo Cultural de Ingeniero Maschwitz es la organización asamblearia y autogestiva que dio vida a El Bondi. Conocé su historia y las comisiones que sostienen el espacio.',
  path: '/colectivo-cultural',
})

export default function ColectivoCulturalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
