import { motion } from "framer-motion";
import GameOfLife from "./GameOfLife";
import Link from "./Link";

const HeroLink = ({
  text,
  href,
  color,
}: {
  text: string;
  href: string;
  color: string;
}) => {
  return (
    <Link
      href={href}
      className={`bg-${color}-600  text-white font-bold py-2 px-4 rounded border border-${color}-700 dark:bg-${color}-700  dark:border-${color}-900`}
    >
      {text}
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

          <div className="flex flex-row space-x-4 mt-8">
            <HeroLink
              text="LinkedIn"
              href="https://www.linkedin.com/in/danescoto/"
              color="blue"
            />

            <HeroLink
              text="GitHub"
              href="https://github.com/daniel-escoto"
              color="gray"
            />
            <HeroLink text="Resume" href="/resume.pdf" color="green" />
          </div>
        </div>
      </div>
    </section>
  );
}
