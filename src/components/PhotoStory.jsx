import React from 'react';

export default function PhotoStory() {
  return (
    <section 
      className="px-5 py-6 relative z-20 bg-[#FAF6F0] border-b border-[#EADBCE]/70 text-center" 
      data-purpose="floral-ambience"
    >
      <div className="relative w-full max-w-[340px] mx-auto rounded-2xl overflow-hidden shadow border border-[#E8DEC8] bg-[#FFFBF5]">
        <div className="relative w-full h-44 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF3EC] to-[#FCEFEF]">
          {/* Arched Gateway & Floral Ambient Motif */}
          <svg className="w-full h-full" fill="none" viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg">
            <path d="M70 180 V 70 C 70 30 115 15 170 15 C 225 15 270 30 270 70 V 180" stroke="#C5A059" strokeDasharray="2 3" strokeWidth="1.3"></path>
            <path d="M85 180 V 75 C 85 42 122 28 170 28 C 218 28 255 42 255 75 V 180" stroke="#DFC788" strokeWidth="0.8"></path>
            
            {/* Center Lantern */}
            <path d="M170 0 V 25" stroke="#C5A059" strokeWidth="1"></path>
            <polygon fill="#FFFDF8" points="170,25 176,33 176,46 170,52 164,46 164,33" stroke="#C5A059" strokeWidth="1"></polygon>
            <circle cx="170" cy="39" fill="#DFC788" r="2.5"></circle>

            {/* Arch floral garlands */}
            <circle cx="170" cy="140" fill="#8C3542" r="16"></circle>
            <circle cx="170" cy="140" fill="#B85D67" r="12"></circle>
            <circle cx="170" cy="140" fill="#E8B5B8" r="7"></circle>
            <circle cx="140" cy="148" fill="#7A9FB3" r="9"></circle>
            <circle cx="200" cy="148" fill="#7A9FB3" r="9"></circle>
            <circle cx="118" cy="155" fill="#C77A82" r="10"></circle>
            <circle cx="222" cy="155" fill="#C77A82" r="10"></circle>
            <path d="M60 165 Q 170 135 280 165" stroke="#758B6F" strokeLinecap="round" strokeWidth="1.5"></path>
          </svg>
          <div className="absolute bottom-2.5 inset-x-0 flex justify-center space-x-1.5 z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span>
            <span className="w-2 h-2 rounded-full bg-[#B85D67] shadow-sm"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span>
          </div>
        </div>
      </div>
      <p className="font-serif italic text-[11px] text-stone-500 mt-2 px-3">
        "May Allah bless this union and shower His mercy upon this home."
      </p>
    </section>
  );
}
