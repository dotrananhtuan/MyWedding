import React, { useEffect, useRef, useState } from 'react';
import './index.scss';

export interface LightboxProps {
  open: boolean;
  images: string[];
  index: number;
  onClose: () => void;
  onChange: (newIndex: number) => void;
}

export default function Lightbox({ open, images, index, onClose, onChange }: LightboxProps) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [imgState, setImgState] = useState('lb-img-hidden');
  const startX = useRef(0);

  useEffect(() => {
    if (open) {
      setShowOverlay(true);

      requestAnimationFrame(() => {
        setImgState('lb-img-visible');
      });
    } else {
      setImgState('lb-img-close');

      setTimeout(() => {
        setShowOverlay(false);
        setImgState('lb-img-hidden');
      }, 250);
    }
  }, [open]);

  const next = () => onChange((index + 1) % images.length);
  const prev = () => onChange((index - 1 + images.length) % images.length);

  const touchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const touchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - startX.current;
    if (diff > 50) prev();
    if (diff < -50) next();
  };

  if (!showOverlay) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 
        ${open ? 'lb-overlay-visible' : 'lb-overlay-hidden'}`}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className='fixed top-4 right-4 z-[70] px-3 py-1 bg-white/20 backdrop-blur text-white text-xl'
      >
        ✕
      </button>

      <div
        className='relative z-[60] flex flex-col items-center'
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={`${process.env.PUBLIC_URL}${images[index]}`}
          className={`max-w-[90vw] max-h-[80vh] ${imgState}`}
          onTouchStart={touchStart}
          onTouchEnd={touchEnd}
        />

        <div className='flex gap-2 mt-4 overflow-x-auto pb-3'>
          {images.map((src, i) => (
            <img
              key={i}
              src={`${process.env.PUBLIC_URL}${src}`}
              onClick={() => onChange(i)}
              className={`w-16 h-16 rounded-lg cursor-pointer object-cover aspect-square border-2 transition-all ${
                i === index ? 'border-white opacity-100' : 'border-transparent opacity-60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
