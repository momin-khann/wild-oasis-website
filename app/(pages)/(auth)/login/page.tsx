import React from "react";
import { signInAction } from "@/app/_actions/auth";

export const metadata = {
  title: "Login",
};

const Page = () => {
  return (
    <div className={"wo-container pt-20 flex justify-center items-center"}>
      <form action={signInAction}>
        <button
          className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
          type="submit"
        >
          Signin with Google
        </button>
      </form>
    </div>
  );
};
export default Page;
