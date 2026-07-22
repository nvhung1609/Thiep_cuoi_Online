import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, GlassWater, Camera } from 'lucide-react';

export default function Timeline() {
  const events = [
    {
      time: '09:30 Sáng',
      title: 'ĐÓN KHÁCH MỜI',
      desc: 'Đón tiếp quan khách hai họ, chụp hình lưu niệm tại sảnh tiệc.',
      icon: Users,
    },
    {
      time: '10:30 Sáng',
      title: 'LỄ THÀNH HÔN',
      desc: 'Nghi thức trao nhẫn cưới, cắt bánh và rót rượu champagne mừng hạnh phúc.',
      icon: Heart,
    },
    {
      time: '11:30 Trưa',
      title: 'KHAI TIỆC MỪNG',
      desc: 'Thưởng thức tiệc mừng cao cấp cùng những giai điệu âm nhạc lãng mạn.',
      icon: GlassWater,
    },
    {
      time: '13:00 Chiều',
      title: 'CHỤP HÌNH KỶ NIỆM',
      desc: 'Cùng lưu giữ những bức hình đẹp nhất và gửi lời chào cảm ơn tới quan khách.',
      icon: Camera,
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-3 sm:px-4 bg-[#FAF8F5] text-stone-900 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <span className="font-script text-3xl sm:text-4xl text-amber-800 font-bold block mb-1">Chương Trình</span>
          <h2 className="font-heading text-xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-widest uppercase">
            LỊCH TRÌNH LỄ CƯỚI
          </h2>
          <div className="w-16 h-0.5 bg-amber-800/40 mx-auto mt-3"></div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 relative">
          {events.map((ev, idx) => {
            const Icon = ev.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl bg-white border border-[#EBE5DC] shadow-sm hover:border-amber-800/40 transition-all duration-300"
              >
                {/* Slender Icon Circle */}
                <div className="w-11 h-11 rounded-full bg-[#F7F4EF] text-amber-900 shrink-0 border border-[#E5DEC9] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Slender Time Display */}
                  <span className="font-heading text-amber-900 text-lg sm:text-xl font-normal tracking-[0.15em] block mb-0.5">
                    {ev.time}
                  </span>

                  {/* Title */}
                  <h3 className="font-heading text-stone-900 text-sm sm:text-base font-semibold tracking-[0.15em] uppercase">
                    {ev.title}
                  </h3>

                  {/* Description */}
                  <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed mt-1">
                    {ev.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
