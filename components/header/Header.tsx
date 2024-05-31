import React from "react";
import { Nav } from "./Nav";
import Link from "next/link";

export const Header = () => {
  return (
    <header
      id="header"
      className="h-[60px] bg-transparent shadow-lg shadow-gray-200"
    >
      <div className="flex items-center justify-between p-4">
        <Link
          className="hover-effect-mild text-xl font-bold uppercase"
          href={"/"}
        >
          <h1>kimhwanhoon</h1>
        </Link>
        <Nav />
      </div>
    </header>
  );
};
