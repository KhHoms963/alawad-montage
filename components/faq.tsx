"use client"

import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqItems = [
  {
    question: 'Wie werden die Preise kalkuliert?',
    answer: 'Unsere Preise basieren auf dem Umfang des Projekts, den benötigten Materialien und dem Zeitaufwand. Nach einer kostenlosen Vor-Ort-Besichtigung erstellen wir Ihnen ein transparentes Angebot ohne versteckte Kosten.',
  },
  {
    question: 'Wie lange dauert eine Küchenmontage?',
    answer: 'Eine Standard-Küchenmontage dauert in der Regel 1-2 Arbeitstage, je nach Größe und Komplexität. Bei Inselküchen oder speziellen Anforderungen kann es etwas länger dauern. Wir informieren Sie vorab über die genaue Dauer.',
  },
  {
    question: 'Gibt es eine Garantie auf Ihre Arbeit?',
    answer: 'Ja, wir bieten eine Gewährleistung auf alle unsere Montagearbeiten. Die genaue Dauer hängt vom Projekttyp ab und wird im Angebot festgehalten. Wir stehen für Qualität und beheben eventuelle Mängel umgehend.',
  },
  {
    question: 'In welchen Regionen sind Sie tätig?',
    answer: 'Wir sind deutschlandweit tätig und bedienen Kunden in allen Bundesländern. Für größere Projekte reisen wir auch gerne weiter an. Kontaktieren Sie uns einfach für ein individuelles Angebot.',
  },
  {
    question: 'Welche Küchenmarken montieren Sie?',
    answer: 'Wir montieren Küchen aller namhaften Hersteller wie IKEA, Nobilia, Nolte, Häcker, Schüller und viele mehr. Auch Küchen von Möbelhäusern wie POCO, Roller oder XXXLutz bauen wir fachgerecht auf.',
  },
  {
    question: 'Muss ich bei der Montage anwesend sein?',
    answer: 'Zu Beginn der Montage sollten Sie anwesend sein, um letzte Details zu besprechen. Während der Arbeiten müssen Sie nicht zwingend vor Ort sein. Zur Abnahme und Einweisung bitten wir Sie jedoch erneut um Ihre Anwesenheit.',
  },
]

interface FaqItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  index: number
  isVisible: boolean
}

function FaqItem({ question, answer, isOpen, onToggle, index, isVisible }: FaqItemProps) {
  return (
    <div
      className={`bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-gold/50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-foreground pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="px-5 pb-5 text-muted-foreground leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
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

  const leftColumn = faqItems.slice(0, 3)
  const rightColumn = faqItems.slice(3)

  return (
    <section id="faq" ref={sectionRef} className="py-20 sm:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Häufig gestellte <span className="text-gold">Fragen</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die am häufigsten gestellten Fragen. 
            Bei weiteren Fragen kontaktieren Sie uns gerne direkt.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="space-y-4">
            {leftColumn.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
          <div className="space-y-4">
            {rightColumn.map((item, index) => (
              <FaqItem
                key={index + 3}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index + 3}
                onToggle={() => setOpenIndex(openIndex === index + 3 ? null : index + 3)}
                index={index + 3}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
