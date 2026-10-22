import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Educación',
  description:
    'Espacios de educación popular, acompañamiento y encuentro en El Bondi: bachillerato popular, apoyo escolar y encuentro de educación popular en Ingeniero Maschwitz.',
  path: '/educacion',
})

export default function EducacionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
