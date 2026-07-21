import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail, Heart } from 'lucide-react';

export default function EnvelopeModal({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);

    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.5 },
      colors: ['#c5a059', '#e8e4dc', '#ffffff', '#a89f91'],
    });

    // Dispatch event to start Bến Xe Miền Tây audio track instantly
    window.dispatchEvent(new CustomEvent('play-wedding-music'));

    if (onOpen) onOpen();
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] bg-stone-900/55 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.92, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative w-[92%] sm:w-full max-w-md mx-auto my-auto bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-[#D6D1C7] shadow-2xl text-center overflow-hidden box-border"
          >
            {/* Monogram Badge */}
            <div className="my-2">
              <div className="w-18 h-18 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-br from-[#F5F2EC] via-white to-[#EAE6DF] border-2 border-[#C5A059] flex flex-col items-center justify-center shadow-md">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-amber-800 fill-amber-800/20" />
                <span className="font-heading font-bold text-stone-900 text-xs sm:text-sm tracking-widest mt-0.5">H & T</span>
              </div>
            </div>

            {/* Subtitle */}
            <span className="font-heading text-stone-700 text-[10px] sm:text-xs tracking-[0.3em] uppercase block mt-3 mb-2 font-bold">
              WEDDING INVITATION
            </span>

            {/* Couple Names */}
            <div className="space-y-1 my-3 overflow-hidden">
              <h2 className="font-heading text-lg sm:text-2xl font-bold text-stone-950 tracking-wide whitespace-nowrap">
                NGUYỄN VIỆT HƯNG
              </h2>
              <p className="font-script text-xl sm:text-2xl text-amber-800 font-bold my-0.5">&</p>
              <h2 className="font-heading text-base sm:text-2xl font-bold text-stone-950 tracking-wide whitespace-nowrap">
                NGUYỄN THỊ NGỌC TUYỀN
              </h2>
            </div>

            <p className="text-stone-700 text-xs font-medium tracking-wide italic my-5 px-2 sm:px-4 leading-relaxed">
              "Trân trọng kính mời quý khách mở thiệp cưới để cùng chia sẻ khoảnh khắc hạnh phúc nhất của chúng tôi"
            </p>

            {/* Open Button */}
            <button
              onClick={handleOpen}
              className="w-full py-3.5 sm:py-4 rounded-2xl bg-stone-900 hover:bg-black text-white font-bold text-xs sm:text-sm tracking-widest uppercase shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>MỞ THIỆP MỜI</span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
