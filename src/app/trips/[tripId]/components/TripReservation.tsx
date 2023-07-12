"use client";

import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import React from "react";
import { Trip } from "@prisma/client";
import Button from "@/components/Button";

interface TripReservationProps {
  trip: Trip;
}

const TripReservation = ({ trip }: TripReservationProps) => {
  return (
    <div className="flex flex-col px-5">
      <div className="flex gap-3">
        <DatePicker placeholderText="Data de Início" onChange={() => {}} />
        <DatePicker placeholderText="Data de Final" onChange={() => {}} />
      </div>
      <Input
        placeholder={`numero de hóspedes (max: ${trip.maxGuests})`}
        className="mt-4"
      />
      <div className="flex justify-between mt-3">
        <p className="font-medium text-sm text-primaryDarker">Total: </p>
        <p className="font-medium text-sm text-primaryDarker">R$: 2500 </p>
      </div>

      <Button className="mt-3">Reservar Agora</Button>
    </div>
  );
};

export default TripReservation;
