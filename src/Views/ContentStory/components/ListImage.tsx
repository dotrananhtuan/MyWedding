import React, { useState, useEffect } from 'react';

import Lightbox from './LightBox';

export default function WeddingGallery() {
  const images: string[] = [
    '/images/bg.jpg',
    '/images/bg2.jpg',
    '/images/bg.jpg',
    '/images/bg2.jpg',
    '/images/bg.jpg',
    '/images/bg2.jpg',
    '/images/bg2.jpg',
    '/images/bg.jpg',
    '/images/bg2.jpg',
  ];

  const aosList = [
    'fade-up',
    'fade-down',
    'fade-right',
    'fade-left',
    'zoom-in',
    'zoom-in-up',
    'zoom-in-down',
    'fade-up',
    'zoom-in-up',
  ];

  const layout: string[] = ['50', '50', '100', '50', '50', '50', '50', '100', '100'];

  const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);

  return (
    <div className='bg-white py-16 relative'>
      {/* Title */}
      <div className='flex items-center mb-8 px-3'>
        <p className="text-[22px] md:text-[26px] font-[500] text-green-700 [font-family:'Dancing_Script',cursive] whitespace-nowrap">
          Khoảnh khắc hạnh phúc
        </p>
        <div className='flex-1 ml-4 h-[2px] bg-gradient-to-r from-green-500/60 to-slate-400/40 rounded-full' />
      </div>

      {/* Gallery */}
      <div className='flex flex-wrap px-3'>
        {images.map((src, i) => (
          <div
            key={i}
            className='cursor-pointer p-1'
            style={{ width: `${layout[i]}%` }}
            data-aos={aosList[i % aosList.length]}
            data-aos-delay='400'
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}${src}`}
              className=' w-full aspect-[3/4] object-cover'
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        images={images}
        index={index}
        onClose={() => setOpen(false)}
        onChange={(i) => setIndex(i)}
      />
    </div>
  );
}
