"use client";

import { Button, ButtonProps } from "@mantine/core";
import NextLink from "next/link";
import { Link as ReactScrollLink } from "react-scroll";
import { usePathname } from "next/navigation";

interface LogoProps {
  color: ButtonProps["color"];
}

export const Logo: React.FC<LogoProps> = ({ color }) => {
  const pathname = usePathname();
  const commonProps = {
    style: { fontSize: "1.25rem" },
    variant: "transparent",
    color,
    className: "hover-effect text-2xl font-bold",
  };
  if (pathname === "/") {
    return (
      <Button
        component={ReactScrollLink}
        to="home"
        smooth
        offset={-120}
        {...commonProps}
      >
        KIMHWANHOON
      </Button>
    );
  } else if (pathname === "/blog") {
    return (
      <Button component={NextLink} href={"/"} {...commonProps}>
        KIMHWANHOON
      </Button>
    );
  }
  return null;
};
