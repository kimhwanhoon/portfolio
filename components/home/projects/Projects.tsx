import { CardType1 } from "@/components/cards/CardType1";
import { SectionType1 } from "@/components/sections/SectionType1";
import { projectsList } from "./projectsList";

export const Projects = () => {
  return (
    <SectionType1
      id="projects"
      key="projects"
      name="projects"
      title="Featured Projects"
      subtitle="Check out some of my latest and greatest web development projects."
      twClassNameForSecondDiv="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8"
      twSectionBackground="bg-[#f8f8f8]"
    >
      {projectsList.map((content, index) => (
        <CardType1
          key={`cardType1_${index}`}
          image={{
            originalImage: {
              alt: content.image.originalImage.alt,
              src: content.image.originalImage.src,
            },
            playback: {
              alt: content.image.playback.alt,
              src: content.image.playback.src,
            },
          }}
          title={content.title}
          subtitle={content.subtitle}
          badgeNames={content.badgeNames}
          url={content.url}
        />
      ))}
    </SectionType1>
  );
};
