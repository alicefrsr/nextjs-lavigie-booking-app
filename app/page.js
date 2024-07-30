import Link from 'next/link';
import bg from '@/public/img/LIGHTHOUSE-WIDE2.jpg';

import Image from 'next/image';

export default function Home() {
  return (
    <main className='mt-8'>
      <Image
        src={bg}
        alt='Wide shot of lighthouse overlooking the ocean'
        fill
        className='object-cover object-top'
        placeholder='blur'
        quality={80}
      />

      <div className='relative z-10 '>
        <h1 className='text-8xl text-primary-50 mb-10 tracking-tight font-normal'>
          Bienvenue à la Vigie.
        </h1>
        <Link
          href='/cabins'
          className='bg-accent-500 rounded-sm px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all'
        >
          Explorez nos chambres d'hôtes
        </Link>
      </div>
    </main>
  );
}
