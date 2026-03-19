import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MUSIC_SRC = `${process.env.PUBLIC_URL || ''}/audio/mp3.mp3`;

function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false); // đảm bảo chỉ auto play 1 lần

  const playAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = false;

    audio
      .play()
      .then(() => {
        setIsPlaying(true);
        setHasStarted(true);
      })
      .catch(() => {});
  };

  const pauseAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    setIsPlaying(false);
  };

  const toggle = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  // 👉 Auto play khi user tương tác lần đầu (click bất kỳ đâu)
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasStarted) {
        playAudio();
      }
    };

    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [hasStarted]);

  return (
    <>
      <audio ref={audioRef} src={MUSIC_SRC} loop preload='auto' playsInline />

      <button
        onClick={toggle}
        className='
          fixed top-6 right-6
          w-12 h-12 rounded-full
          flex items-center justify-center
          bg-gray-800/85 hover:bg-gray-700/90 backdrop-blur
          shadow-lg ring-2 ring-white/30
          hover:scale-110 active:scale-95
          transition-all duration-300 z-50
        '
        title={isPlaying ? 'Tắt nhạc' : 'Bật nhạc'}
        aria-label={isPlaying ? 'Tắt nhạc nền' : 'Bật nhạc nền'}
      >
        {isPlaying ? (
          <Volume2 className='w-6 h-6 text-white' strokeWidth={2} />
        ) : (
          <VolumeX className='w-6 h-6 text-white/80' strokeWidth={2} />
        )}
      </button>
    </>
  );
}

export default MusicPlayer;
