import React, { useState } from 'react';

export default function OpeningExperience({ onOpeningStart, onOpenComplete }) {
  const [stage, setStage] = useState('closed'); // 'closed', 'animating', 'opened'
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleSealTap = () => {
    if (stage !== 'closed') return;
    
    // Step 1: Notify parent that opening has started so Hero reveals underneath instantly
    if (onOpeningStart) onOpeningStart();

    setStage('animating');

    // Step 2: Fade out outer overlay at 1.8s
    setTimeout(() => {
      setIsFadingOut(true);
    }, 1800);

    // Step 3: Unmount opening overlay completely at 2.3s
    setTimeout(() => {
      setStage('opened');
      if (onOpenComplete) onOpenComplete();
    }, 2300);
  };

  if (stage === 'opened') return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-opacity duration-500 touch-none select-none p-0 m-0 ${
        stage === 'closed' ? 'bg-[#FFFDF8]' : 'bg-transparent'
      } ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } ${stage === 'animating' ? 'pointer-events-none' : ''}`}
      aria-label="Closed Nikkah Invitation Envelope"
    >
      {/* Full-Bleed 100dvh Viewport Gatefold Frame (Edge to Edge, No Outer Gaps) */}
      <div className="relative w-full h-[100vh] h-[100dvh] min-h-[100dvh] max-h-[100dvh] sm:max-w-[430px] sm:mx-auto bg-transparent overflow-hidden flex justify-center items-center perspective-container z-10 p-0 m-0">
        
        {/* ========================================================================= */}
        {/* LEFT GATEFOLD PANEL (3D Open to Left)                                     */}
        {/* ========================================================================= */}
        <div 
          className={`absolute top-0 bottom-0 left-0 w-1/2 h-full overflow-hidden z-20 transition-all duration-[1600ms] cubic-bezier(0.65, 0, 0.35, 1) shadow-[6px_0_24px_rgba(0,0,0,0.18)] ${
            stage === 'animating' ? 'panel-left-open' : 'translate-x-0 rotate-y-0'
          }`}
          style={{ transformOrigin: 'left center' }}
        >
          {/* Left half full-bleed image positioning */}
          <img 
            src="/nikkah_opening_cover.jpg" 
            alt="Left Gatefold Flap" 
            className="absolute top-0 bottom-0 left-0 w-[200%] max-w-none h-full object-cover object-center pointer-events-none select-none" 
          />
          {/* Inner seam edge gradient shadow */}
          <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-black/20 to-transparent pointer-events-none"></div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT GATEFOLD PANEL (3D Open to Right)                                   */}
        {/* ========================================================================= */}
        <div 
          className={`absolute top-0 bottom-0 right-0 w-1/2 h-full overflow-hidden z-20 transition-all duration-[1600ms] cubic-bezier(0.65, 0, 0.35, 1) shadow-[-6px_0_24px_rgba(0,0,0,0.18)] ${
            stage === 'animating' ? 'panel-right-open' : 'translate-x-0 rotate-y-0'
          }`}
          style={{ transformOrigin: 'right center' }}
        >
          {/* Right half full-bleed image positioning */}
          <img 
            src="/nikkah_opening_cover.jpg" 
            alt="Right Gatefold Flap" 
            className="absolute top-0 bottom-0 -left-[100%] w-[200%] max-w-none h-full object-cover object-center pointer-events-none select-none" 
          />
          {/* Inner seam edge gradient shadow */}
          <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/20 to-transparent pointer-events-none"></div>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE HOTSPOT ON CENTRAL HM WAX SEAL                                */}
        {/* ========================================================================= */}
        <div 
          className={`absolute z-40 top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
            stage === 'animating' ? 'scale-125 opacity-0 pointer-events-none' : 'scale-100 opacity-100'
          }`}
        >
          <button
            onClick={handleSealTap}
            aria-label="Open wedding invitation"
            className="group relative w-32 h-32 sm:w-36 sm:h-36 rounded-full flex items-center justify-center cursor-pointer active:scale-95 transition-transform duration-200 focus:outline-none"
          >
            {/* Soft highlight pulse halo framing the HM seal */}
            <div className="absolute inset-0 rounded-full seal-pulse opacity-60 pointer-events-none"></div>
          </button>
        </div>

      </div>
    </div>
  );
}
