import { CardType1, CardType1Props } from "@/components/cards/CardType1";
import { SectionType1 } from "@/components/sections/SectionType1";

const cardType1Contents: CardType1Props[] = [
  {
    image: {
      originalImage: {
        alt: "My Dictionary",
        src: "/projects/my-dictionary-0.webp",
      },
      playback: {
        alt: "My Dictionary",
        src: "/projects/my-dictionary-1.gif",
      },
    },
    title: "My Dictionary",
    subtitle:
      "This web app serves as our repository for storing vocabularies, idioms, and sentences that we aim to memorize.",
    badgeNames: ["Next 14", "React 18", "TypeScript", "Postgresql"],
    url: "https://github.com/kimhwanhoon/my-dictionary",
  },
  {
    image: {
      originalImage: {
        alt: "Movie Baba",
        src: "/projects/movie-baba-0.webp",
      },
      playback: {
        alt: "Movie Baba",
        src: "/projects/movie-baba-1.gif",
      },
    },
    title: "Movie Baba",
    subtitle:
      "MovieBaba is a film review community where you can record the movies you've watched and discuss them.",
    badgeNames: ["Next 13", "React 18", "TypeScript", "supabase", "TMDB"],
    url: "https://github.com/kimhwanhoon/Bootcamp-final-project",
  },
  {
    image: {
      originalImage: {
        alt: "100 Things to Do Before You Turn into a Zombie",
        src: "/projects/zombie-bucketlist-0.webp",
      },
      playback: {
        alt: "100 Things to Do Before You Turn into a Zombie",
        src: "/projects/zombie-bucketlist-1.gif",
      },
    },
    title: "100 Things to Do Before You Turn into a Zombie",
    subtitle:
      "This website suggests stepping out of the busy everyday life of modern people and proposing special adventures",
    badgeNames: ["React 18", "TypeScript", "Redux", "React Query"],
    url: "https://github.com/kimhwanhoon/zombie-bucket-list",
  },
  {
    image: {
      originalImage: {
        alt: "GongGong Play",
        src: "/projects/gonggong-play-0.webp",
      },
      playback: {
        alt: "GongGong Play",
        src: "/projects/gonggong-play-1.gif",
      },
    },
    title: "GongGong Play",
    subtitle:
      "This website provides information and reservation services for public sports facilities in Seoul.",
    badgeNames: [
      "React 18",
      "Express",
      "Styled Component",
      "Redux",
      "React Query",
    ],
    url: "https://github.com/kimhwanhoon/20230724_team_project",
  },
];

export const Projects = () => {
  return (
    <SectionType1
      key={"projects"}
      id="projects"
      title="Featured Projects"
      subtitle="Check out some of my latest and greatest web development projects."
      twClassNameForSecondDiv="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8"
      twClassNameForSectionBackGround="projects-bg"
    >
      {cardType1Contents.map((content, index) => (
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
