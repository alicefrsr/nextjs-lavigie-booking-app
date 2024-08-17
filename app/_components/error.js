export default function Error() {
  return (
    <main className='flex justify-center items-center flex-col gap-6'>
      <h1 className='text-3xl font-semibold'>Un problème est survenu!</h1>
      <p className='text-lg'>ERREUR!</p>

      <button className='inline-block px-6 py-3 text-lg bg-accent-400 hover:bg-accent-300 rounded-md  text-primary-900 transition-all'>
        Veuillez réessayer
      </button>
    </main>
  );
}
