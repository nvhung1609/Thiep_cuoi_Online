import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation, CalendarCheck } from 'lucide-react';

export default function EventDetails() {
  const mapGoogleUrl = "https://maps.google.com/?q=Trung+T%C3%A2m+H%E1%BB%99i+Ngh%E1%BB%8B+Qu%E1%BB%91c+Gia+H%C3%A0+N%E1%BB%99i";

  return (
    <section id="event-location" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="font-script text-3xl sm:text-4xl text-amber-800 font-bold block mb-1">Thời Gian & Địa Điểm</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-stone-900 tracking-wider uppercase">
          LỄ THÀNH HÔN & TÂN HÔN
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent mx-auto mt-3"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Lễ Thành Hôn Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 shadow-md border border-[#D6D1C7] flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3.5 rounded-full bg-[#F5F2EC] text-amber-900 border border-stone-300">
                <CalendarCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-stone-950">
                THÀNH LỄ HÔN PHỐI
              </h3>
            </div>

            <div className="space-y-4 my-6 text-stone-800 font-medium">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-800 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-stone-950 text-base">09:30 AM - Thứ Ba, Ngày 14/07/2026</p>
                  <p className="text-xs text-stone-600 font-medium">(Tức ngày 01 tháng 06 âm lịch)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-800 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-stone-950 text-base">TƯ GIA NHÀ TRAI</p>
                  <p className="text-sm text-stone-700 font-medium">Số 88 Đường Cầu Giấy, Q. Cầu Giấy, TP. Hà Nội</p>
                </div>
              </div>
            </div>
          </div>

          <a
            href={mapGoogleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-stone-900 hover:bg-black text-white font-bold tracking-wider text-xs uppercase shadow-md transition-all cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-amber-400" />
            <span>Chỉ Đường Đến Nhà Trai</span>
          </a>
        </motion.div>

        {/* Tiệc Tân Hôn Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="bg-white rounded-3xl p-8 shadow-md border border-[#D6D1C7] flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3.5 rounded-full bg-[#F5F2EC] text-amber-900 border border-stone-300">
                <CalendarCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-stone-950">
                TIỆC TÂN HÔN & THÀNH HÔN
              </h3>
            </div>

            <div className="space-y-4 my-6 text-stone-800 font-medium">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-800 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-stone-950 text-base">11:30 AM - Thứ Ba, Ngày 14/07/2026</p>
                  <p className="text-xs text-stone-600 font-medium">(Đón khách từ 10:30 AM)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-800 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-stone-950 text-base">TRUNG TÂM HỘI NGHỊ QUỐC GIA</p>
                  <p className="text-sm text-stone-700 font-medium">Sảnh Grand Ballroom, Cổng số 1 Đại Lộ Thăng Long, Hà Nội</p>
                </div>
              </div>
            </div>
          </div>

          <a
            href={mapGoogleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-stone-900 hover:bg-black text-white font-bold tracking-wider text-xs uppercase shadow-md transition-all cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-amber-400" />
            <span>Mở Google Maps Chỉ Đường</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
