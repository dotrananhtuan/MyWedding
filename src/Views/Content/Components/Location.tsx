import React, { useEffect, useRef } from 'react';
import ImageCarousel from './Image';
import LoveStoryTimeline from './StoryTimeline';

function Location() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bgPos = useRef(50);
  const targetPos = useRef(50);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top > windowHeight || rect.bottom < 0) return;

      const progress = Math.min(Math.max(1 - rect.top / windowHeight, 0), 1);

      // Ngược hướng scroll, nhẹ thôi
      targetPos.current = 50 + progress * 25;
    };

    const animate = () => {
      bgPos.current += (targetPos.current - bgPos.current) * 0.3;
      if (containerRef.current) {
        containerRef.current.style.backgroundPosition = `center ${bgPos.current}%`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    // 🧠 Gọi ngay để đồng bộ vị trí ban đầu
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className='min-h-[50%] relative'
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg.jpg)`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center 50%',
        backgroundRepeat: 'no-repeat',
        transition: 'background-position 0.2s ease-out',
      }}
    >
      {/* Overlay mờ */}
      <div className='absolute inset-0 bg-black/30' />

      {/* Nội dung */}
      <div className='relative z-10'>
        {/* <section className='h-[50vh]' /> */}
        <LoveStoryTimeline />

        <ImageCarousel />
      </div>
    </div>
  );
}

export default Location;
