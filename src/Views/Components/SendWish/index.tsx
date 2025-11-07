import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './style.scss';
import ThankYouModal from './ThankYou';

function SendWishButton() {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState<'in' | 'out' | null>(null);

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState<string | null>(null);

  const [showThankYou, setShowThankYou] = useState(false);

  const openModal = () => {
    setOpen(true);
    requestAnimationFrame(() => setAnimate('in'));
  };

  const closeModal = () => {
    setAnimate('out');
    setTimeout(() => setOpen(false), 250);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) {
      setError('Vui lòng nhập lời chúc 💚');
      return;
    }

    setError(null);
    emailjs.send(
      'service_ypskafw',
      'template_xowj1yt',
      {
        name: name,
        time: new Date().toLocaleString('vi-VN'),
        message: message,
      },
      'W5QIkZKsw4tWL2cID'
    );

    setName('');
    setMessage('');

    closeModal();

    setTimeout(() => {
      setShowThankYou(true);
    }, 200);
  };

  return (
    <>
      {/* Nút Gửi lời chúc */}
      <button
        onClick={openModal}
        className='
    fixed bottom-6 right-6
    w-14 h-14 rounded-full
    flex items-center justify-center
    bg-green-600 hover:bg-green-700
    shadow-xl hover:scale-110 active:scale-95
    transition-all duration-300 z-50
  '
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          stroke='white'
          strokeWidth='2.2'
          viewBox='0 0 24 24'
          className='w-7 h-7'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3 7l9 6 9-6M21 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7'
          />
        </svg>
      </button>

      {/* Modal */}
      {open && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur transition-opacity duration-300 ${
            animate === 'in' ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-white rounded-2xl p-6 w-[90%] max-w-sm shadow-lg relative transform transition-all duration-300 ${
              animate === 'in'
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-4 scale-95'
            }`}
          >
            <h2 className='text-xl font-semibold text-green-700 text-center mb-3'>
              Gửi lời chúc 💚
            </h2>

            <p className='text-center text-slate-500 text-sm mb-4'>
              Lời chúc của bạn sẽ là niềm vui trong ngày trọng đại!
            </p>

            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
              <input
                type='text'
                placeholder='Tên của bạn (không bắt buộc)'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='border border-green-400 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-300'
              />

              <textarea
                placeholder='Nhập lời chúc của bạn...'
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (error) setError(null);
                }}
                className={`border rounded-lg px-3 py-2 text-sm h-24 resize-none focus:outline-none focus:ring-2 ${
                  error
                    ? 'border-red-400 focus:ring-red-300'
                    : 'border-green-400 focus:ring-green-300'
                }`}
              />

              {/* ✅ ERROR MESSAGE */}
              {error && <p className='text-red-500 text-xs mt-[-6px]'>{error}</p>}

              <div className='flex justify-end gap-2 mt-2'>
                <button
                  type='button'
                  onClick={closeModal}
                  className='px-4 py-2 text-sm rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-100 transition'
                >
                  Hủy
                </button>

                <button
                  type='submit'
                  className='px-4 py-2 text-sm rounded-lg bg-green-700 text-white hover:bg-green-800 shadow transition'
                >
                  Gửi
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ThankYouModal open={showThankYou} onClose={() => setShowThankYou(false)} />
    </>
  );
}

export default SendWishButton;
