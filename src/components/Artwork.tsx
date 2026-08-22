import { getHourArtwork } from "../data/hours";

interface ArtworkProps {
  hour: number;
}

export default function Artwork({ hour }: ArtworkProps) {
  const artwork = getHourArtwork(hour);

  return (
    <div className="flex min-h-0 w-full max-w-2xl flex-1 flex-col px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8">
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <img
          key={artwork.image}
          src={artwork.image}
          alt={`${artwork.title} by ${artwork.artist}, ${artwork.date}`}
          className="mx-auto block h-auto w-auto max-w-full max-h-[calc(100%-4.5rem)] shrink-0 object-contain animate-hour-fade"
          loading="eager"
        />
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
        <div className="min-h-0 flex-1" aria-hidden="true" />
      </div>
    </div>
  );
}
