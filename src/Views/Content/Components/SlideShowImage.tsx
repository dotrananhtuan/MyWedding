export default function SimpleCarousel() {
  return (
    <div className='carousel-container'>
      <div className='carousel'>
        <img src={`${process.env.PUBLIC_URL}/images/bg.jpg`} alt='Ảnh 1' />
        <img src={`${process.env.PUBLIC_URL}/images/bg2.jpg`} alt='Ảnh 2' />
        <img src={`${process.env.PUBLIC_URL}/images/bg.jpg`} alt='Ảnh 3' />
      </div>
    </div>
  );
}
