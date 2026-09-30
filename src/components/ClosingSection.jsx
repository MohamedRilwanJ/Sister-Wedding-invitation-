import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function ClosingSection() {
  return (
    <>
      {/* 10. CLOSING INVITATION MESSAGE (MARRIAGE AND WALIMA) */}
      <section 
        className="px-6 pt-6 pb-6 text-center relative z-20 bg-[#FFFDF8]" 
        data-purpose="closing-dua"
      >
        <ScrollReveal delayClass="stagger-1">
          <div className="inline-block relative mb-2">
            <p className="font-serif italic text-xs tracking-[0.25em] text-[#C5A059] uppercase font-semibold">
              Marriage & Walima
            </p>
          </div>
          <div className="py-1">
            <p className="font-serif text-sm sm:text-base text-charcoal-ink leading-relaxed px-1 font-medium mb-3">
              "Kindly solicit your gracious presence with family and friends on the auspicious occasion of the Nikah & Walima of our children."
            </p>
            <p className="tamil-text text-[13px] sm:text-[14px] font-semibold text-stone-700 leading-relaxed px-1">
              எல்லாம் வல்ல அல்லாஹ்வின் பேரருளால் நடைபெறும் இந்நிகழ்வில் தாங்களும் தங்களின் குடும்பத்தாரும் கலந்து கொண்டு மணமக்களை வாழ்த்த அன்போடு அழைக்கின்றோம்.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* 11. LUXURY FOOTER */}
      <footer 
        className="mt-auto pt-7 pb-10 px-6 text-center relative z-20 flex flex-col items-center border-t border-[#EADECC]/70 bg-gradient-to-b from-[#FFFDF8] to-[#F8F2E8] overflow-hidden" 
        data-purpose="card-footer"
      >
        {/* Corner Floral Accents Left */}
        <div className="absolute -bottom-6 -left-6 w-32 h-32 pointer-events-none z-10 opacity-75 select-none parallax-mid">
          <svg className="w-full h-full" fill="none" viewBox="0 0 120 120">
            <path d="M10 20 C 15 45, 35 60, 60 55" stroke="#758B6F" strokeWidth="1.2"></path>
            <circle cx="35" cy="35" fill="#B85D67" r="14"></circle>
            <circle cx="35" cy="35" fill="#E8B5B8" r="8"></circle>
            <circle cx="55" cy="50" fill="#7A9FB3" r="8"></circle>
          </svg>
        </div>

        {/* Corner Floral Accents Right */}
        <div className="absolute -bottom-6 -right-6 w-32 h-32 pointer-events-none z-10 opacity-75 select-none transform -scale-x-100 parallax-mid">
          <svg className="w-full h-full" fill="none" viewBox="0 0 120 120">
            <path d="M10 20 C 15 45, 35 60, 60 55" stroke="#758B6F" strokeWidth="1.2"></path>
            <circle cx="35" cy="35" fill="#B85D67" r="14"></circle>
            <circle cx="35" cy="35" fill="#E8B5B8" r="8"></circle>
            <circle cx="55" cy="50" fill="#7A9FB3" r="8"></circle>
          </svg>
        </div>

        {/* Elegant Closing Signature */}
        <ScrollReveal delayClass="stagger-2">
          <div className="relative z-20 flex flex-col items-center">
            <div className="w-12 h-4 mb-2 flex items-center justify-center text-gold-filigree opacity-85">
              <svg className="w-full h-full" fill="none" viewBox="0 0 60 16">
                <path d="M5 8 C 15 2, 25 14, 30 8 C 35 2, 45 14, 55 8" stroke="#C5A059" strokeWidth="1.1" strokeLinecap="round"></path>
                <circle cx="30" cy="8" fill="#B85D67" r="2.2"></circle>
              </svg>
            </div>
            <p className="font-serif italic text-base sm:text-lg font-bold text-charcoal-ink tracking-wide mb-1">
              With Warm Regards & Prayers
            </p>
            <p className="font-serif text-xs uppercase tracking-[0.25em] text-[#9A7B3E] font-semibold mb-3.5">
              Family & Friends
            </p>
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/60 to-transparent mb-3.5"></div>
            
            <p className="font-serif text-lg sm:text-xl text-[#8C3542] leading-none mb-1 select-none font-semibold">
              جزاكم الله خيرًا
            </p>
            <p className="font-serif italic text-[11px] sm:text-xs text-stone-500 tracking-wider mb-2">
              Jazakumullahu Khairan
            </p>

            <div className="flex items-center justify-center space-x-1 text-gold-filigree opacity-75 mt-1">
              <span className="w-6 h-[0.7px] bg-[#C5A059]"></span>
              <span className="text-[9px] text-[#B85D67]">✦</span>
              <span className="w-6 h-[0.7px] bg-[#C5A059]"></span>
            </div>
          </div>
        </ScrollReveal>
      </footer>
    </>
  );
}
