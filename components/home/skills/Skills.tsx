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
  { Icon: IconHtml, name: "HTML 5" },
  { Icon: IconBrandCss3, name: "CSS 3" },
  { Icon: IconBrandJavascript, name: "JavaScript" },
  { Icon: IconBrandTypescript, name: "TypeScript" },
  { Icon: IconBrandReact, name: "React 18" },
  { Icon: IconBrandNextjs, name: "Next App Router" },
  { Icon: IconBrandGit, name: "Git" },
  { Icon: IconBrandGithub, name: "GitHub" },
  { Icon: IconTerminal2, name: "Zsh" },
  { Icon: IconBrandTailwind, name: "Tailwind CSS" },
  { Icon: IconBrandSupabase, name: "Supabase" },
  { Icon: IconDatabase, name: "SQL" },
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
      {iconList.map(({ Icon, name }, index) => (
        <SkillsIcon key={`skills_icon_${index}`} Icon={Icon} name={name} />
      ))}
    </SectionType1>
  );
};
