"use client";

// Let's imagine your colleague already built this component 😃
import { countries } from "@/data/countries";

interface Props {
  defaultCountry?: string;
  name: string;
  id: string;
  className?: string;
}

async function SelectCountry({ defaultCountry, name, id, className }: Props) {
  return (
    <select
      name={name}
      id={id}
      // Here we use a trick to encode BOTH the country name and the flag into the value. Then we split them up again later in the server action
      defaultValue={`${defaultCountry}`}
      className={className}
    >
      <option value="">Select country...</option>
      {countries.map((c) => (
        <option key={c.name.common} value={`${c.name.common}`}>
          {c.name.common}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
