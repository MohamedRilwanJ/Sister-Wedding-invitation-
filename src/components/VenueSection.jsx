import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import ScrollReveal from './ScrollReveal';

export default function VenueSection() {
  const VENUE_MAPS_URL = "https://maps.app.goo.gl/DfGLUXZ3PhdMkVyz8";

  return (
    <section 
      className="px-6 py-7 relative z-20 flex flex-col items-center text-center bg-[#FFFDF8] border-b border-[#EADBCE]/70" 
      data-purpose="venue-and-qr"
    >
      <ScrollReveal delayClass="stagger-1">
        <div className="inline-block relative mb-3">
          <p className="font-serif italic text-xs tracking-[0.25em] text-[#C5A059] uppercase font-semibold mb-0.5">
            Programme & Location
          </p>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal-ink tracking-wide">
            Venue & Programme
          </h3>
          <div className="w-20 h-[1.5px] bg-[#C5A059] mx-auto mt-1 rounded-full"></div>
        </div>
      </ScrollReveal>

      {/* Time Highlight Pill */}
      <ScrollReveal delayClass="stagger-2">
        <div className="bg-[#FAF3F2] border border-[#E9D1D4] px-4 py-2 rounded-full mb-4 shadow-sm inline-flex flex-col sm:flex-row items-center justify-center">
          <span className="font-serif text-xs font-semibold text-charcoal-ink uppercase tracking-wider">
            Muhurtham / Nikah Time :
          </span>
          <span className="font-cinzel text-xs sm:text-sm font-bold text-[#8C3542] sm:ml-1.5">
            10.30 a.m. – 11.30 a.m.
          </span>
        </div>
      </ScrollReveal>

      {/* Venue Name & Full Address */}
      <ScrollReveal delayClass="stagger-3">
        <div className="mb-4">
          <h4 className="font-serif text-lg font-bold text-[#1F1C20] tracking-tight">
            CSI Immanuel Community Hall
          </h4>
          <p className="font-serif text-sm text-stone-700 leading-snug mt-1">
            Saradha College Road, Hasthampatti,<br />
            <span className="font-semibold text-charcoal-ink">Salem.</span>
          </p>
        </div>
      </ScrollReveal>

      {/* Dynamic Scannable QR in Ornate Gold-Rimmed Frame */}
      <ScrollReveal delayClass="stagger-4">
        <div className="bg-white p-3.5 rounded-2xl border-2 border-[#E5D7BE] shadow-[0_4px_16px_rgba(0,0,0,0.04)] inline-block relative">
          <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-gold-filigree pointer-events-none z-10"></div>
          <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t border-r border-gold-filigree pointer-events-none z-10"></div>
          <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b border-l border-gold-filigree pointer-events-none z-10"></div>
          <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-gold-filigree pointer-events-none z-10"></div>
          
          <QRCodeSVG 
            value={VENUE_MAPS_URL} 
            size={144} 
            level="H" 
            includeMargin={false} 
            fgColor="#262326" 
            bgColor="#FFFFFF"
            className="w-32 h-32 sm:w-36 sm:h-36"
          />
        </div>
        
        <p className="text-xs text-stone-500 mt-2 font-serif tracking-wide">
          Scan QR with Mobile Camera for Google Maps
        </p>

        {/* Dusty-Rose Maps Navigation Button */}
        <a 
          className="mt-4 w-full max-w-[270px] h-11 rounded-full bg-gradient-to-r from-rose-card to-rose-deep text-white font-serif font-semibold text-xs tracking-widest uppercase shadow-md flex items-center justify-center space-x-2 active:scale-95 hover:brightness-105 transition-all" 
          href={VENUE_MAPS_URL} 
          rel="noopener noreferrer" 
          target="_blank"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
          <span>View Venue on Google Maps</span>
        </a>
      </ScrollReveal>
    </section>
  );
}
