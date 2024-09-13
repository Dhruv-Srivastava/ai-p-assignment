import React, { createContext, useContext, useState, ReactNode } from "react";
import { Hackathon } from "../utils/types";
import { mockHackathons } from "../utils/mockData";

interface HackathonContextType {
  hackathons: Hackathon[];
  setHackathons: React.Dispatch<React.SetStateAction<Hackathon[]>>;
}

const HackathonContext = createContext<HackathonContextType | undefined>(
  undefined
);

export default function HackathonProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [hackathons, setHackathons] = useState<Hackathon[]>(mockHackathons);

  return (
    <HackathonContext.Provider value={{ hackathons, setHackathons }}>
      {children}
    </HackathonContext.Provider>
  );
}

export function useHackathon() {
  const context = useContext(HackathonContext);
  if (context === undefined) {
    throw new Error("useHackathon must be used within a HackathonProvider");
  }
  return context;
}
