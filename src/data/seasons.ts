export interface SeasonArtwork {
  artist: string;
  title: string;
  date: string;
  image: string;
}

export interface SeasonConfig {
  lightArtwork: SeasonArtwork;
  darkArtwork: SeasonArtwork;
  colors: {
    bodyLight: string;
    bodyDark: string;
    accentLight: string;
    accentDark: string;
  };
}

export const seasons: Record<string, SeasonConfig> = {
  winter: {
    lightArtwork: {
      artist: "Claude Monet",
      title: "The Magpie (La Pie)",
      date: "1868–1869",
      image: "/artwork_light_winter.jpg",
    },
    darkArtwork: {
      artist: "Adolph von Menzel",
      title: "The Dinner at the Ball / Das Ballsouper",
      date: "1878",
      image: "/artwork_dark_winter.jpg",
    },
    colors: {
      bodyLight: "bg-orange-50",
      bodyDark: "dark:bg-yellow-950",
      accentLight: "hover:text-orange-600",
      accentDark: "dark:hover:text-orange-500",
    },
  },
  spring: {
    lightArtwork: {
      artist: "Claude Monet",
      title: "Spring (Fruit Trees in Bloom)",
      date: "1873",
      image: "/artwork_light.jpg",
    },
    darkArtwork: {
      artist: "John Atkinson Grimshaw",
      title: "Tree Shadows on the Park Wall, Roundhay Park, Leeds",
      date: "1872",
      image: "/artwork_dark.jpg",
    },
    colors: {
      bodyLight: "bg-emerald-50",
      bodyDark: "dark:bg-emerald-950",
      accentLight: "hover:text-emerald-600",
      accentDark: "dark:hover:text-emerald-500",
    },
  },
};

export const activeSeason = "spring";
