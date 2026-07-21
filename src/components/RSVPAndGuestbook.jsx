import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, MessageSquare, User, Check } from 'lucide-react';

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

  // Initial wish wall storage updated for Hưng & Tuyền
  const [wishes, setWishes] = useState([
    {
      name: 'Nguyễn Tiến Dũng',
      side: 'Khách Chú Rể',
      message: 'Chúc hai bạn Việt Hưng & Ngọc Tuyền trăm năm hạnh phúc, sớm đón quý tử nha! Đám cưới chắc chắn mình sẽ đến sớm!',
      time: 'Vừa xong',
    },
    {
      name: 'Trần Thị Thu Hà',
      side: 'Khách Cô Dâu',
      message: 'Chúc Ngọc Tuyền của tớ xinh đẹp nhất ngày cưới, mãi mãi hạnh phúc và bình an bên Việt Hưng nha ❤️',
      time: '10 phút trước',
    },
    {
      name: 'Anh Hoàng & Chị Mai',
      side: 'Khách Nhà Trai',
      message: 'Chúc mừng hai em Việt Hưng & Ngọc Tuyền! Chúc tình yêu của hai em luôn đong đầy và bền chặt theo năm tháng.',
      time: '1 giờ trước',
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#c5a059', '#e8e4dc', '#ffffff', '#a89f91'],
    });

    if (formData.message.trim()) {
      setWishes([
        {
          name: formData.name,
          side: formData.side === 'groom' ? 'Khách Chú Rể' : 'Khách Cô Dâu',
          message: formData.message,
          time: 'Vừa xong',
        },
        ...wishes,
      ]);
    }

    setSubmitted(true);
  };

  return (
    <section id="rsvp-section" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="font-script text-3xl text-amber-800/80 block mb-1">Xác Nhận Tham Dự & Gửi Lời Chúc</span>
        <h2 className="font-heading text-3xl md:text-4xl font-normal text-stone-900 tracking-wide uppercase">
          XÁC NHẬN & SỔ LƯU BÚT
        </h2>
        <div className="w-20 h-0.5 bg-stone-300 mx-auto mt-3"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* RSVP Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl p-8 border border-[#E5E0D8] shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6 border-b border-[#E5E0D8] pb-4">
            <CheckCircle2 className="w-6 h-6 text-stone-700" />
            <div>
              <h3 className="font-heading text-xl font-semibold text-stone-900">XÁC NHẬN THAM DỰ</h3>
              <p className="text-xs text-stone-500 font-light">Vui lòng phản hồi trước ngày 05/07/2026</p>
            </div>
          </div>

          {submitted ? (
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="text-center py-10">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="font-heading text-xl font-semibold text-stone-900">Cảm Ơn Bạn Rất Nhiều!</h4>
              <p className="text-stone-600 text-xs mt-2 max-w-xs mx-auto leading-relaxed">
                Thông tin tham dự và lời chúc mừng của bạn đã được gửi tới Chú Rể Việt Hưng & Cô Dâu Ngọc Tuyền.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-xs text-stone-600 underline hover:text-stone-900 cursor-pointer"
              >
                Gửi thêm lời chúc khác
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

              <div className="grid grid-cols-2 gap-4">
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
                className="w-full py-3.5 rounded-xl bg-stone-800 hover:bg-stone-900 text-white font-medium tracking-wider uppercase text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Gửi Xác Nhận & Lời Chúc</span>
              </button>
            </form>
          )}
        </motion.div>

        {/* Live Wish Wall Card - Updated to Light Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="bg-white rounded-3xl p-8 border border-[#E5E0D8] shadow-sm flex flex-col h-[500px]"
        >
          <div className="flex items-center justify-between mb-5 border-b border-[#E5E0D8] pb-4">
            <div className="flex items-center gap-2.5">
              <MessageSquare className="w-5 h-5 text-amber-800/80" />
              <h3 className="font-heading text-xl font-semibold text-stone-900">SỔ LƯU BÚT LỜI CHÚC</h3>
            </div>
            <span className="text-xs bg-[#F5F2EC] text-stone-700 px-3 py-1 rounded-full border border-stone-200 font-medium">
              {wishes.length} Lời chúc
            </span>
          </div>

          <div className="flex-1 overflow-y-auto space-y-3.5 pr-2 custom-scrollbar">
            {wishes.map((w, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D8]"
              >
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-semibold text-stone-900 text-xs">{w.name}</span>
                  <span className="text-[10px] text-stone-500 uppercase px-2 py-0.5 rounded bg-[#EAE6DF] font-medium">
                    {w.side}
                  </span>
                </div>
                <p className="text-stone-700 text-xs italic leading-relaxed font-light">"{w.message}"</p>
                <span className="text-[10px] text-stone-400 mt-2 block text-right font-light">{w.time}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
