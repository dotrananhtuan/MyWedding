// InvitationCard.jsx
import React, { useEffect, useState } from 'react';
import Countdown from '../../Coutdown';
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
            paddingTop: '10px',
            fontFamily: '"Dancing Script", cursive',
          }}
        >
          Thư mời
        </span>

        <p style={{ textTransform: 'uppercase', marginBottom: '20px' }}>
          Tham dự lễ cưới của Tuấn & Hồng
        </p>

        <div className='flex justify-center items-center gap-2'>
          <img src='/images/bg.jpg' alt='Ảnh 1' className='w-40 h-60 object-cover rounded-xl' />
          <img
            src='/images/bg.jpg'
            alt='Ảnh 2'
            className='w-48 h-72 object-cover rounded-2xl shadow-lg'
          />
          <img src='/images/bg.jpg' alt='Ảnh 3' className='w-40 h-60 object-cover rounded-xl' />
        </div>

        <div>
          <p className='uppercase mt-4'>Tiệc mừng Lễ vu quy</p>

          <p className='text-[14px] mt-4 font-[300]'>
            VÀO LÚC <span className='font-[500]'>11 giờ 30</span> |{' '}
            <span className='font-[500]'>Chủ nhật</span>
          </p>

          <p className='text-[24px] mt-[10px]'>
            <span style={{ marginRight: '15px', marginLeft: '20px' }}>16</span>
            <span
              style={{
                fontFamily: '"Dancing Script", cursive',
                fontSize: '30px',
                padding: '0 20px',
                borderLeft: 'solid .5px #000',
                borderRight: 'solid .5px #000',
              }}
            >
              Tháng 04
            </span>{' '}
            <span style={{ marginLeft: '15px' }}>2026</span>
          </p>

          <div className='text-center mt-4'>
            {/* Ngày âm lịch */}
            <p className='italic text-gray-600 text-sm'>( Nhằm ngày 16 tháng 03 năm Bính Ngọ )</p>

            {/* Địa điểm */}
            <p className='mt-2 text-lg font-medium text-gray-800'>
              Tại{' '}
              <span className='text-pink-600 font-semibold'>Ấp 6, Hòa Hội, Xuyên Mộc, BR-VT</span>
            </p>

            {/* Nút xem đường đi */}
            <a
              href='https://www.google.com/maps/place/S%C3%A2n+B%C3%B3ng+%C4%90%E1%BB%99i+2/@10.6256872,107.4132759,15z/data=!3m1!4b1!4m6!3m5!1s0x3175a58caf2467df:0xe9be86e98cca2f89!8m2!3d10.6256666!4d107.43173!16s%2Fg%2F11gh9q09c_?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block mt-3 px-5 py-2 bg-pink-500 text-white text-sm font-medium rounded-full shadow-md hover:bg-pink-600 hover:shadow-lg transition-all duration-300'
            >
              Xem đường đi
            </a>
          </div>

          {/* LỊCH */}
          <div className='w-[90%] mx-auto bg-white rounded-2xl'>
            <p className='text-right mb-3'>
              <span
                style={{ fontFamily: '"Dancing Script", cursive', fontSize: '22px' }}
                className='text-pink-600'
              >
                Tháng 04
              </span>
              <span className='font-bold text-[40px] ml-2 text-slate-800'>2026</span>
            </p>

            <div className='grid grid-cols-7 gap-2 text-center text-slate-700 text-sm'>
              {['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'].map((d) => (
                <div
                  key={d}
                  className='font-bold uppercase text-pink-500 tracking-wide text-[13px]'
                >
                  {d}
                </div>
              ))}
              <div className='col-span-6'></div>
              {Array.from({ length: 30 }, (_, i) => {
                const day = i + 1;
                const isEvent = day === 23;
                return (
                  <div key={day} className='relative w-8 h-8 flex items-center justify-center'>
                    {isEvent ? (
                      <>
                        <div className='absolute w-10 h-10 bg-pink-400 rounded-full animate-heartbeat'></div>
                        <span className='relative z-10 text-white font-bold text-[12px]'>
                          {day}
                        </span>
                      </>
                    ) : (
                      <span className='hover:bg-pink-100 w-8 h-8 flex items-center justify-center rounded-full'>
                        {day}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            <div className='mt-4 pb-6'>
              <p className="text-center text-pink-600 font-medium tracking-wide mb-3 [font-family:'Dancing_Script',cursive] text-[17px]">
                💖 Cùng đếm ngược đến ngày vui của hai gia đình
              </p>
              <Countdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;
