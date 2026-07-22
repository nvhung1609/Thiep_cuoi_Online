import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Image as ImageIcon } from 'lucide-react';

export default function PhotoGallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const photos = [
    { id: 1, src: './assets/hero-couple.png' },
    { id: 2, src: './assets/gallery-1.png' },
    { id: 3, src: './assets/gallery-2.png' },
    { id: 4, src: './assets/gallery-3.png' },
    { id: 5, src: './assets/gallery-4.png' },
    { id: 6, src: './assets/groom.png' },
    { id: 7, src: './assets/bride.png' },
    { id: 8, src: './assets/gallery-1.png' },
    { id: 9, src: './assets/gallery-2.png' },
  ];

  return (
    <section className="pt-10 pb-4 sm:pt-14 sm:pb-6 px-3 sm:px-4 max-w-5xl mx-auto overflow-hidden">
      <div className="text-center mb-10 sm:mb-14">
        <div className="flex justify-center items-center gap-2 text-amber-800 mb-1">
          <ImageIcon className="w-5 h-5" />
          <span className="font-script text-3xl sm:text-4xl block font-bold">Khoảnh Khắc Kỷ Niệm</span>
        </div>
        <h2 className="font-heading text-xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-widest uppercase">
          ALBUM ẢNH CƯỚI
        </h2>
        <div className="w-16 h-0.5 bg-amber-800/40 mx-auto mt-3"></div>
      </div>

      {/* Scrollable Gallery Container matching user screenshots */}
      <div className="max-h-[440px] sm:max-h-[560px] overflow-y-auto pr-2 custom-scrollbar bg-white rounded-3xl p-3 sm:p-5 border border-[#F0E4DD] shadow-sm">
        <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
          {photos.map((photo, idx) => (
            <motion.div
              key={photo.id + '-' + idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.08 }}
              onClick={() => setSelectedImg(photo)}
              className="group relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-stone-200 cursor-pointer bg-stone-100"
            >
              <img
                src={photo.src}
                alt="Ảnh cưới Việt Hưng & Ngọc Tuyền"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
                <ZoomIn className="w-6 h-6 text-white drop-shadow-md" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] bg-stone-900 rounded-3xl p-2 sm:p-3 border border-amber-500/30 overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-stone-800/80 text-white hover:bg-amber-500 hover:text-stone-950 transition-colors z-10 cursor-pointer"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <img
                src={selectedImg.src}
                alt="Ảnh cưới phóng to"
                className="w-full h-auto max-h-[82vh] object-contain rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
