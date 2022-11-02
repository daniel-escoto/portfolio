export interface Project {
  name: string;
  description: string;
  url: string;
  image: string;
  tags: string[];
  github?: string;
}

export const projects: Project[] = [
  {
    name: "Vite",
    description:
      "Vite is a new breed of frontend build tool that significantly improves the frontend development experience.",
    url: "https://vitejs.dev/",
    image: "https://vitejs.dev/logo.svg",
    tags: [
      "react",
      "vue",
      "svelte",
      "typescript",
      "esbuild",
      "bundler",
      "framework",
      "tooling",
    ],
    github: "github.com/vitejs/vite",
  },
  {
    name: "React",
    description: "A JavaScript library for building user interfaces",
    url: "https://reactjs.org/",
    image: "https://reactjs.org/logo-og.png",
    tags: ["react", "javascript", "framework", "tooling"],
    github: "github.com/facebook/react",
  },
  {
    name: "Vue",
    description: "The Progressive JavaScript Framework",
    url: "https://vuejs.org/",
    image: "https://vuejs.org/images/logo.png",
    tags: ["vue", "javascript", "framework", "tooling"],
    github: "github.com/vuejs/vue",
  },
  {
    name: "Svelte",
    description: "Cybernetically enhanced web apps",
    url: "https://svelte.dev/",
    image: "https://svelte.dev/svelte-logo-horizontal.svg",
    tags: ["svelte", "javascript", "framework", "tooling"],
    github: "github.com/sveltejs/svelte",
  },
];

export function getProjectId(project: Project): string {
  return project.name.replace(/\s/g, "-").toLowerCase();
}
