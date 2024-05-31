import { Button } from "@mantine/core";
import Link from "next/link";

type Menu = {
  name: string;
  href: string;
};

export const menu: Menu[] = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Contact", href: "/#contact" },
];

export const Nav = () => {
  const menuContent = menu.map(({ name, href }) => (
    <Button
      className="hover-effect"
      color="gray"
      component={Link}
      variant="subtle"
      key={name}
      href={href}
    >
      {name}
    </Button>
  ));
  return <nav className="hidden items-center gap-4 md:flex">{menuContent}</nav>;
};
