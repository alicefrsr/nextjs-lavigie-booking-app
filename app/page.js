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
        <h1 className='text-6xl lg:text-8xl mb-14 tracking-tight font-normal'>
          Bienvenue à la Vigie.
        </h1>
        <Link
          href='/rooms'
          className='bg-accent-400 hover:bg-accent-300 rounded-md px-8 py-6 text-primary-900 text-lg font-semibold transition-all'
        >
          Explorez nos chambres d&#39;hôtes
        </Link>
      </div>
    </main>
  );
}
