import React from 'react';
import 'aos/dist/aos.css';

function OurStory() {
  return (
    <div className='bg-white pt-[35px] px-[40px] pb-[100px]'>
      <div className='max-w-4xl mx-auto p-6'>
        <div className='grid grid-cols-2 gap-4 text-center'>
          {/* Nhà trai */}
          <div className='space-y-1 text-xs sm:text-sm md:text-base'>
            <h2 className='text-lg font-semibold text-slate-800'>Nhà trai</h2>
            <p className='text-slate-700'>Ông Nguyễn Văn Nam</p>
            <p className='text-slate-700'>Bà Trần Thị Nữ</p>
          </div>

          {/* Nhà gái */}
          <div className='space-y-1 text-xs sm:text-sm md:text-base'>
            <h2 className='text-lg font-semibold text-slate-800'>Nhà gái</h2>
            <p className='text-slate-700'>Ông Lê Văn E</p>
            <p className='text-slate-700'>Bà Phạm Thị F</p>
          </div>
        </div>
      </div>

      <p className='text-center mb-4 mt-[50px]'>Trân trọng thông báo lễ thành hôn của</p>

      <div className='text-center text-[40px]' style={{ fontFamily: '"Dancing Script", cursive' }}>
        <p>Đỗ Trần Anh Tuấn</p>
        <p>&</p>
        <p>Đỗ Thị Ngọc Hồng</p>
      </div>
    </div>
  );
}

export default OurStory;
