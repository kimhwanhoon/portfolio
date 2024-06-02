import { SectionType1 } from "@/components/sections/SectionType1";
import {
  IconBrandCss3,
  IconBrandGit,
  IconBrandGithub,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandSupabase,
  IconBrandTailwind,
  IconBrandTypescript,
  IconDatabase,
  IconHtml,
  IconTerminal2,
} from "@tabler/icons-react";
import { SkillsIcon } from "./SkillsIcon";

const iconList = [
  { src: "/skills/html.svg", name: "HTML 5" },
  { src: "/skills/brand-css3.svg", name: "CSS 3" },
  { src: "/skills/brand-javascript.svg", name: "JavaScript" },
  { src: "/skills/brand-typescript.svg", name: "TypeScript" },
  { src: "/skills/brand-react.svg", name: "React 18" },
  { src: "/skills/brand-nextjs.svg", name: "Next App Router" },
  { src: "/skills/brand-git.svg", name: "Git" },
  { src: "/skills/brand-github.svg", name: "GitHub" },
  { src: "/skills/terminal-2.svg", name: "Zsh" },
  { src: "/skills/brand-tailwind.svg", name: "Tailwind CSS" },
  { src: "/skills/brand-supabase.svg", name: "Supabase" },
  { src: "/skills/database.svg", name: "SQL" },
];
export const Skills = () => {
  return (
    <SectionType1
      key={"skills"}
      id="skills"
      title="My Skills"
      subtitle="I'm proficient in a wide range of frontend technologies and tools, allowing me to create exceptional user experiences."
      twClassNameForSecondDiv="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10 mt-8"
      twClassNameForSectionBackGround="bg-crosses"
    >
      {iconList.map(({ src, name }, index) => (
        <SkillsIcon
          key={`skills_icon_${index}`}
          src={src}
          name={name}
          width={40}
          height={40}
        />
      ))}
    </SectionType1>
  );
};
