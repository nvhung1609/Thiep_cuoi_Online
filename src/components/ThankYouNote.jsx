import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

export default function ThankYouNote() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 px-4 bg-[#FAF8F5] text-stone-900 relative overflow-hidden border-t border-[#D6D1C7]">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-5 sm:p-8 md:p-10 rounded-3xl bg-white border border-[#F0E4DD] shadow-sm mb-12"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F5F2EC] border border-stone-200 flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Heart className="w-6 h-6 text-amber-900 fill-amber-900/30" />
          </div>

          <h2 className="font-heading text-xl sm:text-3xl md:text-4xl font-bold text-stone-950 mb-4 sm:mb-6 tracking-widest uppercase">
            LỜI CẢM ƠN TRÂN TRỌNG
          </h2>

          <p className="text-stone-700 text-xs sm:text-sm md:text-base font-serif italic leading-relaxed max-w-2xl mx-auto mb-6 px-2">
            "Sự hiện diện của quý vị là món quà vô giá và là lời chúc mừng ngọt ngào nhất dành cho chúng tôi trong ngày trọng đại này. Xin chân thành cảm ơn tình cảm và sự đồng hành quý báu của toàn thể gia đình, bạn bè và quý quan khách!"
          </p>

          {/* Couple Signature */}
          <div className="my-6 space-y-1 py-2 px-2">
            <h3 className="font-heading text-lg sm:text-2xl md:text-3xl font-bold italic text-stone-950 tracking-wide pb-1">
              Nguyễn Việt Hưng
            </h3>
            <p className="font-script text-2xl sm:text-3xl text-amber-900 font-bold my-1">&</p>
            <h3 className="font-heading text-base sm:text-2xl md:text-3xl font-bold italic text-stone-950 tracking-wide pb-1">
              Nguyễn Thị Ngọc Tuyền
            </h3>
          </div>

          <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-stone-600 font-sans mt-6 font-bold">
            THANK YOU FOR CELEBRATING WITH US
          </p>
        </motion.div>

        {/* Back to top & copyright */}
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={scrollToTop}
            className="p-3.5 rounded-full bg-white border border-stone-300 text-stone-800 hover:bg-stone-100 transition-all shadow-sm cursor-pointer"
            title="Về đầu trang"
          >
            <ArrowUp className="w-5 h-5" />
          </button>

          <div className="text-center px-4 space-y-1">
            <p className="text-[11px] sm:text-xs text-stone-600 font-semibold tracking-widest uppercase">
              © 2026 WEDDING INVITATION
            </p>
            <p className="text-[11px] sm:text-xs text-amber-900/80 font-medium tracking-wider">
              Nguyễn Việt Hưng ♥ Nguyễn Thị Ngọc Tuyền
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
