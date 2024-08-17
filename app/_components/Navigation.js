'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { auth } from '../_lib/auth';

export default async function Navigation() {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const toggleMobileNav = () => {
    setOpenMobileNav(!openMobileNav);
  };
  const navlinks = [
    { title: 'A propos', href: '/about' },
    { title: 'Nos chambres', href: '/rooms' },
    { title: 'Votre compte', href: '/account' },
  ];

  const session = await auth();
  console.log(session);

  return (
    <nav className='z-30 text-xl flex items-center'>
      {/* Desktop menu --justified-right */}
      <ul className='hidden sm:flex sm:gap-16 sm:items-center'>
        {navlinks.map((navlink, index) => (
          <li key={index}>
            <Link href={`${navlink.href}`} className='group transition-colors'>
              {navlink.title}
              <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary-50'></span>
            </Link>
          </li>
        ))}
      </ul>

      {/*  {/* HAMBURGER MENU or X --justified-right */}
      <button className='sm:hidden duration-300' onClick={toggleMobileNav}>
        {openMobileNav ? (
          <>
            <X size={24} aria-hidden='true' className='' />
            <span className='sr-only'>Close mobile menu</span>
          </>
        ) : (
          <>
            {' '}
            <Menu size={24} aria-hidden='true' />
            <span className='sr-only'>Mobile menu</span>
          </>
        )}
      </button>
      {/* MOBILE NAV */}
      <ul
        className={
          openMobileNav // slides from the left
            ? `mobile-nav w-[70%] left-0 sm:hidden`
            : `mobile-nav w-[70%] left-[-80rem] sm:hidden`
        }
      >
        {navlinks.map((navlink, index) => (
          <li key={index} className='m-4'>
            <Link
              onClick={toggleMobileNav}
              href={`${navlink.href}`}
              className='group text-2xl text-primary-900 font-bold '
            >
              {navlink.title}
              <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary-900'></span>
            </Link>
          </li>
        ))}
      </ul>
      {/* LOGGEDIN USER GOOGLE IMG */}
      {session?.user?.image ? (
        <div className='pl-4'>
          <img
            src={session.user.image}
            alt={session.user.name}
            referrerPolicy='no-referrer'
            className='rounded-full h-8'
          />
        </div>
      ) : (
        <div></div>
      )}
    </nav>
  );
}
