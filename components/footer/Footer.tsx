"use client";

import { Button } from "@mantine/core";
import React from "react";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 py-8 text-gray-50 md:py-12">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold">
              <Button
                style={{ fontSize: "1.25rem" }}
                variant="subtle"
                color="white"
                component={Link}
                to="home"
                className="hover-effect"
                smooth
                offset={-120}
              >
                KIMHWANHOON
              </Button>
            </h2>
            {/* <span className="text-lg font-semibold">John Doe</span> */}
          </div>
          <nav className="flex items-center gap-0 sm:gap-4 md:gap-6">
            <Button
              variant="subtle"
              color="white"
              component={Link}
              className="hover-effect"
              smooth
              offset={-120}
              to="home"
            >
              Home
            </Button>
            <Button
              variant="subtle"
              color="white"
              component={Link}
              className="hover-effect"
              smooth
              offset={-120}
              to="projects"
            >
              Projects
            </Button>
            <Button
              variant="subtle"
              color="white"
              component={Link}
              className="hover-effect"
              smooth
              offset={-120}
              to="skills"
            >
              Skills
            </Button>
            <Button
              variant="subtle"
              color="white"
              component={Link}
              className="hover-effect"
              smooth
              offset={-120}
              to="contact"
            >
              Contact
            </Button>
          </nav>
        </div>
      </div>
    </footer>
  );
};
