import React from 'react';
import { motion } from 'framer-motion';

export default function InvitationSection() {
  return (
    <section className="py-16 sm:py-20 px-3 sm:px-4 bg-[#F5F2EC] text-stone-900 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center relative z-10 p-5 sm:p-8 md:p-10 rounded-3xl bg-white border border-[#E5E0D8] shadow-sm"
      >
        <span className="font-sans text-amber-900 text-xs sm:text-sm tracking-[0.25em] font-bold uppercase block mb-2">
          TRÂN TRỌNG KÍNH MỜI
        </span>

        <h3 className="font-heading text-xl sm:text-2xl md:text-3xl text-stone-900 font-bold mb-4">
          QUÝ QUAN KHÁCH & BẠN BÈ THÂN THIẾT
        </h3>

        <p className="text-stone-700 max-w-2xl mx-auto text-xs sm:text-sm md:text-base font-medium leading-relaxed mb-6">
          Đến tham dự buổi tiệc chung vui và chứng kiến khoảnh khắc trọng đại khi chúng tôi chính thức về chung một nhà. Sự hiện diện của quý vị là niềm vinh hạnh lớn nhất của gia đình chúng tôi!
        </p>

        {/* Date Highlight Box */}
        <div className="inline-block p-4 sm:p-6 md:p-8 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D8] mb-8">
          <p className="font-script text-3xl sm:text-4xl text-amber-900 font-bold mb-1">Save the Date</p>
          <div className="text-lg sm:text-xl md:text-2xl font-numeric font-bold text-stone-950 tracking-widest my-2">
            14 THÁNG 07 NĂM 2026
          </div>
          <p className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-600 font-semibold">
            (TỨC NGÀY 01 THÁNG 06 NĂM BÍNH NGỌ)
          </p>
        </div>

        {/* Black GỬI PHẢN HỒI Button */}
        <div>
          <button
            onClick={() => {
              const el = document.getElementById('rsvp-section');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-stone-950 hover:bg-black text-white px-8 py-3.5 rounded-xl font-heading font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-95 cursor-pointer"
          >
            GỬI PHẢN HỒI
          </button>
        </div>
      </motion.div>
    </section>
  );
}
