'use client';

import { isWithinInterval } from 'date-fns';
// import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useReservation } from './ReservationContext';

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    // range?.from &&
    range.to &&
    // range?.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}
// const initialState = { from: undefined, to: undefined };

function DateSelector({ settings, room, bookedDates }) {
  // const [range, setRange] = useState({ from: undefined, to: undefined }); // move to context
  const { range, setRange, resetRange } = useReservation();
  // CHANGE
  const regularPrice = 23;
  const discount = 23;
  const numNights = 23;
  const roomPrice = 23;
  // const range = { from: null, to: null };

  // SETTINGS
  const { minBookingLength, maxBookingLength } = settings;

  // When a user selects a range and then clicks the start date again, it throws an error because the selected range becomes undefined. Solution: replace setRange with handleSelect:
  const handleSelect = (selectedRange) => {
    if (selectedRange === undefined) return;
    setRange(selectedRange);
  };

  return (
    <div className='flex flex-col justify-between '>
      {/* CALENDAR */}
      <DayPicker
        className='pt-12 place-self-center'
        mode='range'
        // onSelect={(range) => setRange(range)}
        // onSelect={setRange} // handleSelect instead
        onSelect={handleSelect} //
        selected={range}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout='dropdown'
        numberOfMonths={2}
      />
      {/* SUMMARY */}
      <div className='flex items-center justify-between px-8 bg-accent-400 text-primary-800 h-[72px]'>
        <div className='flex items-baseline gap-6'>
          <p className='flex gap-2 items-baseline'>
            {discount > 0 ? (
              <>
                <span className='text-2xl'>${regularPrice - discount}</span>
                <span className='line-through font-semibold text-primary-700'>
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className='text-2xl'>${regularPrice}</span>
            )}
            <span className=''>/night</span>
          </p>
          {numNights ? (
            <>
              <p className='bg-accent-500 px-3 py-2 text-2xl rounded-sm'>
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className='text-lg font-bold uppercase'>Total</span>{' '}
                <span className='text-2xl font-semibold'>${roomPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className='border border-primary-800 rounded-sm hover:bg-accent-300 py-2 px-4 text-sm font-semibold '
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
