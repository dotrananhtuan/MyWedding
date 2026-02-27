import React from 'react';

function MyFamily() {
  return (
    <div className='bg-white pt-[35px] px-[40px] pb-[100px]'>
      <div className='max-w-4xl mx-auto py-4'>
        <div className='grid grid-cols-2 gap-2 text-center'>
          {/* Nhà trai */}
          <div className='space-y-1 text-xs sm:text-sm md:text-base'>
            <h2 className='uppercase text-slate-800'>Nhà trai</h2>
            <p className='text-slate-700'>
              ÔNG <b>ĐỖ NGỌC HÙNG</b>
            </p>
            <p className='text-slate-700'>
              BÀ <b>TRẦN THỊ LOAN</b>
            </p>
            <p>Ấp 17, xã Hòa Hội, Tp. HCM</p>
          </div>

          {/* Nhà gái */}
          <div className='space-y-1 text-xs sm:text-sm md:text-base'>
            <h2 className='uppercase text-slate-800'>Nhà gái</h2>
            <p className='text-slate-700'>
              BÀ <b>NGUYỄN THỊ PHẢI</b>
            </p>
            <p className='text-slate-700 opacity-0'>abc</p>
            <p>Thôn 2, xã Phú Vinh, Tp. Huế</p>
          </div>
        </div>
      </div>

      <p className='text-center mb-4 mt-[50px]'>
        Trân trọng thông báo <b>LỄ TÂN HÔN</b> của
      </p>

      <div className='text-center text-[40px]' style={{ fontFamily: '"Dancing Script", cursive' }}>
        <p data-aos='fade-right'>Đỗ Trần Anh Tuấn</p> {/* chạy từ trái sang */}
        <p data-aos='zoom-in'> & </p> {/* chữ & chạy từ dưới lên */}
        <p data-aos='fade-left'>Đỗ Thị Ngọc Hồng</p> {/* chạy từ phải sang */}
      </div>
    </div>
  );
}

export default MyFamily;
