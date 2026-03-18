import React, { useEffect, useState } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Dashboard from './Views/Dashboard';

function App() {
  const [loading, setLoading] = useState(true);
  const [showHearts, setShowHearts] = useState(false);

  // ✅ Khởi tạo hiệu ứng AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  // Tổng thời gian mở màn ~3s
  useEffect(() => {
    const hideOverlay = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(hideOverlay);
  }, []);

  return (
    <div className='relative min-h-screen overflow-hidden'>
      <div
        className={`fixed inset-0 flex flex-col items-center justify-center z-[9999] transition-all duration-700 ${
          loading ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
        }`}
      >
        {/* Background image */}
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-white/70 backdrop-blur-sm'></div>
        </div>

        {/* Content */}
        <div className='relative z-10 flex flex-col items-center text-center px-4'>
          {/* Save the date */}
          <p className='text-xs sm:text-sm md:text-base text-gray-600 tracking-[4px] uppercase mb-4 animate-fadeIn'>
            Save the Date
          </p>

          {/* Line */}
          <div className='w-16 h-[1px] bg-gray-400 mb-6'></div>

          {/* Tên */}
          <h1
            className='typing-text text-2xl sm:text-3xl md:text-5xl tracking-wide'
            style={{
              fontWeight: 600,
              letterSpacing: '2px',
              color: '#2c2c2c', // không dùng #000
              textShadow: '0 2px 12px rgba(0,0,0,0.12)',
            }}
          >
            Anh Tuấn <span style={{ color: '#e11d48' }}>💖</span> Ngọc Hồng
          </h1>
        </div>
      </div>

      {/* Main content */}
      <Dashboard />
    </div>
  );
}

export default App;
