import { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // ensure styling for dark mode

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full dark:bg-gray-800"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 dark:bg-gray-800">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <div className="flex justify-center">
                  <img
                    className="rounded-lg mb-4"
                    src={project.image}
                    alt={project.name}
                  />
                </div>
                <h3
                  className="text-lg leading-6 font-medium text-gray-900 dark:text-white"
                  id="modal-headline"
                >
                  {project.name}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{project.description}</p>
                </div>
                <div className="flex flex-wrap mt-2">
                  {project.tags.map((tag) => (
                    <span className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mt-2">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-3 space-y-3 sm:px-6 sm:flex sm:flex-row-reverse sm:space-y-0 dark:bg-gray-900">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-stone-500 text-base font-medium text-white hover:bg-stone-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Github
              </a>
            )}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-stone-500 text-base font-medium text-white hover:bg-stone-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Live
              </a>
            )}
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
