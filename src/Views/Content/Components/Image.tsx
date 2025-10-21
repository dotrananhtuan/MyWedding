import React, { useRef, useEffect } from 'react';
import 'aos/dist/aos.css';

function ImageCarousel() {
  return (
    <div className='bg-white py-16 relative'>
      <h2 className='text-center text-2xl md:text-3xl font-semibold text-pink-600 mb-10'>
        Khoảnh khắc hạnh phúc 💕
      </h2>

      <div className='w-[92%] max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[130px] sm:auto-rows-[160px] md:auto-rows-[200px]'>
        {/* Hàng 1 */}
        <div className='col-span-2 row-span-2 overflow-hidden'>
          <img
            src='/images/bg.jpg'
            alt='1'
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
          />
        </div>
        <div className='overflow-hidden'>
          <img
            src='/images/bg.jpg'
            alt='2'
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
          />
        </div>
        <div className='overflow-hidden'>
          <img
            src='/images/bg.jpg'
            alt='3'
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
          />
        </div>

        {/* Hàng 2 – hình to nằm bên phải */}
        <div className='overflow-hidden'>
          <img
            src='/images/bg.jpg'
            alt='4'
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
          />
        </div>
        <div className='overflow-hidden'>
          <img
            src='/images/bg.jpg'
            alt='5'
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
          />
        </div>
        <div className='col-span-2 row-span-2 overflow-hidden'>
          <img
            src='/images/bg.jpg'
            alt='6'
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
          />
        </div>

        {/* Hàng 3 – thêm vài hình nhỏ xen kẽ */}
        <div className='overflow-hidden'>
          <img
            src='/images/bg.jpg'
            alt='7'
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
          />
        </div>
        <div className='overflow-hidden'>
          <img
            src='/images/bg.jpg'
            alt='8'
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
          />
        </div>
        <div className='overflow-hidden'>
          <img
            src='/images/bg.jpg'
            alt='9'
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
          />
        </div>
        <div className='overflow-hidden'>
          <img
            src='/images/bg.jpg'
            alt='10'
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
          />
        </div>
      </div>

      <p className='text-center text-slate-500 mt-8 text-sm italic'>
        Lưu giữ những kỷ niệm ngọt ngào trong hành trình tình yêu 🌸
      </p>
    </div>
  );
}

export default ImageCarousel;
