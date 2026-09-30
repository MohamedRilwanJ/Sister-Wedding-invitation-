import React, { useEffect, useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const targetDate = new Date('2026-11-01T10:30:00+05:30').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(days).padStart(2, '0'),
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0')
        });
      } else {
        setTimeLeft({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00'
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="px-5 py-7 relative z-20 bg-[#FFFDF8] border-b border-[#EADBCE]/70" 
      data-purpose="countdown-section"
    >
      <div className="text-center relative z-10">
        <ScrollReveal delayClass="stagger-1">
          <div className="inline-flex items-center space-x-2 mb-1">
            <span className="w-5 h-[1px] bg-rose-card/50"></span>
            <p className="text-[11px] uppercase tracking-[0.28em] text-rose-card font-semibold font-serif">
              Save Our Auspicious Day
            </p>
            <span className="w-5 h-[1px] bg-rose-card/50"></span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-ink tracking-tight mb-4">
            Counting Down to Nikah
          </h3>
        </ScrollReveal>

        {/* 4 Luxury Countdown Tiles */}
        <ScrollReveal delayClass="stagger-2">
          <div className="grid grid-cols-4 gap-2.5 max-w-[340px] mx-auto">
            <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-[#E9D1D4] shadow-sm flex flex-col items-center">
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#8C3542] leading-tight">
                {timeLeft.days}
              </span>
              <span className="font-serif text-[10px] sm:text-[11px] tracking-widest uppercase text-stone-500 mt-1 font-semibold">
                Days
              </span>
            </div>
            <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-[#E9D1D4] shadow-sm flex flex-col items-center">
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#8C3542] leading-tight">
                {timeLeft.hours}
              </span>
              <span className="font-serif text-[10px] sm:text-[11px] tracking-widest uppercase text-stone-500 mt-1 font-semibold">
                Hours
              </span>
            </div>
            <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-[#E9D1D4] shadow-sm flex flex-col items-center">
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#8C3542] leading-tight">
                {timeLeft.minutes}
              </span>
              <span className="font-serif text-[10px] sm:text-[11px] tracking-widest uppercase text-stone-500 mt-1 font-semibold">
                Mins
              </span>
            </div>
            <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-[#E9D1D4] shadow-sm flex flex-col items-center">
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-rose-card leading-tight">
                {timeLeft.seconds}
              </span>
              <span className="font-serif text-[10px] sm:text-[11px] tracking-widest uppercase text-stone-500 mt-1 font-semibold">
                Secs
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
