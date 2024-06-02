"use client";
import { Button } from "@mantine/core";
import { Link } from "react-scroll";

type Menu = {
  name: string;
  to: string;
};

export const menu: Menu[] = [
  { name: "Home", to: "home" },
  { name: "Projects", to: "projects" },
  { name: "Skills", to: "skills" },
  { name: "Contact", to: "contact" },
];

export const Nav = () => {
  const menuContent = menu.map(({ name, to }) => (
    <Button
      className="hover-effect"
      color="gray"
      component={Link}
      to={to}
      smooth
      variant="subtle"
      key={name}
    >
      {name}
    </Button>
  ));
  return <nav className="hidden items-center gap-4 md:flex">{menuContent}</nav>;
};
