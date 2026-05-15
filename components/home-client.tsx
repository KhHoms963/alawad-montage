"use client"

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Timeline } from '@/components/timeline'
import { Services } from '@/components/services'
import { Gallery } from '@/components/gallery'
import { Testimonials } from '@/components/testimonials'
import { FAQ } from '@/components/faq'
import { QuoteForm } from '@/components/quote-form'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { SplashScreen } from '@/components/splash-screen'

export function HomeClient() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      {showSplash && (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      )}
      <main className={showSplash ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Navigation />
        <Hero />
        <About />
        <Timeline />
        <Services />
        <Gallery />
        <Testimonials />
        <FAQ />
        <QuoteForm />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  )
}
