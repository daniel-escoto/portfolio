import "./App.css";
import MyImage from "./assets/me3.jpeg";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { timeline, Event, getDuration } from "./data/timeline";
import { motion } from "framer-motion";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Layout>
      <>
        <div className="flex flex-col justify-center items-center">
          <section className="hero">
            <div className="container mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-between">
              <div className="md:mr-6 dark:text-white">
                <h2 className="text-4xl font-bold ">Daniel Escoto</h2>
                <h3 className="text-2xl mt-2 mb-8">Software Engineer</h3>
                <p>
                  I'm a software engineer. I enjoy building things that live on
                  the internet, whether that be websites, mobile applications,
                  or anything in between. My goal is to always build products
                  that provide pixel-perfect, performant experiences. Besides
                  programming, I enjoy learning about new technologies, brewing
                  espresso, spending time with my dog, and travelling.
                </p>

                <div className="flex flex-row space-x-4 mt-8">
                  <motion.a
                    href="https://www.linkedin.com/in/danescoto/"
                    className="bg-blue-600  text-white font-bold py-2 px-4 rounded border border-blue-700 dark:bg-blue-700 dark:border-blue-900"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    target="_blank"
                  >
                    LinkedIn
                  </motion.a>
                  <motion.a
                    href="https://github.com/daniel-escoto"
                    className="bg-gray-600  text-white font-bold py-2 px-4 rounded border border-gray-700 dark:bg-gray-700  dark:border-gray-900"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    target="_blank"
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href="https://drive.google.com/file/d/19fMGdeaoa_JtYFSLVOdcyWxUBNImW84m/view?usp=sharing"
                    className="bg-green-600  text-white font-bold py-2 px-4 rounded border border-green-700 dark:bg-green-700  dark:border-green-900"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    target="_blank"
                  >
                    Resume
                  </motion.a>
                </div>
              </div>

              <div className="flex-none flex items-center justify-center">
                <motion.img
                  className="rounded-full w-36 h-36 mb-8 md:mb-0 md:w-48 md:h-48"
                  src={MyImage}
                  alt="Daniel Escoto"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>
            </div>
          </section>
        </div>

        <Projects />

        <section className="container mx-auto px-6 py-20" id="timeline">
          <h2 className="text-4xl font-bold mb-8 dark:text-white">Timeline</h2>

          <div>
            {timeline.map((event: Event) => (
              <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-600">
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-stone-200 dark:bg-stone-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-600"></div>
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

                    <div className="text-sm text-gray-500 ml-2 dark:text-gray-400">
                      ({getDuration(event)})
                    </div>
                  </div>

                  <ul className="ml-6 mt-2 list-disc list-inside">
                    {event.description.map((desc) => (
                      <li className="flex items-start mb-2">
                        <div className="text-sm text-gray-500 font-semibold mr-2">
                          •
                        </div>
                        <div className="text-sm text-gray-800 dark:text-gray-200">
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
      </>
    </Layout>
  );
}

export default App;
