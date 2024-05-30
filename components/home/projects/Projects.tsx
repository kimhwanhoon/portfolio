import { CardType1, CardType1Props } from "@/components/cards/CardType1";
import { SectionType1 } from "@/components/sections/SectionType1";

const cardType1Contents: CardType1Props[] = [
  {
    image: {
      originalImage: {
        alt: "My Dictionary",
        src: "https://i.ibb.co/Nrt1k9j/image.png",
      },
      playback: {
        alt: "My Dictionary",
        src: "https://i.ibb.co/3YzWG2V/signin-signup-page-11.gif",
      },
    },
    title: "My Dictionary",
    subtitle:
      "This web app serves as our repository for storing vocabularies, idioms, and sentences that we aim to memorize.",
    badgeNames: ["Next 14", "TypeScript", "Postgresql"],
  },
  {
    image: {
      originalImage: {
        alt: "Movie Baba",
        src: "https://i.ibb.co/vc2Z65M/image.png",
      },
      playback: {
        alt: "Movie Baba",
        src: "https://i.ibb.co/Rvh6GFj/Screen-Recording-2024-05-30-at-15-08-40.gif",
      },
    },
    title: "Movie Baba",
    subtitle:
      "MovieBaba is a film review community where you can record the movies you've watched and discuss them.",
    badgeNames: ["Next 13", "TypeScript", "supabase", "TMDB"],
  },
  {
    image: {
      originalImage: {
        alt: "100 Things to Do Before You Turn into a Zombie",
        src: "https://i.ibb.co/7pkgvJx/image.png",
      },
      playback: {
        alt: "100 Things to Do Before You Turn into a Zombie",
        src: "https://i.ibb.co/ScJrNyK/260345404-e792b83b-e9df-4d77-b138-777c39cbb024.gif",
      },
    },
    title: "Zombie Bucket List",
    subtitle:
      '"100 Things to Do Before You Turn into a Zombie" suggests stepping out of the busy everyday life of modern people and proposing special adventures',
    badgeNames: ["React 18", "TypeScript", "Redux", "React Query"],
  },
  {
    image: {
      originalImage: {
        alt: "GongGong Play",
        src: "https://i.ibb.co/vQqrKDM/255395315-7241e40f-147e-4690-a595-4281c9adae2a-Medium.jpg",
      },
      playback: {
        alt: "GongGong Play",
        src: "https://i.ibb.co/QvVcL29/Screen-Recording-2024-05-30-at-16-24-25.gif",
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
  },
];

export const Projects = () => {
  return (
    <SectionType1
      title="Featured Projects"
      subtitle="Check out some of my latest and greatest web development projects."
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
        />
      ))}
    </SectionType1>
  );
};
