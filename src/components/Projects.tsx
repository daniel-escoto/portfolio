import { useState } from "react";
import { projects, Project } from "../data/projects";
import ProjectModal from "./ProjectModal";
import ProjectPreview from "./ProjectPreview";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  function handleClose() {
    setSelectedProject(null);
  }

  function handleSelect(project: Project) {
    setSelectedProject(project);
  }

  const projectsToDisplay = showAll ? projects : projects.slice(0, 3);

  return (
    <>
      <section
        className="container mx-auto px-6 py-20 dark:text-white"
        id="projects"
      >
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="flex flex-wrap -mx-6">
          {projectsToDisplay.map((project) => (
            <ProjectPreview project={project} handleSelect={handleSelect} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            className="bg-stone-500 text-white font-semibold py-2 px-4 rounded-md"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      </section>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleClose} />
      )}
    </>
  );
}
