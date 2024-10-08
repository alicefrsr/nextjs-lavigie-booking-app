'use client';

import { useState } from 'react';
// import SelectCountry from './SelectCountry'; // server comp causing the pb

export default function UpdateProfileForm({ children }) {
  // CHANGE
  const countryFlag = 'pt.jpg';
  const nationality = 'portugal';

  const [count, setCount] = useState();

  return (
    <form className='rounded-md bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col'>
      <div className='space-y-2'>
        <label>Nom et prénom</label>
        <input
          disabled
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
        />
      </div>

      <div className='space-y-2'>
        <label>Adress email </label>
        <input
          disabled
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
        />
      </div>

      <div className='space-y-2'>
        <div className='flex items-center justify-between'>
          <label htmlFor='nationality'>D'où venez-vous?</label>
          <img
            src={countryFlag}
            alt='Country flag'
            className='h-5 rounded-md'
          />
        </div>

        {/* <SelectCountry
          name='nationality'
          id='nationality'
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
          defaultCountry={nationality}
        /> */}
        {children}
      </div>

      <div className='space-y-2'>
        <label htmlFor='nationalID'>Numéro de votre pièce d'identité </label>
        <input
          name='nationalID'
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
        />
      </div>

      <div className='flex justify-end items-center gap-6'>
        <button className='bg-accent-400 hover:bg-accent-300 rounded-md px-8 py-4 text-primary-900 text-lg font-semibold transition-all  disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300'>
          Enregistrer
        </button>
      </div>
    </form>
  );
}
