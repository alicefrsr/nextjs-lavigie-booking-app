import SignInButton from '../_components/SignInButton';

export const metadata = {
  title: 'Connection',
};

export default function LoginPage() {
  return (
    <div className='flex flex-col gap-10 mt-10 items-center'>
      <h2 className='text-2xl font-semibold text-center'>
        Connectez-vous pour accéder à votre espace personnel
      </h2>
      <SignInButton />
    </div>
  );
}
