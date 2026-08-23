import { getHourArtwork } from "../data/hours";

interface ArtworkProps {
  hour: number;
}

export default function Artwork({ hour }: ArtworkProps) {
  const artwork = getHourArtwork(hour);

  return (
    <div id="artwork" className="flex w-full max-w-2xl flex-col items-center">
      <img
        key={artwork.image}
        src={artwork.image}
        alt={`${artwork.title} by ${artwork.artist}, ${artwork.date}`}
        className="mx-auto block h-auto w-auto max-h-[calc(66.67dvh-max(0.75rem,env(safe-area-inset-top))-5.5rem)] max-w-full shrink-0 object-contain animate-hour-fade"
        loading="eager"
      />
      <div
        className="mt-3 w-full shrink-0 space-y-0.5 text-left text-xs transition-colors duration-700"
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
  );
}
