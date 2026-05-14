"use client"

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { MessageCircle, ChevronDown } from 'lucide-react'

const stats = [
  { value: '10+', label: 'Jahre Erfahrung' },
  { value: '500+', label: 'Projekte' },
  { value: '98%', label: 'Zufriedenheit' },
]

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="startseite" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80"
          alt="Moderne Küche Innenausbau"
          className="w-full h-full object-cover"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Logo Text */}
          <div className="mb-6">
            <span className="text-gold text-lg font-medium tracking-widest uppercase">
              Willkommen bei
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gold">AL AWAD</span>{' '}
            <span className="text-foreground">MONTAGE</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto text-pretty px-2">
            Qualität, die man sieht – Handwerk, dem man vertraut.
          </p>

          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
            Ihr zuverlässiger Partner für professionellen Innenausbau, Küchenmontage, 
            Möbelmontage und vieles mehr in ganz Deutschland.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-16 px-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('#leistungen')}
              className="bg-gold text-primary-foreground hover:bg-gold-dark text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
            >
              Leistungen entdecken
            </Button>
            <a href="https://wa.me/4917661589109" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>

        {/* Stats Bar */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-card/80 backdrop-blur-md border border-border rounded-xl p-4 sm:p-6 lg:p-8 max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-2 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-gold mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-muted-foreground leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('#ueber-uns')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          aria-label="Nach unten scrollen"
        >
          <ChevronDown className="w-8 h-8 text-gold" />
        </button>
      </div>
    </section>
  )
}
