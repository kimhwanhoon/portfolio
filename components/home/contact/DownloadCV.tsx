import {
  Button,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuLabel,
  MenuTarget,
} from "@mantine/core";
import Link from "next/link";
import React from "react";

export const DownloadCV = () => {
  return (
    <section className="mx-auto flex max-w-md flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:gap-8">
      <div>
        <h3 className="text-center text-2xl font-semibold">Take my CV!</h3>
        <p className="text-center ">Download my CV</p>
      </div>
      <Menu>
        <MenuTarget>
          <Button variant="outline">Download</Button>
        </MenuTarget>
        <MenuDropdown>
          <MenuLabel>List of CV</MenuLabel>
          <MenuItem>
            <Button
              prefetch={false}
              color="teal"
              component={Link}
              href="/cv/Hwanhoon_KIM_en.pdf"
            >
              English Version
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              prefetch={false}
              color="indigo"
              component={Link}
              href="/cv/Hwanhoon_KIM_fr.pdf"
            >
              French Version
            </Button>
          </MenuItem>
        </MenuDropdown>
      </Menu>
    </section>
  );
};
