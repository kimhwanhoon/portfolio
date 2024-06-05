"use client";
// used for header and footer menu nav

import { Button, type ButtonProps } from "@mantine/core";
import { menuList } from "@/lib/menuList";
import NextLink from "next/link";
import { Link as ReactScrollLink } from "react-scroll";

interface MenuNavProps {
  color: ButtonProps["color"];
}

export const MenuNav: React.FC<MenuNavProps> = ({ color }) => {
  const commonButtonProps = {
    className: "hover-effect",
    color,
    variant: "subtle",
  };
  return (
    <>
      {menuList.map(({ name, to, isNextLink }, i) => {
        if (isNextLink) {
          return (
            <Button
              {...commonButtonProps}
              key={`menuNav-${name}`}
              component={NextLink}
              href={to}
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
