import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function CoupleSection() {
  return (
    <section 
      className="px-5 pt-8 pb-8 relative z-20 text-center bg-[#FFFDF8]" 
      data-purpose="couple-section" 
      id="couple"
    >
      {/* Side Foliage Stems Framing Couple */}
      <div className="absolute left-2 top-10 w-12 h-44 opacity-40 pointer-events-none select-none parallax-mid">
        <svg className="w-full h-full" fill="none" viewBox="0 0 50 150">
          <path d="M5 140 Q 25 75 5 10" stroke="#758B6F" strokeLinecap="round" strokeWidth="1.2"></path>
          <ellipse cx="16" cy="40" fill="#889F82" rx="9" ry="5" transform="rotate(-25 16 40)"></ellipse>
          <ellipse cx="20" cy="80" fill="#A8B59F" rx="9" ry="5" transform="rotate(-15 20 80)"></ellipse>
          <ellipse cx="14" cy="115" fill="#889F82" rx="8" ry="4.5" transform="rotate(-30 14 115)"></ellipse>
        </svg>
      </div>
      <div className="absolute right-2 top-10 w-12 h-44 opacity-40 pointer-events-none select-none transform -scale-x-100 parallax-mid">
        <svg className="w-full h-full" fill="none" viewBox="0 0 50 150">
          <path d="M5 140 Q 25 75 5 10" stroke="#758B6F" strokeLinecap="round" strokeWidth="1.2"></path>
          <ellipse cx="16" cy="40" fill="#889F82" rx="9" ry="5" transform="rotate(-25 16 40)"></ellipse>
          <ellipse cx="20" cy="80" fill="#A8B59F" rx="9" ry="5" transform="rotate(-15 20 80)"></ellipse>
          <ellipse cx="14" cy="115" fill="#889F82" rx="8" ry="4.5" transform="rotate(-30 14 115)"></ellipse>
        </svg>
      </div>

      {/* Warm Ivory Paper Card Container with Double Border Accent */}
      <div className="relative w-full max-w-[370px] mx-auto bg-[#FFFDF9] rounded-3xl p-6 sm:p-7 shadow-[0_8px_24px_rgba(0,0,0,0.04)] border border-[#E9DCB8] overflow-hidden">
        {/* Card Inner Dashed Border */}
        <div className="absolute inset-2.5 border border-dashed border-[#DFC788]/60 rounded-[20px] pointer-events-none"></div>
        
        {/* Section Title with Golden Underline */}
        <ScrollReveal delayClass="stagger-1">
          <div className="inline-block relative mb-5 z-10">
            <p className="font-serif italic text-xs tracking-[0.25em] text-[#C5A059] uppercase font-semibold mb-0.5">Meet the Couple</p>
            <h3 className="tamil-title text-[1.2rem] sm:text-[1.3rem] font-bold text-charcoal-ink tracking-wide">
              மணமக்கள் :
            </h3>
            <div className="w-24 h-[1.5px] bg-[#C5A059] mx-auto mt-1 rounded-full"></div>
          </div>
        </ScrollReveal>

        {/* Groom Presentation */}
        <ScrollReveal delayClass="stagger-2">
          <div className="relative z-10 mb-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold-filigree font-semibold mb-1 font-serif">மணமகன்</p>
            <div className="tamil-text text-[1.38rem] sm:text-[1.48rem] font-bold text-[#1B181C] tracking-tight leading-snug">
              பீ. ஹிக்மத்துல்லாஹ்
            </div>
            <div className="font-serif text-sm sm:text-base font-semibold text-[#1B181C] mt-1">
              B. Hikmathullah, <span className="text-xs sm:text-sm font-semibold text-[#50758B]">B.E. (Mech), MBA (Safety)</span>
            </div>
            <p className="font-serif text-xs text-stone-600 mt-1 italic tracking-wide">
              KNR Constructions Ltd., Hyderabad.
            </p>
          </div>
        </ScrollReveal>

        {/* Subtle Islamic Ornamental Divider Motif Between Groom & Bride */}
        <div className="relative z-10 py-2.5 flex items-center justify-center space-x-3 text-rose-card">
          <div className="w-14 h-[0.7px] bg-gradient-to-r from-transparent to-[#D4B592]"></div>
          <svg className="w-5 h-5 text-gold-filigree" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect height="12" rx="1.5" strokeWidth="1.2" transform="rotate(45 12 12)" width="12" x="6" y="6"></rect>
            <rect height="12" rx="1.5" strokeWidth="1.2" width="12" x="6" y="6"></rect>
            <circle cx="12" cy="12" fill="#B85D67" r="2.5"></circle>
          </svg>
          <div className="w-14 h-[0.7px] bg-gradient-to-l from-transparent to-[#D4B592]"></div>
        </div>

        {/* Bride Presentation */}
        <ScrollReveal delayClass="stagger-3">
          <div className="relative z-10 mt-3 mb-1">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold-filigree font-semibold mb-1 font-serif">மணமகள்</p>
            <div className="tamil-text text-[1.38rem] sm:text-[1.48rem] font-bold text-[#1B181C] tracking-tight leading-snug">
              நூ. முர்ஷிதா பாத்திமா
            </div>
            <div className="font-serif text-sm sm:text-base font-semibold text-[#1B181C] mt-1">
              N. Murshidha Fathima, <span className="text-xs sm:text-sm font-semibold text-[#50758B]">B.Sc. (TFD)</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
