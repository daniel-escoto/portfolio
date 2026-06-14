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
      <div className="h-[95vh] flex flex-col">
        <Artwork />
        <Hero />
      </div>
      <ListeningReading />
      <WorkExperience />
      {showAdmin && <MediaAdmin />}
    </div>
  );
}
