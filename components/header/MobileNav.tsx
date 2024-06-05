"use client";

import { menuList } from "@/lib/menuList";
import { Burger, Drawer, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-scroll";

export const MobileNav = () => {
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <>
      <Drawer
        offset={8}
        radius="md"
        opened={opened}
        onClose={close}
        title="Menu"
        position="bottom"
      >
        <nav className="flex-col gap-2">
          {menuList.map(({ name, to }, i) => (
            <NavLink
              component={Link}
              onClick={close}
              key={`mobile-nav-${i}`}
              label={name}
              to={to}
              smooth
              offset={-120}
            />
          ))}
        </nav>
      </Drawer>
      <Burger
        className="block md:hidden"
        opened={opened}
        onClick={toggle}
        aria-label="Toggle navigation"
      />
    </>
  );
};
