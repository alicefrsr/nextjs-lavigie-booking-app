import Room from '@/app/_components/Room';
// import Reservation from '@/app/_components/Reservation';
import Spinner from '@/app/_components/Spinner';
import { Suspense } from 'react';

import { getCabin, getCabins } from '@/app/_lib/data-service';

// export const metadata = {
//   title: 'Cabin',
// };
// dynamic instead
export async function generateMetadata({ params }) {
  console.log(params);
  const { name } = await getCabin(params.roomId);

  return { title: `${name}` };
}

export async function generateStaticParams() {
  const rooms = await getCabins();
  const ids = rooms.map((room) => ({ roomId: String(room.id) }));
  return ids;
}

export default async function Page({ params }) {
  // fetching multiple pieces of data from one component: blocking waterfall
  const room = await getCabin(params.roomId);
  console.log(params);
  // const settings = await getSettings();
  // const bookedDates = await getBookedDatesByCabinId(params.roomId);

  // const { id, name, maxCapacity, regularPrice, discount, image, description } =
  //   cabin;

  return (
    <div className='max-w-6xl mx-auto mt-8'>
      <Room room={room} />

      <div>
        <h4 className='text-3xl font-semibold text-center mb-10 text-primary-600 '>
          Réservez {room.name} aujourd&#39;hui.
        </h4>
        {/* <div className='grid grid-cols-2 border border-primary-800 min-h-[400px]'>
          <DateSelector />
          <ReservationForm />
        </div> */}
        <Suspense fallback={<Spinner />}>
          {/* <Reservation room={room} /> */}
        </Suspense>
      </div>
    </div>
  );
}
