'use client';

import { XMarkIcon } from '@heroicons/react/24/solid';
import { format } from 'date-fns';
import { useReservation } from './ReservationContext';

function ReservationReminder() {
  // CHANGE
  // const range = { from: null, to: null };
  const { range, resetRange } = useReservation();

  if (!range.from || !range.to) return null;

  return (
    <div className='fixed bottom-6 left-1/2 -translate-x-1/2 py-5 px-8 rounded-md bg-accent-400 text-primary-800 text font-semibold shadow-xl shadow-slate-900 flex flex-col gap-2 items-center'>
      <p>
        Don&#39;t forget to reserve your dates <br /> from{' '}
        {format(new Date(range.from), 'MMM dd yyyy')} to{' '}
        {format(new Date(range.to), 'MMM dd yyyy')}
      </p>
      <button
        onClick={resetRange}
        className='rounded-sm p-1 hover:bg-accent-300 transition-all'
      >
        <div className='flex gap-2 px-2'>
          <XMarkIcon className='h-5 w-5' />
          <span>Reset selected dates</span>
        </div>
      </button>
    </div>
  );
}

export default ReservationReminder;
