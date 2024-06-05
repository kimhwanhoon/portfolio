"use client";

import { Logo } from "@/lib/Logo";
import { menuList } from "@/lib/menuList";
import { Button } from "@mantine/core";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 py-8 text-gray-50 md:py-12">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Logo key="footer logo" color="white" />
          </div>
          <nav className="flex items-center gap-0 sm:gap-4 md:gap-6">
            {menuList.map(({ name, to }, i) => (
              <Button
                key={`footerMenu-${i}`}
                variant="subtle"
                color="white"
                component={Link}
                className="hover-effect"
                smooth
                offset={-120}
                to={to}
              >
                {name}
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
