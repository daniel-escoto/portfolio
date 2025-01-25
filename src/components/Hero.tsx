import { motion } from "framer-motion";
import GameOfLife from "./GameOfLife";
import Link from "./Link";

const HeroLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      href={href}
      className="relative font-medium text-gray-800 dark:text-gray-200 group"
    >
      {text}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0" />
    </Link>
  );
};

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

          <div className="flex flex-row items-start space-x-4 mt-8">
            <HeroLink
              text="LinkedIn"
              href="https://www.linkedin.com/in/danescoto/"
            />

            <HeroLink text="GitHub" href="https://github.com/daniel-escoto" />
          </div>
        </div>
      </div>
    </section>
  );
}
