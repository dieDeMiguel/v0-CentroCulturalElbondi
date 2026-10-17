import proyectosData from '@/content/proyectos.json'

export interface Project {
  slug: string
  title: string
  description: string
  fullDescription: string
  image: string
  schedule?: string
  location?: string
  referent?: string
  contact?: string
  whatsapp?: string
  instagram?: string
  link?: string
  linkLabel?: string
}

type RawProject = { [K in keyof Project]?: string | null }

const OPTIONAL_FIELDS = [
  'schedule',
  'location',
  'referent',
  'contact',
  'whatsapp',
  'instagram',
  'link',
  'linkLabel',
] as const

// Pages CMS writes empty optional fields as "" or null; strip them so the
// components can rely on simple truthiness checks.
function normalize(items: RawProject[]): Project[] {
  return items
    .filter((item) => item && typeof item.slug === 'string' && item.slug.trim() !== '')
    .map((item) => {
      const project = { ...item } as Project
      for (const key of OPTIONAL_FIELDS) {
        const value = project[key]
        if (value == null || (typeof value === 'string' && value.trim() === '')) {
          delete project[key]
        }
      }
      return project
    })
}

export const projects: Project[] = normalize(proyectosData as RawProject[])

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getOtherProjects(slug: string, limit = 3): Project[] {
  return projects.filter((project) => project.slug !== slug).slice(0, limit)
}
