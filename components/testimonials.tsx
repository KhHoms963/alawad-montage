"use client"

import { useEffect, useRef, useState } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Thomas Müller',
    city: 'München',
    rating: 5,
    text: 'Absolut zuverlässig und professionell! Die Küchenmontage wurde termingerecht und sauber erledigt. Das Team war freundlich und hat alles perfekt eingebaut. Sehr empfehlenswert!',
  },
  {
    id: 2,
    name: 'Sandra Schmidt',
    city: 'Berlin',
    rating: 5,
    text: 'Ich bin begeistert von der Qualität der Arbeit. Meine komplette Wohnzimmereinrichtung wurde schnell und präzise aufgebaut. Keine Kratzer, keine Probleme. Top Service!',
  },
  {
    id: 3,
    name: 'Michael Weber',
    city: 'Hamburg',
    rating: 5,
    text: 'Das Trockenbau-Projekt wurde perfekt umgesetzt. Die Kommunikation war hervorragend und das Ergebnis übertrifft meine Erwartungen. Faire Preise und erstklassige Arbeit.',
  },
  {
    id: 4,
    name: 'Julia Fischer',
    city: 'Frankfurt',
    rating: 5,
    text: 'Unser Gartenhaus steht und ist wunderschön! Das Team hat trotz schlechtem Wetter alles termingerecht fertiggestellt. Vielen Dank für die tolle Arbeit!',
  },
]

export function Testimonials() {
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
    <section id="referenzen" ref={sectionRef} className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">
            Kundenstimmen
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Was unsere Kunden <span className="text-gold">sagen</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Zufriedene Kunden sind unser größter Erfolg. Lesen Sie, was andere über 
            unsere Arbeit berichten.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-card border border-border rounded-xl p-6 hover:border-gold/50 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-gold/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.city}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-6 py-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold fill-gold" />
              ))}
            </div>
            <span className="text-muted-foreground">
              <span className="font-semibold text-foreground">4.9</span> von 5 Sternen bei 
              <span className="font-semibold text-foreground"> 200+</span> Bewertungen
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
