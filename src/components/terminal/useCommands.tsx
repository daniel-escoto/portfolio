import { useMemo } from "react";
import {
  AboutContent,
  ContactContent,
  ExperienceContent,
  HelpContent,
  ProjectsContent,
  ToolkitContent,
} from "./CommandResponses";
import type {
  Command,
  CommandId,
  CommandSummary,
  ExperienceSummary,
  FeaturedProject,
} from "./types";

interface UseCommandsArgs {
  experience: ExperienceSummary[];
  featuredProjects: FeaturedProject[];
  toolkit: string[];
}

export const useCommands = ({ experience, featuredProjects, toolkit }: UseCommandsArgs) => {
  const commands = useMemo<Command[]>(() => {
    const list: Command[] = [
      {
        id: "help",
        label: "/help",
        description: "List every command",
        response: () => null,
      },
      {
        id: "about",
        label: "/about",
        description: "Who I am and what I am focused on",
        response: () => <AboutContent />,
      },
      {
        id: "experience",
        label: "/experience",
        description: "Highlights from recent roles",
        response: () => <ExperienceContent experience={experience} />,
      },
      {
        id: "projects",
        label: "/projects",
        description: "Selected builds and experiments",
        response: () => <ProjectsContent projects={featuredProjects} />,
      },
      {
        id: "toolkit",
        label: "/toolkit",
        description: "Languages, frameworks, and platforms I reach for",
        response: () => <ToolkitContent toolkit={toolkit} />,
      },
      {
        id: "contact",
        label: "/contact",
        description: "How to get a conversation started",
        response: () => <ContactContent />,
      },
    ];

    list[0].response = () => <HelpContent commands={list.filter((command) => command.id !== "help")} />;

    return list;
  }, [experience, featuredProjects, toolkit]);

  const commandSummaries = useMemo<CommandSummary[]>(
    () => commands.map(({ id, description }) => ({ id, description })),
    [commands]
  );

  const commandMap = useMemo(() => {
    const map = new Map<CommandId, Command>();
    commands.forEach((command) => map.set(command.id, command));
    return map;
  }, [commands]);

  return { commands, commandSummaries, commandMap };
};
