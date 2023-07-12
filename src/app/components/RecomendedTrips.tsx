import TripItem from "@/components/TripItem";
import { Trip } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import React from "react";

async function getTrips() {
  const trips = await prisma.trip.findMany();

  return trips;
}

const RecomendedTrips = async () => {
  const data = await getTrips();

  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[2px] bg-grayLighter"></div>
        <h2 className="px-5 font-medium text-grayPrimary whitespace-nowrap">
          Viagens Recomendadas
        </h2>
        <div className="w-full h-[2px] bg-grayLighter"></div>
      </div>
      <div className="flex flex-col items-center mt-5 gap-5">
        {data.map((trip: Trip) => (
          <TripItem key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
};

export default RecomendedTrips;