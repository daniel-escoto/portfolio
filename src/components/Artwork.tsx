import { useDarkMode } from "../hooks/useDarkMode";
import { seasons, activeSeason } from "../data/seasons";

export default function Artwork() {
  const isDark = useDarkMode();
  const season = seasons[activeSeason];
  const artwork = isDark ? season.darkArtwork : season.lightArtwork;

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
      <div className="mx-auto flex flex-col items-center">
        <div className="inline-flex flex-col">
          <img
            src={artwork.image}
            alt={`${artwork.title} by ${artwork.artist}, ${artwork.date}`}
            className="h-auto max-h-[48svh] object-contain sm:max-h-[55vh]"
            loading="eager"
          />
          <div className="mt-2 text-xs text-gray-600 dark:text-gray-300 space-y-1 text-right">
            <p>{artwork.artist}</p>
            <p>{artwork.title}</p>
            <p>{artwork.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
