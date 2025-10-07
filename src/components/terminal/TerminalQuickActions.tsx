import type { Command } from "./types";

interface TerminalQuickActionsProps {
  commands: Command[];
  onCommandClick: (command: Command) => void;
  onClear: () => void;
}

export const TerminalQuickActions = ({
  commands,
  onCommandClick,
  onClear,
}: TerminalQuickActionsProps) => (
  <div className="flex flex-wrap gap-2">
    {commands.map((command) => (
      <button
        key={command.id}
        type="button"
        onClick={() => onCommandClick(command)}
        className="border border-slate-800 bg-[#0b1018] px-3 py-1 text-xs text-slate-400 transition-colors hover:border-emerald-400 hover:text-emerald-300"
      >
        {command.label}
      </button>
    ))}
    <button
      type="button"
      onClick={onClear}
      className="border border-slate-800 bg-[#0b1018] px-3 py-1 text-xs text-rose-300 transition-colors hover:border-rose-400 hover:text-rose-200"
    >
      clear
    </button>
  </div>
);
