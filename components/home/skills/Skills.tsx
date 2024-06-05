import { SectionType1 } from "@/components/sections/SectionType1";
import { SkillsIcon } from "./SkillsIcon";
import { skillsIcons } from "./skillsIcons";
import "./skills.css";

export const Skills = () => {
  return (
    <SectionType1
      key={"skills"}
      name="skills"
      title="My Skills"
      subtitle="I'm proficient in a wide range of frontend technologies and tools, allowing me to create exceptional user experiences."
      twClassNameForSecondDiv="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10 mt-8"
      twSectionBackground="bg-crosses"
    >
      {skillsIcons.map(({ src, name }, i) => (
        <SkillsIcon
          key={`skills_icon_${i}`}
          src={src}
          name={name}
          width={40}
          height={40}
        />
      ))}
    </SectionType1>
  );
};
