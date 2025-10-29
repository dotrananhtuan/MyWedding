import React, { useEffect, useState } from 'react';
import './header.scss';

function Header() {
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollHint(window.scrollY < 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className='relative h-screen flex flex-col justify-between'>
      {/* <div className='h-[300px] bg-gradient-to-b from-black/70 via-black/30 to-transparent'></div> */}

      <div
        className={`scroll-hint absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center transition-all duration-500 ${
          showScrollHint
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        <div className='mouse-icon'>
          <div className='mouse-body'>
            <div className='mouse-dot'></div>
          </div>
        </div>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='white'
          strokeWidth='2'
          className='w-6 h-6 arrow-down'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M6 9l6 6 6-6' />
        </svg>
      </div>
    </section>
  );
}

export default Header;
