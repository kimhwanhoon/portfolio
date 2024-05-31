// Section_1 => Title, subtitle and content below
import { ReactNode } from "react";

interface SectionType1Props {
  title: string;
  subtitle: string;
  children: ReactNode;
  id?: string;
  twClassNameForSecondDiv?: string;
  twClassNameForSectionBackGround?: string;
}

export const SectionType1: React.FC<SectionType1Props> = ({
  title,
  subtitle,
  children,
  id = "",
  twClassNameForSecondDiv = "",
  twClassNameForSectionBackGround = "",
}) => {
  return (
    <section
      id={id}
      className={`flex justify-center py-8 md:py-16 ${twClassNameForSectionBackGround}`}
    >
      <div className="container space-y-10 px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-700">{subtitle}</p>
        </div>
        <div className={twClassNameForSecondDiv}>{children}</div>
      </div>
    </section>
  );
};
