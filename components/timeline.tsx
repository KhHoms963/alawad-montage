"use client"

import { useEffect, useRef, useState } from 'react'
import { Hammer, Plane, TrendingUp, Handshake } from 'lucide-react'

const timelineEvents = [
  {
    year: '1987',
    icon: Hammer,
    title: 'Unsere Wurzeln',
    description: 'Seit 1987 arbeitet die Familie Al Awad im Handwerk. Eine Schreinerei in Homs, Syrien mit 350 m² Werkstatt und vollständiger Ausstattung. Komplette Küchen, Schlafzimmer, Möbel, Fenster und Türen – alles aus Holz, alles mit Leidenschaft. 39 Jahre Erfahrung und Expertise.',
  },
  {
    year: '2015',
    icon: Plane,
    title: 'Der Wendepunkt',
    description: '2015: Die Familie Al Awad kommt nach Deutschland. Ein neues Land, eine neue Sprache, aber die gleiche Leidenschaft für handwerkliche Qualität bleibt bestehen.',
  },
  {
    year: '2015-2026',
    icon: TrendingUp,
    title: '11 Jahre Erfolg in Deutschland',
    description: 'Von Hamburg bis Hessen – tausende Projekte mit absoluter Zuverlässigkeit und Liebe zum Detail umgesetzt. Jedes Projekt ein Beweis unserer Kompetenz.',
  },
  {
    year: 'Heute',
    icon: Handshake,
    title: 'Ihr Vertrauenspartner',
    description: 'AL AWAD MONTAGE ist der zuverlässige Partner für professionelle Montage in ganz Deutschland. 39 Jahre Handwerk, 11 Jahre Deutschland – Ihre Zufriedenheit ist unser Versprechen.',
  },
]

export function Timeline() {
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
      id="geschichte"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-secondary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">
            Unsere Geschichte
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            39 Jahre <span className="text-gold">Handwerkstradition</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Von Syrien nach Deutschland – eine Reise voller Leidenschaft, Hingabe und handwerklicher Exzellenz.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - hidden on mobile, shown on larger screens */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-gold via-gold/50 to-gold rounded-full" />

          {/* Timeline Items */}
          <div className="space-y-8 lg:space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Mobile Layout */}
                <div className="lg:hidden">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-14 h-14 bg-gold rounded-full flex items-center justify-center shadow-lg shadow-gold/20">
                      <event.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    {/* Content */}
                    <div className="flex-1 bg-card border border-border rounded-xl p-4 hover:border-gold/50 transition-colors">
                      <span className="text-gold text-sm font-bold">{event.year}</span>
                      <h3 className="text-lg font-bold text-foreground mt-1 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout - Alternating sides */}
                <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                  {/* Left side content (even items) or empty */}
                  <div className={`${index % 2 === 0 ? 'text-right pr-8' : ''}`}>
                    {index % 2 === 0 && (
                      <div className="bg-card border border-border rounded-xl p-6 hover:border-gold/50 transition-colors inline-block text-left">
                        <span className="text-gold text-sm font-bold">{event.year}</span>
                        <h3 className="text-xl font-bold text-foreground mt-1 mb-3">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center shadow-lg shadow-gold/30 border-4 border-background">
                      <event.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Right side content (odd items) or empty */}
                  <div className={`${index % 2 === 1 ? 'pl-8' : ''}`}>
                    {index % 2 === 1 && (
                      <div className="bg-card border border-border rounded-xl p-6 hover:border-gold/50 transition-colors inline-block">
                        <span className="text-gold text-sm font-bold">{event.year}</span>
                        <h3 className="text-xl font-bold text-foreground mt-1 mb-3">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
