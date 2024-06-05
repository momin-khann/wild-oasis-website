import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      /*
       * TODO: find user by by current google email,
       *   if not found then create new user in supabase,
       *   after that all return true
       * */

      return true;
    },

    async session({ session }) {
      /*
       * TODO: find user by current google email,
       *  then append the session with supabase user id to session guest id
       * */

      return session;
    },
  },
});
