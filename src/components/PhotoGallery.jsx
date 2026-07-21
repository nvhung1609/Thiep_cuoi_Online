import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Image as ImageIcon } from 'lucide-react';

export default function PhotoGallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const photos = [
    { id: 1, src: '/assets/hero-couple.png', title: 'Save The Date - Vũ Tùng & Diệp Anh' },
    { id: 2, src: '/assets/gallery-1.png', title: 'Hoàng Hôn Trên Biển' },
    { id: 3, src: '/assets/gallery-2.png', title: 'Nhẫn Cưới Yêu Thương' },
    { id: 4, src: '/assets/gallery-3.png', title: 'Nụ Cười Rạng Rỡ' },
    { id: 5, src: '/assets/gallery-4.png', title: 'Đêm Tiệc Lãng Mạn' },
    { id: 6, src: '/assets/groom.png', title: 'Chú Rể Phan Vũ Tùng' },
    { id: 7, src: '/assets/bride.png', title: 'Cô Dâu Vũ Diệp Anh' },
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="flex justify-center items-center gap-2 text-amber-600 mb-1">
          <ImageIcon className="w-5 h-5" />
          <span className="font-script text-4xl block">Khoảnh Khắc Kỷ Niệm</span>
        </div>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-stone-800 tracking-wide uppercase">
          ALBUM ẢNH CƯỚI
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4"></div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, idx) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => setSelectedImg(photo)}
            className="group relative h-80 rounded-2xl overflow-hidden shadow-lg border-2 border-white cursor-pointer"
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-amber-300 font-heading text-lg font-semibold">{photo.title}</span>
              <span className="text-stone-300 text-xs flex items-center gap-1 mt-1">
                <ZoomIn className="w-4 h-4" /> Nhấn để phóng to
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] bg-stone-900 rounded-3xl p-3 border border-amber-500/30 overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-4 right-4 p-3 rounded-full bg-stone-800/80 text-white hover:bg-amber-500 hover:text-stone-950 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <img
                src={selectedImg.src}
                alt={selectedImg.title}
                className="w-full h-auto max-h-[75vh] object-contain rounded-2xl"
              />

              <div className="p-4 text-center">
                <h4 className="font-heading text-xl text-amber-300 font-semibold">{selectedImg.title}</h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
