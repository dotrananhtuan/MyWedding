import React, { useEffect, useState } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ThankYouModal({ open, onClose }: Props) {
  const [animate, setAnimate] = useState<'in' | 'out' | null>(null);

  // bật animation vào
  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => setAnimate('in'));
    } else if (animate === 'in') {
      setAnimate('out');
      setTimeout(() => setAnimate(null), 250);
    }
  }, [open]);

  if (!open && animate === null) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center 
      bg-black/40 backdrop-blur transition-opacity duration-300
      ${animate === 'in' ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-2xl p-6 w-[85%] max-w-sm shadow-lg text-center
        transform transition-all duration-300
        ${
          animate === 'in'
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-4 scale-95'
        }`}
      >
        <div className='text-green-600 text-4xl mb-3'>💚</div>
        <h3 className='text-xl font-semibold text-green-700 mb-2'>Cảm ơn bạn!</h3>
        <p className='text-slate-600 text-sm mb-4'>Lời chúc của bạn đã được gửi thành công.</p>

        <button
          onClick={onClose}
          className='px-5 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition'
        >
          Đóng
        </button>
      </div>
    </div>
  );
}
