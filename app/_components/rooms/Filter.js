'use client';

// import { Router } from 'next/navigation';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  // const pathname = usePathname(); // http://localhost:3000/cabins

  const activeFilter = searchParams.get('capacity') ?? 'all';

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set('capacity', filter); // builds the url but doesn't navigate to it
    // router.replace(`${pathname}?${params.toString()}`, { scroll: false }); // http://localhost:3000/cabins?capacity=filter;
    router.push(`?capacity=${filter}`); // put this in url?
  }
  return (
    <div className='flex border border-primary-700 rounded-md'>
      <Button
        filter='all'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Toutes les chambres
      </Button>
      <Button
        filter='small'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        1&mdash;3 personnes
      </Button>
      <Button
        filter='medium'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7 personnes
      </Button>
      <Button
        filter='large'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8&mdash;12 personnes
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-500 border-r last:border-none  border-primary-700 first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md  ${
        filter === activeFilter ? 'bg-primary-900 text-primary-50 ' : ''
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}
