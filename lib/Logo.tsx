"use client";

import { Button, ButtonProps } from "@mantine/core";
import { Link } from "react-scroll";

interface LogoProps {
  color: ButtonProps["color"];
}

export const Logo: React.FC<LogoProps> = ({ color }) => {
  return (
    <Button
      style={{ fontSize: "1.25rem" }}
      variant="transparent"
      color={color}
      component={Link}
      to="home"
      className="hover-effect text-2xl font-bold"
      smooth
      offset={-120}
    >
      KIMHWANHOON
    </Button>
  );
};
