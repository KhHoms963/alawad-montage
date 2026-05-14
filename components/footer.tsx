"use client"

import Link from 'next/link'
import { Phone, MessageCircle, Mail } from 'lucide-react'

const quickLinks = [
  { href: '#startseite', label: 'Startseite' },
  { href: '#ueber-uns', label: 'Über uns' },
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#referenzen', label: 'Referenzen' },
  { href: '#faq', label: 'FAQ' },
  { href: '#kontakt', label: 'Kontakt' },
]

const services = [
  'Küchenmontage',
  'Möbelmontage',
  'Trockenbau',
  'Holzhäuser',
  'Türen & Fenster',
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <div className="mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl font-bold text-gold">AL AWAD</span>{' '}
              <span className="text-xl sm:text-2xl font-light text-foreground">MONTAGE</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              Ihr zuverlässiger Partner für professionellen Innenausbau und 
              Montageservice in ganz Deutschland.
            </p>
            <div className="flex gap-3">
              <a
                href="tel:+4917661589109"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-gold/20 transition-colors"
                aria-label="Telefon"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
              </a>
              <a
                href="https://wa.me/4917661589109"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-gold/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
              </a>
              <a
                href="mailto:info@al-awad-montage.de"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-gold/20 transition-colors"
                aria-label="E-Mail"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Schnellzugriff</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm sm:text-base text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Leistungen</h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#leistungen"
                    onClick={(e) => handleNavClick(e, '#leistungen')}
                    className="text-sm sm:text-base text-muted-foreground hover:text-gold transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Kontakt</h3>
            <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="tel:+4917661589109" className="text-sm sm:text-base hover:text-gold transition-colors">
                  +49 176 61589109
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="https://wa.me/4917661589109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base hover:text-gold transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="mailto:info@al-awad-montage.de" className="text-sm sm:text-base hover:text-gold transition-colors break-all">
                  info@al-awad-montage.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 sm:py-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © {currentYear} AL AWAD MONTAGE. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <Link
              href="/impressum"
              className="text-xs sm:text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-xs sm:text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
