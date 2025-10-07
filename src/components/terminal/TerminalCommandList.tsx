import type { CommandSummary } from "./types";

interface TerminalCommandListProps {
  commandSummaries: CommandSummary[];
}

export const TerminalCommandList = ({ commandSummaries }: TerminalCommandListProps) => (
  <div className="space-y-2 text-sm text-slate-300">
    <p>Commands:</p>
    <div className="space-y-1 text-xs text-slate-400 sm:text-sm">
      {commandSummaries.map(({ id, description }) => (
        <p key={id}>
          /{id} - {description}
        </p>
      ))}
    </div>
    <p className="text-xs text-slate-500">? maps to /help</p>
    <p className="text-xs text-slate-500">tip: start with "-" to autocomplete commands</p>
  </div>
);
