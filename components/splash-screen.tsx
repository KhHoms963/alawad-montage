"use client"

import { useState, useEffect } from 'react'

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Start exit animation after logo animation completes
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
    }, 2200)

    // Call onComplete after exit animation
    const completeTimer = setTimeout(() => {
      onComplete()
    }, 2800)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-opacity duration-700 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <svg 
        width="320" 
        height="240" 
        viewBox="0 0 620 460" 
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-all duration-700 ${isExiting ? 'scale-50 -translate-y-20' : ''}`}
      >
        {/* Background */}
        <rect width="620" height="460" fill="transparent"/>

        <defs>
          <clipPath id="hclip">
            <polygon points="310,72 415,130 415,248 310,306 205,248 205,130"/>
          </clipPath>
          <style>
            {`
              #hex-out {
                stroke-dasharray: 1200;
                stroke-dashoffset: 1200;
                animation: draw 1.6s ease forwards;
              }
              #hex-in {
                stroke-dasharray: 900;
                stroke-dashoffset: 900;
                animation: draw 1.4s ease 0.4s forwards;
              }
              #hammer { animation: dropIn 0.6s cubic-bezier(.22,.68,0,1.3) 1.2s both; }
              #name   { animation: fadeUp 0.8s ease 1.9s both; opacity: 0; }
              #ll     { animation: growL 0.6s ease 2.3s both; }
              #lr     { animation: growR 0.6s ease 2.3s both; }
              #d1, #d2 { animation: popIn 0.3s ease 2.3s both; opacity: 0; }
              #sub    { animation: fadeUp 0.7s ease 2.6s both; opacity: 0; }
              #tag    { animation: fadeUp 0.7s ease 2.9s both; opacity: 0; }

              @keyframes draw {
                to { stroke-dashoffset: 0; }
              }
              @keyframes dropIn {
                from { opacity: 0; transform: translateY(-16px) scale(0.85); }
                to   { opacity: 1; transform: none; }
              }
              @keyframes fadeUp {
                from { opacity: 0; transform: translateY(10px); }
                to   { opacity: 1; transform: none; }
              }
              @keyframes growL {
                from { transform: scaleX(0); transform-origin: right center; }
                to   { transform: scaleX(1); transform-origin: right center; }
              }
              @keyframes growR {
                from { transform: scaleX(0); transform-origin: left center; }
                to   { transform: scaleX(1); transform-origin: left center; }
              }
              @keyframes popIn {
                from { opacity: 0; transform: scale(0); }
                to   { opacity: 1; transform: scale(1); }
              }
            `}
          </style>
        </defs>

        {/* Outer hexagon */}
        <polygon id="hex-out"
          points="310,55 430,123 430,259 310,327 190,259 190,123"
          fill="none" stroke="#C8962A" strokeWidth="2.5"/>

        {/* Inner hexagon fill */}
        <polygon
          points="310,80 410,135 410,245 310,300 210,245 210,135"
          fill="#1a1205"/>

        {/* Inner hexagon border */}
        <polygon id="hex-in"
          points="310,80 410,135 410,245 310,300 210,245 210,135"
          fill="none" stroke="#7a5a10" strokeWidth="1.2"/>

        {/* Wood grain lines */}
        <g clipPath="url(#hclip)" opacity="0.10">
          <line x1="190" y1="150" x2="430" y2="150" stroke="#C8962A" strokeWidth="1.2"/>
          <line x1="190" y1="170" x2="430" y2="170" stroke="#C8962A" strokeWidth="1.2"/>
          <line x1="190" y1="190" x2="430" y2="190" stroke="#C8962A" strokeWidth="1.2"/>
          <line x1="190" y1="210" x2="430" y2="210" stroke="#C8962A" strokeWidth="1.2"/>
          <line x1="190" y1="230" x2="430" y2="230" stroke="#C8962A" strokeWidth="1.2"/>
          <line x1="190" y1="250" x2="430" y2="250" stroke="#C8962A" strokeWidth="1.2"/>
          <line x1="190" y1="270" x2="430" y2="270" stroke="#C8962A" strokeWidth="1.2"/>
        </g>

        {/* HAMMER */}
        <g id="hammer">
          {/* Handle */}
          <rect x="303" y="202" width="14" height="68" rx="5" fill="#7B4A1E"/>
          <rect x="306" y="204" width="4" height="64" rx="2" fill="#9a6030" opacity="0.35"/>
          {/* Grip bands */}
          <rect x="303" y="238" width="14" height="5" rx="1" fill="#4a2a0a" opacity="0.7"/>
          <rect x="303" y="248" width="14" height="5" rx="1" fill="#4a2a0a" opacity="0.7"/>

          {/* Head main block */}
          <rect x="265" y="158" width="90" height="34" rx="6" fill="#C8962A"/>
          {/* Top highlight */}
          <rect x="265" y="158" width="90" height="9" rx="6" fill="#dda83a" opacity="0.65"/>
          {/* Bottom shadow */}
          <rect x="265" y="183" width="90" height="9" rx="4" fill="#8a6010" opacity="0.5"/>
          {/* Strike face (left) */}
          <rect x="265" y="158" width="14" height="34" rx="5" fill="#a07820"/>
          {/* Center divider line */}
          <line x1="303" y1="158" x2="303" y2="192" stroke="#7a5010" strokeWidth="1" opacity="0.6"/>

          {/* Claw (right) — upper prong */}
          <path d="M355,162 Q374,152 378,138 Q368,143 360,154 Q357,158 355,162 Z" fill="#b08828"/>
          {/* Claw — lower prong */}
          <path d="M355,178 Q374,184 380,172 Q370,174 362,170 Q358,170 355,176 Z" fill="#a07018"/>
          {/* Claw gap */}
          <line x1="355" y1="162" x2="376" y2="144" stroke="#1a1205" strokeWidth="2.5"/>
          <line x1="355" y1="178" x2="378" y2="174" stroke="#1a1205" strokeWidth="1.5"/>
        </g>

        {/* TEXT */}
        {/* Company name */}
        <text id="name" x="310" y="378"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="40" fontWeight="700"
          fill="#C8962A" textAnchor="middle" letterSpacing="6">AL AWAD</text>

        {/* Divider lines */}
        <rect id="ll" x="108" y="392" width="140" height="1.5" fill="#7a5a10"/>
        <circle id="d1" cx="255" cy="392.75" r="4.5" fill="#C8962A"/>
        <circle id="d2" cx="365" cy="392.75" r="4.5" fill="#C8962A"/>
        <rect id="lr" x="372" y="392" width="140" height="1.5" fill="#7a5a10"/>

        {/* Montage */}
        <text id="sub" x="310" y="420"
          fontFamily="Georgia, serif"
          fontSize="17" fontWeight="400"
          fill="#8B6514" textAnchor="middle" letterSpacing="12">MONTAGE</text>

        {/* Tagline in German */}
        <text id="tag" x="310" y="448"
          fontFamily="Arial, sans-serif"
          fontSize="9.5" fill="#5a4010"
          textAnchor="middle" letterSpacing="1.8">KÜCHEN · MÖBEL · HOLZHÄUSER · TÜREN &amp; FENSTER</text>
      </svg>
    </div>
  )
}

// Small logo component for the hero section
export function HeroLogo({ className = "" }: { className?: string }) {
  return (
    <svg 
      width="80" 
      height="80" 
      viewBox="170 40 280 300" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer hexagon */}
      <polygon
        points="310,55 430,123 430,259 310,327 190,259 190,123"
        fill="none" stroke="#C8962A" strokeWidth="2.5"/>

      {/* Inner hexagon fill */}
      <polygon
        points="310,80 410,135 410,245 310,300 210,245 210,135"
        fill="#1a1205"/>

      {/* Inner hexagon border */}
      <polygon
        points="310,80 410,135 410,245 310,300 210,245 210,135"
        fill="none" stroke="#7a5a10" strokeWidth="1.2"/>

      {/* Wood grain lines */}
      <defs>
        <clipPath id="hclip-small">
          <polygon points="310,72 415,130 415,248 310,306 205,248 205,130"/>
        </clipPath>
      </defs>
      <g clipPath="url(#hclip-small)" opacity="0.10">
        <line x1="190" y1="150" x2="430" y2="150" stroke="#C8962A" strokeWidth="1.2"/>
        <line x1="190" y1="170" x2="430" y2="170" stroke="#C8962A" strokeWidth="1.2"/>
        <line x1="190" y1="190" x2="430" y2="190" stroke="#C8962A" strokeWidth="1.2"/>
        <line x1="190" y1="210" x2="430" y2="210" stroke="#C8962A" strokeWidth="1.2"/>
        <line x1="190" y1="230" x2="430" y2="230" stroke="#C8962A" strokeWidth="1.2"/>
        <line x1="190" y1="250" x2="430" y2="250" stroke="#C8962A" strokeWidth="1.2"/>
        <line x1="190" y1="270" x2="430" y2="270" stroke="#C8962A" strokeWidth="1.2"/>
      </g>

      {/* HAMMER */}
      <g>
        {/* Handle */}
        <rect x="303" y="202" width="14" height="68" rx="5" fill="#7B4A1E"/>
        <rect x="306" y="204" width="4" height="64" rx="2" fill="#9a6030" opacity="0.35"/>
        {/* Grip bands */}
        <rect x="303" y="238" width="14" height="5" rx="1" fill="#4a2a0a" opacity="0.7"/>
        <rect x="303" y="248" width="14" height="5" rx="1" fill="#4a2a0a" opacity="0.7"/>

        {/* Head main block */}
        <rect x="265" y="158" width="90" height="34" rx="6" fill="#C8962A"/>
        {/* Top highlight */}
        <rect x="265" y="158" width="90" height="9" rx="6" fill="#dda83a" opacity="0.65"/>
        {/* Bottom shadow */}
        <rect x="265" y="183" width="90" height="9" rx="4" fill="#8a6010" opacity="0.5"/>
        {/* Strike face (left) */}
        <rect x="265" y="158" width="14" height="34" rx="5" fill="#a07820"/>
        {/* Center divider line */}
        <line x1="303" y1="158" x2="303" y2="192" stroke="#7a5010" strokeWidth="1" opacity="0.6"/>

        {/* Claw (right) — upper prong */}
        <path d="M355,162 Q374,152 378,138 Q368,143 360,154 Q357,158 355,162 Z" fill="#b08828"/>
        {/* Claw — lower prong */}
        <path d="M355,178 Q374,184 380,172 Q370,174 362,170 Q358,170 355,176 Z" fill="#a07018"/>
        {/* Claw gap */}
        <line x1="355" y1="162" x2="376" y2="144" stroke="#1a1205" strokeWidth="2.5"/>
        <line x1="355" y1="178" x2="378" y2="174" stroke="#1a1205" strokeWidth="1.5"/>
      </g>
    </svg>
  )
}
