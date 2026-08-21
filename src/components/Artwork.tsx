import { getHourArtwork } from "../data/hours";

interface ArtworkProps {
  hour: number;
}

export default function Artwork({ hour }: ArtworkProps) {
  const artwork = getHourArtwork(hour);

  return (
    <div className="flex min-h-0 w-full flex-1 flex-col px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8">
      <div className="mx-auto w-full max-w-2xl shrink-0">
        <img
          key={artwork.image}
          src={artwork.image}
          alt={`${artwork.title} by ${artwork.artist}, ${artwork.date}`}
          className="block h-auto w-full max-h-[calc(100dvh-14rem)] object-contain object-left animate-hour-fade"
          loading="eager"
        />
        <div
          className="mt-3 space-y-0.5 text-left text-xs transition-colors duration-700"
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
      <div className="min-h-0 flex-1" aria-hidden="true" />
    </div>
  );
}
