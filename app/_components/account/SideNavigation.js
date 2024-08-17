'use client';

import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import SignOutButton from './SignOutButton';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navLinks = [
  {
    name: 'Accueil',
    href: '/account',
    icon: <HomeIcon className='h-5 w-5 text-primary-400' />,
  },
  {
    name: 'Réservations',
    href: '/account/reservations',
    icon: <CalendarDaysIcon className='h-5 w-5 text-primary-400' />,
  },
  {
    name: 'Votre profil',
    href: '/account/profile',
    icon: <UserIcon className='h-5 w-5 text-primary-400' />,
  },
];

function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className='border-r border-primary-900 flex-1'>
      <ul className='flex flex-col gap-2 h-full text-lg '>
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`rounded-tl-md rounded-bl-md py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${
                pathname === link.href ? 'bg-primary-900' : ''
              }`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
        <li className=''>
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
