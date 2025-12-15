import { useDarkMode } from "../hooks/useDarkMode";

export default function Artwork() {
  const isDark = useDarkMode();

  interface Artwork {
    artist: string;
    title: string;
    date: string;
  }

  const lightArtwork: Artwork = {
    artist: "Claude Monet",
    title: "The Magpie (La Pie)",
    date: "1868–1869",
  };

  const darkArtwork: Artwork = {
    artist: "Adolph von Menzel",
    title: "The Dinner at the Ball / Das Ballsouper",
    date: "1878",
  };

  const artwork = isDark ? darkArtwork : lightArtwork;

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
      <div className="max-w-lg mx-auto w-full">
        <img
          src={isDark ? "/artwork_dark.jpg" : "/artwork_light.jpg"}
          alt={`${artwork.title} by ${artwork.artist}, ${artwork.date}`}
          className="w-full h-auto"
          loading="eager"
        />
        <div className="mt-2 text-xs text-gray-600 dark:text-gray-300 space-y-1 text-right">
          <p>{artwork.artist}</p>
          <p>{artwork.title}</p>
          <p>{artwork.date}</p>
        </div>
      </div>
    </div>
  );
}
