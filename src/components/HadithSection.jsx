import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function HadithSection() {
  return (
    <section 
      className="px-5 py-6 relative z-20 bg-[#FAF3F2] border-b border-[#EADBCE]/70" 
      data-purpose="hadith-teaching"
    >
      <ScrollReveal delayClass="stagger-1">
        <div className="bg-[#FFFDF9] rounded-2xl p-5 sm:p-6 text-center shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-[#EADBCE]">
          <div className="flex justify-center mb-2">
            <svg className="w-6 h-6 text-rose-card/80" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1"></circle>
              <circle cx="12" cy="12" fill="#C5A059" r="3"></circle>
            </svg>
          </div>

          <p className="tamil-text text-sm text-charcoal-ink mb-3 leading-snug">
            நபி (ஸல்) அவர்கள் கூறியதாக<br />
            <span className="font-bold text-base text-[#1E1B1F]">அபு ஹுரைரா (ரலி) அவர்கள் அறிவிக்கிறார்கள் :</span>
          </p>

          <div className="tamil-text text-[14.5px] sm:text-[15.5px] font-medium text-[#2C292E] leading-loose mb-4">
            "ஒரு பெண் நான்கு விஷயங்களுக்காக மணமுடிக்கப்படுகிறாள்:<br />
            <span className="font-semibold text-rose-card">அவளுடைய செல்வம்,</span><br />
            <span className="font-semibold text-soft-blue-dark">அவளுடைய குடும்ப அந்தஸ்து,</span><br />
            <span className="font-semibold text-rose-card">அவளுடைய அழகு</span> மற்றும்<br />
            <span className="font-bold text-gold-filigree">அவளுடைய மார்க்கம்</span> ஆகவே<br />
            மார்க்கப்பற்றுள்ள பெண்ணை (தேர்ந்தெடுத்து)<br />
            <span className="text-base text-rose-card font-bold underline decoration-rose-card/40 underline-offset-4">
              வெற்றி கொள்வீராக...
            </span>"
          </div>

          <div className="border-t border-[#EADECC] pt-3 text-center font-serif">
            <p className="text-[13px] text-[#4A454C] leading-snug">
              <span className="font-semibold text-charcoal-ink">Narrated Abu Hurairah (RA):</span> The Prophet (Sal) said :<br />
              <span className="italic text-stone-700">"A woman is married for four things: her wealth, her lineage, her beauty, and her religion. So choose the one who is religious..."</span>
            </p>
            <p className="text-xs font-semibold text-soft-blue-dark mt-2 tracking-wide">
              (ஸஹீஹுல் புகாரி / Sahih al-Bukhari 5090)
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
