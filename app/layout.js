import { Josefin_Sans } from 'next/font/google';

// import { ReservationProvider } from '@/app/_components/ReservationContext';

import '@/app/globals.css';
import Logo from './_components/Logo';
import Navigation from './_components/Navigation';
import Header from './_components/Header';

const josefin = Josefin_Sans({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: {
    template: '%s | La Vigie',
    default: 'Bienvenue | La Vigie',
  },
  description: 'Chambres de charmes dans un cadre unique',
};

export default function RootLayout({ children }) {
  return (
    <html lang='fr'>
      <body
        className={`${josefin.className} bg-primary-500 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className='flex-1 px-8 py-12 grid'>
          <main className='max-w-7xl mx-auto w-full'>
            {/* <ReservationProvider>{children}</ReservationProvider> */}
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
