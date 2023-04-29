// "use client";

import { useState } from "react";
import Link from "next/link";
const Header = () => {
  return (
    <header className="w-full border-b-2 border-b-white text-white p-6 m-0 bg-[#003ea2]">
      <div className="container space-y-3 flex flex-col justify-center items-center">
        <div className="logo">
          <Link href={"/"} className=" font-bold text-2xl">
            Jonathan Baraza
          </Link>
        </div>
        <div className="links flex space-x-4">
          <Link href={"/about"}>About</Link>
          <Link href={"/about/team"}>Our team</Link>
          <Link href={"/code/repos"}>Code</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
