// @ts-ignore
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const story = [
  {
    time: 'Tháng 3, 2018',
    title: 'Lần đầu gặp gỡ',
    text: 'Chúng tôi gặp nhau trong một buổi tiệc sinh nhật bạn chung. Khi đó chỉ là vài câu chào hỏi giản đơn...',
  },
  {
    time: 'Tháng 7, 2019',
    title: 'Chính thức hẹn hò',
    text: 'Sau nhiều lần trò chuyện, chúng tôi nhận ra rằng tình cảm đã vượt qua tình bạn...',
  },
  {
    time: 'Tháng 11, 2023',
    title: 'Lời cầu hôn',
    text: 'Một buổi tối đầy ấm áp, anh ấy đã ngỏ lời trong khung cảnh lãng mạn mà cả hai sẽ không bao giờ quên.',
  },
  {
    time: 'Tháng 3, 2025',
    title: 'Ngày chung đôi',
    text: 'Giờ đây, chúng tôi hạnh phúc bước tiếp hành trình mới – cùng nhau xây dựng tổ ấm nhỏ.',
  },
];

export default function LoveStoryTimeline() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false, // ⚡ Cho phép reset lại
      mirror: true, // 👈 QUAN TRỌNG: cho phép animation chạy ngược khi scroll lên
      offset: 100,
    });

    // AOS cần refresh nếu DOM thay đổi (đảm bảo tính ổn định)
    const handleScroll = () => {
      AOS.refresh();
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className='relative text-white pt-16 px-6 overflow-hidden' id='love-story'>
      {/* Nếu cần, bạn có thể giữ overlay đen nhẹ ở file cha (Footer hay Background tổng) */}

      <h2
        className='text-4xl font-semibold text-center text-pink-300 mb-16 tracking-wide'
        data-aos='fade-up'
      >
        Câu chuyện của chúng tôi
      </h2>

      <div className='relative flex flex-col items-center'>
        {/* Đường timeline hồng sáng */}
        <div className='absolute w-[3px] bg-pink-400/70 top-0 left-1/2 -translate-x-1/2 rounded-full h-full' />

        {/* Các mốc */}
        {story.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center mb-20 w-full max-w-3xl ${
              index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
            }`}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
          >
            {/* Thẻ nội dung */}
            <div
              className={`relative backdrop-blur-sm bg-white/10 border border-pink-200/30 p-6 rounded-2xl shadow-lg shadow-black/30 w-full md:w-[45%] ${
                index % 2 === 0 ? 'md:ml-[55%]' : 'md:mr-[55%]'
              }`}
            >
              {/* Dot hồng nổi bật */}
              <div className='absolute w-5 h-5 bg-pink-400 rounded-full left-1/2 -translate-x-1/2 -top-8 border-4 border-white/70 shadow-md'></div>

              {/* Nội dung */}
              <time className='text-sm text-pink-300'>{item.time}</time>
              <h3 className='text-xl font-semibold mt-1 text-pink-100'>{item.title}</h3>
              <p className='text-gray-200 mt-2 leading-relaxed'>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
