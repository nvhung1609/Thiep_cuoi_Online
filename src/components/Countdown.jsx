import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export default function Countdown() {
  const weddingDate = new Date('2026-07-14T10:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'NGÀY', value: timeLeft.days },
    { label: 'GIỜ', value: timeLeft.hours },
    { label: 'PHÚT', value: timeLeft.minutes },
    { label: 'GIÂY', value: timeLeft.seconds },
  ];

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="flex items-center justify-center gap-2 text-stone-700 mb-2">
          <Clock className="w-4 h-4 text-amber-800" />
          <span className="font-heading text-xs tracking-widest uppercase font-bold text-stone-700">
            ĐẾM NGƯỢC ĐẾN NGÀY VUI
          </span>
        </div>

        <h2 className="font-heading text-2xl md:text-4xl font-bold text-stone-900 mb-10 tracking-wide">
          CÙNG ĐỢI CHỜ KHOẢNH KHẮC TRỌNG ĐẠI
        </h2>

        {/* Countdown Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
          {timeBlocks.map((block, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-6 rounded-2xl bg-white shadow-sm border border-[#E5E0D8] transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="font-numeric text-3xl md:text-5xl font-bold text-stone-900">
                {String(block.value).padStart(2, '0')}
              </span>
              <span className="text-[11px] font-bold tracking-widest text-stone-600 mt-2">
                {block.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
