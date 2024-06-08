"use client";

import React, { createContext, useContext, useState } from "react";
import { DateRangeType } from "@/types";

interface ReservationContextType {
  range: DateRangeType;
  setRange: React.Dispatch<React.SetStateAction<DateRangeType>>;
  resetRange: () => void;
}

const ReservationContext = createContext<ReservationContextType | undefined>(
  undefined,
);

const initialState = { from: undefined, to: undefined };

function ReservationProvider({ children }: { children: React.ReactNode }) {
  const [range, setRange] = useState<DateRangeType>(initialState);
  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined) throw new Error("Wrap context with provider.");
  return context;
}

export { ReservationProvider, useReservation };
