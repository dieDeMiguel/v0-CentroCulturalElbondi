import { socials } from '@/lib/socials'

export function Footer() {
  const socialLinks = socials.map((social) => ({
    icon: social.icon,
    href: social.href,
    label: social.name,
  }))

  return (
    <footer className="border-t border-border bg-card">
      {/* Main footer content */}
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        {/* Left: Logo + Info columns */}
        <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
          {/* Logo & copyright */}
          <div className="flex flex-col gap-3">
            <img
              src="/images/logo-white.png"
              alt="El Bondi - Centro Cultural Comunitario"
              className="h-8 w-auto max-w-[120px] object-contain sm:h-9 sm:max-w-none"
            />
            <span className="text-sm text-muted-foreground">{'© 2026'}</span>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold text-foreground">Contact us</h4>
            <span className="text-sm text-muted-foreground">Ubicacion:</span>
            <a
              href="mailto:mailcolectivocultural@gmail.com"
              className="text-sm text-muted-foreground underline underline-offset-2 transition-colors hover:text-foreground"
            >
              Contacto mailcolectivocultural@gmail.com
            </a>
          </div>
        </div>

        {/* Right: Social icons */}
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex size-10 items-center justify-center rounded-lg bg-muted/60 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <social.icon className="size-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/50 bg-card/80">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row lg:px-8">
          <p className="text-xs text-muted-foreground">
  {'Copyright © 2015-2026 Colectivo Cultural ONG'}
  <span aria-hidden="true" className="mx-2">
  {'·'}
  </span>
  {'Diseño: Carmen Chaves'}
  </p>
          <a
            href="#"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Impressum
          </a>
        </div>
      </div>
    </footer>
  )
}
