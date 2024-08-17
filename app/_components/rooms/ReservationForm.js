'use client';

import { useReservation } from './ReservationContext';

function ReservationForm({ room, user }) {
  const { range } = useReservation();
  const { maxCapacity } = room;

  return (
    <div className='scale-[1.01]'>
      <div className='bg-primary-800 text-primary-300 px-16 py-2 flex justify-between items-center'>
        <p>Logged in as</p>

        <div className='flex gap-4 items-center'>
          <img
            className='h-8 rounded-full'
            src={user.image}
            alt={user.name}
            // to display google profile images
            referrerPolicy='no-referrer'
          />
          <p>{user.name}</p>
        </div>
      </div>
      <p>
        Temp:
        <span>
          {String(range.from)} to {String(range.to)}
        </span>
      </p>
      <form className='bg-primary-900 py-10 px-16 text-lg flex gap-5 flex-col'>
        <div className='space-y-2'>
          <label htmlFor='numGuests'>Combien de personnes?</label>
          <select
            name='numGuests'
            id='numGuests'
            className='px-5 py-3 bg-primary-50 text-primary-800 w-full shadow-sm rounded-sm'
            required
          >
            <option value='' key=''>
              Choisissez le nombre de personnes...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? 'personne' : 'personnes'}
              </option>
            ))}
          </select>
        </div>

        <div className='space-y-2'>
          <label htmlFor='observations'>
            Avez-vous des requêtes particulières pour votre séjour?
          </label>
          <textarea
            name='observations'
            id='observations'
            className='px-5 py-3 bg-primary-50 text-primary-800 w-full shadow-sm rounded-sm'
            placeholder='Any pets, allergies, special requirements, etc.?'
          />
        </div>

        <div className='flex justify-end items-center gap-6'>
          <p className='text-primary-300 text-base'>Sélectionnez vos dates</p>

          <button className='bg-accent-400 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-300 rounded-sm transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300'>
            Réservez
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
