import Artwork from "./components/Artwork";
import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";
import ListeningReading from "./components/ListeningReading";
import MediaAdmin from "./components/MediaAdmin";
import { useLocalHour } from "./hooks/useLocalHour";
import { useHourTheme } from "./hooks/useHourTheme";

export default function App() {
  const hour = useLocalHour();
  useHourTheme(hour);

  // Show admin panel if URL has ?admin=true (you can remove this component when not needed)
  const showAdmin =
    new URLSearchParams(window.location.search).get("admin") === "true";

  return (
    <div className="min-h-screen transition-colors duration-700 hour-page">
      <div className="grid h-dvh min-h-0 w-full grid-rows-[minmax(0,2fr)_minmax(0,1fr)] overflow-hidden">
        <div className="flex min-h-0 items-center justify-center px-4 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6 lg:px-8">
          <Artwork hour={hour} />
        </div>
        <div className="flex min-h-0 flex-col items-center justify-end px-4 pb-[max(2rem,calc(env(safe-area-inset-bottom,0px)+3.5rem))] sm:px-6 lg:px-8 lg:pb-[max(2.5rem,env(safe-area-inset-bottom))]">
          <Hero />
        </div>
      </div>
      <ListeningReading />
      <WorkExperience />
      {showAdmin && <MediaAdmin />}
    </div>
  );
}
