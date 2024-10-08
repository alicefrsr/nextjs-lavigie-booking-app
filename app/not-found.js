import Link from 'next/link';

function NotFound() {
  return (
    <main className='text-center space-y-6 mt-4'>
      <h1 className='text-3xl font-semibold'>Cette page n&#39;existe pas :(</h1>
      <p>404 error: page not found</p>
      <Link
        href='/'
        className='inline-block rounded-sm bg-accent-400 text-primary-900 px-6 py-3 text-lg hover:bg-accent-300 transition-all'
      >
        Retour à l&#39;accueil
      </Link>
    </main>
  );
}

export default NotFound;
