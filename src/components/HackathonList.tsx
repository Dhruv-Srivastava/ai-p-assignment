import React, { useState, useMemo } from "react";
import HackathonCard from "./HackathonCard";
import { getHackathonStatus } from "../utils/helper";
import { useHackathon } from "../context/MockDataProvider";

export default function HackathonList() {
  const { hackathons } = useHackathon();
  const [query, setQuery] = useState("");

  // Filter hackathons based on query
  const filteredHackathons = useMemo(() => {
    if (!query) return hackathons;
    return hackathons.filter((hackathon) => {
      // Join all relevant fields and check for includes
      const { status } = getHackathonStatus(
        hackathon.startDate,
        hackathon.endDate
      );
      const searchText = [
        hackathon.name,
        hackathon.description,
        hackathon.level,
        status,
      ]
        .join(" ")
        .toLowerCase();
      return searchText.includes(query.toLowerCase());
    });
  }, [query, hackathons]);

  return (
    <section>
      <div className="bg-[#002A3B]">
        <div className="container mx-auto py-10 px-6 flex flex-col items-center gap-10 lg:gap-16 lg:px-20 lg:py-20">
          <h2 className="text-2xl font-semibold text-white lg:text-3xl">
            Explore Challenges
          </h2>
          <div className="w-full flex justify-center gap-10">
            <input
              type="text"
              placeholder="Search by keyword, difficulty or status"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="py-4 px-10 w-[70%] rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#003145]">
        <div className="container mx-auto py-10 px-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-16 lg:py-20 lg:px-20">
          {filteredHackathons.length === 0 ? (
            <p className="text-white text-center">No hackathons found.</p>
          ) : (
            filteredHackathons.map((hackathon) => {
              const { status, msRemaining } = getHackathonStatus(
                hackathon.startDate,
                hackathon.endDate
              );
              return (
                <HackathonCard
                  key={hackathon.id}
                  badgeTitle={status}
                  timestamp={msRemaining}
                  {...hackathon}
                />
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
