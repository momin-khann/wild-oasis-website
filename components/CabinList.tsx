import CabinCard from "@/components/reusable/CabinCard";
import { getCabins } from "@/app/_services";

async function CabinList() {
  // noStore();

  const cabins = await getCabins();

  if (!cabins.length) return null;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14 pt-6 pb-16">
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
