"use client"

import { useEffect, useRef, useState } from 'react'
import { MessageCircle, CheckCircle, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

const benefits = [
  'Kostenlose Beratung & Angebotserstellung',
  'Schnelle Bearbeitung Ihrer Anfrage',
  'Professionelle Umsetzung garantiert',
  'Faire und transparente Preise',
  'Deutschlandweiter Service',
]

const services = [
  'Küchenmontage',
  'Möbelmontage',
  'Trockenbau & Trennwände',
  'Holzhäuser',
  'Türen & Fenster',
  'Sonstiges',
]

export function QuoteForm() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    plz: '',
    service: '',
    message: '',
  })
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = encodeURIComponent(
      `Hallo, ich möchte ein Angebot anfragen.\n\n` +
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Telefon: ${formData.phone}\n` +
      `PLZ: ${formData.plz}\n` +
      `Gewünschte Leistung: ${formData.service}\n` +
      `Nachricht: ${formData.message}`
    )
    
    window.open(`https://wa.me/4917661589109?text=${message}`, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Benefits Side */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">
              Jetzt Angebot anfordern
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Starten Sie Ihr <span className="text-gold">Projekt</span> mit uns
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Füllen Sie das Formular aus und erhalten Sie innerhalb von 24 Stunden 
              ein unverbindliches Angebot. Wir freuen uns auf Ihre Anfrage!
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-3 text-foreground ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms`, transition: 'all 0.5s ease' }}
                >
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* WhatsApp Alternative */}
            <div className="mt-10 p-6 bg-card border border-border rounded-xl">
              <p className="text-muted-foreground mb-4">
                Oder kontaktieren Sie uns direkt per WhatsApp:
              </p>
              <a
                href="https://wa.me/4917661589109"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#25D366] text-white hover:bg-[#128C7E]">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp öffnen
                </Button>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-xl p-6 sm:p-8"
            >
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    Vorname *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Max"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Nachname *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Mustermann"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="+49 123 456789"
                  />
                </div>
                <div>
                  <label htmlFor="plz" className="block text-sm font-medium text-foreground mb-2">
                    Postleitzahl *
                  </label>
                  <input
                    type="text"
                    id="plz"
                    name="plz"
                    required
                    value={formData.plz}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="12345"
                    maxLength={5}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Gewünschte Leistung *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                >
                  <option value="">Bitte wählen...</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Ihre Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                  placeholder="Beschreiben Sie Ihr Projekt..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gold text-primary-foreground hover:bg-gold-dark py-6 text-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Anfrage senden
              </Button>

              <p className="text-sm text-muted-foreground mt-4 text-center">
                Ihre Anfrage wird per WhatsApp gesendet
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
