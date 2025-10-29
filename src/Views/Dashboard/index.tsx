import { useEffect, useRef, useState } from 'react';
import Footer from '../Footer';
import Content from '../Content';
import Header from '../Header';
import SendWishButton from '../Components/SendWish';
import ContentStory from '../ContentStory';

function Dashboard() {
  const bgRef: any = useRef(null);
  const targetY = useRef(0); // vị trí mục tiêu
  const currentY = useRef(0); // vị trí hiện tại

  useEffect(() => {
    const MAX_SCROLL = 1000; // chỉ áp dụng hiệu ứng trong 1000px đầu tiên
    const SPEED = 0.2;
    const EASING = 0.1;

    const handleScroll = () => {
      const scrollY = Math.min(window.scrollY, MAX_SCROLL);
      targetY.current = -scrollY * SPEED;
    };

    window.addEventListener('scroll', handleScroll);

    let frameId: number;
    const animate = () => {
      currentY.current += (targetY.current - currentY.current) * EASING;

      if (bgRef.current) {
        // chỉ apply transform trong khoảng đầu trang
        if (window.scrollY < MAX_SCROLL) {
          bgRef.current.style.transform = `translateY(${currentY.current}px)`;
        } else {
          bgRef.current.style.transform = `translateY(${-MAX_SCROLL * SPEED}px)`;
        }
      }

      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(frameId);
    };
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

        <ContentStory />

        <Footer />
      </div>
      <SendWishButton />
    </div>
  );
}

export default Dashboard;
