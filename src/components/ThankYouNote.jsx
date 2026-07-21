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
          className="p-8 md:p-12 rounded-3xl bg-white border border-[#D6D1C7] shadow-md mb-12"
        >
          <div className="w-14 h-14 rounded-full bg-[#F5F2EC] border border-stone-300 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-7 h-7 text-amber-900 fill-amber-900/30" />
          </div>

          <h2 className="font-heading text-2xl md:text-4xl font-bold text-stone-950 mb-6 tracking-wide uppercase">
            LỜI CẢM ƠN TRÂN TRỌNG
          </h2>

          <p className="text-stone-700 text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto italic mb-8">
            "Sự hiện diện của quý vị là món quà vô giá và là lời chúc mừng ngọt ngào nhất dành cho chúng tôi trong ngày trọng đại này. Xin chân thành cảm ơn tình cảm và sự đồng hành quý báu của toàn thể gia đình, bạn bè và quý quan khách!"
          </p>

          {/* Couple Signature - Ample Vertical Padding to Prevent Cut-off Descenders */}
          <div className="my-6 space-y-2 py-2 px-2">
            <h3 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold italic text-stone-950 tracking-wide whitespace-nowrap leading-relaxed pb-1">
              Nguyễn Việt Hưng
            </h3>
            <p className="font-script text-3xl sm:text-4xl text-amber-900 font-bold my-1">&</p>
            <h3 className="font-heading text-xl sm:text-3xl md:text-4xl font-bold italic text-stone-950 tracking-wide whitespace-nowrap leading-relaxed pb-2">
              Nguyễn Thị Ngọc Tuyền
            </h3>
          </div>

          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-stone-600 font-heading mt-6 font-bold">
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

          <p className="text-xs text-stone-600 font-medium tracking-wider">
            © 2026 Wedding Invitation. Crafted for Nguyễn Việt Hưng & Nguyễn Thị Ngọc Tuyền.
          </p>
        </div>
      </div>
    </footer>
  );
}
