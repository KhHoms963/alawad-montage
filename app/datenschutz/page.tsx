"use client"

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

export default function DatenschutzPage() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://app.privacybee.io/widget.js'
    script.defer = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <main className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/">
          <Button variant="outline" className="mb-8 border-gold bg-gold text-black font-semibold hover:bg-gold/80 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Startseite
          </Button>
        </Link>

        {/* Content */}
        <div className="bg-card border border-border rounded-xl p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            <span className="text-gold">Datenschutzerklärung</span>
          </h1>

          <div
            dangerouslySetInnerHTML={{
              __html: `<privacybee-widget website-id="cmpcv8qx10ya4zp2zml016ifv" type="dsgvo" lang="de"></privacybee-widget>`
            }}
          />
        </div>
      </div>
    </main>
  )
}
