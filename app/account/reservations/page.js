import ReservationCard from '@/app/_components/account/reservations/ReservationCard';

export const metadata = {
  title: 'Reservations',
};

export default function Page() {
  // CHANGE
  const bookings = [];

  return (
    <div>
      <h2 className='font-semibold text-2xl text-accent-400 mb-7'>
        Vos réservations
      </h2>

      {bookings.length === 0 ? (
        <p className='text-lg'>
          Vous n'avez aucune réservation pour le moment. Venez trouver votre
          bonheur{' '}
          <a className='underline text-accent-400' href='/rooms'>
            ici &rarr;
          </a>
        </p>
      ) : (
        <ul className='space-y-6'>
          {bookings.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
