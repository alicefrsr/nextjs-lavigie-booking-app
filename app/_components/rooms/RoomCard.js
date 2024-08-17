import { UsersIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

function RoomCard({ room }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = room;

  return (
    <div className='flex bg-primary-900 border border-primary-700 rounded-md'>
      <div className='flex-1 relative'>
        <Image
          src={image}
          alt={`${name}`}
          className='flex-1 border-r border-primary-700 object-cover rounded-tl-md rounded-bl-md'
          fill
        />
      </div>

      <div className='flex-grow'>
        {/* TOP BOX */}
        <div className='pt-5 pb-4 px-7 '>
          {/* LINE 1 -- ROOM NAME */}
          <h3 className='text-accent-300 font-semibold text-2xl mb-3'>
            {name}
          </h3>
          {/* LINE 2 -- CAPACITY */}
          <div className='flex gap-3 items-center mb-2'>
            <UsersIcon className='h-5 w-5 text-primary-400' />
            <p className='text-lg '>
              Jusqu&#39;à{' '}
              <span className='text-xl text-white font-bold'>
                {maxCapacity}
              </span>{' '}
              personnes
            </p>
          </div>
          {/* LINE 3 -- PRICE */}
          <p className='flex gap-3 justify-end items-baseline'>
            {discount > 0 ? (
              <>
                <span className='text-3xl font-[350]'>
                  €{regularPrice - discount}
                </span>
                <span className='line-through font-semibold text-primary-300 text-xl'>
                  €{regularPrice}
                </span>
              </>
            ) : (
              <span className='text-3xl font-[350]'>€{regularPrice}</span>
            )}
            <span className='text-primary-200'>/ nuit</span>
          </p>
        </div>

        {/* LOWER BOX */}
        <div className=' border-t border-t-primary-700 text-right '>
          <Link
            href={`/rooms/${id}`}
            className='py-4 px-6 inline-block border-l border-l-primary-700  hover:bg-accent-400 transition-all hover:text-primary-900  rounded-br-md '
          >
            Détails & réservations &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
