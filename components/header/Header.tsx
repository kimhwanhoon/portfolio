import React from "react";
import { Nav } from "./Nav";
import Link from "next/link";
import { MobileNav } from "./MobileNav";

export const Header = () => {
  return (
    <header
      id="header"
      className="fixed top-0 z-50 w-full bg-[#ffffffee] shadow-lg shadow-gray-200"
    >
      <div className="flex items-center justify-between p-4">
        <Link
          className="hover-effect-mild text-xl font-bold uppercase"
          href={"/"}
        >
          <h1>kimhwanhoon</h1>
        </Link>
        <Nav />
        <MobileNav />
      </div>
    </header>
  );
};
