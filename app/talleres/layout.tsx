import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Talleres',
  description:
    'Formación artística en circo, música, danza y más. Talleres para todas las edades en El Bondi, centro cultural comunitario de Ingeniero Maschwitz.',
  path: '/talleres',
})

export default function TalleresLayout({ children }: { children: React.ReactNode }) {
  return children
}
