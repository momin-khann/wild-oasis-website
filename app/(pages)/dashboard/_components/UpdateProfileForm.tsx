"use client";

import SelectCountry from "@/app/(pages)/dashboard/_components/SelectCountry";

function UpdateProfileForm() {
  // CHANGE
  const nationality = "Pakistan";

  return (
    <form className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col w-full">
      <div className="space-y-2">
        <label>Full name</label>
        <input
          type="text"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          type="email"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="nationality">Where are you from?</label>

        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultCountry={nationality}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          name="nationalID"
          type="number"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <button
          type="submit"
          className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
        >
          Update profile
        </button>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
