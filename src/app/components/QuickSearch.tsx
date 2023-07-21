import React from "react";
import Image from "next/image";
import Link from "next/link";

const QuickSearch = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[2px] bg-grayLighter"></div>
        <h2 className="px-5 font-medium text-grayPrimary whitespace-nowrap">
          Tente Pesquisar Por
        </h2>
        <div className="w-full h-[2px] bg-grayLighter"></div>
      </div>
      <div className="flex w-full justify-around mt-4">
        <div className="flex flex-col items-center gap-1">
          <Link
            href={`/trips/search?text=hotel`}
            className="flex flex-col items-center hover:text-primary transition-all"
          >
            <Image width={25} height={25} src="/images/group.png" alt="Hotel" />
            <p className="text-sm text-grayPrimary">Hotel</p>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Link
            href={`/trips/search?text=fazenda`}
            className="flex flex-col items-center hover:text-primary transition-all"
          >
            <Image
              width={25}
              height={25}
              src="/images/group.png"
              alt="Fazenda"
            />
            <p className="text-sm text-grayPrimary">Fazenda</p>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Link
            href={`/trips/search?text=chalé`}
            className="flex flex-col items-center hover:text-primary transition-all"
          >
            <Image width={25} height={25} src="/images/group.png" alt="Chalé" />
            <p className="text-sm text-grayPrimary">Chalé</p>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Link
            href={`/trips/search?text=pousada`}
            className="flex flex-col items-center hover:text-primary transition-all"
          >
            <Image
              width={25}
              height={25}
              src="/images/group.png"
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
