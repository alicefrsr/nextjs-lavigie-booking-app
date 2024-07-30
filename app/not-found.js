import Link from 'next/link';

function NotFound() {
  return (
    <main className='text-center space-y-6 mt-4'>
      <h1 className='text-3xl font-semibold'>Cette page n'existe pas :(</h1>
      <Link
        href='/'
        className='inline-block rounded-sm bg-accent-500 text-primary-800 px-6 py-3 text-lg  hover:bg-accent-600 transition-all'
      >
        Retour à l'accueil
      </Link>
    </main>
  );
}

export default NotFound;
