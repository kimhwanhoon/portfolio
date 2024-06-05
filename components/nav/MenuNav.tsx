"use client";
// used for header and footer menu nav

import { Button, type ButtonProps } from "@mantine/core";
import { menuList } from "@/lib/menuList";
import NextLink from "next/link";
import { Link as ReactScrollLink } from "react-scroll";
import { usePathname } from "next/navigation";

interface MenuNavProps {
  color: ButtonProps["color"];
}

export const MenuNav: React.FC<MenuNavProps> = ({ color }) => {
  const pathname = usePathname();
  const commonButtonProps = {
    className: "hover-effect",
    color,
    variant: "subtle",
  };
  return (
    <>
      {menuList.map(({ name, to, href }, i) => {
        if (
          (pathname !== "/" && name !== "Blog") ||
          (pathname === "/" && name === "Blog") ||
          (pathname !== "/" && name === "Blog")
        ) {
          return (
            <Button
              {...commonButtonProps}
              key={`menuNav-${name}`}
              component={NextLink}
              href={href}
            >
              {name}
            </Button>
          );
        } else {
          return (
            <Button
              {...commonButtonProps}
              key={`menuNav-${i}`}
              component={ReactScrollLink}
              to={to}
              smooth
              offset={-120}
            >
              {name}
            </Button>
          );
        }
      })}
    </>
  );
};
