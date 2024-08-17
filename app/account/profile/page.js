// import SelectCountry from '@/app/_components/SelectCountry';
// form moved into client comp

import SelectCountry from '@/app/_components/account/profile/SelectCountry';
import UpdateProfileForm from '@/app/_components/account/profile/UpdateProfileForm';

export const metadata = {
  title: 'Profil',
};

export default function Page() {
  // CHANGE
  const countryFlag = 'pt.jpg';
  const nationality = 'portugal';

  return (
    <div>
      <h2 className='font-semibold text-2xl text-accent-400 mb-4'>
        Mettez à jour votre profil
      </h2>

      <p className='text-lg mb-8 text-primary-200'>
        Fournir les informations suivantes rendra votre processus
        d'enregistrement plus rapide et plus fluide. À bientôt !
      </p>
      <UpdateProfileForm>
        <SelectCountry
          name='nationality'
          id='nationality'
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
          defaultCountry={nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
