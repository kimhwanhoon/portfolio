"use client";

import { MenuNav } from "../nav/MenuNav";

export const Nav = () => {
  return (
    <nav className="hidden items-center gap-4 md:flex">
      <MenuNav key="header nav" color="gray" />
    </nav>
  );
};
