import React from 'react';
import { motion } from 'framer-motion';

export default function ParentsAndCouple() {
  return (
    <section id="couple-info" className="py-20 px-4 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-14">
        <span className="font-script text-4xl text-amber-800 font-bold block mb-1">Cặp Đôi Hạnh Phúc</span>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-stone-900 tracking-widest uppercase">
          CHÚ RỂ & CÔ DÂU
        </h2>
        <div className="w-16 h-0.5 bg-amber-800/40 mx-auto mt-3"></div>
      </div>

      {/* Parents Overview Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14 p-6 sm:p-8 rounded-3xl bg-white border border-[#F0E4DD] shadow-sm"
      >
        {/* Nhà Trai */}
        <div className="text-center p-4 border-b md:border-b-0 md:border-r border-stone-200">
          <h3 className="font-heading text-lg font-bold text-stone-900 uppercase tracking-widest mb-3">
            NHÀ TRAI
          </h3>
          <div className="space-y-1.5 text-stone-700 text-sm">
            <p className="font-medium">Trưởng Nam: <span className="font-bold text-stone-950 whitespace-nowrap">Nguyễn Việt Hưng</span></p>
            <p className="text-xs text-stone-600 font-medium">Bố: Nguyễn Văn Thành</p>
            <p className="text-xs text-stone-600 font-medium">Mẹ: Lê Thị Mai</p>
            <p className="text-xs text-stone-400 italic mt-2">Q. Cầu Giấy, TP. Hà Nội</p>
          </div>
        </div>

        {/* Nhà Gái */}
        <div className="text-center p-4">
          <h3 className="font-heading text-lg font-bold text-stone-900 uppercase tracking-widest mb-3">
            NHÀ GÁI
          </h3>
          <div className="space-y-1.5 text-stone-700 text-sm">
            <p className="font-medium">Á Nữ: <span className="font-bold text-stone-950 whitespace-nowrap">Nguyễn Thị Ngọc Tuyền</span></p>
            <p className="text-xs text-stone-600 font-medium">Bố: Nguyễn Văn Nam</p>
            <p className="text-xs text-stone-600 font-medium">Mẹ: Trần Thị Hương</p>
            <p className="text-xs text-stone-400 italic mt-2">Q. Ba Đình, TP. Hà Nội</p>
          </div>
        </div>
      </motion.div>

      {/* Groom & Bride Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Groom Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative flex flex-col items-center bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#F0E4DD] hover:shadow-md transition-all duration-300"
        >
          <div className="relative w-60 h-72 rounded-2xl overflow-hidden mb-6 border-2 border-stone-100 shadow-sm">
            <img
              src="./assets/groom.png"
              alt="Chú rể Nguyễn Việt Hưng"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent"></div>
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-stone-900 text-white font-heading text-[11px] px-4 py-1 rounded-full uppercase tracking-widest font-semibold">
              CHÚ RỂ
            </span>
          </div>

          <h3 className="font-heading text-xl sm:text-2xl font-bold text-stone-950 text-center whitespace-nowrap">Nguyễn Việt Hưng</h3>
          <p className="text-amber-800 font-script text-2xl font-bold mt-1">Chú Rể</p>
          <p className="text-stone-600 text-xs sm:text-sm text-center mt-3 px-2 italic leading-relaxed font-light">
            "Cảm ơn em đã đến và mang tới cho cuộc đời anh sự bình yên, hạnh phúc trọn vẹn nhất."
          </p>
        </motion.div>

        {/* Bride Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative flex flex-col items-center bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#F0E4DD] hover:shadow-md transition-all duration-300"
        >
          <div className="relative w-60 h-72 rounded-2xl overflow-hidden mb-6 border-2 border-stone-100 shadow-sm">
            <img
              src="./assets/bride.png"
              alt="Cô dâu Nguyễn Thị Ngọc Tuyền"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent"></div>
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-stone-900 text-white font-heading text-[11px] px-4 py-1 rounded-full uppercase tracking-widest font-semibold">
              CÔ DÂU
            </span>
          </div>

          <h3 className="font-heading text-lg sm:text-2xl font-bold text-stone-950 text-center whitespace-nowrap">Nguyễn Thị Ngọc Tuyền</h3>
          <p className="text-amber-800 font-script text-2xl font-bold mt-1">Cô Dâu</p>
          <p className="text-stone-600 text-xs sm:text-sm text-center mt-3 px-2 italic leading-relaxed font-light">
            "Anh là mảnh ghép hoàn hảo nhất mà em luôn trân trọng và đồng hành suốt cuộc đời này."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
