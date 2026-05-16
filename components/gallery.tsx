"use client"

import { useEffect, useRef, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const categories = ['Alle', 'Küchen', 'Möbel', 'Trockenbau', 'Türen/Fenster', 'Holzhäuser']

const galleryItems = [
  // Küchen (a1-a14)
  { id: 1, src: '/images/a1.jpeg', category: 'Küchen', title: 'Küche 1' },
  { id: 2, src: '/images/a2.jpeg', category: 'Küchen', title: 'Küche 2' },
  { id: 3, src: '/images/a3.jpeg', category: 'Küchen', title: 'Küche 3' },
  { id: 4, src: '/images/a4.jpeg', category: 'Küchen', title: 'Küche 4' },
  { id: 5, src: '/images/a5.jpeg', category: 'Küchen', title: 'Küche 5' },
  { id: 6, src: '/images/a6.jpeg', category: 'Küchen', title: 'Küche 6' },
  { id: 7, src: '/images/a7.jpeg', category: 'Küchen', title: 'Küche 7' },
  { id: 8, src: '/images/a8.jpeg', category: 'Küchen', title: 'Küche 8' },
  { id: 9, src: '/images/a9.jpeg', category: 'Küchen', title: 'Küche 9' },
  { id: 10, src: '/images/a10.jpeg', category: 'Küchen', title: 'Küche 10' },
  { id: 11, src: '/images/a11.jpeg', category: 'Küchen', title: 'Küche 11' },
  { id: 12, src: '/images/a12.jpeg', category: 'Küchen', title: 'Küche 12' },
  { id: 13, src: '/images/a13.jpeg', category: 'Küchen', title: 'Küche 13' },
  { id: 14, src: '/images/a14.jpeg', category: 'Küchen', title: 'Küche 14' },
  // Möbel (b1-b15, b11 fehlt)
  { id: 15, src: '/images/b1.jpeg', category: 'Möbel', title: 'Möbel 1' },
  { id: 16, src: '/images/b2.jpeg', category: 'Möbel', title: 'Möbel 2' },
  { id: 17, src: '/images/b3.jpeg', category: 'Möbel', title: 'Möbel 3' },
  { id: 18, src: '/images/b4.jpeg', category: 'Möbel', title: 'Möbel 4' },
  { id: 19, src: '/images/b5.jpeg', category: 'Möbel', title: 'Möbel 5' },
  { id: 20, src: '/images/b6.jpeg', category: 'Möbel', title: 'Möbel 6' },
  { id: 21, src: '/images/b7.jpg', category: 'Möbel', title: 'Möbel 7' },
  { id: 22, src: '/images/b8.jpg', category: 'Möbel', title: 'Möbel 8' },
  { id: 23, src: '/images/b9.jpg', category: 'Möbel', title: 'Möbel 9' },
  { id: 24, src: '/images/b10.jpg', category: 'Möbel', title: 'Möbel 10' },
  { id: 25, src: '/images/b12.jpg', category: 'Möbel', title: 'Möbel 12' },
  { id: 26, src: '/images/b13.jpg', category: 'Möbel', title: 'Möbel 13' },
  { id: 27, src: '/images/b14.jpg', category: 'Möbel', title: 'Möbel 14' },
  { id: 28, src: '/images/b15.jpg', category: 'Möbel', title: 'Möbel 15' },
  // Trockenbau (c1-c13, c11 fehlt)
  { id: 29, src: '/images/c1.jpeg', category: 'Trockenbau', title: 'Trockenbau 1' },
  { id: 30, src: '/images/c2.jpeg', category: 'Trockenbau', title: 'Trockenbau 2' },
  { id: 31, src: '/images/c3.jpeg', category: 'Trockenbau', title: 'Trockenbau 3' },
  { id: 32, src: '/images/c4.jpeg', category: 'Trockenbau', title: 'Trockenbau 4' },
  { id: 33, src: '/images/c5.jpeg', category: 'Trockenbau', title: 'Trockenbau 5' },
  { id: 34, src: '/images/c6.jpeg', category: 'Trockenbau', title: 'Trockenbau 6' },
  { id: 35, src: '/images/c7.jpeg', category: 'Trockenbau', title: 'Trockenbau 7' },
  { id: 36, src: '/images/c8.jpeg', category: 'Trockenbau', title: 'Trockenbau 8' },
  { id: 37, src: '/images/c9.jpeg', category: 'Trockenbau', title: 'Trockenbau 9' },
  { id: 38, src: '/images/c10.jpeg', category: 'Trockenbau', title: 'Trockenbau 10' },
  { id: 39, src: '/images/c12.jpeg', category: 'Trockenbau', title: 'Trockenbau 12' },
  { id: 40, src: '/images/c13.jpeg', category: 'Trockenbau', title: 'Trockenbau 13' },
  // Holzhäuser (d1-d9)
  { id: 41, src: '/images/d1.jpeg', category: 'Holzhäuser', title: 'Holzhaus 1' },
  { id: 42, src: '/images/d2.jpeg', category: 'Holzhäuser', title: 'Holzhaus 2' },
  { id: 43, src: '/images/d3.jpeg', category: 'Holzhäuser', title: 'Holzhaus 3' },
  { id: 44, src: '/images/d4.jpeg', category: 'Holzhäuser', title: 'Holzhaus 4' },
  { id: 45, src: '/images/d5.jpeg', category: 'Holzhäuser', title: 'Holzhaus 5' },
  { id: 46, src: '/images/d6.jpeg', category: 'Holzhäuser', title: 'Holzhaus 6' },
  { id: 47, src: '/images/d7.jpeg', category: 'Holzhäuser', title: 'Holzhaus 7' },
  { id: 48, src: '/images/d8.jpeg', category: 'Holzhäuser', title: 'Holzhaus 8' },
  { id: 49, src: '/images/d9.jpeg', category: 'Holzhäuser', title: 'Holzhaus 9' },
  // Türen/Fenster (e1-e5)
  { id: 50, src: '/images/e1.jpeg', category: 'Türen/Fenster', title: 'Türen/Fenster 1' },
  { id: 51, src: '/images/e2.jpeg', category: 'Türen/Fenster', title: 'Türen/Fenster 2' },
  { id: 52, src: '/images/e3.jpeg', category: 'Türen/Fenster', title: 'Türen/Fenster 3' },
  { id: 53, src: '/images/e4.jpeg', category: 'Türen/Fenster', title: 'Türen/Fenster 4' },
  { id: 54, src: '/images/e5.jpeg', category: 'Türen/Fenster', title: 'Türen/Fenster 5' },

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
    document.documentElement.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, onPrev, onNext])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md p-4">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-2 sm:p-3 bg-card rounded-full hover:bg-secondary transition-colors"
        aria-label="Schließen"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-2 sm:left-4 z-10 p-2 sm:p-3 bg-card rounded-full hover:bg-secondary transition-colors"
        aria-label="Vorheriges Bild"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-2 sm:right-4 z-10 p-2 sm:p-3 bg-card rounded-full hover:bg-secondary transition-colors"
        aria-label="Nächstes Bild"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <div className="max-w-5xl max-h-[85vh] px-10 sm:px-16 w-full flex flex-col items-center">
        <img
          src={currentItem.src}
          alt={currentItem.title}
          className="max-w-full max-h-[65vh] sm:max-h-[75vh] object-contain rounded-lg"
          crossOrigin="anonymous"
        />
        <div className="text-center mt-3 sm:mt-4">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground">{currentItem.title}</h3>
          <p className="text-sm sm:text-base text-muted-foreground">{currentItem.category}</p>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
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

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 50}ms`, transition: 'all 0.5s ease' }}
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-40 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4">
                  <span className="text-gold text-xs sm:text-sm font-medium">{item.category}</span>
                  <h3 className="text-foreground font-semibold text-sm sm:text-base">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
