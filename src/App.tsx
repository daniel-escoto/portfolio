import Artwork from "./components/Artwork";
import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";
import ListeningReading from "./components/ListeningReading";
import MediaAdmin from "./components/MediaAdmin";
import { activeSeasonConfig } from "./data/seasons";

export default function App() {
  // Show admin panel if URL has ?admin=true (you can remove this component when not needed)
  const showAdmin =
    new URLSearchParams(window.location.search).get("admin") === "true";

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${activeSeasonConfig.colors.bodyLight} ${activeSeasonConfig.colors.bodyDark}`}
    >
      <div className="flex min-h-[calc(100svh-7rem)] flex-col sm:min-h-[95vh]">
        <Artwork />
        <Hero />
      </div>
      <ListeningReading />
      <WorkExperience />
      {showAdmin && <MediaAdmin />}
    </div>
  );
}
