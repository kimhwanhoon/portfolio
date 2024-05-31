import { Button } from "@mantine/core";
import Link from "next/link";
import React from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  content: string;
  firstButton: { title: string; href: string };
  secondButton: { title: string; href: string };
}

export const Hero = ({
  title,
  subtitle,
  content,
  firstButton,
  secondButton,
}: HeroProps) => {
  return (
    <section className="hero bg flex items-center justify-center  py-20 md:py-32 ">
      <div className="container space-y-6 px-4 text-center md:px-6">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          {title}
        </h1>
        <p className="text-xl text-gray-500 md:text-2xl ">{subtitle}</p>
        <p className="mx-auto max-w-[600px] text-gray-500 ">{content}</p>
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
