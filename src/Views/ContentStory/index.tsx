import ListImage from './components/ListImage';

function ContentStory() {
  return (
    <div className='min-h-[50%] relative mt-[-2px]'>
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
