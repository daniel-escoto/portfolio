import "./App.css";
import Contact from "./components/Contact";
import Layout from "./layouts/Layout";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";

function App() {
  return (
    <Layout>
      <>
        <Hero />
        {/* TODO: bring back */}
        {/* <Projects /> */}
        <Timeline />
      </>
    </Layout>
  );
}

export default App;
