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
  return (
    <section className='relative text-white pt-16 px-6 overflow-hidden' id='love-story'>
      <h2
        className='text-4xl font-semibold text-center text-pink-200 mb-16 tracking-wide'
        data-aos='fade-up'
      >
        Câu chuyện của chúng tôi
      </h2>

      <div className='relative flex flex-col items-center'>
        {/* Đường timeline chuyển sắc hồng → xanh lá nhẹ */}
        <div className='absolute w-[3px] bg-gradient-to-b from-pink-300/70 to-green-300/70 top-0 left-1/2 -translate-x-1/2 rounded-full h-full' />

        {story.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center mb-20 w-full max-w-3xl ${
              index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
            }`}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
          >
            <div
              className={`relative backdrop-blur-md bg-white/15 border border-green-100/40 p-6 rounded-2xl shadow-lg shadow-black/30 w-full md:w-[45%] ${
                index % 2 === 0 ? 'md:ml-[55%]' : 'md:mr-[55%]'
              }`}
            >
              {/* Dot xanh lá nhạt có viền hồng */}
              <div className='absolute w-5 h-5 bg-green-300 rounded-full left-1/2 -translate-x-1/2 -top-8 border-4 border-pink-200/70 shadow-md'></div>

              <time className='text-sm text-green-200/90'>{item.time}</time>
              <h3 className='text-xl font-semibold mt-1 text-pink-100'>{item.title}</h3>
              <p className='text-gray-100 mt-2 leading-relaxed'>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
