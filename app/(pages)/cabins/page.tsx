import React, { Suspense } from "react";
import Spinner from "@/components/reusable/Spinner";
import CabinList from "@/components/cabin/CabinList";
import Filter from "@/components/reusable/Filter";
import { SearchParamsProps } from "@/types";

export const metadata = {
  title: "Cabins",
};

const Page = async ({ searchParams }: SearchParamsProps) => {
  const filter = searchParams?.capacity ?? "all";

  return (
    <section className={"wo-container"}>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
      </Suspense>
    </section>
  );
};
export default Page;
