"use client";

import React from "react";
import Input from "@/components/Input";
import DatePicker from "@/components/DatePicker";
import CurrencyInput from "@/components/CurrencyInput";
import Button from "@/components/Button";

const TripSearch = () => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="font-semibold text-2xl text-primaryDarker text-center">
        Encontre sua próxima <span className="text-primary">viagem!</span>
      </h1>
      <div className="flex flex-col gap-4 mt-5">
        <Input placeholder="Onde Você quer ir?" />
        <div className="flex gap-4">
          <DatePicker placeholderText="Data de Ida" onChange={() => {}} />
          <CurrencyInput placeholder="Orçamento" />
        </div>
        <Button>Pesquisar</Button>
      </div>
    </div>
  );
};

export default TripSearch;
