"use client";

import React, { useState } from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  const { status, data } = useSession();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleLoginClick = () => signIn();
  const handleLogoutClick = () => {
    setMenuIsOpen;
    signOut();
  };

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  return (
    <div className="container mx-auto p-5 flex justify-between items-center">
      <Link href={"/"}>
        <div className="relative ">
          <Image
            width={183}
            height={32}
            src={"/images/logo.png"}
            alt="Full Stack Week"
          />
        </div>
      </Link>
      {status === "unauthenticated" && (
        <button
          className="text-primary text-sm font-semibold"
          onClick={handleLoginClick}
        >
          Login
        </button>
      )}

      {status === "authenticated" && data.user && (
        <div className="relative flex items-center gap-3 p-2 border-grayLighter border border-solid rounded-full">
          <AiOutlineMenu
            size={16}
            onClick={handleMenuClick}
            className="cursor-pointer"
          />

          <Image
            height={35}
            width={35}
            src={data.user.image || ""}
            alt={data.user.name || ""}
            className="rounded-full shadow-md"
          />

          {menuIsOpen && (
            <div className="z-50 absolute top-14 left-0 w-full h-[100px] bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
              <button
                className="text-primary pt-2 text-sm font-semibold"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
