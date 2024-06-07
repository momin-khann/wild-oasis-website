"use client";
/*
 * !! Imp Note: Error Boundaries are always client components
 * */

import Link from "next/link";

interface Props {
  error: Error;
}

export default function Error({ error }: Props) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <Link
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
        href={"/"}
      >
        Try again
      </Link>
    </main>
  );
}
