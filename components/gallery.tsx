"use client"

import { useEffect, useRef, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const categories = ['Alle', 'Küchen', 'Möbel', 'Trockenbau', 'Türen']

const galleryItems = [
  { id: 1, src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', category: 'Küchen', title: 'Moderne Einbauküche' },
  { id: 2, src: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80', category: 'Küchen', title: 'L-Form Küche' },
  { id: 3, src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80', category: 'Möbel', title: 'Wohnzimmer Sofa' },
  { id: 4, src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80', category: 'Möbel', title: 'Wohnwand Montage' },
  { id: 5, src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80', category: 'Trockenbau', title: 'Trennwand Installation' },
  { id: 6, src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', category: 'Türen', title: 'Innentür Einbau' },
  { id: 7, src: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&q=80', category: 'Küchen', title: 'Designer Küche' },
  { id: 8, src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80', category: 'Möbel', title: 'Büromöbel Aufbau' },
  { id: 9, src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80', category: 'Trockenbau', title: 'Deckenverkleidung' },
  { id: 10, src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', category: 'Türen', title: 'Glastür Montage' },
  { id: 11, src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', category: 'Küchen', title: 'Inselküche' },
  { id: 12, src: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80', category: 'Möbel', title: 'Schlafzimmer Set' },
]

interface LightboxProps {
  items: typeof galleryItems
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

function Lightbox({ items, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const currentItem = items[currentIndex]

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, onPrev, onNext])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-3 bg-card rounded-full hover:bg-secondary transition-colors"
        aria-label="Schließen"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Buttons */}
      <button
        onClick={onPrev}
        className="absolute left-4 z-10 p-3 bg-card rounded-full hover:bg-secondary transition-colors"
        aria-label="Vorheriges Bild"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 z-10 p-3 bg-card rounded-full hover:bg-secondary transition-colors"
        aria-label="Nächstes Bild"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image */}
      <div className="max-w-5xl max-h-[85vh] px-16">
        <img
          src={currentItem.src}
          alt={currentItem.title}
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
          crossOrigin="anonymous"
        />
        <div className="text-center mt-4">
          <h3 className="text-xl font-semibold text-foreground">{currentItem.title}</h3>
          <p className="text-muted-foreground">{currentItem.category}</p>
          <p className="text-sm text-muted-foreground mt-2">
            {currentIndex + 1} / {items.length}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Alle')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
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

  const filteredItems = activeCategory === 'Alle'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1)
    }
  }

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1)
    }
  }

  return (
    <section id="galerie" ref={sectionRef} className="py-20 sm:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">
            Galerie
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Unsere <span className="text-gold">Referenzprojekte</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Überzeugen Sie sich selbst von unserer Arbeit. Hier finden Sie eine Auswahl 
            unserer erfolgreich abgeschlossenen Projekte.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gold text-primary-foreground'
                  : 'bg-card text-muted-foreground hover:text-foreground border border-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 50}ms`, transition: 'all 0.5s ease' }}
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-gold text-sm font-medium">{item.category}</span>
                  <h3 className="text-foreground font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  )
}
