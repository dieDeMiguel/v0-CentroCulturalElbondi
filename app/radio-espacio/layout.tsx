import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { pageMetadata } from '@/lib/site'
import { radio } from '@/lib/radio'

export const metadata = pageMetadata({
  title: radio.name,
  description: radio.heroDescription,
  path: '/radio-espacio',
})

export default function RadioEspacioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
