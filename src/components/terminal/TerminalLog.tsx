import type { MutableRefObject } from "react";
import type { LogEntry } from "./types";

interface TerminalLogProps {
  log: LogEntry[];
  terminalEndRef: MutableRefObject<HTMLDivElement | null>;
}

export const TerminalLog = ({ log, terminalEndRef }: TerminalLogProps) => (
  <div className="flex-1 overflow-hidden border border-slate-800 bg-[#050709]">
    <div className="h-full space-y-4 overflow-y-auto px-4 py-5 sm:px-6">
      {log.map((entry) => (
        <div key={entry.id} className="space-y-1 text-sm leading-relaxed text-slate-200">
          {entry.role === "user" ? (
            <p className="text-emerald-300">daniel@terminal % {entry.content}</p>
          ) : (
            <div className="space-y-1">{entry.content}</div>
          )}
        </div>
      ))}
      <div ref={terminalEndRef} />
      {log.length === 0 && <p className="text-sm text-slate-500">awaiting input...</p>}
    </div>
  </div>
);
