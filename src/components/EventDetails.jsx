import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation, CalendarCheck } from 'lucide-react';

export default function EventDetails() {
  const mapNhaTraiUrl = "https://maps.app.goo.gl/H7EM47kP88tsYMb68";
  const mapNhaGaiUrl = "https://maps.app.goo.gl/GdbP7zcM74atywVu8";

  return (
    <section id="event-location" className="py-16 sm:py-20 px-3 sm:px-4 max-w-5xl mx-auto overflow-hidden">
      <div className="text-center mb-10 sm:mb-14">
        <span className="font-script text-3xl sm:text-4xl text-amber-800 font-bold block mb-1">Thời Gian & Địa Điểm</span>
        <h2 className="font-heading text-xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-widest uppercase">
          LỄ TÂN HÔN & VU QUY
        </h2>
        <div className="w-16 h-0.5 bg-amber-800/40 mx-auto mt-3"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-14">
        {/* Lễ Tân Hôn Card (Nhà Trai) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-5 sm:p-8 shadow-sm border border-[#F0E4DD] flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-[#F5F2EC] text-amber-900 border border-stone-200">
                <CalendarCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-stone-950">
                LỄ TÂN HÔN (NHÀ TRAI)
              </h3>
            </div>

            <div className="space-y-4 my-5 text-stone-800 font-medium">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-stone-950 text-sm sm:text-base">09:30 AM - Thứ Ba, Ngày 14/07/2026</p>
                  <p className="text-xs text-stone-600 font-medium">(Tức ngày 01 tháng 06 âm lịch)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-stone-950 text-sm sm:text-base">TƯ GIA NHÀ TRAI</p>
                  <p className="text-xs sm:text-sm text-stone-700 font-medium">Xã Châu Phú, Tỉnh An Giang</p>
                </div>
              </div>
            </div>
          </div>

          <a
            href={mapNhaTraiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-stone-900 hover:bg-black text-white font-bold tracking-wider text-xs uppercase shadow-md transition-all cursor-pointer mt-4"
          >
            <Navigation className="w-4 h-4 text-amber-400" />
            <span className="font-sans font-bold text-white tracking-widest text-xs uppercase">Chỉ Đường Đến Nhà Trai</span>
          </a>
        </motion.div>

        {/* Lễ Vu Quy Card (Nhà Gái) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="bg-white rounded-3xl p-5 sm:p-8 shadow-sm border border-[#F0E4DD] flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-[#F5F2EC] text-amber-900 border border-stone-200">
                <CalendarCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-stone-950">
                LỄ VU QUY (NHÀ GÁI)
              </h3>
            </div>

            <div className="space-y-4 my-5 text-stone-800 font-medium">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-stone-950 text-sm sm:text-base">11:30 AM - Thứ Ba, Ngày 14/07/2026</p>
                  <p className="text-xs text-stone-600 font-medium">(Đón khách từ 10:30 AM)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-stone-950 text-sm sm:text-base">TƯ GIA NHÀ GÁI</p>
                  <p className="text-xs sm:text-sm text-stone-700 font-medium">Xã Hiệp Hưng, Thành phố Cần Thơ</p>
                </div>
              </div>
            </div>
          </div>

          <a
            href={mapNhaGaiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-stone-900 hover:bg-black text-white font-bold tracking-wider text-xs uppercase shadow-md transition-all cursor-pointer mt-4"
          >
            <Navigation className="w-4 h-4 text-amber-400" />
            <span className="font-sans font-bold text-white tracking-widest text-xs uppercase">Chỉ Đường Đến Nhà Gái</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
