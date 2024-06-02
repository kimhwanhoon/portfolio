"use client";

import { Button } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { Element } from "react-scroll";

interface HeroProps {
  title: string;
  subtitle: string;
  content: string;
  firstButton: { title: string; href: string };
  secondButton: { title: string; href: string };
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
        name="home"
        className="absolute left-0 top-0 z-10 h-full w-full bg-[#33333370]"
      ></Element>
      <div className="container z-20 space-y-6 px-4 text-center md:px-6">
        <h1 className="text-shadow-outline text-4xl font-bold tracking-tight text-white decoration-wavy md:text-6xl ">
          {title}
        </h1>
        <p className="text-shadow-outline text-xl font-semibold text-white md:text-2xl ">
          {subtitle}
        </p>
        <p className="text-shadow-outline mx-auto max-w-[600px] font-medium text-white">
          {content}
        </p>
        <div className="flex justify-center gap-4">
          <Button
            className="hover-effect-mild"
            component={Link}
            href={firstButton?.href ?? "#"}
          >
            {firstButton.title}
          </Button>
          <Button
            className="hover-effect-mild"
            variant="white"
            component={Link}
            href={secondButton.href ?? "#"}
          >
            {secondButton.title}
          </Button>
        </div>
      </div>
    </section>
  );
};
