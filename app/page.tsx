import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Gallery } from '@/components/gallery'
import { Testimonials } from '@/components/testimonials'
import { FAQ } from '@/components/faq'
import { QuoteForm } from '@/components/quote-form'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <FAQ />
      <QuoteForm />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
