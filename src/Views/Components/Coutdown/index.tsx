import React, { useEffect, useState } from 'react';

function getTimeRemaining(targetTs: any) {
  const now = Date.now();
  const diff = Math.max(0, targetTs - now);
  const sec = Math.floor((diff / 1000) % 60);
  const min = Math.floor((diff / (1000 * 60)) % 60);
  const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return { total: diff, days, hrs, min, sec };
}

interface CountdownProps {
  targetDate: string; // ISO string, e.g. '2026-03-29T11:30:00+07:00'
  title?: string;
}

export default function Countdown({ targetDate, title }: CountdownProps) {
  const target = new Date(targetDate).getTime();
  const [time, setTime] = useState(() => getTimeRemaining(target));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <div className='w-full'>
      {title && (
        <p className='text-center text-slate-600 font-medium text-[13px] mb-2'>{title}</p>
      )}
      <div className='mt-2 flex justify-center gap-3'>
        <CountdownBlock label='Ngày' value={time.days} />
        <CountdownBlock label='Giờ' value={time.hrs} />
        <CountdownBlock label='Phút' value={time.min} />
        <CountdownBlock label='Giây' value={time.sec} />
      </div>
    </div>
  );
}

function CountdownBlock({ label, value }: { label: any; value: any }) {
  return (
    <div className='flex flex-col items-center'>
      <div className='min-w-[60px] md:min-w-[72px] text-center rounded-xl bg-green-50 border border-green-200 shadow-sm p-2'>
        <div className='text-lg md:text-2xl font-semibold text-green-700 tabular-nums'>
          {String(value).padStart(2, '0')}
        </div>
      </div>
      <div className='mt-1 text-[11px] text-slate-500'>{label}</div>
    </div>
  );
}
