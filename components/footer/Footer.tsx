import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 py-8 text-gray-50 md:py-12">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold">
              <Link href={"/#header"}>KIMHWANHOON</Link>
            </h2>
            {/* <span className="text-lg font-semibold">John Doe</span> */}
          </div>
          <nav className="flex items-center gap-4 md:gap-6">
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="/#projects"
            >
              Projects
            </Link>
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="/#skills"
            >
              Skills
            </Link>
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="/#contact"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
