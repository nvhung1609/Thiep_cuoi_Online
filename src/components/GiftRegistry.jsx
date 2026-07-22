import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Copy, Check, QrCode, X } from 'lucide-react';

export default function GiftRegistry() {
  const [copiedBank, setCopiedBank] = useState(null);
  const [activeQrModal, setActiveQrModal] = useState(null);

  const groomBank = {
    owner: 'NGUYỄN VIỆT HƯNG',
    bankName: 'Vietcombank',
    accNumber: '9338812063',
    displayAcc: '9338 8120 63',
    qrImg: 'https://img.vietqr.io/image/VCB-9338812063-compact2.png?accountName=NGUYEN%20VIET%20HUNG',
    type: 'Chú Rể',
  };

  const brideBank = {
    owner: 'NGUYỄN THỊ NGỌC TUYỀN',
    bankName: 'ACB',
    accNumber: '4646161',
    displayAcc: '4646 161',
    qrImg: 'https://img.vietqr.io/image/ACB-4646161-compact2.png?accountName=NGUYEN%20THI%20NGOC%20TUYEN',
    type: 'Cô Dâu',
  };

  const copyToClipboard = (text, bankKey) => {
    navigator.clipboard.writeText(text);
    setCopiedBank(bankKey);
    setTimeout(() => setCopiedBank(null), 3000);
  };

  return (
    <section id="gift-section" className="py-16 sm:py-20 px-3 sm:px-4 bg-[#F5F2EC] text-stone-900 relative border-t border-[#E5E0D8] overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="flex justify-center items-center gap-2 text-stone-700 mb-1">
          <Gift className="w-5 h-5 text-amber-900" />
          <span className="font-script text-3xl sm:text-4xl block text-amber-900 font-bold">Mừng Cưới</span>
        </div>
        <h2 className="font-heading text-xs xs:text-sm sm:text-2xl md:text-3xl font-bold tracking-wider sm:tracking-widest uppercase text-stone-900 mb-3 px-1 leading-snug">
          MỪNG CƯỚI SỚM CHO CÔ DÂU VÀ CHÚ RỂ
        </h2>
        <div className="w-16 h-0.5 bg-amber-800/40 mx-auto mt-2 mb-8 sm:mb-10"></div>

        {/* Cards Grid (Compact Side-by-Side 2 Columns on All Devices) */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-6 md:gap-8 max-w-4xl mx-auto items-stretch">
          {/* Groom Bank Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl p-2.5 xs:p-3 sm:p-6 border border-[#E5E0D8] shadow-sm flex flex-col justify-between text-center"
          >
            <div>
              <span className="text-[8.5px] xs:text-[9.5px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-bold text-stone-700 bg-[#F5F2EC] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-stone-200 inline-block whitespace-nowrap">
                MỪNG CƯỚI CHÚ RỂ
              </span>

              <h3 className="font-heading text-xs xs:text-sm sm:text-lg md:text-xl font-bold text-stone-950 tracking-wide mt-2 sm:mt-3 leading-tight">
                {groomBank.owner}
              </h3>
              <p className="text-stone-600 text-[10px] xs:text-xs mt-0.5 font-semibold text-amber-900/90">{groomBank.bankName}</p>

              {/* VietQR Display */}
              <div
                onClick={() => setActiveQrModal(groomBank)}
                className="my-2 sm:my-3.5 relative cursor-pointer w-full max-w-[115px] xs:max-w-[125px] sm:max-w-[160px] aspect-square mx-auto p-1 sm:p-1.5 bg-white rounded-2xl border border-stone-300 shadow-sm overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img src={groomBank.qrImg} alt="QR Chú Rể" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Account Number & Copy */}
            <div className="bg-[#FAF8F5] p-2 sm:p-3 rounded-2xl border border-[#E5E0D8] flex flex-col items-center justify-between gap-1.5 mt-1">
              <div className="text-center">
                <span className="text-[8.5px] sm:text-[9.5px] text-stone-600 uppercase tracking-wider block font-bold">Số tài khoản:</span>
                <span className="font-numeric text-xs xs:text-sm sm:text-lg font-bold text-stone-950 tracking-wider">
                  {groomBank.displayAcc}
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(groomBank.accNumber, 'groom')}
                className="w-full py-1.5 px-2 sm:px-3 rounded-xl bg-stone-900 hover:bg-black text-white font-bold text-[9px] xs:text-[10px] sm:text-xs transition-all flex items-center justify-center gap-1 cursor-pointer shadow-sm active:scale-95"
              >
                {copiedBank === 'groom' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedBank === 'groom' ? 'Đã sao chép' : 'Sao chép STK'}</span>
              </button>
            </div>
          </motion.div>

          {/* Bride Bank Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-white rounded-3xl p-2.5 xs:p-3 sm:p-6 border border-[#E5E0D8] shadow-sm flex flex-col justify-between text-center"
          >
            <div>
              <span className="text-[8.5px] xs:text-[9.5px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-bold text-stone-700 bg-[#F5F2EC] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-stone-200 inline-block whitespace-nowrap">
                MỪNG CƯỚI CÔ DÂU
              </span>

              <h3 className="font-heading text-xs xs:text-sm sm:text-lg md:text-xl font-bold text-stone-950 tracking-wide mt-2 sm:mt-3 leading-tight">
                {brideBank.owner}
              </h3>
              <p className="text-stone-600 text-[10px] xs:text-xs mt-0.5 font-semibold text-amber-900/90">{brideBank.bankName}</p>

              {/* VietQR Display */}
              <div
                onClick={() => setActiveQrModal(brideBank)}
                className="my-2 sm:my-3.5 relative cursor-pointer w-full max-w-[115px] xs:max-w-[125px] sm:max-w-[160px] aspect-square mx-auto p-1 sm:p-1.5 bg-white rounded-2xl border border-stone-300 shadow-sm overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img src={brideBank.qrImg} alt="QR Cô Dâu" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Account Number & Copy */}
            <div className="bg-[#FAF8F5] p-2 sm:p-3 rounded-2xl border border-[#E5E0D8] flex flex-col items-center justify-between gap-1.5 mt-1">
              <div className="text-center">
                <span className="text-[8.5px] sm:text-[9.5px] text-stone-600 uppercase tracking-wider block font-bold">Số tài khoản:</span>
                <span className="font-numeric text-xs xs:text-sm sm:text-lg font-bold text-stone-950 tracking-wider">
                  {brideBank.displayAcc}
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(brideBank.accNumber, 'bride')}
                className="w-full py-1.5 px-2 sm:px-3 rounded-xl bg-stone-900 hover:bg-black text-white font-bold text-[9px] xs:text-[10px] sm:text-xs transition-all flex items-center justify-center gap-1 cursor-pointer shadow-sm active:scale-95"
              >
                {copiedBank === 'bride' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedBank === 'bride' ? 'Đã sao chép' : 'Sao chép STK'}</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* QR Modal */}
      <AnimatePresence>
        {activeQrModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveQrModal(null)}
            className="fixed inset-0 z-50 bg-stone-900/65 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-sm w-full bg-white rounded-3xl p-6 border border-stone-200 text-center shadow-2xl"
            >
              <button
                onClick={() => setActiveQrModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-[11px] font-bold text-stone-600 uppercase tracking-widest block mb-1">
                MÃ VIETQR CHUYỂN KHOẢN
              </span>
              <h4 className="font-heading text-xl font-bold text-stone-950">{activeQrModal.owner}</h4>
              <p className="text-xs text-stone-600 mb-4 font-medium">{activeQrModal.bankName}</p>

              <div className="p-3 bg-white border border-stone-200 rounded-2xl mb-4 shadow-sm">
                <img src={activeQrModal.qrImg} alt="QR Code" className="w-full h-auto object-contain" />
              </div>

              <p className="font-numeric text-stone-950 font-bold tracking-widest text-xl">
                STK: {activeQrModal.displayAcc}
              </p>
              <p className="text-xs text-stone-500 mt-1 font-medium">Quét bằng ứng dụng ngân hàng hoặc MoMo</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
