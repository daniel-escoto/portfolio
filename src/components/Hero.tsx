import { motion } from "framer-motion";
import GameOfLife from "./GameOfLife";
import Link from "./Link";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="container mx-auto  py-20 flex flex-col md:flex-row items-between gap-10">
        <div className="flex-none flex items-center justify-center">
          <GameOfLife />
        </div>
        <div className="md:mr-6 dark:text-white">
          <h2 className="text-4xl font-bold mb-4">Daniel Escoto</h2>
          <p>
            I'm a Software Engineer focused on building early-stage startups.
            Previously, I was a founding engineer at Techstars-backed Perform.
            I'm currently joining Y Combinator-backed{" "}
            <a
              href="https://www.withgarage.com/"
              className="text-blue-600 dark:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Garage
            </a>{" "}
            as a founding engineer, where we're building a marketplace for fire
            trucks and emergency equipment. Let's connect and discuss how we can
            build something great together.
          </p>

          <div className="flex flex-row space-x-4 mt-8">
            <Link
              href="https://www.linkedin.com/in/danescoto/"
              className="bg-blue-600  text-white font-bold py-2 px-4 rounded border border-blue-700 dark:bg-blue-700 dark:border-blue-900"
            >
              LinkedIn
            </Link>

            <Link
              href="https://github.com/daniel-escoto"
              className="bg-gray-600  text-white font-bold py-2 px-4 rounded border border-gray-700 dark:bg-gray-700  dark:border-gray-900"
            >
              GitHub
            </Link>
            <Link
              href="/resume.pdf"
              className="bg-green-600  text-white font-bold py-2 px-4 rounded border border-green-700 dark:bg-green-700  dark:border-green-900"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
