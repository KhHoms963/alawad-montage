"use client"

import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/4917661589109"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="WhatsApp kontaktieren"
    >
      <div className="relative">
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25" />
        
        {/* Button */}
        <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-card border border-border rounded-lg px-4 py-2 shadow-lg whitespace-nowrap">
            <p className="text-sm font-medium text-foreground">Schreiben Sie uns!</p>
            <p className="text-xs text-muted-foreground">Schnelle Antwort garantiert</p>
          </div>
        </div>
      </div>
    </a>
  )
}
