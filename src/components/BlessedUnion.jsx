import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function BlessedUnion() {
  return (
    <section 
      className="px-5 py-8 relative z-20 bg-[#FAF6F0] border-b border-[#EADBCE]/70 text-center" 
      data-purpose="photo-story" 
      id="blessed-union"
    >
      <ScrollReveal delayClass="stagger-1">
        <div className="inline-flex items-center space-x-2 mb-1">
          <span className="w-6 h-[1px] bg-gold-filigree/60"></span>
          <p className="font-serif text-[11px] uppercase tracking-[0.25em] text-[#B08D47] font-semibold">
            A BLESSED UNION
          </p>
          <span className="w-6 h-[1px] bg-gold-filigree/60"></span>
        </div>

        <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal-ink tracking-tight mb-3">
          With the Blessings of Our Families
        </h3>
      </ScrollReveal>

      {/* Framed Visual Backdrop (Single Static Muslim Nikah Wedding Scene inside rounded card) */}
      <ScrollReveal delayClass="stagger-2">
        <div className="relative w-full max-w-[360px] mx-auto rounded-2xl overflow-hidden shadow-lg border-2 border-[#E8DEC8] bg-[#FFFBF5]">
          <div className="relative w-full aspect-[4/3] flex items-center justify-center overflow-hidden">
            <img 
              src="/blessed_union_artwork.jpg" 
              alt="A Blessed Union Nikah Wedding Stage with Rings, Lanterns & Islamic Arch" 
              className="w-full h-full object-cover scale-110 object-center pointer-events-none select-none" 
            />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delayClass="stagger-3">
        <p className="font-serif italic text-xs text-stone-500 mt-2.5 px-3">
          Beginning a blessed journey together, with the prayers and blessings of our families.
        </p>
      </ScrollReveal>
    </section>
  );
}
