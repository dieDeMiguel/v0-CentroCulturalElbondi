import {
  Facebook,
  Globe,
  Instagram,
  MessageCircle,
  Music,
  Twitter,
  Youtube,
  type LucideIcon,
} from 'lucide-react'
import redesData from '@/content/redes.json'

const ICONS: Record<string, LucideIcon> = {
  instagram: Instagram,
  youtube: Youtube,
  facebook: Facebook,
  x: Twitter,
  whatsapp: MessageCircle,
  spotify: Music,
  web: Globe,
}

export interface Social {
  network: string
  name: string
  handle: string
  description: string
  href: string
  cta: string
  icon: LucideIcon
}

export const socials: Social[] = (redesData as Omit<Social, 'icon'>[])
  .filter((social) => social.name && social.href)
  .map((social) => ({
    ...social,
    handle: social.handle ?? '',
    description: social.description ?? '',
    cta: social.cta || `Ir a ${social.name}`,
    icon: ICONS[social.network] ?? Globe,
  }))
