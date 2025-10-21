import { useEffect, useRef, useState } from 'react';
import Footer from '../Footer';
import Content from '../Content';
import Header from '../Header';
import SendWishButton from '../SendWish';

function Dashboard() {
  const bgRef: any = useRef(null);
  const targetY = useRef(0); // vị trí mục tiêu
  const currentY = useRef(0); // vị trí hiện tại

  useEffect(() => {
    const handleScroll = () => {
      targetY.current = -window.scrollY * 0.2; // target: dịch ngược, 0.25 = tốc độ
    };

    window.addEventListener('scroll', handleScroll);
    const animate = () => {
      currentY.current += (targetY.current - currentY.current) * 0.1;
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${currentY.current}px)`;
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='relative min-h-screen overflow-hidden'>
      <div
        ref={bgRef}
        className='fixed inset-0 will-change-transform'
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${process.env.PUBLIC_URL}/images/bg2.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1,
        }}
      />

      <div className='relative z-10'>
        <Header />

        <Content />

        <Footer />
      </div>
      <SendWishButton />
    </div>
  );
}

export default Dashboard;
