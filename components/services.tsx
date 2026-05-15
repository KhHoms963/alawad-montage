"use client"

import { useEffect, useRef, useState } from 'react'
import { ChefHat, Sofa, Layers, Home, DoorOpen, ArrowRight, X, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const kitchenTypes = [
  {
    id: 'einzeilig',
    name: 'Einzeilige Küchen',
    description: 'Die klassische Lösung für kleine Räume. Alle Arbeitsflächen, Geräte und Schränke sind in einer Linie angeordnet. Platzsparend, funktional und ideal für offene Wohnbereiche. Perfekt für Singles, Paare oder kleine Haushalte.',
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18-V8GbFg2Wi3QNLnhf3WduZrKPXITH1B.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/19-3gzTf4hZwkKVwQJa9ZwNZI1jHcgOgP.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20-Vp1OvW8HUzML9euJs4zvYLaziw7HG1.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-E6SUGcxg5aEQy3GcVLUp3wca7pZpEN.png',
    ],
  },
  {
    id: 'zweizeilig',
    name: 'Zweizeilige Küchen',
    description: 'Zwei parallele Arbeitsflächen bieten optimale Effizienz. Das Arbeitsdreieck (Herd, Spüle, Kühlschrank) ist ideal verteilt. Mehr Stauraum und Arbeitsfläche als einzeilige Küchen. Die perfekte Balance zwischen Funktionalität und Raumnutzung.',
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/22-tjU0EPXSBIENrMaEIt3TMfo6NKvK5e.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/23-VMedSxa48j0IRdSugXGc4setARhEZo.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24-QfrKYon12RaolD2W0bKXecGHhvH8jO.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/25-KAHf6ceu6l7YF8Fy5BaOmta6xUUcFT.png',
    ],
  },
  {
    id: 'l-form',
    name: 'L-Form Küchen',
    description: 'Flexibel und praktisch. Die L-förmige Anordnung nutzt zwei Wände optimal und schafft einen natürlichen Arbeitsfluss. Viel Stauraum, großzügige Arbeitsflächen und eine offene Seite für den Wohnbereich. Die beliebteste Lösung für moderne Haushalte.',
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-pbKWZR9Gml1ELwL62wKrqCFOf3lHt9.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-BXL0udB41h7X0sg4ugqkJIERj3WKHt.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16-e7GcmqJU2hY6EbNCLSOPNaz1nNtoNt.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17-mRxh0OHEHGfSAW2BJlWvJriT0NBGfI.png',
    ],
  },
  {
    id: 'u-form',
    name: 'U-Form Küchen',
    description: 'Maximale Effizienz auf drei Seiten. Das ideale Arbeitsdreieck mit kurzen Wegen zwischen Herd, Spüle und Kühlschrank. Viel Stauraum und Arbeitsfläche. Perfekt für große Küchen und anspruchsvolle Köche.',
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-z4blj2MzDjguHrZ2w2ComQWcTmbdnr.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-vYg9Ci6V7baCbxwPWmerdaCoqoBmzL.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-ek34y7XFcjSvtPMYLeijgaianLOm4t.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-lU45U9lyvmfEHl1DoFMH7tK95ySb08.png',
    ],
  },
  {
    id: 'g-form',
    name: 'G-Form Küchen',
    description: 'Die Premium-Lösung für große Räume. Vier Arbeitsflächen bieten maximale Funktionalität und Stauraum. Ideal für offene Wohnküchen mit Kochinsel oder Theke. Luxuriös, praktisch und beeindruckend.',
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-I5MfbbFTn6bQjDPkpcnSV1BznkWnkA.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-efR2codgIJW7YSt91Q5euPv4P1Hoka.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-xXeRA5OEa1RtxMqAqA8NMIuGHMkXvf.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-gnISYpg02AmVKWv194fpjjWdMj4QNc.png',
    ],
  },
  {
    id: 'insel',
    name: 'Inselküche',
    description: 'Das Highlight jeder modernen Küche. Eine zentrale Insel mit Kochfeld, Spüle oder Theke schafft einen sozialen Mittelpunkt. Perfekt für große Räume und offene Wohnkonzepte. Kombiniert Funktionalität mit Design und Lifestyle.',
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-NUytKj5mebFXPNnaOC1fcgD5fCQHrw.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-58xUx9ihUQ0Iknj6f0fxKOGxekjx2W.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-gerO5GWf8ez81bcawHXmhnZLQyG50h.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-7h8j6Sf9QCEpPmISrv0tTF4yf7xEFx.png',
    ],
  },
]

const services = [
  {
    id: 'kuechen',
    icon: ChefHat,
    title: 'Küchenmontage',
    shortDesc: 'Professionelle Montage Ihrer Traumküche – schnell, sauber und zuverlässig.',
    fullDesc: 'Wir montieren Ihre Küche fachgerecht und termingerecht. Von der Lieferung bis zur fertigen Einbauküche – alles aus einer Hand. Unsere erfahrenen Monteure sorgen für eine präzise Installation aller Komponenten, inklusive Elektro- und Wasseranschlüsse.',
    types: ['Einbauküchen', 'Küchenzeilen', 'Kochinseln', 'Arbeitsplatten'],
    process: [
      { step: 1, title: 'Beratung', desc: 'Kostenlose Vor-Ort-Beratung und Aufmaß' },
      { step: 2, title: 'Montage', desc: 'Professionelle Installation durch Fachkräfte' },
      { step: 3, title: 'Abnahme', desc: 'Finale Prüfung und Einweisung' },
    ],
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l3ycdEZCi9ZTHC8KtLGYJfdQdmZqgR.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6PatTKanSBvNoBBJtgNvo7u2P4Tii2.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9bShOSr2slHZt9TCjkuT4F6xL3jWhS.png',
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
      '/images/Screenshot 2026-05-15 155448.png',
      '/images/Screenshot 2026-05-15 155457.png',
      '/images/Screenshot 2026-05-15 155504.png',
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
    fullDesc: 'Holztüren und Holzfenster – wir montieren alle Arten von Türen und Fenstern mit handwerklicher Präzision. Innentüren, Außentüren, Schiebetüren aus Holz – passgenau und fachgerecht. Mit 39 Jahren Erfahrung für mehr Sicherheit, Energieeffizienz und natürliche Schönheit in Ihrem Zuhause.',
    types: ['Innentüren', 'Außentüren', 'Schiebetüren', 'Fenster'],
    process: [
      { step: 1, title: 'Aufmaß', desc: 'Präzises Vermessen vor Ort' },
      { step: 2, title: 'Einbau', desc: 'Fachgerechte Montage mit Abdichtung' },
      { step: 3, title: 'Prüfung', desc: 'Funktionskontrolle und Justierung' },
    ],
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FmayccGVtbWAsTZOtrdzpyPdP4M6vO.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rUEeIVRMla2batUQK7fJgxhUnthiut.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-owSLN2GR2jh3HotbP2mhFAg8WDiZjQ.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3biSRqUzkbjbs0FcfCdo1jC5fyLQqN.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NH3CjoSOfX7kSHg3fKTM1dFmB5pQf3.png',
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

        {/* Content FIRST (above images) */}
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
                  className="bg-secondary p-3 sm:p-4 rounded-lg flex sm:flex-col items-start gap-3 sm:gap-0"
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

        {/* Image Grid BELOW content */}
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

      </div>
    </div>
  )
}

export function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [expandedKitchen, setExpandedKitchen] = useState<string | null>(null)
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
              className={`group bg-card border border-border rounded-xl p-6 hover:border-gold/50 transition-all duration-300 cursor-pointer active:scale-95 hover:scale-[1.02] ${
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

        {/* Kitchen Types Section */}
        <div className="mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 text-center">
            Unsere <span className="text-gold">Küchenformen</span>
          </h3>

          {/* Kitchen Type Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {kitchenTypes.map((kitchen) => (
              <button
                key={kitchen.id}
                onClick={() => setExpandedKitchen(expandedKitchen === kitchen.id ? null : kitchen.id)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full border-2 font-medium text-sm sm:text-base transition-all duration-300 ${
                  expandedKitchen === kitchen.id
                    ? 'border-gold bg-gold/10 text-gold'
                    : 'border-gold/50 text-gold hover:border-gold hover:bg-gold/5'
                }`}
              >
                {kitchen.name}
              </button>
            ))}
          </div>

          {/* Expanded Kitchen Content */}
          {kitchenTypes.map((kitchen) => (
            <div
              key={kitchen.id}
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedKitchen === kitchen.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="bg-card border border-border rounded-xl p-4 sm:p-6 lg:p-8">
                <p className="text-muted-foreground text-center mb-6 max-w-3xl mx-auto leading-relaxed">
                  {kitchen.description}
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {kitchen.images.map((img, idx) => (
                    <div key={idx} className="relative overflow-hidden rounded-lg group/img">
                      <img
                        src={img}
                        alt={`${kitchen.name} Beispiel ${idx + 1}`}
                        className="w-full h-40 sm:h-48 lg:h-56 object-cover transition-transform duration-500 group-hover/img:scale-110"
                        crossOrigin="anonymous"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                    </div>
                  ))}
                </div>
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
