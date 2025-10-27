import React, { useState } from 'react';
import './style.scss';

function SendWishButton() {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState<'in' | 'out' | null>(null);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const openModal = () => {
    setOpen(true);
    requestAnimationFrame(() => setAnimate('in')); // bật animation mở
  };

  const closeModal = () => {
    setAnimate('out');
    setTimeout(() => setOpen(false), 300); // khớp thời gian fadeOut
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return alert('Vui lòng nhập lời chúc 💌');
    console.log('Lời chúc:', { name, message });
    setName('');
    setMessage('');
    closeModal();
    alert('Cảm ơn bạn đã gửi lời chúc 💖');
  };

  return (
    <>
      {/* Nút Gửi lời chúc */}
      <button
        onClick={openModal}
        className='fixed bottom-6 right-6 bg-pink-500 text-white font-medium px-4 py-3 rounded-full shadow-lg hover:bg-pink-600 hover:shadow-xl transition-all duration-300 z-50'
      >
        💌
      </button>

      {/* Modal */}
      {open && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            animate === 'in' ? 'opacity-100' : animate === 'out' ? 'opacity-0' : 'opacity-0'
          }`}
          onClick={closeModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-white rounded-2xl p-6 w-[90%] max-w-sm shadow-lg relative transform transition-all duration-300 ${
              animate === 'in'
                ? 'opacity-100 translate-y-0 scale-100'
                : animate === 'out'
                ? 'opacity-0 translate-y-4 scale-95'
                : 'opacity-0 translate-y-4 scale-95'
            }`}
          >
            <h2 className='text-xl font-semibold text-pink-600 text-center mb-3'>
              Gửi lời chúc 💕
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
                className='border border-pink-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300'
              />
              <textarea
                placeholder='Nhập lời chúc của bạn...'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='border border-pink-200 rounded-lg px-3 py-2 text-sm h-24 resize-none focus:outline-none focus:ring-2 focus:ring-pink-300'
              />

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
                  className='px-4 py-2 text-sm rounded-lg bg-pink-500 text-white hover:bg-pink-600 shadow transition'
                >
                  Gửi
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default SendWishButton;
