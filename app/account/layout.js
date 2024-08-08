import SideNavigation from '@/app/_components/account/SideNavigation';

export default function AccountLayout({ children }) {
  return (
    <div className='grid grid-cols-[16rem_1fr] h-full gap-12'>
      <SideNavigation />

      <section>{children}</section>
    </div>
  );
}
