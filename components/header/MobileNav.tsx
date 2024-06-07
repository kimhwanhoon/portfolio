"use client";

import { menuList } from "@/lib/menuList";
import { Burger, Drawer, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NextLink from "next/link";
import { Link as ReactScrollLink } from "react-scroll";
import { usePathname } from "next/navigation";

export const MobileNav = () => {
  const [opened, { toggle, close }] = useDisclosure();
  const pathname = usePathname();

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
          {menuList.map(({ name, to, href }, i) => {
            if (
              (pathname !== "/" && name !== "Blog") ||
              (pathname === "/" && name === "Blog") ||
              (pathname !== "/" && name === "Blog")
            ) {
              return (
                <NavLink
                  key={`mobile-nav-${i}`}
                  component={NextLink}
                  onClick={close}
                  label={name}
                  href={href}
                />
              );
            } else {
              return (
                <NavLink
                  key={`menuNav-${i}`}
                  component={ReactScrollLink}
                  to={to}
                  smooth
                  offset={-120}
                  label={name}
                />
              );
            }
          })}
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
