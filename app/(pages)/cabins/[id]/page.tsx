import { getCabin } from "@/app/_services";
import { Suspense } from "react";
import Spinner from "@/components/reusable/Spinner";
import Reservation from "@/components/reservation/Reservation";
import CabinDetails from "@/components/cabin/CabinDetails";
import ReservationReminder from "@/components/reservation/ReservationReminder";

interface Props {
  params: { id: number };
}

export async function generateMetadata({ params }: Props) {
  const { name } = await getCabin(params.id);
  return { title: `Cabin ${name}` };
}

export default async function Page({ params }: Props) {
  const cabin = await getCabin(params.id);

  return (
    <div className="wo-container mx-auto mt-8">
      {/* Cabin Details */}
      <CabinDetails cabin={cabin} />

      <div>
        <h2 className="text-5xl font-semibold text-center text-accent-500">
          Reserve Now
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
          <ReservationReminder />
        </Suspense>
      </div>
    </div>
  );
}
