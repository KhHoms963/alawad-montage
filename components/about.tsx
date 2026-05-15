"use client"

import { useEffect, useRef, useState } from 'react'
import { Award, Clock, Users, BadgeEuro } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Qualität',
    description: 'Höchste Qualitätsstandards bei jedem Projekt. Wir verwenden nur erstklassige Materialien.',
  },
  {
    icon: Clock,
    title: 'Pünktlichkeit',
    description: 'Termintreue ist für uns selbstverständlich. Wir halten, was wir versprechen.',
  },
  {
    icon: Users,
    title: 'Erfahrung',
    description: 'Über 39 Jahre Erfahrung im Innenausbau und Montageservice.',
  },
  {
    icon: BadgeEuro,
    title: 'Faire Preise',
    description: 'Transparente und faire Preisgestaltung ohne versteckte Kosten.',
  },
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="ueber-uns"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-secondary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          {/* Text Content */}
          <div
            className={`transition-all duration-700 text-center ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">
              Über uns
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Ihr Partner für{' '}
              <span className="text-gold">professionellen Innenausbau</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed max-w-3xl mx-auto">
              AL AWAD MONTAGE steht für Qualität, Zuverlässigkeit und Handwerkskunst. 
              Seit über einem Jahrzehnt sind wir Ihr vertrauensvoller Partner für alle 
              Arten von Montage- und Innenausbauarbeiten in Deutschland.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
              Unser erfahrenes Team aus qualifizierten Fachkräften sorgt dafür, dass 
              jedes Projekt – ob Küchenmontage, Möbelaufbau oder Trockenbau – mit 
              höchster Präzision und Sorgfalt ausgeführt wird. Ihre Zufriedenheit ist 
              unser Antrieb.
            </p>
          </div>

          {/* Image - Now above the cards */}
          <div
            className={`relative transition-all duration-700 delay-200 mb-8 sm:mb-12 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative rounded-xl overflow-hidden max-w-sm mx-auto">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ff64e809-7b01-4518-aff4-bff16c1996ee-iBPEcJJXxOjY6THsDwOFCE1DWkch0g.jpg"
                alt="AL AWAD MONTAGE - Ihr Partner für professionellen Innenausbau"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-card p-3 sm:p-5 rounded-lg border border-border hover:border-gold/50 transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-gold mb-2 sm:mb-3" />
                <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
