// import { getCabins } from '../_lib/data-service';
// import CabinCard from '@/app/_components/CabinCard';

import { Suspense } from 'react';
import RoomsList from '../_components/RoomsList';
import Spinner from '../_components/Spinner';
import Filter from '../_components/Filter';
// import ReservationReminder from '../_components/ReservationReminder';

// only applies to statically gen pages
// export const revalidate = 3600; // refresh every hour
export const metadata = {
  title: 'Chambres',
};

export default function Page({ searchParams }) {
  // const cabins = await getCabins();
  // ! -> using searchParams: the page can no longer be statically rendered
  const filter = searchParams?.capacity ?? 'all';

  return (
    <div>
      <h2 className='text-4xl mb-5 text-accent-300 font-medium'>
        Nos chambres luxueuses
      </h2>
      <p className=' text-lg mb-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolore
        dolores tempora dignissimos placeat inventore quasi voluptas ea, harum
        id sunt fuga fugiat vel minus sint laudantium ut reprehenderit rem
        perferendis. Aspernatur ipsum architecto aliquam id magni est at eaque
        amet dignissimos quasi voluptate ullam, eligendi reiciendis iusto,
        voluptatum ducimus.
      </p>
      <div className='flex justify-end mb-8'>
        <Filter />
      </div>
      <Suspense fallback={<Spinner />} key={filter}>
        <RoomsList filter={filter} />
        {/* <ReservationReminder /> */}
      </Suspense>
    </div>
  );
}
