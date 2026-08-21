import { getHourArtwork } from "../data/hours";

interface ArtworkProps {
  hour: number;
}

export default function Artwork({ hour }: ArtworkProps) {
  const artwork = getHourArtwork(hour);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
      <div className="mx-auto flex flex-col items-center">
        <div className="inline-flex flex-col">
          <div className="relative">
            <img
              key={artwork.image}
              src={artwork.image}
              alt={`${artwork.title} by ${artwork.artist}, ${artwork.date}`}
              className="h-auto max-h-[48svh] object-contain sm:max-h-[55vh] animate-hour-fade"
              loading="eager"
            />
          </div>
          <div
            className="mt-2 text-xs space-y-1 text-right transition-colors duration-700"
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
    </div>
  );
}
