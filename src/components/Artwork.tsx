import { useDarkMode } from "../hooks/useDarkMode";

export default function Artwork() {
  const isDark = useDarkMode();

  const lightArtwork = {
    artist: "Claude Monet",
    title: "The Magpie (La Pie)",
    date: "1868–1869",
  };

  const darkArtwork = {
    artist: "Adolph von Menzel",
    title: "The Dinner at the Ball / Das Ballsouper",
    date: "1878",
  };

  const artwork = isDark ? darkArtwork : lightArtwork;

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-4">
      <div className="max-w-lg mx-auto">
        <img
          src={isDark ? "/artwork_dark.jpg" : "/artwork_light.jpg"}
          alt=""
          className="w-full h-auto"
          loading="eager"
          aria-hidden="true"
        />
        <div className="mt-2 text-xs text-gray-600 dark:text-gray-400 space-y-1 text-right">
          <p>{artwork.artist}</p>
          <p>{artwork.title}</p>
          <p>{artwork.date}</p>
        </div>
      </div>
    </div>
  );
}
