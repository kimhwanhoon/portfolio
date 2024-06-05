import { CardType1Props } from "@/components/cards/CardType1";

export const projectsList: CardType1Props[] = [
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
