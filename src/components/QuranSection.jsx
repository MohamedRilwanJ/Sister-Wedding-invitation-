import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function QuranSection() {
  return (
    <section 
      className="px-5 py-5 relative z-20 bg-[#F8F3EA] border-b border-[#EADBCE]/70" 
      data-purpose="quran-verse"
    >
      <ScrollReveal delayClass="stagger-1">
        <div className="bg-[#FFFDF9] rounded-2xl p-5 sm:p-6 text-center shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-[#E9DCB8] relative overflow-hidden">
          <div className="flex flex-col items-center justify-center mb-3">
            <svg className="w-20 h-6 text-gold-filigree" fill="none" viewBox="0 0 80 24">
              <path d="M10 22 C 25 22, 30 4, 40 4 C 50 4, 55 22, 70 22" stroke="currentColor" strokeLinecap="round" strokeWidth="1.2"></path>
              <circle cx="40" cy="4" fill="currentColor" r="2"></circle>
            </svg>
            <span className="text-gold-filigree text-lg select-none mt-0.5">﷽</span>
          </div>

          <blockquote className="tamil-text text-[15px] sm:text-[16px] font-semibold text-charcoal-ink leading-relaxed mb-3 px-1">
            " மேலும் பெண்களுக்கு அவர்களுடைய மஹர் (மணக்கொடை)யை மகிழ்ச்சியோடு (கடமையாக எண்ணி) கொடுத்துவிடுங்கள்... "
          </blockquote>

          <p className="font-serif italic text-sm text-[#4E4850] leading-relaxed mb-2.5 px-2">
            " And give the women [upon marriage] their [bridal] gifts graciously... "
          </p>

          <div className="inline-flex items-center space-x-2 pt-1 border-t border-[#EADECC]">
            <span className="font-serif text-xs font-bold text-rose-card tracking-wider">
              (அல்குர்ஆன் / Al-Qur'an : 4:4)
            </span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
