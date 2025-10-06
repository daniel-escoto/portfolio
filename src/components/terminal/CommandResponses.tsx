import type { Command, ExperienceSummary, FeaturedProject } from "./types";

export const AboutContent = () => (
  <div className="space-y-3 text-sm leading-relaxed text-slate-200">
    <p>
      I'm Daniel Escoto, a founding engineer who helps early-stage teams ship
      ambitious software while the roadmap is still changing every week.
    </p>
    <p>
      Right now I'm joining Garage (YC W24) to build the marketplace for emergency
      apparatus. I previously helped Techstars-backed Perform launch its coaching
      platform and supported Frontdoor in modernising customer experiences across
      multiple apps.
    </p>
    <p>
      I enjoy building resilient systems, launching 0-&gt;1 products, and pairing
      with founders to find leverage fast.
    </p>
  </div>
);

export const ExperienceContent = ({ experience }: { experience: ExperienceSummary[] }) => (
  <div className="space-y-3">
    {experience.map((item) => (
      <div
        key={item.title}
        className="border border-slate-800 bg-[#090d14] p-4 text-sm text-slate-200"
      >
        <div className="flex flex-col gap-1 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm text-slate-200">{item.title}</span>
          <span>{item.timeframe}</span>
        </div>
        <ul className="mt-2 space-y-1 leading-relaxed">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="text-emerald-300">&gt;</span>
              <span>{bullet}</span>
            </li>
          ))}
          {item.moreCount > 0 && (
            <li className="text-xs text-slate-400">
              +{item.moreCount} additional contributions in this role
            </li>
          )}
          {item.url && (
            <li>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[11px] uppercase tracking-widest text-emerald-300 hover:underline"
              >
                open company site
              </a>
            </li>
          )}
        </ul>
      </div>
    ))}
  </div>
);

export const ProjectsContent = ({ projects }: { projects: FeaturedProject[] }) => (
  <div className="space-y-3">
    {projects.map((project) => (
      <div
        key={project.name}
        className="border border-slate-800 bg-[#090d14] p-4 text-sm text-slate-200"
      >
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <span className="text-base text-slate-100">{project.name}</span>
          <div className="flex gap-4 text-xs text-slate-400">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-300"
              >
                live
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-300"
              >
                code
              </a>
            )}
          </div>
        </div>
        <p className="mt-2 leading-relaxed text-slate-300">{project.description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={`${project.name}-${tag}`}
              className="border border-emerald-400/50 px-2 py-1 text-[11px] uppercase tracking-widest text-emerald-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const ToolkitContent = ({ toolkit }: { toolkit: string[] }) => (
  <div className="space-y-2 text-sm text-slate-200">
    <p>
      Product-minded engineer with experience across frontend, backend, infra,
      and growth work. Here is the stack I rely on most often:
    </p>
    <div className="flex flex-wrap gap-2">
      {toolkit.map((item) => (
        <span
          key={item}
          className="border border-slate-700 bg-[#050709] px-3 py-1 text-xs text-slate-200"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

export const ContactContent = () => (
  <div className="space-y-3 text-sm text-slate-200">
    <p>
      Ready to collaborate or want a sounding board? Reach out through the
      channels below and I will reply quickly.
    </p>
    <ul className="space-y-2">
      <li>
        LinkedIn:
        <a
          href="https://www.linkedin.com/in/danescoto/"
          target="_blank"
          rel="noreferrer"
          className="ml-2 text-emerald-300 hover:underline"
        >
          linkedin.com/in/danescoto
        </a>
      </li>
      <li>
        GitHub:
        <a
          href="https://github.com/daniel-escoto"
          target="_blank"
          rel="noreferrer"
          className="ml-2 text-emerald-300 hover:underline"
        >
          github.com/daniel-escoto
        </a>
      </li>
      <li>
        Want a direct intro?
        <span className="ml-2 text-slate-300">
          Send me a short note on LinkedIn and I'll share preferred contact details.
        </span>
      </li>
    </ul>
  </div>
);

export const HelpContent = ({ commands }: { commands: Command[] }) => (
  <div className="space-y-1 text-sm text-slate-200">
    <p>commands available:</p>
    {commands.map((command) => (
      <p key={command.id} className="whitespace-pre pl-2 text-slate-300">
        {`${command.label.padEnd(12)} - ${command.description}`}
      </p>
    ))}
    <p className="text-xs text-slate-500">type a command or use the buttons below</p>
  </div>
);
