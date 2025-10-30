import React, { useState, useEffect } from 'react';
// @ts-expect-error
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function WeddingGallery() {
  const images = [
    '/images/bg.jpg',
    '/images/bg2.jpg',
    '/images/bg.jpg',
    '/images/bg2.jpg',
    '/images/bg.jpg',
    '/images/bg2.jpg',
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const handleClose = () => setSelectedIndex(null);
  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : 0));
  };
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0));
  };

  return (
    <div className='bg-white py-16 relative'>
      {/* Tiêu đề */}
      <div className='flex items-center mb-8 px-3'>
        <p className="text-[22px] md:text-[26px] font-[500] text-green-700 [font-family:'Dancing_Script',cursive] whitespace-nowrap">
          Khoảnh khắc hạnh phúc
        </p>
        <div className='flex-1 ml-4 h-[2px] bg-gradient-to-r from-green-500/60 to-slate-400/40 rounded-full'></div>
      </div>

      {/* Gallery */}
      <div className='w-[92%] max-w-6xl mx-auto flex flex-col gap-4'>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`grid gap-3 ${
              i % 2 === 0 ? 'grid-cols-[1.3fr_1fr]' : 'grid-cols-[1fr_1.3fr]'
            } sm:grid-cols-2`}
          >
            {[0, 1].map((j) => {
              const index = (i * 2 + j) % images.length;
              return (
                <div
                  key={index}
                  className='overflow-hidden rounded-xl cursor-pointer relative group'
                  data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
                  onClick={() => setSelectedIndex(index)}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}${images[index]}`}
                    alt={`moment-${index}`}
                    className='w-full h-[180px] sm:h-[220px] object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out'
                  />
                  {/* Hiệu ứng overlay khi hover */}
                  <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className='fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 transition-opacity duration-300'
          onClick={handleClose}
          data-aos='zoom-in'
        >
          <div className='relative'>
            <img
              src={`${process.env.PUBLIC_URL}${images[selectedIndex]}`}
              alt='selected'
              className='max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl border border-white/20 transition-transform duration-500'
              data-aos='zoom-in'
              data-aos-duration='600'
            />
            {/* Nút đóng */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
              className='absolute top-[-40px] right-0 text-white text-4xl font-light hover:text-green-300 transition'
            >
              ×
            </button>
            {/* Nút chuyển ảnh */}
            <button
              onClick={showPrev}
              className='absolute left-[-60px] top-1/2 -translate-y-1/2 text-white text-5xl font-light hover:text-green-300 transition hidden sm:block'
            >
              ‹
            </button>
            <button
              onClick={showNext}
              className='absolute right-[-60px] top-1/2 -translate-y-1/2 text-white text-5xl font-light hover:text-green-300 transition hidden sm:block'
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
