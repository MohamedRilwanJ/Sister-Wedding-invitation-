import React, { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function ScratchReveal() {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const isDrawingRef = useRef(false);

  useEffect(() => {
    initCanvas();

    const handleResize = () => {
      if (!isRevealed) {
        initCanvas();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isRevealed]);

  const initCanvas = () => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const rect = wrapper.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const w = rect.width || 332;
    const h = rect.height || 220;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    // Draw Luxurious Scratchable Surface
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#D4B892');
    grad.addColorStop(0.35, '#F0E2CD');
    grad.addColorStop(0.7, '#C5A059');
    grad.addColorStop(1, '#B88F4A');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Subtle overlay circle
    ctx.fillStyle = 'rgba(184, 93, 103, 0.08)';
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, 70, 0, Math.PI * 2);
    ctx.fill();

    // Borders
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(8, 8, w - 16, h - 16);

    ctx.setLineDash([4, 3]);
    ctx.strokeStyle = '#8E6F33';
    ctx.lineWidth = 1;
    ctx.strokeRect(12, 12, w - 24, h - 24);
    ctx.setLineDash([]);

    // Central Pin
    ctx.save();
    ctx.translate(w / 2, h / 2 - 24);
    ctx.fillStyle = '#8C3542';
    ctx.beginPath();
    ctx.arc(0, 0, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#DFC788';
    ctx.font = '12px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✦', 0, 1);
    ctx.restore();

    // Instruction Typography
    ctx.fillStyle = '#262326';
    ctx.font = '600 13px "Cinzel", serif';
    ctx.textAlign = 'center';
    ctx.fillText('SCRATCH TO REVEAL', w / 2, h / 2 + 10);

    ctx.fillStyle = '#8C3542';
    ctx.font = 'italic 11px "Cormorant Garamond", serif';
    ctx.fillText('✨ Swipe gently with your finger ✨', w / 2, h / 2 + 28);
  };

  const checkScratchPercentage = () => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    try {
      const step = 8;
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      let transparent = 0;
      let total = 0;

      for (let i = 3; i < data.length; i += 4 * step) {
        total++;
        if (data[i] === 0) {
          transparent++;
        }
      }

      const ratio = transparent / total;
      if (ratio >= 0.38) {
        revealCard();
      }
    } catch (err) {
      // safe fallback
    }
  };

  const scratch = (e) => {
    if (!isDrawingRef.current || isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const cRect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const pos = {
      x: clientX - cRect.left,
      y: clientY - cRect.top
    };

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 22, 0, Math.PI * 2);
    ctx.fill();

    if (Math.random() < 0.25) {
      checkScratchPercentage();
    }
  };

  const startScratch = (e) => {
    if (isRevealed) return;
    isDrawingRef.current = true;
    scratch(e);
  };

  const stopScratch = () => {
    isDrawingRef.current = false;
    if (!isRevealed) {
      checkScratchPercentage();
    }
  };

  const revealCard = () => {
    setIsRevealed(true);
  };

  const resetCard = () => {
    setIsRevealed(false);
    setTimeout(() => {
      initCanvas();
    }, 50);
  };

  return (
    <section 
      className="px-5 py-7 relative z-20 bg-[#FCF3F4] border-y border-[#F0DFDE] text-center overflow-hidden" 
      data-purpose="scratch-to-reveal-section"
    >
      {/* Corner Floral Accents */}
      <div className="absolute top-2 left-2 w-10 h-10 pointer-events-none opacity-40 parallax-mid">
        <svg fill="none" viewBox="0 0 40 40">
          <path d="M4 36 C 4 16 16 4 36 4" stroke="#C5A059" strokeLinecap="round" strokeWidth="1.5"></path>
          <circle cx="8" cy="8" fill="#B85D67" r="2.5"></circle>
        </svg>
      </div>
      <div className="absolute top-2 right-2 w-10 h-10 pointer-events-none opacity-40 transform -scale-x-100 parallax-mid">
        <svg fill="none" viewBox="0 0 40 40">
          <path d="M4 36 C 4 16 16 4 36 4" stroke="#C5A059" strokeLinecap="round" strokeWidth="1.5"></path>
          <circle cx="8" cy="8" fill="#B85D67" r="2.5"></circle>
        </svg>
      </div>

      {/* Section Header Calligraphy */}
      <ScrollReveal delayClass="stagger-1">
        <div className="relative z-10 flex flex-col items-center mb-3">
          <h3 className="script-font text-[2.7rem] sm:text-[3.1rem] text-[#B85D67] leading-none mb-1 select-none">
            Scratch to Reveal the Date
          </h3>
          <div className="flex items-center justify-center space-x-2 text-gold-filigree opacity-85 my-0.5">
            <span className="w-10 h-[0.8px] bg-gradient-to-r from-transparent to-[#C5A059]"></span>
            <svg className="w-4 h-4 text-gold-filigree" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M12 2 C12 7 7 12 2 12 C7 12 12 17 12 22 C12 17 17 12 22 12 C17 12 12 7 12 2 Z" fill="#C5A059" opacity="0.6"></path>
            </svg>
            <span className="w-10 h-[0.8px] bg-gradient-to-l from-transparent to-[#C5A059]"></span>
          </div>
          <p className="font-serif italic text-xs text-stone-500 mt-1">
            Swipe across the card to unlock the auspicious Nikah timing
          </p>
        </div>
      </ScrollReveal>

      {/* Interactive Scratch Card Container (Stable alignment for finger touch) */}
      <ScrollReveal delayClass="stagger-2">
        <div className="relative w-full max-w-[340px] mx-auto rounded-2xl p-1 bg-gradient-to-b from-[#DFC788] via-[#EADBCE] to-[#C5A059] shadow-md scratch-container">
          <div 
            ref={wrapperRef}
            className="relative rounded-[14px] overflow-hidden bg-white min-h-[220px] flex items-center justify-center" 
            id="scratch-wrapper"
          >
            {/* UNDERLYING HIDDEN CONTENT (Revealed after scratching) */}
            <div 
              className={`absolute inset-0 w-full h-full bg-gradient-to-br from-[#FFFDF9] via-[#FAF3E9] to-[#FCEEEF] p-4 flex flex-col items-center justify-center text-center select-none ${
                isRevealed ? 'scratch-revealed' : ''
              }`} 
              id="scratch-hidden-content"
            >
              <div className="absolute inset-2 border border-dashed border-[#C5A059]/60 rounded-xl pointer-events-none"></div>
              <div className="relative z-10 flex flex-col items-center py-1">
                {/* Islamic Star & Floral Crown */}
                <div className="w-5 h-5 mb-0.5 text-gold-filigree flex items-center justify-center">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2L14.4 7.6L20 8.4L16 12.8L17.2 18.8L12 15.8L6.8 18.8L8 12.8L4 8.4L9.6 7.6L12 2Z"></path>
                  </svg>
                </div>
                <span className="script-font text-2xl text-rose-card leading-none mb-0.5">Save the Date</span>
                
                {/* Big Elegant Serif Date */}
                <span className="font-cinzel text-2xl sm:text-[1.7rem] font-bold tracking-widest text-[#242023] my-0.5">
                  01 . 11 . 2026
                </span>

                {/* Day Name (English & Tamil) */}
                <div className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-bold text-[#50758B]">
                  <span>Sunday</span>
                  <span>•</span>
                  <span className="tamil-text">ஞாயிற்றுக்கிழமை</span>
                </div>

                {/* Islamic Hijri Date */}
                <div className="mt-1 text-[11px] font-serif font-semibold tracking-wide text-[#8C3542] bg-[#FAF0E6]/80 px-2.5 py-0.5 rounded-full border border-gold-filigree/30">
                  Jamathul Awwal 20, Hijri 1448
                </div>

                {/* Nikah Timing */}
                <p className="font-serif text-xs font-semibold text-charcoal-ink mt-1">
                  Between <span className="text-[#9E444E] font-bold">10.30 a.m.</span> and <span className="text-[#9E444E] font-bold">11.30 a.m.</span>
                </p>

                {/* Embedded Add to Calendar Button */}
                <a 
                  className="mt-2.5 inline-flex items-center space-x-1.5 text-[10.5px] font-serif font-bold tracking-widest uppercase text-white bg-gradient-to-r from-rose-card to-rose-deep px-4 py-1.5 rounded-full shadow hover:brightness-105 active:scale-95 transition-all" 
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Nikah:+B.+Hikmathullah+%26+N.+Murshidha+Fathima&dates=20261101T050000Z/20261101T060000Z&details=Nikah+Ceremony+of+B.+Hikmathullah+and+N.+Murshidha+Fathima+at+CSI+Immanuel+Community+Hall,+Salem&location=CSI+Immanuel+Community+Hall,+Saradha+College+Road,+Hasthampatti,+Salem" 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span>Add to Calendar</span>
                </a>
              </div>
            </div>

            {/* SCRATCHABLE FOREGROUND CANVAS OVERLAY */}
            {!isRevealed && (
              <canvas 
                ref={canvasRef}
                onMouseDown={startScratch}
                onMouseMove={scratch}
                onMouseUp={stopScratch}
                onTouchStart={startScratch}
                onTouchMove={scratch}
                onTouchEnd={stopScratch}
                className="absolute inset-0 w-full h-full cursor-pointer z-10" 
                id="scratch-canvas"
              />
            )}
          </div>
        </div>
      </ScrollReveal>

      {/* Fallback / Instant Action Buttons */}
      <ScrollReveal delayClass="stagger-3">
        <div className="mt-3 flex items-center justify-center space-x-3">
          <button 
            onClick={revealCard}
            className={`font-serif text-[11px] font-semibold tracking-wider transition-all cursor-pointer py-0.5 ${
              isRevealed ? 'text-green-700 font-bold' : 'text-rose-card hover:text-rose-deep border-b border-rose-card/50 hover:border-rose-card'
            }`}
          >
            {isRevealed ? '✨ Date Unlocked!' : '✨ Or Tap to Reveal'}
          </button>
          <span className="text-stone-300">•</span>
          <button 
            onClick={resetCard}
            className="font-serif text-[11px] font-medium tracking-wider text-stone-500 hover:text-charcoal-ink transition-all cursor-pointer py-0.5"
          >
            Reset
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
}
