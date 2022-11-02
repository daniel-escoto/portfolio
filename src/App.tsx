import "./App.css";
import MyImage from "./assets/me3.jpeg";
import ProjectPreview from "./components/ProjectPreview";
import { projects } from "./data/projects";
import { timeline, Event, getDuration } from "./data/timeline";

function App() {
  return (
    <>
      <body className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="hero">
          <div className="container mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-between">
            <div className="md:mr-6 dark:text-white">
              <h2 className="text-4xl font-bold ">Daniel Escoto</h2>
              <h3 className="text-2xl mt-2 mb-8">
                SF Bay Area Software Engineer
              </h3>
              <p>
                I'm a software engineer based in the SF Bay Area. I enjoy
                building things that live on the internet, whether that be
                websites, mobile applications, or anything in between. My goal
                is to always build products that provide pixel-perfect,
                performant experiences.
              </p>
            </div>
            <div className="flex-none flex items-center justify-center">
              <img
                className="rounded-full w-36 h-36 mb-8 md:mb-0 md:w-48 md:h-48 dark:outline outline-white"
                src={MyImage}
                alt="Daniel Escoto"
              />
            </div>
          </div>
        </section>

        {/* projects section */}
        <section className="container mx-auto px-6 py-20 dark:text-white">
          <h2 className="text-4xl font-bold mb-8">Projects</h2>
          <div className="flex flex-wrap -mx-6">
            {projects.map((project) => (
              <ProjectPreview project={project} />
            ))}
          </div>
        </section>

        {/* timeline section */}
        <section className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-8 dark:text-white">Timeline</h2>

          <div>
            {timeline.map((event: Event) => (
              <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-800">
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-stone-200 dark:bg-stone-800 rounded-full mt-1.5 -left-1.5 border border-white dark:border-black"></div>
                  <div className="flex flex-row items-center flex-wrap">
                    <div
                      className={`text-sm text-white dark:text-black font-semibold rounded-full px-3 py-1 mr-2 ${
                        event.endDate
                          ? "bg-stone-500"
                          : "bg-stone-200 text-stone-500 dark:bg-stone-500 dark:text-stone-200"
                      }`}
                    >
                      {event.endDate ? event.endDate.getFullYear() : "Present"}
                    </div>

                    <div className="text-lg font-semibold ml-2 dark:text-white">
                      {event.title}
                    </div>

                    <div className="text-sm text-gray-500 font-semibold ml-2">
                      ({getDuration(event)})
                    </div>
                  </div>

                  {/* description as bullet points, with visible bullets, and gap between each bullet */}
                  <ul className="ml-6 mt-2 list-disc list-inside">
                    {event.description.map((desc) => (
                      <li className="flex items-start mb-2">
                        <div className="text-gray-500 text-sm font-semibold mr-2">
                          •
                        </div>
                        <div className="text-gray-500 text-sm font-semibold">
                          {desc}
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* tags */}
                  <div className="flex flex-wrap ml-6 mt-2">
                    {event.tags.map((tag) => (
                      <span className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mt-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                </li>
              </ol>
            ))}
          </div>
        </section>

        {/* contact section */}
        <section className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-8 dark:text-white">Contact</h2>
          <form
            className="w-full"
            action="https://formspree.io/f/xnqoqzjy"
            method="POST"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2"
                  htmlFor="grid-name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-black focus:border-gray-500"
                  id="grid-name"
                  type="text"
                  placeholder="Jane"
                  name="name"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2"
                  htmlFor="grid-email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-black focus:border-gray-500"
                  id="grid-email"
                  type="email"
                  placeholder="jane@info.com"
                  name="_replyto"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2"
                  htmlFor="grid-message"
                >
                  Message
                </label>
                <textarea
                  className="no-resize appearance-none block w-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-black focus:border-gray-500 h-48 resize-none"
                  id="grid-message"
                  name="message"
                ></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button
                  className="shadow bg-stone-500 hover:bg-stone-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Send
                </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </section>
      </body>
      {/* footer */}
      {/* all rights reserved */}
      <footer className="bg-stone-500 text-white text-center py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Daniel Escoto
          </div>

          {/* links to github and linkedin */}
          <div className="flex items-center">
            <a
              href="https://github.com/daniel-escoto"
              className="text-white hover:text-gray-200 mx-2"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/descoto"
              className="text-white hover:text-gray-200 mx-2"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
