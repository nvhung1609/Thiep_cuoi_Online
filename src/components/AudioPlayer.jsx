import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function AudioPlayer({ petalsActive, setPetalsActive }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);

  // Relative Audio Path for Nơi Em Về Làm Dâu - Út Nhị Mino (Works on both Local & GitHub Pages)
  const weddingAudioUrl = "./assets/noi-em-ve-lam-dau.m4a";

  // Web Audio Synth Fallback if audio fails
  const playSynthFallback = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioContext();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const chords = [
        [293.66, 370.00, 440.00, 587.33],
        [220.00, 277.18, 329.63, 440.00],
        [246.94, 293.66, 370.00, 493.88],
        [185.00, 220.00, 277.18, 370.00],
        [196.00, 246.94, 293.66, 392.00],
      ];

      let chordIndex = 0;

      const triggerChord = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state !== 'running') return;
        const currentChord = chords[chordIndex];
        
        currentChord.forEach((freq, idx) => {
          setTimeout(() => {
            if (!audioCtxRef.current || audioCtxRef.current.state !== 'running') return;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, ctx.currentTime);

            gain.gain.setValueAtTime(0.001, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime + 0.1);
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.4);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start();
            osc.stop(ctx.currentTime + 2.5);
          }, idx * 200);
        });

        chordIndex = (chordIndex + 1) % chords.length;
      };

      triggerChord();
      intervalRef.current = setInterval(triggerChord, 2400);
    } catch (e) {
      console.warn('Synth error:', e);
    }
  };

  const startPlaying = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Audio autoplay blocked by browser policy, fallback playing:", err);
        playSynthFallback();
        setIsPlaying(true);
      });
    } else {
      playSynthFallback();
      setIsPlaying(true);
    }
  };

  const stopPlaying = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleMusic = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    if (isPlaying) {
      stopPlaying();
    } else {
      startPlaying();
    }
  };

  useEffect(() => {
    const handleAutoPlayTrigger = () => {
      if (!isPlaying) {
        startPlaying();
      }
    };

    const handleToggleAudio = () => {
      if (isPlaying) {
        stopPlaying();
      } else {
        startPlaying();
      }
    };

    window.addEventListener('play-wedding-music', handleAutoPlayTrigger);
    window.addEventListener('toggle-wedding-music', handleToggleAudio);

    return () => {
      window.removeEventListener('play-wedding-music', handleAutoPlayTrigger);
      window.removeEventListener('toggle-wedding-music', handleToggleAudio);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-3 items-end">
      {/* HTML5 Audio Element */}
      <audio ref={audioRef} src={weddingAudioUrl} loop preload="auto" />

      {/* Petals Toggle */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setPetalsActive(!petalsActive);
        }}
        title={petalsActive ? 'Tắt hiệu ứng hoa rơi' : 'Bật hiệu ứng hoa rơi'}
        className={`p-3 rounded-full shadow-lg backdrop-blur-md transition-all duration-300 flex items-center justify-center border cursor-pointer ${
          petalsActive
            ? 'bg-white text-stone-800 border-amber-300 scale-105 shadow-sm'
            : 'bg-white/80 text-stone-400 border-stone-200'
        }`}
      >
        <Sparkles className={`w-4 h-4 ${petalsActive ? 'animate-spin text-amber-500' : ''}`} style={{ animationDuration: '9s' }} />
      </button>

      {/* Audio Toggle Button */}
      <button
        onClick={toggleMusic}
        title={isPlaying ? 'Dừng Nhạc' : 'Bật Nhạc (Nơi Em Về Làm Dâu)'}
        className={`relative group p-3.5 rounded-full shadow-lg backdrop-blur-md transition-all duration-300 flex items-center justify-center border cursor-pointer ${
          isPlaying
            ? 'bg-amber-600 text-white border-amber-400 scale-105 shadow-md animate-pulse'
            : 'bg-white/90 text-stone-700 border-stone-300 hover:scale-105'
        }`}
      >
        {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        
        <span className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap bg-stone-900 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md font-light">
          {isPlaying ? '♪ Bấm để Tắt Nhạc' : '♪ Bấm để Phát Nhạc'}
        </span>
      </button>
    </div>
  );
}
