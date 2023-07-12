import Image from "next/image";
import React from "react";
import { Trip } from "@prisma/client";
import ReactCountryFlag from "react-country-flag";

interface TripItemProps {
  trip: Trip; //importando tipagem do Trip em schema.prisma
}

const TripItem = ({ trip }: TripItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="relative h-[280px] w-[280px]">
        <Image
          src={trip.coverImage}
          fill
          style={{
            objectFit: "cover",
          }}
          className="rounded-lg"
          alt={trip.name}
        />
      </div>

      <h3 className="text-primaryDarker font-medium text-sm mt-2">
        {trip.name}
      </h3>
      <div className="flex items-center gap-1">
        <ReactCountryFlag countryCode={trip.countryCode} svg />
        <p className="text-xs text-grayPrimary">{trip.location}</p>
      </div>
      <p>
        <span className="text-primary font-medium">
          R${trip.pricePerDay.toString()} -{" "}
        </span>
        diária
      </p>
    </div>
  );
};

export default TripItem;
