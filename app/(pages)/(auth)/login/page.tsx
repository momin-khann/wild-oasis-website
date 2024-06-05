import React from "react";
import { signInAction } from "@/app/_actions/auth";

export const metadata = {
  title: "Login",
};

const Page = () => {
  return (
    <div className="wo-container pt-20 flex flex-col gap-6 justify-center items-center">
      <h2 className="text-3xl font-semibold">
        Sign in to access your guest area
      </h2>

      <form action={signInAction}>
        <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium">
          <img
            src="https://authjs.dev/img/providers/google.svg"
            alt="Google logo"
            height="24"
            width="24"
          />
          <span>Continue with Google</span>
        </button>
      </form>
    </div>
  );
};
export default Page;
