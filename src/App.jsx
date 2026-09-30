import React, { useEffect, useState } from 'react';
import OpeningExperience from './components/OpeningExperience';
import Hero from './components/Hero';
import BlessedUnion from './components/BlessedUnion';
import CoupleSection from './components/CoupleSection';
import ScratchReveal from './components/ScratchReveal';
import Countdown from './components/Countdown';
import QuranSection from './components/QuranSection';
import HadithSection from './components/HadithSection';
import VenueSection from './components/VenueSection';
import ClosingSection from './components/ClosingSection';
import AudioControl from './components/AudioControl';

export default function App() {
  const [isOpening, setIsOpening] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  // Lock body & document scroll completely while envelope is closed
  useEffect(() => {
    if (!hasOpened) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }
  }, [hasOpened]);

  // Performant Parallax Scroll Listener using requestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || window.pageYOffset || 0;
          document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpeningStart = () => {
    setIsOpening(true);
  };

  const handleOpenComplete = () => {
    // Explicit top-of-page reset on envelope open
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    setHasOpened(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#FFFDF8] flex justify-center items-center sm:py-6 relative">
      
      {/* LAYER 1 (MOUNTED UNDERNEATH): Main Luxury Mobile Invitation Frame Container */}
      <main className="w-full max-w-[430px] bg-[#FFFDF8] min-h-screen sm:min-h-[850px] sm:rounded-[36px] shadow-2xl relative overflow-hidden flex flex-col border sm:border-[#DECFC0]">
        
        {/* Main Hero Section (Already mounted and preloaded!) */}
        <Hero isOpening={isOpening} hasOpened={hasOpened} />

        {/* A Blessed Union Section (Static Image) */}
        <BlessedUnion />

        {/* The Couple (மணமக்கள்) Section */}
        <CoupleSection />

        {/* Scratch to Reveal Date Section */}
        <ScratchReveal />

        {/* Live Countdown Section */}
        <Countdown />

        {/* Quran Verse Section */}
        <QuranSection />

        {/* Hadith Teaching Section */}
        <HadithSection />

        {/* 3. Venue & Programme Section */}
        <VenueSection />

        {/* Closing Invitation & Signature Footer */}
        <ClosingSection />
      </main>

      {/* LAYER 2 (FOREGROUND OVERLAY): Envelope sitting directly on top of <main> */}
      {!hasOpened && (
        <OpeningExperience 
          onOpeningStart={handleOpeningStart} 
          onOpenComplete={handleOpenComplete} 
        />
      )}

      {/* Mobile Audio Control */}
      <AudioControl autoPlayTrigger={isOpening || hasOpened} />

    </div>
  );
}
