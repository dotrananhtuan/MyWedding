import React from 'react';
import LoveStoryTimeline from './components/StoryTimeline';
import ListImage from './components/ListImage';

function ContentStory() {
  return (
    <div
      className='min-h-[50%] relative mt-[-2px]'
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
        {/* <LoveStoryTimeline /> */}

        <ListImage />
      </div>
    </div>
  );
}

export default ContentStory;
