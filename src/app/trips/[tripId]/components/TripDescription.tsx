import { Trip } from "@prisma/client";
import React from "react";

interface TripDescriptionProps {
  description: String;
}

const TripDescription = ({ description }: TripDescriptionProps) => {
  return (
    <div className="flex flex-col p-5">
      <h2 className="font-semibold text-primaryDarker">Sobre a Viagem</h2>
      <p className="text-xs mt-1 leading-5 text-primaryDarker">{description}</p>
    </div>
  );
};

export default TripDescription;
