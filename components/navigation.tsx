"use client"

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HeroLogo } from '@/components/splash-screen'

const navLinks = [
  { href: '#startseite', label: 'Startseite' },
  { href: '#ueber-uns', label: 'Über uns' },
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#referenzen', label: 'Referenzen' },
  { href: '#faq', label: 'FAQ' },
  { href: '#kontakt', label: 'Kontakt' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#startseite" className="flex items-center gap-2">
            <HeroLogo className="w-10 h-10 sm:w-12 sm:h-12" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <span className="text-xl sm:text-2xl font-bold text-gold leading-tight">AL AWAD</span>
              <span className="text-xl sm:text-2xl font-light text-foreground leading-tight">MONTAGE</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="tel:+4917661589109">
              <Button className="bg-gold text-primary-foreground hover:bg-gold-dark">
                <Phone className="w-4 h-4 mr-2" />
                Anrufen
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü öffnen"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-b border-border">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-lg font-medium text-muted-foreground hover:text-gold transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a href="tel:+4917661589109" className="block pt-4">
              <Button className="w-full bg-gold text-primary-foreground hover:bg-gold-dark">
                <Phone className="w-4 h-4 mr-2" />
                Jetzt anrufen
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
