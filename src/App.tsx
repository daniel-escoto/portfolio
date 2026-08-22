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
      <div className="flex h-svh min-h-0 w-full flex-col items-center overflow-hidden">
        <Artwork hour={hour} />
        <Hero />
      </div>
      <ListeningReading />
      <WorkExperience />
      {showAdmin && <MediaAdmin />}
    </div>
  );
}
