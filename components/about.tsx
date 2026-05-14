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
    description: 'Über 10 Jahre Erfahrung im Innenausbau und Montageservice.',
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">
              Über uns
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Ihr Partner für{' '}
              <span className="text-gold">professionellen Innenausbau</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              AL AWAD MONTAGE steht für Qualität, Zuverlässigkeit und Handwerkskunst. 
              Seit über einem Jahrzehnt sind wir Ihr vertrauensvoller Partner für alle 
              Arten von Montage- und Innenausbauarbeiten in Deutschland.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Unser erfahrenes Team aus qualifizierten Fachkräften sorgt dafür, dass 
              jedes Projekt – ob Küchenmontage, Möbelaufbau oder Trockenbau – mit 
              höchster Präzision und Sorgfalt ausgeführt wird. Ihre Zufriedenheit ist 
              unser Antrieb.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
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

          {/* Image */}
          <div
            className={`relative transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt="Professionelles Handwerker-Team bei der Arbeit"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            {/* Decorative Element - hidden on mobile */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 sm:w-32 sm:h-32 bg-gold/20 rounded-xl -z-10 hidden sm:block" />
            <div className="absolute -top-6 -right-6 w-20 h-20 sm:w-24 sm:h-24 border-2 border-gold/30 rounded-xl -z-10 hidden sm:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
