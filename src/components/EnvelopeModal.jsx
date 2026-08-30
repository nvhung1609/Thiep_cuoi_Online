import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail } from 'lucide-react';

export default function EnvelopeModal({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    window.scrollTo(0, 0);

    confetti({
      particleCount: 110,
      spread: 85,
      origin: { y: 0.5 },
      colors: ['#c5a059', '#e8e4dc', '#ffffff', '#d4af37', '#f3d372'],
    });

    // Dispatch event to start Nơi Em Về Làm Dâu audio track instantly
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
          className="fixed inset-0 z-[100] bg-stone-950/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.92, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-[92%] sm:w-full max-w-md mx-auto my-auto bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-[#D6D1C7] shadow-2xl text-center overflow-hidden box-border"
          >
            {/* Inner Decorative Border Frame */}
            <div className="absolute top-3 left-3 right-3 bottom-3 border border-[#C59B27]/35 rounded-2xl pointer-events-none" />

            {/* Professional Vector SVG Wedding Monogram Crest Logo */}
            <div className="relative z-10 my-2">
              <svg viewBox="0 0 160 160" className="w-24 h-24 sm:w-28 sm:h-28 mx-auto drop-shadow-md">
                <defs>
                  <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" />
                    <stop offset="50%" stopColor="#FFF2B2" />
                    <stop offset="100%" stopColor="#AA7A1E" />
                  </linearGradient>
                  <linearGradient id="goldText" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7A5C1B" />
                    <stop offset="100%" stopColor="#423009" />
                  </linearGradient>
                </defs>

                {/* Outer Double Gold Rings */}
                <circle cx="80" cy="80" r="76" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" />
                <circle cx="80" cy="80" r="71" fill="none" stroke="url(#goldGrad)" strokeWidth="0.75" strokeDasharray="3 3" />
                <circle cx="80" cy="80" r="66" fill="#FAF8F5" stroke="url(#goldGrad)" strokeWidth="1" />

                {/* Top Crown/Heart Accent */}
                <path
                  d="M 80 33 C 77 29, 72 29, 72 34 C 72 39, 80 45, 80 45 C 80 45, 88 39, 88 34 C 88 29, 83 29, 80 33 Z"
                  fill="url(#goldGrad)"
                />

                {/* Monogram Text */}
                <text
                  x="80"
                  y="78"
                  textAnchor="middle"
                  fontFamily="Cinzel, serif"
                  fontSize="24"
                  fontWeight="700"
                  fill="url(#goldText)"
                  letterSpacing="1"
                >
                  H & T
                </text>

                {/* Golden Accent Line */}
                <line x1="52" y1="89" x2="108" y2="89" stroke="url(#goldGrad)" strokeWidth="1" />

                {/* Date Text */}
                <text
                  x="80"
                  y="105"
                  textAnchor="middle"
                  fontFamily="Cinzel, serif"
                  fontSize="9.5"
                  fontWeight="600"
                  fill="url(#goldText)"
                  letterSpacing="2"
                >
                  14 . 07 . 2026
                </text>
              </svg>
            </div>

            {/* Subtitle - Montserrat Bold Uppercase (Matching Reference Template) */}
            <span className="relative z-10 font-sans text-[#8C6D23] text-[11px] sm:text-xs tracking-[0.25em] uppercase block mt-3 mb-2 font-bold">
              WEDDING INVITATION
            </span>

            {/* Couple Names - Cormorant Garamond / Playfair Display Title Case (Matching "Phan Vũ Tính & Vũ Diệp Anh" in Reference Template) */}
            <div className="relative z-10 space-y-1 my-4 overflow-hidden px-1">
              <h2 className="font-heading text-xl sm:text-3xl font-bold text-stone-900 tracking-wide leading-snug">
                Nguyễn Việt Hưng
              </h2>
              <div className="flex items-center justify-center gap-3 my-1">
                <span className="h-[1px] w-10 sm:w-16 bg-gradient-to-r from-transparent via-[#C59B27] to-transparent" />
                <span className="font-script text-2xl sm:text-3xl text-amber-800 font-bold">&</span>
                <span className="h-[1px] w-10 sm:w-16 bg-gradient-to-r from-transparent via-[#C59B27] to-transparent" />
              </div>
              <h2 className="font-heading text-lg sm:text-2xl font-bold text-stone-900 tracking-wide leading-snug">
                Nguyễn Thị Ngọc Tuyền
              </h2>
            </div>

            {/* Respectful Invitation Text - Montserrat Medium */}
            <p className="relative z-10 text-stone-700 text-xs sm:text-sm font-sans font-medium leading-relaxed my-5 px-3">
              "Trân trọng kính mời Quý quan khách mở thiệp cưới để cùng chia sẻ niềm vui và chúc phúc cho ngày trọng đại của hai gia đình chúng tôi!"
            </p>

            {/* Premium Button - Montserrat Bold Uppercase (Matching Reference Template) */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleOpen}
              className="relative z-10 w-full py-3.5 sm:py-4 rounded-2xl bg-stone-900 hover:bg-stone-950 text-white shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer overflow-hidden border border-amber-500/40 animate-gold-glow group"
            >
              {/* Shimmer Light Animation Sweep */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer-slide pointer-events-none" />

              <Mail className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              <span className="font-sans font-bold text-white tracking-widest text-xs sm:text-sm uppercase">MỞ THIỆP MỜI</span>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

