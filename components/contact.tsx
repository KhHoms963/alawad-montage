"use client"

import { useEffect, useRef, useState } from 'react'
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react'

const contactCards = [
  {
    icon: Phone,
    title: 'Telefon',
    value: '+49 176 61589109',
    link: 'tel:+4917661589109',
    description: 'Rufen Sie uns direkt an',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+49 176 61589109',
    link: 'https://wa.me/4917661589109',
    description: 'Schreiben Sie uns per WhatsApp',
    isExternal: true,
  },
  {
    icon: Mail,
    title: 'E-Mail',
    value: 'info@al-awad-montage.de',
    link: 'mailto:info@al-awad-montage.de',
    description: 'Senden Sie uns eine E-Mail',
  },
]

const openingHours = [
  { day: 'Montag - Freitag', hours: '07:00 - 18:00' },
  { day: 'Samstag', hours: '08:00 - 14:00' },
  { day: 'Sonntag', hours: 'Geschlossen' },
]

export function Contact() {
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
    <section id="kontakt" ref={sectionRef} className="py-20 sm:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">
            Kontakt
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            So erreichen Sie <span className="text-gold">uns</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wir sind für Sie da! Kontaktieren Sie uns telefonisch, per WhatsApp 
            oder E-Mail – wir freuen uns auf Ihre Anfrage.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {contactCards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              target={card.isExternal ? '_blank' : undefined}
              rel={card.isExternal ? 'noopener noreferrer' : undefined}
              className={`bg-card border border-border rounded-xl p-6 text-center hover:border-gold/50 hover:bg-card/80 transition-all duration-300 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <card.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{card.title}</h3>
              <p className="text-gold font-medium mb-2">{card.value}</p>
              <p className="text-sm text-muted-foreground">{card.description}</p>
            </a>
          ))}
        </div>

        {/* Map and Opening Hours */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <div
            className={`bg-card border border-border rounded-xl overflow-hidden transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="p-4 border-b border-border flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gold" />
              <span className="font-medium text-foreground">Unser Standort</span>
            </div>
            <div className="aspect-video bg-muted flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4054675291927!2d13.376492076903987!3d52.51914997981166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Standort"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="p-4">
              <p className="text-muted-foreground text-sm">
                Deutschlandweiter Service – Wir kommen zu Ihnen!
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div
            className={`bg-card border border-border rounded-xl p-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-gold" />
              <span className="font-semibold text-foreground text-lg">Öffnungszeiten</span>
            </div>

            <div className="space-y-4 mb-8">
              {openingHours.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-border last:border-0"
                >
                  <span className="text-foreground">{item.day}</span>
                  <span className={`font-medium ${item.hours === 'Geschlossen' ? 'text-muted-foreground' : 'text-gold'}`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-gold/10 rounded-lg p-4">
              <p className="text-sm text-foreground">
                <span className="font-semibold text-gold">Hinweis:</span> Außerhalb der Geschäftszeiten 
                erreichen Sie uns jederzeit per WhatsApp. Wir melden uns schnellstmöglich zurück!
              </p>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 flex gap-3">
              <a
                href="tel:+4917661589109"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-gold text-primary-foreground rounded-lg font-medium hover:bg-gold-dark transition-colors"
              >
                <Phone className="w-4 h-4" />
                Anrufen
              </a>
              <a
                href="https://wa.me/4917661589109"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white rounded-lg font-medium hover:bg-[#128C7E] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
