import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Proyectos | El Bondi',
  description:
    'Los proyectos de El Bondi: talleres, Bachi Popular, educación popular, Gloria la del Bondi, Radioactiva Comunitaria 96.9 y Tambores de Mawy, en Ingeniero Maschwitz.',
}

export default function ProyectosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
