import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-walterWhite p-5 justify-center flex flex-col items-center">
      <Image src="/images/logo.png" alt="logo" width={133} height={23} />
      <p className="text-sm font-semibold mt-2 text-primaryDarker">
        Todos os direitos reservados.
      </p>
    </div>
  );
};

export default Footer;
