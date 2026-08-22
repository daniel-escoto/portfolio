import { getHourArtwork } from "../data/hours";

interface ArtworkProps {
  hour: number;
}

export default function Artwork({ hour }: ArtworkProps) {
  const artwork = getHourArtwork(hour);

  return (
    <div className="flex min-h-0 w-full max-w-2xl flex-1 flex-col px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8">
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="min-h-0 flex-1">
          <img
            key={artwork.image}
            src={artwork.image}
            alt={`${artwork.title} by ${artwork.artist}, ${artwork.date}`}
            className="mx-auto block h-full max-h-full w-auto max-w-full object-contain animate-hour-fade"
            loading="eager"
          />
        </div>
        <div
          className="mt-3 shrink-0 space-y-0.5 text-left text-xs transition-colors duration-700"
          style={{ color: "var(--hour-muted)" }}
        >
          <p>{artwork.artist}</p>
          <p>{artwork.title}</p>
          <p>
            {artwork.date}
            <span className="mx-1.5 opacity-50" aria-hidden="true">
              ·
            </span>
            {artwork.period}
          </p>
        </div>
      </div>
    </div>
  );
}
