import { EyeSlashIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function Room({ room }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    room;
  return (
    <div className='grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24'>
      <div className=' scale-[1.15] -translate-x-3'>
        <Image src={image} alt={`${name}`} fill className='object-cover' />
      </div>

      <div>
        <h3 className='text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]'>
          {name}
        </h3>

        <p className='text-lg mb-10 text-accent-50'>{description}</p>

        <ul className='flex flex-col gap-4 mb-7'>
          <li className='flex gap-3 items-center'>
            <UsersIcon className='h-5 w-5 mb-1 text-primary-400' />
            <span className='text-lg'>
              Jusqu&#39;à <span className='font-bold'>{maxCapacity}</span>{' '}
              personnes
            </span>
          </li>
          <li className='flex gap-3 items-center'>
            <MapPinIcon className='h-5 w-5 mb-1 text-primary-400' />
            <span className='text-lg'>
              Located in the heart of the{' '}
              <span className='font-bold'>Dolomites</span> (Italy)
            </span>
          </li>
          <li className='flex gap-3 items-center'>
            <EyeSlashIcon className='h-5 w-5 mb-1 text-primary-400' />
            <span className='text-lg'>
              Privacy <span className='font-bold'>100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
