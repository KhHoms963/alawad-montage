"use client"

import { useEffect, useRef, useState } from 'react'
import { UtensilsCrossed, Sofa, Layers, Home, DoorOpen, ArrowRight, X, MessageCircle, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    id: 'kuechen',
    icon: UtensilsCrossed,
    title: 'Küchenmontage',
    shortDesc: 'Professionelle Montage Ihrer Traumküche – schnell, sauber und zuverlässig.',
    fullDesc: 'Wir montieren Ihre Küche fachgerecht und termingerecht. Von der Lieferung bis zur fertigen Einbauküche – alles aus einer Hand. Unsere erfahrenen Monteure sorgen für eine präzise Installation aller Komponenten, inklusive Elektro- und Wasseranschlüsse.',
    types: ['L-Form Küchen', 'U-Form Küchen', 'Inselküchen', 'Zeilenküchen'],
    process: [
      { step: 1, title: 'Beratung', desc: 'Kostenlose Vor-Ort-Beratung und Aufmaß' },
      { step: 2, title: 'Montage', desc: 'Professionelle Installation durch Fachkräfte' },
      { step: 3, title: 'Abnahme', desc: 'Finale Prüfung und Einweisung' },
    ],
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
      'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80',
      'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=600&q=80',
    ],
  },
  {
    id: 'moebel',
    icon: Sofa,
    title: 'Möbelmontage',
    shortDesc: 'Schneller und fachgerechter Aufbau aller Möbelarten.',
    fullDesc: 'Egal ob IKEA, POCO oder Designermöbel – wir bauen Ihre Möbel schnell und fachgerecht auf. Mit dem richtigen Werkzeug und viel Erfahrung sorgen wir für einen reibungslosen Aufbau und perfekte Ergebnisse.',
    types: ['Kleiderschränke', 'Wohnwände', 'Schlafzimmermöbel', 'Büromöbel'],
    process: [
      { step: 1, title: 'Terminvereinbarung', desc: 'Flexible Terminwahl nach Ihren Wünschen' },
      { step: 2, title: 'Aufbau', desc: 'Schneller und sauberer Möbelaufbau' },
      { step: 3, title: 'Kontrolle', desc: 'Qualitätsprüfung und Aufräumen' },
    ],
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80',
    ],
  },
  {
    id: 'trockenbau',
    icon: Layers,
    title: 'Trockenbau & Trennwände',
    shortDesc: 'Professioneller Trockenbau für Wohn- und Gewerberäume.',
    fullDesc: 'Von Trennwänden über Deckenverkleidungen bis hin zu Schallschutzlösungen – wir setzen Ihre Trockenbau-Projekte professionell um. Sauber, schnell und nach neuesten Standards.',
    types: ['Trennwände', 'Deckenverkleidung', 'Schallschutz', 'Dachausbau'],
    process: [
      { step: 1, title: 'Planung', desc: 'Detaillierte Projektplanung vor Ort' },
      { step: 2, title: 'Ausführung', desc: 'Fachgerechte Umsetzung durch Profis' },
      { step: 3, title: 'Finish', desc: 'Saubere Übergabe des fertigen Projekts' },
    ],
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
    ],
  },
  {
    id: 'holzhaeuser',
    icon: Home,
    title: 'Holzhäuser',
    shortDesc: 'Aufbau von Gartenhäusern, Chalets und Holzkonstruktionen.',
    fullDesc: 'Wir errichten Holzhäuser, Gartenhäuser, Chalets und Überdachungen in höchster Qualität. Natürlich, nachhaltig und langlebig – für Ihren perfekten Rückzugsort im Grünen.',
    types: ['Gartenhäuser', 'Chalets', 'Überdachungen', 'Saunahäuser'],
    process: [
      { step: 1, title: 'Begehung', desc: 'Vor-Ort-Besichtigung und Beratung' },
      { step: 2, title: 'Aufbau', desc: 'Professionelle Montage der Holzkonstruktion' },
      { step: 3, title: 'Abschluss', desc: 'Endkontrolle und Übergabe' },
    ],
    images: [
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=600&q=80',
      'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=600&q=80',
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&q=80',
    ],
  },
  {
    id: 'tueren',
    icon: DoorOpen,
    title: 'Türen & Fenster',
    shortDesc: 'Fachgerechte Montage von Türen und Fenstern aller Art.',
    fullDesc: 'Ob Innentüren, Außentüren, Schiebetüren oder Fenster – wir montieren alle Arten von Türen und Fenstern fachgerecht und passgenau. Für mehr Sicherheit und Energieeffizienz in Ihrem Zuhause.',
    types: ['Innentüren', 'Außentüren', 'Schiebetüren', 'Fenster'],
    process: [
      { step: 1, title: 'Aufmaß', desc: 'Präzises Vermessen vor Ort' },
      { step: 2, title: 'Einbau', desc: 'Fachgerechte Montage mit Abdichtung' },
      { step: 3, title: 'Prüfung', desc: 'Funktionskontrolle und Justierung' },
    ],
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
      'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80',
    ],
  },
]

interface ServiceModalProps {
  service: typeof services[0]
  onClose: () => void
}

function ServiceModal({ service, onClose }: ServiceModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card border border-border rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto mx-2 sm:mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
          aria-label="Schließen"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Grid - 1 column on mobile, 3 on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
          {service.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${service.title} Beispiel ${idx + 1}`}
              className="w-full h-48 sm:h-56 object-cover"
              crossOrigin="anonymous"
            />
          ))}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="flex items-center gap-3 mb-4">
            <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-gold flex-shrink-0" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
              {service.title}
            </h3>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
            {service.fullDesc}
          </p>

          {/* Service Types */}
          <div className="mb-6 sm:mb-8">
            <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3">Unsere Leistungen:</h4>
            <div className="flex flex-wrap gap-2">
              {service.types.map((type, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gold/10 text-gold rounded-full text-xs sm:text-sm font-medium"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          {/* Process Steps */}
          <div className="mb-6 sm:mb-8">
            <h4 className="text-base sm:text-lg font-semibold text-foreground mb-4">So funktioniert&apos;s:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {service.process.map((step) => (
                <div
                  key={step.step}
                  className="bg-secondary p-3 sm:p-4 rounded-lg flex sm:flex-col items-start sm:items-start gap-3 sm:gap-0"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gold text-primary-foreground rounded-full flex items-center justify-center font-bold sm:mb-3 flex-shrink-0 text-sm sm:text-base">
                    {step.step}
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-0.5 sm:mb-1 text-sm sm:text-base">{step.title}</h5>
                    <p className="text-xs sm:text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href={`https://wa.me/4917661589109?text=Hallo, ich interessiere mich für ${service.title}. Können Sie mir ein Angebot machen?`}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button className="w-full bg-gold text-primary-foreground hover:bg-gold-dark text-sm sm:text-base py-3">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Angebot anfragen
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)
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
    <section id="leistungen" ref={sectionRef} className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">
            Unsere Leistungen
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Was wir für Sie <span className="text-gold">tun können</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Von der Küchenmontage bis zum Holzhaus – entdecken Sie unser umfangreiches 
            Leistungsspektrum für Ihren professionellen Innenausbau.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group bg-card border border-border rounded-xl p-6 hover:border-gold/50 transition-all duration-300 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedService(service)}
            >
              <service.icon className="w-12 h-12 text-gold mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.shortDesc}</p>
              <div className="flex items-center text-gold font-medium">
                Mehr erfahren
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  )
}
