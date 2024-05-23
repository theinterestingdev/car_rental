"use client";
import React, { useState } from "react";
import Link from "next/link";
import { links } from "@/contants/appdata";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div className="bg-[#18181B] shadow-lg h-[11vh]  flex justify-between items-center md:px-[10%]">
      <Link href="/" passHref
        className="text-white font-bold text-2xl pl-5 md:pl-0"
          >RENTAL HUB
        
      </Link>
      <div
        className="md:hidden flex flex-col gap-1 pr-5"
        onClick={() => setIsMenu(!isMenu)}
      >
        <div className="w-5 h-0.5 bg-black"></div>
        <div className="w-5 h-0.5 bg-black"></div>
        <div className="w-5 h-0.5 bg-black"></div>
      </div>
      <div
        className={`${
          isMenu ? "flex flex-col absolute top-16 w-full" : "hidden md:flex"
        } gap-5 md:flex-row md:static  md:w-auto text-center`}
      >
        {links?.map((link) => (
          <div key={link.link}>
            <Link href={link.link} passHref
              className={`${pathname === link.link ? "text-gray-400" : "text-white"}`}>
                <span>{link.text}</span>
              
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
