import Chess from "../assets/qwik-chess.png";
import AaronNavarro from "../assets/aaronnavarro.png";
import Mirror from "../assets/mirror.png";
import Portfolio from "../assets/portfolio.png";
import SecretSanta from "../assets/secret_santa.png";

export interface Project {
  name: string;
  description: string;
  url?: string;
  image: string;
  tags: string[];
  github?: string;
}

export const projects: Project[] = [
  {
    name: "Secret Santa Generator",
    description:
      "A simple web app that generates secret santa pairs for a group of people. Users are allowed to input invalid pairs and the app will generate pairs that do not include those invalid pairs.",
    url: "https://bejewelled-entremet-25560d.netlify.app/",
    image: SecretSanta,
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/daniel-escoto/secret-santa",
  },
  {
    name: "Portfolio Website",
    description:
      "This website is built with React, Vite, and TypeScript. It is hosted on Netlify and uses GetForm for the contact form.",
    image: Portfolio,
    tags: ["React", "TypeScript", "Vite", "Netlify", "GetForm"],
    github: "https://github.com/daniel-escoto/portfolio",
  },
  {
    name: "Qwik-Chess",
    description:
      "A chess game made from scratch using Qwik and TypeScript. Features include a move validator, a move generator, and a move maker. Currently in development.",
    image: Chess,
    tags: ["TypeScript", "Qwik", "Chess"],
    github: "https://github.com/daniel-escoto/qwik-chess",
  },
  {
    name: "aaron-navarro.com",
    description:
      "A photography portfolio website made with React and TypeScript. Features include a custom image gallery, a custom image viewer, and an easy to use admin panel.",
    url: "https://aaronavarro.com/",
    image: AaronNavarro,
    tags: ["TypeScript", "React", "Firebase", "Bootstrap", "HTML", "CSS"],
  },
  {
    name: "Mirror - A Sentiment Journal",
    description:
      "A journaling app that uses sentiment analysis to help you understand your emotions. Features include a custom markdown editor, and a color-coded calendar to help you visualize your mood.",
    github: "https://github.com/daniel-escoto/mirror",
    tags: ["JavaScript", "React", "Firebase", "HTML", "CSS", "Flask", "Python"],
    url: "https://www.youtube.com/watch?v=lrgFGATcXWU",
    image: Mirror,
  },
  {
    name: "Tiny Language Interpreter",
    description:
      "A tiny language interpreter made in Python. Features include a lexer, a parser, and an interpreter.",
    github: "https://github.com/daniel-escoto/tli",
    tags: ["Python"],
    image:
      "data:image/jpeg;base64,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",
  },
  {
    name: "HTTP Server",
    description:
      "HTTP server written in low-level C. Handles PUT and GET protocols. Implements multi-threading, file redundancy, and file backups.",
    tags: ["C", "HTTP"],
    github: "https://github.com/daniel-escoto/http",
    image:
      "https://as1.ftcdn.net/v2/jpg/04/60/20/28/1000_F_460202812_rQ1GKG1EAEV8TR8g12caf73d9r8nCT29.jpg",
  },
  // prolog project that calculates optimal flight schedules for a given set of flights and airports
  {
    name: "Prolog Flights",
    description:
      "Prolog program that calculates optimal flight schedules for a given set of flights and airports.",
    tags: ["Prolog"],
    github: "https://github.com/daniel-escoto/prolog-flights",
    image:
      "https://news.delta.com/sites/default/files/styles/scale_1200px_wide_leaderbio/public/US_10_15-01_0.png?itok=KbAbqMJc",
  },
];

export function getProjectId(project: Project): string {
  return project.name.replace(/\s/g, "-").toLowerCase();
}
