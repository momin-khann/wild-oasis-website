import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "@/app/_services";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user, email }) {
      /*
       * TODO: find user by by current google email,
       *   if not found then create new user in supabase,
       *   after that all return true
       * */

      // const dbUser = await getGuest(email as string);

      // if (!dbUser && typeof user.name === "string") {
      //   await createGuest({
      //     ...user,
      //     fullName: user.name,
      //   });
      // }

      return true;
    },

    async session({ session }) {
      /*
       * TODO: find user by current google email,
       *  then append the session with supabase user id to session guest id
       * */

      const dbUser = await getGuest(session?.user.email);

      if (dbUser) {
        session.user.id = dbUser.id;
      }

      return session;
    },
  },
});
