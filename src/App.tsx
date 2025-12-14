import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";
import ListeningReading from "./components/ListeningReading";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ListeningReading />
      <WorkExperience />
    </div>
  );
}
