import React, { useState } from 'react';
import { QrCode, Copy, Check, Download, Smartphone } from 'lucide-react';

// Đặt ảnh QR VietQR/ngân hàng vào: public/images/qr-chuyen-tien.png
const QR_IMAGE = `${process.env.PUBLIC_URL}/images/qr_chuye_tien.jpg`;
const ACCOUNT_NAME = 'DO THI NGOC HONG';
const ACCOUNT_NUMBER = '1032182873';

// Link mở trực tiếp app ngân hàng / màn hình chuyển khoản (nếu ngân hàng cung cấp khi tạo VietQR)
// Ví dụ: link "Chia sẻ" từ app MB Bank, Vietcombank, ... hoặc link VietQR từ vietqr.io
const TRANSFER_APP_LINK = process.env.REACT_APP_TRANSFER_LINK || '';

function TransferQRButton() {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState<'in' | 'out' | null>(null);
  const [imgError, setImgError] = useState(false);
  const [copied, setCopied] = useState<'name' | 'number' | null>(null);

  const copyToClipboard = async (text: string, field: 'name' | 'number') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(field);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      // fallback: select + execCommand cho browser cũ
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(field);
      setTimeout(() => setCopied(null), 1500);
    }
  };

  const openModal = () => {
    setOpen(true);
    requestAnimationFrame(() => setAnimate('in'));
  };

  const closeModal = () => {
    setAnimate('out');
    setTimeout(() => {
      setOpen(false);
      setImgError(false);
      setCopied(null);
    }, 250);
  };

  return (
    <>
      {/* Nút QR chuyển tiền mừng cưới - nằm ngay trên nút Gửi lời chúc */}
      <button
        onClick={openModal}
        className='
    fixed bottom-[5.5rem] right-6
    w-14 h-14 rounded-full
    flex items-center justify-center
    bg-green-600 hover:bg-green-700
    shadow-xl hover:scale-110 active:scale-95
    transition-all duration-300 z-50
  '
        title='Chuyển tiền mừng cưới'
        aria-label='Xem QR chuyển tiền mừng cưới'
      >
        <QrCode className='w-7 h-7 text-white' strokeWidth={2} />
      </button>

      {/* Modal chỉ hiển thị QR code */}
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
            <h2 className='text-xl font-semibold text-green-700 text-center mb-2'>
              Chuyển tiền mừng cưới 💒
            </h2>
            <p className='text-center text-slate-500 text-sm mb-4'>
              Quét mã QR hoặc chạm để copy thông tin
            </p>

            <div className='relative flex justify-center items-center bg-slate-50 rounded-xl p-4 min-h-[224px]'>
              {!imgError ? (
                <img
                  src={QR_IMAGE}
                  alt='QR chuyển tiền mừng cưới'
                  className='w-56 h-56 object-contain'
                  onError={() => setImgError(true)}
                />
              ) : (
                <p className='text-center text-slate-400 text-sm px-2'>
                  Đặt ảnh QR tại{' '}
                  <code className='bg-slate-200 px-1 rounded text-xs'>
                    public/images/qr-chuyen-tien.png
                  </code>
                </p>
              )}
            </div>

            {/* Thông tin chuyển khoản - chạm để copy (tiện trên điện thoại) */}
            <div className='mt-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100/80 p-4 space-y-2'>
              <button
                type='button'
                onClick={() => copyToClipboard(ACCOUNT_NAME, 'name')}
                className='w-full flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-green-100/60 active:bg-green-200/60 transition touch-manipulation'
              >
                <span className='text-sm font-semibold text-green-900 tracking-wide'>
                  {ACCOUNT_NAME}
                </span>
              </button>
              <button
                type='button'
                onClick={() => copyToClipboard(ACCOUNT_NUMBER, 'number')}
                className='w-full flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-green-100/60 active:bg-green-200/60 transition touch-manipulation'
              >
                <span className='text-base font-bold text-green-900 tracking-[0.2em] tabular-nums'>
                  {ACCOUNT_NUMBER}
                </span>
              </button>
            </div>

            {/* Mở app chuyển khoản (bấm vào = quét QR, mở thẳng màn hình thanh toán) */}
            {TRANSFER_APP_LINK && (
              <a
                href={TRANSFER_APP_LINK}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-3 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-green-600 text-white text-sm font-semibold hover:bg-green-700 active:bg-green-800 transition touch-manipulation shadow-md'
              >
                <Smartphone className='w-5 h-5' />
                Mở app chuyển khoản
              </a>
            )}

            {/* Lưu ảnh QR (mở trong tab mới để tải trên mobile) */}
            {!imgError && (
              <a
                href={QR_IMAGE}
                target='_blank'
                rel='noopener noreferrer'
                download='qr-chuyen-tien.jpg'
                className='mt-3 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-green-200 bg-green-50 text-green-800 text-sm font-medium hover:bg-green-100 transition touch-manipulation'
              >
                <Download className='w-4 h-4' />
                Lưu ảnh QR
              </a>
            )}

            <button
              type='button'
              onClick={closeModal}
              className='w-full mt-4 px-4 py-2.5 text-sm rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-100 transition'
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default TransferQRButton;
