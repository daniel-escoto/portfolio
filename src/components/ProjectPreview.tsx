import { Project } from "../data/projects";

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 px-6 py-3">
      <div className="bg-white rounded shadow py-2 dark:bg-gray-900">
        <img
          className="h-48 w-full rounded-t object-cover"
          src={project.image}
          alt={project.name}
        />
        <p className="block text-gray-800 dark:text-gray-200 font-bold text-xl hover:text-gray-900 dark:hover:text-gray-100 px-4 pt-4 pb-2">
          {project.name}
        </p>

        <div className="px-4 pb-4">
          <p className="line-clamp-2 text-gray-600 dark:text-gray-400">
            {project.description}
          </p>
        </div>

        <div className="px-4 pb-4">
          <span className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2">
            {project.tags[0]}
          </span>
          <span className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2">
            +{project.tags.length - 1}
          </span>
        </div>

        <div className="px-4 pb-4">
          {project.github ? (
            <a
              href={project.github}
              className="inline-block bg-blue-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 hover:bg-blue-300 dark:bg-blue-800 dark:hover:bg-blue-700 dark:text-gray-300"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          ) : (
            <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 dark:bg-gray-800 dark:text-gray-300"></span>
          )}

          {project.url ? (
            <a
              href={project.url}
              className="inline-block bg-green-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 hover:bg-green-300 dark:bg-green-800 dark:hover:bg-green-700 dark:text-gray-300"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          ) : (
            <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 dark:bg-gray-800 dark:text-gray-300"></span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectPreview;
