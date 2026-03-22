import { useDarkMode } from "../hooks/useDarkMode";
import { seasons, activeSeason } from "../data/seasons";

export default function Artwork() {
  const isDark = useDarkMode();
  const season = seasons[activeSeason];
  const artwork = isDark ? season.darkArtwork : season.lightArtwork;

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
      <div className="max-w-lg mx-auto w-full">
        <img
          src={artwork.image}
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
