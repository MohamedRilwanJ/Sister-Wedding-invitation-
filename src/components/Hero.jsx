import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function Hero({ isOpening, hasOpened }) {
  const showContent = isOpening || hasOpened;

  return (
    <header 
      className="relative min-h-[100dvh] flex flex-col justify-between items-center text-center pt-8 pb-6 px-5 overflow-hidden z-20 border-b border-[#EADBCE]/50" 
      data-purpose="hero-experience"
    >
      {/* Immersive Cinematic Wedding Stage Background Image (Mounted & Preloaded) */}
      <img 
        alt="Cinematic Muslim Nikah Wedding Floral Stage" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0 parallax-bg transition-opacity duration-700" 
        style={{ objectPosition: 'center top', filter: 'none' }} 
        src="/hero.png" 
      />

      {/* Top spacer / subtle ambient lighting bar */}
      <div className="relative z-10 w-full flex justify-center pt-1"></div>

      {/* ==================== MAIN HERO CONTENT & ANNOUNCEMENT ==================== */}
      <div 
        className={`relative z-10 flex flex-col items-center text-center w-full max-w-[360px] mx-auto my-auto py-5 px-4 rounded-3xl transition-all duration-1000 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-2'
        }`}
        style={{ 
          background: 'radial-gradient(circle, rgba(255, 253, 248, 0.22) 0%, rgba(255, 253, 248, 0.08) 60%, transparent 80%)', 
          filter: 'drop-shadow(rgba(255, 255, 255, 0.95) 0px 1px 4px)' 
        }}
      >
        {/* 1. TOP MONOGRAM MEDALLION (HM) */}
        <ScrollReveal delayClass="stagger-1">
          <div className="relative w-24 h-16 flex items-center justify-center mb-1.5 gold-shimmer mx-auto">
            <svg className="absolute inset-0 w-full h-full drop-shadow-[0_2px_6px_rgba(0,0,0,0.06)]" fill="none" viewBox="0 0 130 90">
              <path d="M25 45 C 18 28, 34 16, 50 18 C 58 12, 72 12, 80 18 C 96 16, 112 28, 105 45 C 112 62, 96 74, 80 72 C 72 78, 58 78, 50 72 C 34 74, 18 62, 25 45 Z" fill="#FFFDF8" stroke="#3D383A" strokeWidth="1.2"></path>
              <path d="M28 45 C 22 31, 36 21, 51 22 C 59 16, 71 16, 79 22 C 94 21, 108 31, 102 45 C 108 59, 94 69, 79 68 C 71 74, 59 74, 51 68 C 36 69, 22 59, 28 45 Z" stroke="#C5A059" strokeDasharray="2.5 2" strokeWidth="0.85"></path>
              <circle cx="65" cy="13" fill="#C5A059" r="1.8"></circle>
              <circle cx="65" cy="77" fill="#C5A059" r="1.8"></circle>
            </svg>
            <span className="font-playfair text-[1.55rem] font-bold tracking-[0.18em] text-[#1c1917] relative z-10 italic select-none pl-1" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.9)' }}>
              HM
            </span>
          </div>
        </ScrollReveal>

        {/* 2. BISMILLAH BLESSINGS */}
        <ScrollReveal delayClass="stagger-2">
          <div className="mb-3 text-center">
            <p className="font-serif text-sm tracking-wide text-[#9A7B3E] select-none font-bold mb-0.5" style={{ textShadow: '0 1px 3px rgba(255,255,255,0.9)' }}>﷽</p>
            <p className="tamil-text text-[11px] sm:text-xs text-[#1c1917] font-semibold tracking-tight" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.9), 0 0 1px #fff' }}>
              பிஸ்மில்லாஹிர் ரஹ்மானிர் ரஹீம்
            </p>
            <p className="font-serif italic text-[10.5px] text-[#29272a] leading-tight mt-0.5 font-medium" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.9)' }}>
              In the Name of Allah, the Most Beneficent, the Most Merciful
            </p>
          </div>
        </ScrollReveal>

        {/* 3. MAIN TITLE (Two-Line Classical Tamil Calligraphy) */}
        <ScrollReveal delayClass="stagger-3">
          <h1 className="tamil-title text-[1.38rem] sm:text-[1.52rem] font-bold text-[#1c1917] tracking-tight px-2 leading-[1.35]" style={{ textShadow: '0 1px 3px rgba(255,255,255,0.95), 0 0 2px rgba(255,255,255,0.8)' }}>
            நிக்காஹ் (எ) திருமண<br />அழைப்பிதழ்
          </h1>
        </ScrollReveal>

        {/* Delicate Gold Filigree Divider */}
        <div className="w-full flex items-center justify-center my-3 opacity-90">
          <svg className="w-36 h-3.5" fill="none" viewBox="0 0 160 18">
            <path d="M10 9 C 30 18, 50 0, 70 9 C 75 11, 78 11, 80 9 C 82 11, 85 11, 90 9 C 110 0, 130 18, 150 9" stroke="#B08D47" strokeLinecap="round" strokeWidth="1.2"></path>
            <circle cx="80" cy="9" fill="#C5A059" r="2.5"></circle>
            <circle cx="70" cy="9" fill="#8C3542" r="1.5"></circle>
            <circle cx="90" cy="9" fill="#8C3542" r="1.5"></circle>
          </svg>
        </div>

        {/* 4. COUPLE NAMES AS EMOTIONAL FOCAL POINT */}
        <ScrollReveal delayClass="stagger-4">
          <div className="my-2 flex flex-col items-center">
            <h2 className="font-serif text-[1.55rem] sm:text-[1.78rem] font-bold text-[#1c1917] tracking-wide leading-tight" style={{ textShadow: '0 1px 3px rgba(255,255,255,0.95), 0 0 2px rgba(255,255,255,0.8)' }}>
              B. Hikmathullah
            </h2>
            <div className="my-1.5 text-rose-card flex items-center justify-center" style={{ filter: 'drop-shadow(0 1px 2px rgba(255,255,255,0.9))' }}>
              <span className="text-xs select-none text-rose-card">♡</span>
            </div>
            <h2 className="font-serif text-[1.55rem] sm:text-[1.78rem] font-bold text-[#1c1917] tracking-wide leading-tight" style={{ textShadow: '0 1px 3px rgba(255,255,255,0.95), 0 0 2px rgba(255,255,255,0.8)' }}>
              N. Murshidha Fathima
            </h2>
          </div>
        </ScrollReveal>

        {/* 5. SUPPORTING RESPECTFUL INVITATION LINE */}
        <ScrollReveal delayClass="stagger-5">
          <p className="font-serif italic text-xs sm:text-[13px] text-[#29272a] max-w-[290px] leading-relaxed mt-2.5 px-2 select-none font-semibold" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.95)' }}>
            "Together with our families, we invite you to our blessed Nikah."
          </p>
        </ScrollReveal>
      </div>

      {/* ==================== 6. SCROLL CTA AT THE BOTTOM ==================== */}
      <a 
        className="relative z-10 mx-auto mt-auto pt-2 pb-2 flex flex-col items-center group cursor-pointer text-decoration-none px-4 py-1 rounded-full" 
        href="#blessed-union" 
        style={{ 
          background: 'radial-gradient(circle, rgba(255, 253, 248, 0.3) 0%, transparent 80%)', 
          filter: 'drop-shadow(rgba(255, 255, 255, 0.95) 0px 1px 3px)' 
        }}
      >
        <span className="font-serif italic text-xs tracking-[0.25em] text-[#7A5B1E] font-bold group-hover:text-charcoal-ink transition-colors select-none" style={{ textShadow: '0 1px 3px rgba(255,255,255,0.95)' }}>
          Scroll to Open the Invitation
        </span>
        <div className="bobbing-chevron mt-1 text-[#8C3542] flex items-center justify-center" style={{ filter: 'drop-shadow(0 1px 2px rgba(255,255,255,0.9))' }}>
          <svg className="w-4 h-4 text-[#8C3542]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>
      </a>
    </header>
  );
}
