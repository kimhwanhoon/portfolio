"use client";
// Section_1 => Title, subtitle and content below
import { ReactNode } from "react";
import { Element } from "react-scroll";

interface SectionType1Props {
  title: string;
  name: string;
  subtitle: string;
  children: ReactNode;
  twClassNameForSecondDiv?: string;
  twSectionBackground?: string;
  id: string;
}

export const SectionType1: React.FC<SectionType1Props> = ({
  title,
  name,
  subtitle,
  children,
  twClassNameForSecondDiv = "",
  twSectionBackground = "",
  id,
}) => {
  return (
    <section
      className={`flex justify-center py-8 md:py-16 ${twSectionBackground}`}
    >
      <Element id={id} name={name} className="container space-y-10 px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-700">{subtitle}</p>
        </div>
        <div className={twClassNameForSecondDiv}>{children}</div>
      </Element>
    </section>
  );
};
