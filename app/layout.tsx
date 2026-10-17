import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AnnouncementBar } from '@/components/announcement-bar'
import { SplashScreen } from '@/components/splash-screen'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000'

const title = 'El Bondi - Centro Cultural Comunitario'
const description =
  'Derechos que se viven: cultura, educación y comunicación. Centro Cultural Comunitario en Ingeniero Maschwitz.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: '/',
    siteName: 'El Bondi',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export const viewport: Viewport = {
  themeColor: '#732B8F',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} dark bg-background overflow-x-clip`}>
      <body className="font-sans antialiased overflow-x-clip">
        <SplashScreen />
        <AnnouncementBar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
