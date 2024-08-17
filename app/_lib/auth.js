import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { createGuest, getGuest } from './data-service';

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  // protected routes (/account)
  callbacks: {
    authorized({ auth, req }) {
      return !!auth?.user; // return true or false
    },
    //   // create a new guest when there isn't an existing email for that user
    async signIn({ user, account, profile }) {
      try {
        const existingGuest = await getGuest(user.email);
        if (!existingGuest)
          await createGuest({
            email: user.email,
            fullName: user.name,
            // nationalID: '',
            // countryFlag: '',
            // nationality: '',
          });
        return true;
      } catch (error) {
        return false;
      }
    },
    // to access session from everywhere
    async session({ session, user }) {
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};

// signIn and signOut for the auth flow to happen server side (server actions)
export const { auth, handlers, signIn, signOut } = NextAuth(authConfig);
