import NextAuth from "next-auth";
import Google from "@auth/core/providers/google";
export const { auth, handlers } = NextAuth({ providers: [Google] });
