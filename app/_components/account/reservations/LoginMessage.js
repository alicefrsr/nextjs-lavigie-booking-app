import Link from 'next/link';

function LoginMessage() {
  return (
    <div className='grid bg-primary-800 '>
      <p className='text-center text-xl py-12 self-center'>
        Veuillez vous{' '}
        <Link href='/login' className='underline text-accent-500'>
          connecter
        </Link>{' '}
        afin de réserver cette chambre
      </p>
    </div>
  );
}

export default LoginMessage;
