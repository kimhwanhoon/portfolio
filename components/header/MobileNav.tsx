"use client";

import { Burger, Drawer, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { menu } from "./Nav";

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
          {menu.map(({ name, href }, i) => (
            <NavLink
              onClick={close}
              key={`mobile-nav-${i}`}
              href={href}
              label={name}
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
