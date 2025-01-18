import { motion } from "framer-motion";
import MyImage from "../assets/me3.jpeg";
import GameOfLife from "./GameOfLife";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="container mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-between">
        <div className="md:mr-6 dark:text-white">
          <h2 className="text-4xl font-bold">Daniel Escoto</h2>
          <h3 className="text-2xl mt-2 mb-8">Software Engineer</h3>
          <p>
            I am passionate about creating impactful digital solutions,
            particularly in frontend development, from websites to mobile
            applications. I enjoy making well-thought-out, accessible, and
            visually appealing user interfaces that deliver seamless,
            high-performance user experiences. Beyond coding, I enjoy exploring
            emerging technologies, cooking, spending time with my dog, and
            traveling. Currently, I am a Software Engineer at{" "}
            <a
              href="https://www.frontdoorhome.com/"
              className="text-blue-600 dark:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontdoor
            </a>
            .
          </p>

          <div className="flex flex-row space-x-4 mt-8">
            <motion.a
              href="https://www.linkedin.com/in/danescoto/"
              className="bg-blue-600  text-white font-bold py-2 px-4 rounded border border-blue-700 dark:bg-blue-700 dark:border-blue-900"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/daniel-escoto"
              className="bg-gray-600  text-white font-bold py-2 px-4 rounded border border-gray-700 dark:bg-gray-700  dark:border-gray-900"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </motion.a>
            <motion.a
              href="/resume.pdf"
              className="bg-green-600  text-white font-bold py-2 px-4 rounded border border-green-700 dark:bg-green-700  dark:border-green-900"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </motion.a>
          </div>
        </div>

        <div className="flex-none flex items-center justify-center">
          <GameOfLife />
        </div>
      </div>
    </section>
  );
}
