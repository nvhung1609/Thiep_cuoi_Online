import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Calendar, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between items-center text-center overflow-hidden pt-12 pb-10 px-4 bg-stone-900 text-stone-100">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="./assets/hero-couple.png"
          alt="Nguyễn Việt Hưng & Nguyễn Thị Ngọc Tuyền"
          className="w-full h-full object-cover object-top opacity-55 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-stone-950/80" />
      </div>

      {/* Top Banner Monogram */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center mt-4"
      >
        <div className="flex items-center gap-3 text-amber-300/80 uppercase tracking-[0.3em] text-xs font-semibold">
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-amber-300/60"></span>
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>WEDDING INVITATION</span>
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-amber-300/60"></span>
        </div>
      </motion.div>

      {/* Hero Central Titles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="relative z-10 max-w-3xl my-auto py-8"
      >
        {/* Calligraphy Save the Date */}
        <h2 className="font-script text-6xl md:text-8xl text-amber-300 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] tracking-wide mb-2">
          Save the Date
        </h2>

        {/* Couple Names */}
        <div className="my-6 space-y-1 overflow-hidden px-2">
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider text-white drop-shadow-md uppercase whitespace-nowrap">
            NGUYỄN VIỆT HƯNG
          </h1>
          
          <div className="flex items-center justify-center gap-4 my-2">
            <span className="h-[1px] w-16 bg-amber-400/50"></span>
            <span className="font-script text-4xl text-amber-300">&</span>
            <span className="h-[1px] w-16 bg-amber-400/50"></span>
          </div>

          <h1 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold tracking-wider text-white drop-shadow-md uppercase whitespace-nowrap">
            NGUYỄN THỊ NGỌC TUYỀN
          </h1>
        </div>

        {/* Date Display */}
        <div className="mt-8 inline-flex items-center gap-6 px-8 py-3 rounded-full bg-stone-900/80 border border-amber-500/40 backdrop-blur-md shadow-2xl">
          <Calendar className="w-5 h-5 text-amber-400" />
          <span className="font-cinzel text-xl md:text-2xl text-amber-200 tracking-widest font-semibold">
            14 . 07 . 2026
          </span>
        </div>

        <p className="mt-4 text-stone-300 italic text-sm md:text-base font-light">
          "Trân trọng kính mời quý khách tới tham dự khoảnh khắc hạnh phúc nhất trong cuộc đời chúng tôi"
        </p>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => {
          document.getElementById('couple-info')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-xs uppercase tracking-widest text-amber-200/80 font-light">
          Cuộn xuống để xem thiệp
        </span>
        <ChevronDown className="w-6 h-6 text-amber-400 animate-bounce" />
      </motion.div>
    </section>
  );
}
