export interface CabinType {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description?: string;
  image: string;
}

export interface UserType {
  id: number;
  name?: string;
  email: string;
  image?: string;
  nationalID?: string;
  nationality?: string;
  countryFlag?: string;
}

export interface DbUserType {
  id: number;
  fullName: string;
  email: string;
  image?: string;
  nationalID?: string;
  nationality?: string;
  countryFlag?: string;
}

type NullableString = string | null | undefined;

export interface SessionUserType {
  id?: NullableString;
  name?: NullableString;
  email?: NullableString;
  image?: NullableString;
}

export interface ParamsProps {
  params: { id: string };
}

export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

export interface URLProps {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}

export interface SettingsType {
  id: number;
  minBookingLength: number;
  maxBookingLength: number;
  maxGuestPerBooking: number;
  breakfastPrice: number;
}

export interface DateRangeType {
  from: Date | undefined;
  to?: Date | undefined;
}
