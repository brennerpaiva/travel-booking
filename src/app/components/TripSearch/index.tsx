import React from "react";
import Input from "@/components/Input";

const TripSearch = () => {
  return (
    <div className="container mx-auto p-5">
      <h2 className="font-semibold text-2xl text-primaryDarker text-center">
        Encontre sua próxima <span className="text-primary">viagem!</span>
      </h2>
      <div className="flex flex-col">
        <Input placeholder="Onde você quer ir?" />
      </div>
    </div>
  );
};

export default TripSearch;
