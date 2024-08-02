import DateSelector from './DateSelector';
import ReservationForm from './ReservationForm';
import { getBookedDatesByCabinId, getSettings } from '@/app/_lib/data-service';

export default async function Reservation({ room }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    // getBookedDatesByCabinId(params.cabinId),
    getBookedDatesByCabinId(room.id),
  ]);

  return (
    <div className='grid grid-cols-2 border border-primary-800 min-h-[400px]'>
      <DateSelector settings={settings} bookedDates={bookedDates} room={room} />
      <ReservationForm room={room} />
    </div>
  );
}
