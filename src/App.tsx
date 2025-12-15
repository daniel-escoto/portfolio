import Artwork from "./components/Artwork";
import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";
import ListeningReading from "./components/ListeningReading";

export default function App() {
  return (
    <div className="min-h-screen">
      <div className="h-[95vh] flex flex-col">
        <Artwork />
        <Hero />
      </div>
      <ListeningReading />
      <WorkExperience />
    </div>
  );
}
