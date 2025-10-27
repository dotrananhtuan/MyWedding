import React, { useEffect } from 'react';

function Footer() {
  return (
    <footer
      className='relative h-[100vh] bg-cover bg-center bg-fixed text-white flex flex-col justify-center items-center px-6'
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg2.jpg)`,
      }}
      id='footer'
    >
      {/* Nội dung có overlay riêng */}
      <div
        className='relative z-10 text-center max-w-2xl p-10 rounded-3xl bg-black/50 backdrop-blur-sm shadow-lg'
        data-aos='fade-up'
      >
        <h2
          className='text-5xl md:text-6xl font-semibold text-pink-300 mb-6'
          style={{ fontFamily: '"Dancing Script", cursive' }}
        >
          Lời cảm ơn
        </h2>

        <p
          className='text-gray-100 text-lg leading-relaxed mb-4'
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          Cảm ơn gia đình và bạn bè thân thương đã luôn bên cạnh, sẻ chia và chúc phúc cho chúng
          tôi.
        </p>

        <p
          className='text-gray-300 italic mb-6'
          data-aos='fade-up'
          data-aos-delay='200'
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          Niềm hạnh phúc trọn vẹn hơn khi có sự hiện diện của mọi người trong ngày đặc biệt này.
        </p>

        <div
          className='mt-6 text-pink-300 font-medium tracking-wide'
          data-aos='zoom-in'
          data-aos-delay='400'
          style={{ fontFamily: '"Dancing Script", cursive' }}
        >
          — Trân trọng, <br />
          <span className='text-white font-semibold text-2xl block mt-2'>Ngọc Hồng & Anh Tuấn</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
