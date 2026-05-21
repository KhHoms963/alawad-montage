import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'AL AWAD MONTAGE | Professionelle Innenausbau & Montageservice',
  description: 'AL AWAD MONTAGE - Ihr Experte für Küchenmontage, Möbelmontage, Trockenbau, Holzhäuser sowie Türen & Fenster in Deutschland. Qualität, die man sieht – Handwerk, dem man vertraut.',
  keywords: 'Küchenmontage, Möbelmontage, Trockenbau, Holzhäuser, Türen, Fenster, Innenausbau, Montageservice, Deutschland',
  authors: [{ name: 'AL AWAD MONTAGE' }],
  openGraph: {
    title: 'AL AWAD MONTAGE | Professionelle Innenausbau & Montageservice',
    description: 'Qualität, die man sieht – Handwerk, dem man vertraut. Ihr Partner für professionellen Innenausbau.',
    type: 'website',
    locale: 'de_DE',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "AL AWAD MONTAGE",
              "description": "Professioneller Innenausbau & Montageservice in Deutschland",
              "telephone": "+49 17661589109",
              "email": "info@al-awad-montage.de",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "DE"
              },
              "priceRange": "€€",
              "openingHours": "Mo-Fr 07:00-18:00, Sa 08:00-14:00"
            })
          }}
        />
        <script
          src="https://app.privacybee.io/cookie-banner.js"
          website-id="cmpcv8qx10ya4zp2zml016ifv"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
