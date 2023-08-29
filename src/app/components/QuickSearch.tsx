import React from "react";
import Image from "next/image";
import Link from "next/link";

const QuickSearch = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className="px-5 font-semibold text-grayPrimary whitespace-nowrap">
          Tente Pesquisar Por
        </h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>
      <div className="flex w-full mt-4 justify-between lg:justify-center lg:gap-40 lg:mt-10 ">
        <div className="flex flex-col items-center gap-1">
          <Link
            href={`/trips/search?text=hotel`}
            className="flex flex-col items-center hover:text-primary transition-all"
          >
            <Image width={65}
            height={65}
            src="/Resort.svg"
            alt="Hotel" />
            <p className="text-sm text-grayPrimary">Hotel</p>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Link
            href={`/trips/search?text=fazenda`}
            className="flex flex-col items-center hover:text-primary transition-all"
          >
            <Image
              width={65}
              height={65}
              src="/farm.svg"
              alt="Fazenda"
            />
            <p className="text-sm text-grayPrimary">Fazenda</p>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Link
            href={`/trips/search?text=fazenda`}
            className="flex flex-col items-center hover:text-primary transition-all"
          >
            <Image
              width={65}
              height={65}
              src="/Resort.svg"
              alt="Resorts"
            />
            <p className="text-sm text-grayPrimary">Resorts</p>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Link
            href={`/trips/search?text=pousada`}
            className="flex flex-col items-center hover:text-primary transition-all"
          >
            <Image
              width={65}
              height={65}
              src="/Pousada.svg"
              alt="Pousada"
            />
            <p className="text-sm text-grayPrimary">Pousada</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
