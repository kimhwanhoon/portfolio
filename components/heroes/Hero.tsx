"use client";

import { Button } from "@mantine/core";
import React from "react";
import { Element, Link } from "react-scroll";

interface HeroProps {
  title: string;
  subtitle: string;
  content: string;
  firstButton: { title: string; to: string };
  secondButton: { title: string; to: string };
  twClassNameForBackground?: string;
}

export const Hero = ({
  title,
  subtitle,
  content,
  firstButton,
  secondButton,
  twClassNameForBackground = "",
}: HeroProps) => {
  return (
    <section
      className={`relative flex items-center justify-center py-20 md:py-32 ${twClassNameForBackground}`}
    >
      <Element
        id="home"
        name="home"
        className="absolute left-0 top-0 z-10 h-full w-full bg-[#33333370]"
      ></Element>
      <div className="container z-20 space-y-6 px-4 text-center md:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-white decoration-wavy text-shadow-outline md:text-6xl ">
          {title}
        </h1>
        <p className="text-xl font-semibold text-white text-shadow-outline md:text-2xl ">
          {subtitle}
        </p>
        <p className="mx-auto max-w-[600px] font-medium text-white text-shadow-outline">
          {content}
        </p>
        <div className="flex justify-center gap-4">
          <Button
            className="hover-effect-mild"
            component={Link}
            to={firstButton?.to ?? "#"}
            smooth
            offset={-120}
          >
            {firstButton.title}
          </Button>
          <Button
            className="hover-effect-mild"
            variant="white"
            component={Link}
            to={secondButton.to ?? "#"}
            smooth
            offset={-120}
          >
            {secondButton.title}
          </Button>
        </div>
      </div>
    </section>
  );
};
