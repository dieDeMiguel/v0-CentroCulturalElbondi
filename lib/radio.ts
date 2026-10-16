import {
  ExternalLink,
  Facebook,
  Globe,
  Instagram,
  MessageCircle,
  Music,
  Twitter,
  Youtube,
  type LucideIcon,
} from 'lucide-react'
import radioData from '@/content/radio.json'

const ICONS: Record<string, LucideIcon> = {
  instagram: Instagram,
  youtube: Youtube,
  facebook: Facebook,
  x: Twitter,
  whatsapp: MessageCircle,
  spotify: Music,
  app: ExternalLink,
  web: Globe,
}

interface RadioSocialData {
  network: string
  name: string
  handle?: string
  href: string
}

interface RadioImage {
  src: string
  alt: string
}

interface RadioData {
  name: string
  frequency: string
  listenUrl: string
  home: { image: string; imageAlt: string; description: string; cta: string }
  heroDescription: string
  heroCta: string
  aboutTitle: string
  about: string[]
  mission: string
  values: string[]
  contact: { address?: string; phone?: string; email?: string }
  socials: RadioSocialData[]
  galleryTitle: string
  galleryDescription: string
  gallery: RadioImage[]
  ctaSection: { title: string; description: string; cta: string }
}

const data = radioData as RadioData

export const radio = {
  ...data,
  about: (data.about ?? []).filter(Boolean),
  values: (data.values ?? []).filter(Boolean),
  contact: data.contact ?? {},
  gallery: (data.gallery ?? []).filter((image) => image.src),
  socials: (data.socials ?? [])
    .filter((social) => social.name && social.href)
    .map((social) => ({
      ...social,
      handle: social.handle ?? '',
      icon: ICONS[social.network] ?? Globe,
    })),
}
