import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, User, Check, X } from 'lucide-react';
import { sendTelegramRsvpNotification } from '../services/telegramService';

export default function RSVPAndGuestbook() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    side: 'groom',
    guests: '1',
    attending: 'yes',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    setIsSubmitting(true);

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#c5a059', '#e8e4dc', '#ffffff', '#a89f91'],
    });

    // Send notification directly to Telegram Bot securely
    await sendTelegramRsvpNotification(formData);

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleOpenModal = () => {
    setSubmitted(false);
    setIsModalOpen(true);
  };

  return (
    <section id="rsvp-section" className="pt-4 pb-12 sm:pt-6 sm:pb-16 px-3 sm:px-4 max-w-5xl mx-auto overflow-hidden">
      <div className="text-center mb-6 sm:mb-8">
        <span className="font-script text-3xl sm:text-4xl text-amber-800 font-bold block mb-1">Gửi Lời Chúc & Phản Hồi</span>
        <h2 className="font-heading text-xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-widest uppercase">
          XÁC NHẬN THAM DỰ
        </h2>
        <div className="w-16 h-0.5 bg-amber-800/40 mx-auto mt-3"></div>
      </div>

      {/* Full-width Luxury RSVP Banner Card matching Photo Gallery width */}
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-[#F0E4DD] shadow-sm text-center relative overflow-hidden flex flex-col items-center justify-center"
        >
          {/* Subtle decorative gold line top accent */}
          <div className="w-24 h-1 bg-gradient-to-r from-amber-200 via-amber-800 to-amber-200 mx-auto rounded-full mb-6"></div>

          <div className="w-16 h-16 rounded-full bg-[#F5F2EC] border border-amber-900/20 flex items-center justify-center mx-auto mb-4 text-amber-900 shadow-inner">
            <CheckCircle2 className="w-8 h-8 text-amber-900" />
          </div>

          <p className="text-stone-600 text-xs sm:text-base leading-relaxed max-w-xl mx-auto mb-8 font-medium italic">
            "Sự hiện diện của quý vị là niềm vinh hạnh và hạnh phúc lớn nhất của gia đình chúng tôi."
          </p>

          {/* Black GỬI PHẢN HỒI button */}
          <button
            onClick={handleOpenModal}
            className="bg-stone-950 hover:bg-black text-white px-10 py-4 rounded-2xl font-heading font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer border border-stone-800"
          >
            GỬI PHẢN HỒI
          </button>
        </motion.div>
      </div>

      {/* RSVP Modal Dialog */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-3 xs:p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-2xl overflow-hidden"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-stone-500 hover:bg-stone-100 cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-5 border-b border-[#F0E4DD] pb-4">
                <div className="p-2.5 rounded-full bg-[#F5F2EC] text-amber-900 border border-stone-200">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-stone-950 uppercase tracking-widest">
                    XÁC NHẬN THAM DỰ
                  </h3>
                  <p className="text-xs text-stone-500 font-medium">Việt Hưng & Ngọc Tuyền trân trọng kính mời</p>
                </div>
              </div>

              {submitted ? (
                <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="text-center py-8">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="font-heading text-xl font-bold text-stone-900">Cảm Ơn Bạn Rất Nhiều!</h4>
                  <p className="text-stone-600 text-xs sm:text-sm mt-2 max-w-xs mx-auto leading-relaxed font-medium">
                    Thông tin tham dự và lời chúc mừng của bạn đã được gửi tới Chú Rể Việt Hưng & Cô Dâu Ngọc Tuyền.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-stone-900 text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Đóng cửa sổ
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Họ và tên của bạn *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                      <input
                        type="text"
                        required
                        placeholder="Nhập họ và tên..."
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E5E0D8] focus:outline-none focus:border-stone-400 text-xs text-stone-800 bg-[#FAF8F5]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1">
                        Bạn là khách của
                      </label>
                      <select
                        value={formData.side}
                        onChange={(e) => setFormData({ ...formData, side: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-[#E5E0D8] focus:outline-none focus:border-stone-400 text-xs text-stone-800 bg-[#FAF8F5]"
                      >
                        <option value="groom">Nhà Trai (Việt Hưng)</option>
                        <option value="bride">Nhà Gái (Ngọc Tuyền)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1">
                        Số người tham dự
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-[#E5E0D8] focus:outline-none focus:border-stone-400 text-xs text-stone-800 bg-[#FAF8F5]"
                      >
                        <option value="1">1 Người</option>
                        <option value="2">2 Người</option>
                        <option value="3">3+ Người</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Lời chúc gửi tới cặp đôi
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Nhập lời chúc đong đầy yêu thương..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 rounded-xl border border-[#E5E0D8] focus:outline-none focus:border-stone-400 text-xs text-stone-800 bg-[#FAF8F5] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-stone-900 hover:bg-black disabled:bg-stone-500 text-white font-bold tracking-wider uppercase text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <Send className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isSubmitting ? 'ĐANG GỬI THÔNG BÁO...' : 'GỬI XÁC NHẬN & LỜI CHÚC'}</span>
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
