import "./App.css";
import MyImage from "./assets/me3.jpeg";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { timeline, Event, getDuration } from "./data/timeline";

function App() {
  return (
    <>
      <header className="flex justify-end items-center px-6 py-4">
        <nav className="flex space-x-4">
          <a
            href="#projects"
            className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100"
          >
            Projects
          </a>
          <a
            href="#timeline"
            className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100"
          >
            Timeline
          </a>
          <a
            href="#contact"
            className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100"
          >
            Contact
          </a>
        </nav>
      </header>

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

        <Projects />

        <section className="container mx-auto px-6 py-20" id="timeline">
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

        <Contact />
      </body>
      <footer className="bg-stone-500 text-white text-center py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Daniel Escoto
          </div>

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
