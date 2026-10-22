import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Programación',
  description:
    'Agenda de eventos en El Bondi: teatro, circo, música, ferias y variedades en el centro cultural comunitario de Ingeniero Maschwitz.',
  path: '/programacion',
})

export default function ProgramacionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
