// InvitationCard.jsx
import React, { useEffect } from 'react';
import { MapPin, Hourglass } from 'lucide-react'; // icon map pin đẹp
import Countdown from '../../Components/Coutdown';
import '../content.scss';

const InvitationCard = () => {
  return (
    <div className='bg-[#fff]'>
      <div className='text-center mt-[-1px]'>
        <span
          style={{
            borderTop: 'solid .5px #000',
            padding: '0 20px',
            fontSize: '30px',
            paddingTop: '20px',
            fontFamily: '"Dancing Script", cursive',
          }}
        >
          Thư mời
        </span>

        <p className='uppercase mb-6 mt-1'>Tham dự lễ cưới của Tuấn & Hồng</p>

        <div className='flex justify-center items-center gap-1 px-1'>
          {/* Ảnh trái (nhỏ) */}
          <div className='w-32 h-44 overflow-hidden rounded-sm'>
            <img
              src={`${process.env.PUBLIC_URL}/Image/9040.jpg`}
              alt='Ảnh 1'
              className='w-full h-full object-cover'
              // loading='lazy'
              // decoding='async'
            />
          </div>

          {/* Ảnh giữa (lớn) */}
          <div className='w-44 h-64 overflow-hidden rounded-sm'>
            <img
              src={`${process.env.PUBLIC_URL}/Image/8783.jpg`}
              alt='Ảnh 2'
              className='w-full h-full object-cover'
              // loading='lazy'
              // decoding='async'
            />
          </div>

          {/* Ảnh phải (nhỏ) */}
          <div className='w-32 h-44 overflow-hidden rounded-sm'>
            <img
              src={`${process.env.PUBLIC_URL}/Image/9047.jpg`}
              alt='Ảnh 3'
              className='w-full h-full object-cover'
              // loading='lazy'
              // decoding='async'
            />
          </div>
        </div>

        <div data-aos='fade-up' className='mt-6 px-3'>
          <p className='uppercase text-center text-sm text-slate-500 mb-4'>Thời gian & địa điểm</p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto'>
            {/* Card 1 */}
            <div className='rounded-2xl border border-green-200 bg-green-50/60 p-5 text-center shadow-sm'>
              <p className='uppercase text-base font-semibold text-green-800 tracking-wide'>
                Tiệc mừng lễ Vu Quy
              </p>
              <div className='w-16 h-[2px] bg-green-300 mx-auto my-3 rounded-full' />
              <p className='text-[14px] text-slate-700 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 tracking-wide'>
                <span className='font-semibold text-green-700 text-base'>10h30</span>
                <span className='text-slate-400'>•</span>
                <span className='text-slate-500'>Chủ nhật</span>
                <span className='text-slate-400'>•</span>
                <span className='font-semibold text-slate-800'>22</span>
                <span
                  className='text-green-700'
                  style={{ fontFamily: '"Dancing Script", cursive', fontSize: '20px' }}
                >
                  Tháng 03
                </span>
                <span className='font-semibold text-slate-800'>2026</span>
              </p>
              <p className='italic text-gray-500 text-xs mt-1.5'>
                (Nhằm ngày 04 tháng 02 năm Bính Ngọ)
              </p>
              <p className='mt-3 text-sm text-gray-700'>
                Tại <span className='text-green-700 font-semibold'>Tư gia nhà gái</span>
              </p>
              <a
                href='https://www.google.com/maps/place/16%C2%B026%2709.5%22N+107%C2%B047%2700.6%22E/@16.4359753,107.7828473,167m/data=!3m2!1e3!4b1!4m12!1m7!3m6!1s0x31419c14032bd8b1:0xa628e7707fcc384a!2zQ2jhu6MgQ2hp4buBdSBWaW5oIFRoYW5o!8m2!3d16.4375516!4d107.7813493!16s%2Fg%2F11c1szsz5y!3m3!8m2!3d16.435974!4d107.783491?entry=ttu'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-1 mt-4 px-3.5 py-1.5 bg-green-600 text-white text-xs font-medium rounded-full hover:bg-green-700 hover:scale-105 transition-all'
              >
                <MapPin className='w-3.5 h-3.5 animate-bounce-slow' />
                Xem đường đi
              </a>
            </div>

            {/* Card 2 */}
            <div className='rounded-2xl border border-green-200 bg-green-50/60 p-5 text-center shadow-sm'>
              <p className='uppercase text-base font-semibold text-green-800 tracking-wide'>
                Tiệc mừng Lễ Tân hôn
              </p>
              <div className='w-16 h-[2px] bg-green-300 mx-auto my-3 rounded-full' />
              <p className='text-[14px] text-slate-700 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 tracking-wide'>
                <span className='font-semibold text-green-700 text-base'>11h30</span>
                <span className='text-slate-400'>•</span>
                <span className='text-slate-500'>Chủ nhật</span>
                <span className='text-slate-400'>•</span>
                <span className='font-semibold text-slate-800'>29</span>
                <span
                  className='text-green-700'
                  style={{ fontFamily: '"Dancing Script", cursive', fontSize: '20px' }}
                >
                  Tháng 03
                </span>
                <span className='font-semibold text-slate-800'>2026</span>
              </p>
              <p className='italic text-gray-500 text-xs mt-1.5'>
                (Nhằm ngày 11 tháng 02 năm Bính Ngọ)
              </p>
              <p className='mt-3 text-sm text-gray-700'>
                Tại{' '}
                <span className='text-green-700 font-semibold'>
                  Sân vận động Ấp 17, xã Hòa Hội, TP.HCM
                </span>
              </p>
              <a
                href='https://www.google.com/maps/place/S%C3%A2n+B%C3%B3ng+%C4%90%E1%BB%99i+2/@10.6256666,107.43173,17z/data=!3m1!4b1!4m6!3m5!1s0x3175a58caf2467df:0xe9be86e98cca2f89!8m2!3d10.6256666!4d107.43173!16s%2Fg%2F11gh9q09c_?entry=ttu'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-1 mt-4 px-3.5 py-1.5 bg-green-600 text-white text-xs font-medium rounded-full hover:bg-green-700 hover:scale-105 transition-all'
              >
                <MapPin className='w-3.5 h-3.5 animate-bounce-slow' />
                Xem đường đi
              </a>
            </div>
          </div>
        </div>

        <div
          className='w-[90%] mx-auto mt-8 bg-white rounded-2xl p-4'
          // data-aos='fade-up'
          // data-aos-delay={400}
        >
          {/* Tháng + Năm */}
          <p className='text-right mb-3 border-b border-gray-400'>
            <span
              style={{ fontFamily: '"Dancing Script", cursive', fontSize: '22px' }}
              className='text-green-700'
            >
              Tháng 03
            </span>
            <span
              className='font-bold text-[45px] ml-4 text-slate-700'
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              2026
            </span>
          </p>

          {/* Header các ngày trong tuần */}
          <div className='grid grid-cols-7 gap-2 text-center text-slate-700 text-sm'>
            {/* Header thứ */}
            {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map((d) => (
              <div
                key={d}
                className={`font-bold uppercase tracking-wide text-[13px] ${
                  d === 'CN' ? 'text-red-500' : 'text-green-600'
                }`}
              >
                {d}
              </div>
            ))}

            {/* Khoảng trống trước ngày 1/3/2026 (CN → lệch 6 cột) */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}

            {/* Các ngày trong tháng */}
            {Array.from({ length: 31 }, (_, i) => {
              const day = i + 1;
              const activeDays = [22, 29];
              const isActive = activeDays.includes(day);

              return (
                <div key={day} className='relative w-8 h-8 flex items-center justify-center'>
                  {isActive ? (
                    <>
                      <div className='absolute w-7 h-7 bg-green-600 rounded-full animate-heartbeat'></div>
                      <span className='relative z-10 text-white font-bold text-[12px]'>{day}</span>
                    </>
                  ) : (
                    <span className='hover:bg-green-200 w-8 h-8 flex items-center justify-center rounded-full'>
                      {day}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Countdown — 2 sự kiện */}
          <div className='mt-4 pb-6' data-aos='fade-up' data-aos-delay={200}>
            <p className='text-center text-slate-600 font-light tracking-wide text-[13px] mb-4'>
              Cùng đếm ngược đến ngày vui của hai gia đình
              <span className='text-green-700 ml-1'>💚</span>
            </p>

            <div className='space-y-5'>
              <div className='rounded-xl bg-green-50/80 border border-green-200/80 p-4'>
                <p className='text-center text-green-800 font-medium text-sm mb-1'>
                  Lễ Vu Quy (Nhà gái)
                </p>
                <p className='text-center text-slate-500 text-xs'>10h30 • Chủ nhật 22/03/2026</p>
                <Countdown targetDate='2026-03-22T10:30:00+07:00' />
              </div>

              <div className='rounded-xl bg-green-50/80 border border-green-200/80 p-4'>
                <p className='text-center text-green-800 font-medium text-sm mb-1'>
                  Tiệc mừng Lễ Tân hôn
                </p>
                <p className='text-center text-slate-500 text-xs'>11h30 • Chủ nhật 29/03/2026</p>
                <Countdown targetDate='2026-03-29T11:30:00+07:00' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;
