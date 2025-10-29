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
        className={`fixed inset-0 flex flex-col items-center justify-center bg-black z-[9999] transition-all duration-700 ${
          loading ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
        }`}
      >
        <h1
          className='typing-text text-2xl sm:text-3xl md:text-4xl text-green-400 text-center tracking-wide'
          style={{
            fontWeight: 500,
            letterSpacing: '1px',
          }}
        >
          Anh Tuấn 💖 Ngọc Hồng
        </h1>
      </div>

      {/* Main content */}
      <Dashboard />
    </div>
  );
}

export default App;
