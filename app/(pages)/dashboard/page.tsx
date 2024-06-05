import React from "react";
import { auth } from "@/auth";

export const metadata = {
  title: "Dashboard",
};

const Page = async () => {
  const session = await auth();
  const firstName = session?.user?.name?.split(" ")[0];

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Welcome, {firstName}
      </h2>
    </div>
  );
};
export default Page;
