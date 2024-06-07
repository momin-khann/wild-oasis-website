import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import { getBookedDatesByCabinId, getSettings } from "@/app/_services";
import { auth } from "@/auth";
import LoginMessage from "@/components/reusable/LoginMessage";
import { CabinType, SessionUserType } from "@/types";

interface Props {
  cabin: CabinType;
}

async function Reservation({ cabin }: Props) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  const session = await auth();

  return (
    <section className="my-16 grid grid-cols-1 gap-y-6 lg:gap-y-0 lg:grid-cols-2 border border-primary-800">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session?.user} />
      ) : (
        <LoginMessage />
      )}
    </section>
  );
}

export default Reservation;
