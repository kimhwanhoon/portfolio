"use client";
import { menuList } from "@/lib/menuList";
import { Button } from "@mantine/core";
import { Link } from "react-scroll";

export const Nav = () => {
  const menuContent = menuList.map(({ name, to }) => (
    <Button
      className="hover-effect"
      color="gray"
      component={Link}
      to={to}
      smooth
      offset={-120}
      variant="subtle"
      key={name}
    >
      {name}
    </Button>
  ));
  return <nav className="hidden items-center gap-4 md:flex">{menuContent}</nav>;
};
