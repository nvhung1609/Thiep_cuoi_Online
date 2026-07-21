import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, GlassWater, Camera } from 'lucide-react';

export default function Timeline() {
  const events = [
    {
      time: '09:30 AM',
      title: 'ĐÓN KHÁCH MỜI',
      desc: 'Đón tiếp quan khách hai họ, chụp hình lưu niệm tại sảnh',
      icon: Users,
    },
    {
      time: '10:30 AM',
      title: 'LỄ THÀNH HÔN',
      desc: 'Nghi thức trao nhẫn cưới, cắt bánh và rót rượu champagne',
      icon: Heart,
    },
    {
      time: '11:30 AM',
      title: 'KHAI TIỆC MỪNG',
      desc: 'Thưởng thức tiệc mừng cao cấp cùng những giai điệu âm nhạc lãng mạn',
      icon: GlassWater,
    },
    {
      time: '13:00 PM',
      title: 'CHỤP HÌNH KỶ NIỆM',
      desc: 'Cùng lưu giữ những bức hình đẹp nhất và gửi lời chào cảm ơn',
      icon: Camera,
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#FAF8F5] text-stone-900 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-script text-3xl text-amber-800/80 block mb-1">Chương Trình</span>
          <h2 className="font-heading text-3xl md:text-4xl font-normal tracking-wide uppercase text-stone-900">
            LỊCH TRÌNH LỄ CƯỚI
          </h2>
          <div className="w-20 h-0.5 bg-stone-300 mx-auto mt-3"></div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {events.map((ev, idx) => {
            const Icon = ev.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-[#E5E0D8] shadow-sm hover:shadow-md transition-all"
              >
                <div className="p-3.5 rounded-xl bg-[#F5F2EC] text-stone-700 shrink-0 border border-stone-200">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading text-amber-800 font-semibold text-lg tracking-wider block">
                    {ev.time}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-stone-900 mt-0.5">{ev.title}</h3>
                  <p className="text-stone-500 text-xs mt-1.5 leading-relaxed font-light">{ev.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
