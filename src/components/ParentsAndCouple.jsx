import React from 'react';
import { motion } from 'framer-motion';

export default function ParentsAndCouple() {
  return (
    <section id="couple-info" className="py-16 sm:py-20 px-3 sm:px-4 max-w-5xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-14">
        <span className="font-script text-3xl sm:text-4xl text-amber-800 font-bold block mb-1">Cặp Đôi Hạnh Phúc</span>
        <h2 className="font-heading text-xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-widest uppercase">
          CHÚ RỂ & CÔ DÂU
        </h2>
        <div className="w-16 h-0.5 bg-amber-800/40 mx-auto mt-3"></div>
      </div>

      {/* Parents Overview Banner (Compact Side-by-Side 2 Columns) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 gap-3 sm:gap-6 mb-10 sm:mb-14 p-4 sm:p-6 md:p-8 rounded-3xl bg-white border border-[#F0E4DD] shadow-sm overflow-hidden max-w-4xl mx-auto"
      >
        {/* Nhà Trai */}
        <div className="text-center p-2 sm:p-4 border-r border-stone-200">
          <h3 className="font-heading text-xs xs:text-sm sm:text-base md:text-lg font-bold text-stone-900 uppercase tracking-widest mb-2 sm:mb-3">
            NHÀ TRAI
          </h3>
          <div className="space-y-1 sm:space-y-1.5 text-stone-700 text-[11px] xs:text-xs sm:text-sm md:text-sm">
            <p className="font-medium">
              Trưởng Nam <span className="font-bold text-stone-950 block xs:inline mt-0.5 xs:mt-0">Nguyễn Việt Hưng</span>
            </p>
            <p className="text-[10px] xs:text-xs sm:text-xs md:text-sm text-stone-600 font-medium">Bố Nguyễn Văn Thành</p>
            <p className="text-[10px] xs:text-xs sm:text-xs md:text-sm text-stone-600 font-medium">Mẹ Lê Thị Mai</p>
            <p className="text-[10px] xs:text-xs sm:text-xs md:text-sm text-amber-900/80 font-medium italic mt-1.5 sm:mt-2">
              Xã Châu Phú, Tỉnh An Giang
            </p>
          </div>
        </div>

        {/* Nhà Gái */}
        <div className="text-center p-2 sm:p-4">
          <h3 className="font-heading text-xs xs:text-sm sm:text-base md:text-lg font-bold text-stone-900 uppercase tracking-widest mb-2 sm:mb-3">
            NHÀ GÁI
          </h3>
          <div className="space-y-1 sm:space-y-1.5 text-stone-700 text-[11px] xs:text-xs sm:text-sm md:text-sm">
            <p className="font-medium">
              Á Nữ <span className="font-bold text-stone-950 block xs:inline mt-0.5 xs:mt-0">Nguyễn Thị Ngọc Tuyền</span>
            </p>
            <p className="text-[10px] xs:text-xs sm:text-xs md:text-sm text-stone-600 font-medium">Bố Nguyễn Văn Nam</p>
            <p className="text-[10px] xs:text-xs sm:text-xs md:text-sm text-stone-600 font-medium">Mẹ Trần Thị Hương</p>
            <p className="text-[10px] xs:text-xs sm:text-xs md:text-sm text-amber-900/80 font-medium italic mt-1.5 sm:mt-2">
              Xã Hiệp Hưng, TP. Cần Thơ
            </p>
          </div>
        </div>
      </motion.div>

      {/* Groom & Bride Cards (Side-by-Side 2 Columns on All Devices) */}
      <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 items-stretch">
        {/* Groom Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative flex flex-col items-center bg-white rounded-3xl p-3 xs:p-4 sm:p-8 shadow-sm border border-[#F0E4DD] hover:shadow-md transition-all duration-300 overflow-hidden text-center"
        >
          <div className="w-full flex flex-col items-center">
            <div className="relative w-full max-w-[180px] aspect-[4/5] rounded-2xl overflow-hidden mb-3 sm:mb-5 border-2 border-stone-100 shadow-sm">
              <img
                src="./assets/groom.png"
                alt="Chú rể Nguyễn Việt Hưng"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent"></div>
              <span className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 bg-stone-900 text-white font-heading text-[9px] xs:text-[10px] sm:text-[11px] px-3 sm:px-4 py-0.5 sm:py-1 rounded-full uppercase tracking-widest font-semibold whitespace-nowrap">
                CHÚ RỂ
              </span>
            </div>

            <h3 className="font-heading text-xs xs:text-sm sm:text-xl md:text-2xl font-bold text-stone-950 leading-tight">
              Nguyễn Việt Hưng
            </h3>
            <p className="text-amber-800 font-script text-xl sm:text-2xl font-bold mt-0.5">Chú Rể</p>
          </div>
        </motion.div>

        {/* Bride Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative flex flex-col items-center bg-white rounded-3xl p-3 xs:p-4 sm:p-8 shadow-sm border border-[#F0E4DD] hover:shadow-md transition-all duration-300 overflow-hidden text-center"
        >
          <div className="w-full flex flex-col items-center">
            <div className="relative w-full max-w-[180px] aspect-[4/5] rounded-2xl overflow-hidden mb-3 sm:mb-5 border-2 border-stone-100 shadow-sm">
              <img
                src="./assets/bride.png"
                alt="Cô dâu Nguyễn Thị Ngọc Tuyền"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent"></div>
              <span className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 bg-stone-900 text-white font-heading text-[9px] xs:text-[10px] sm:text-[11px] px-3 sm:px-4 py-0.5 sm:py-1 rounded-full uppercase tracking-widest font-semibold whitespace-nowrap">
                CÔ DÂU
              </span>
            </div>

            <h3 className="font-heading text-xs xs:text-sm sm:text-xl md:text-2xl font-bold text-stone-950 leading-tight">
              Nguyễn Thị Ngọc Tuyền
            </h3>
            <p className="text-amber-800 font-script text-xl sm:text-2xl font-bold mt-0.5">Cô Dâu</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
