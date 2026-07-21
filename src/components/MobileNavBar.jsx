import React, { useState } from 'react';
import { MapPin, Gift, Send, Music } from 'lucide-react';

export default function MobileNavBar() {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleToggleMusic = () => {
    window.dispatchEvent(new CustomEvent('toggle-wedding-music'));
    setIsPlayingMusic(!isPlayingMusic);
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-[#E5E0D8] px-3 py-2 flex justify-around items-center shadow-[0_-4px_20px_rgba(0,0,0,0.06)] text-stone-700">
      <button
        onClick={() => scrollTo('event-location')}
        className="flex flex-col items-center gap-1 text-[10px] font-bold text-stone-700 hover:text-stone-950 cursor-pointer p-1"
      >
        <MapPin className="w-5 h-5 text-amber-900" />
        <span>Địa Điểm</span>
      </button>

      <button
        onClick={() => scrollTo('rsvp-section')}
        className="flex flex-col items-center gap-1 text-[10px] font-bold text-stone-700 hover:text-stone-950 cursor-pointer p-1"
      >
        <Send className="w-5 h-5 text-amber-900" />
        <span>Xác Nhận</span>
      </button>

      <button
        onClick={() => scrollTo('gift-section')}
        className="flex flex-col items-center gap-1 text-[10px] font-bold text-stone-700 hover:text-stone-950 cursor-pointer p-1"
      >
        <Gift className="w-5 h-5 text-amber-900" />
        <span>Mừng Cưới</span>
      </button>

      <button
        onClick={handleToggleMusic}
        className="flex flex-col items-center gap-1 text-[10px] font-bold text-amber-800 hover:text-amber-950 cursor-pointer p-1"
      >
        <Music className="w-5 h-5 text-amber-800" />
        <span>{isPlayingMusic ? 'Tắt Nhạc' : 'Bật Nhạc'}</span>
      </button>
    </div>
  );
}
