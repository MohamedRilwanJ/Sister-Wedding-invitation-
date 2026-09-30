import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const YOUTUBE_VIDEO_ID = 'ivrumxRUz_Y';

export default function AudioControl({ autoPlayTrigger }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  const playRequestedRef = useRef(true); // Default musicEnabled = true on load

  // Initialize YouTube IFrame Player API
  useEffect(() => {
    let isMounted = true;

    const initPlayer = () => {
      if (playerRef.current || !isMounted) return;

      const playerElement = document.getElementById('yt-background-player');
      if (!playerElement) return;

      try {
        playerRef.current = new window.YT.Player('yt-background-player', {
          height: '1',
          width: '1',
          videoId: YOUTUBE_VIDEO_ID,
          playerVars: {
            autoplay: 1, // Autoplay attempt on load
            controls: 0,
            disablekb: 1,
            fs: 0,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            loop: 1,
            playlist: YOUTUBE_VIDEO_ID,
            playsinline: 1,
          },
          events: {
            onReady: (event) => {
              try {
                event.target.setVolume(35); // 30–40% background volume
              } catch (err) {
                console.log('Set volume error:', err);
              }
              if (playRequestedRef.current) {
                try {
                  event.target.playVideo();
                } catch (err) {
                  console.log('Play on ready error:', err);
                }
              }
            },
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                setIsPlaying(true);
              } else if (event.data === window.YT.PlayerState.PAUSED) {
                setIsPlaying(false);
              } else if (event.data === window.YT.PlayerState.ENDED) {
                // Infinite loop fallback
                try {
                  event.target.playVideo();
                } catch (err) {
                  console.log('Loop play error:', err);
                }
              }
            },
          },
        });
      } catch (e) {
        console.log('YT Player init error:', e);
      }
    };

    // Load YouTube IFrame API script dynamically
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      const existingCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (typeof existingCallback === 'function') existingCallback();
        initPlayer();
      };
    } else if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      const existingCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (typeof existingCallback === 'function') existingCallback();
        initPlayer();
      };
    }

    // Fallback: Use earliest user interaction (touch/click) to initiate playback if browser blocked initial load autoplay
    const handleFirstUserGesture = () => {
      if (playRequestedRef.current && playerRef.current && typeof playerRef.current.playVideo === 'function') {
        try {
          playerRef.current.playVideo();
        } catch (e) {
          console.log('Gesture play error:', e);
        }
      }
    };

    window.addEventListener('click', handleFirstUserGesture, { once: true });
    window.addEventListener('touchstart', handleFirstUserGesture, { once: true });

    return () => {
      isMounted = false;
      window.removeEventListener('click', handleFirstUserGesture);
      window.removeEventListener('touchstart', handleFirstUserGesture);
    };
  }, []);

  // Handle autoPlayTrigger (e.g. when user taps TAP TO OPEN)
  useEffect(() => {
    if (autoPlayTrigger) {
      playRequestedRef.current = true;
      if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
        try {
          playerRef.current.playVideo();
        } catch (e) {
          console.log('Play video error:', e);
        }
      }
    }
  }, [autoPlayTrigger]);

  const toggleAudio = () => {
    if (!playerRef.current || typeof playerRef.current.playVideo !== 'function') return;

    try {
      if (isPlaying) {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
        playRequestedRef.current = false;
      } else {
        playerRef.current.playVideo();
        setIsPlaying(true);
        playRequestedRef.current = true;
      }
    } catch (e) {
      console.log('Toggle audio error:', e);
    }
  };

  return (
    <>
      {/* Visually Hidden YouTube Background Audio Player */}
      <div 
        aria-hidden="true" 
        className="fixed top-0 left-0 w-0 h-0 opacity-0 pointer-events-none overflow-hidden z-[-1]"
      >
        <div id="yt-background-player"></div>
      </div>

      {/* Top-Right Music Control Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleAudio}
          aria-label={isPlaying ? 'Pause background wedding nasheed' : 'Play background wedding nasheed'}
          className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300 border border-[#C5A059]/60 backdrop-blur-md ${
            isPlaying 
              ? 'bg-gradient-to-r from-rose-card to-rose-deep text-white shadow-rose-card/30' 
              : 'bg-[#FFFDF8]/90 text-stone-700 hover:bg-[#FAF3E9]'
          }`}
        >
          {isPlaying ? (
            <div className="relative flex items-center justify-center">
              <Volume2 className="w-4.5 h-4.5 text-white animate-pulse" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-300 animate-ping"></span>
            </div>
          ) : (
            <VolumeX className="w-4.5 h-4.5 text-stone-500" />
          )}
        </button>
      </div>
    </>
  );
}
