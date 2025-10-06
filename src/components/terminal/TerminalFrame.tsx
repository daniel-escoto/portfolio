import type { Command, CommandSummary, LogEntry } from "./types";
import type {
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  MutableRefObject,
} from "react";

interface TerminalFrameProps {
  loginTimestamp: string;
  commandSummaries: CommandSummary[];
  commands: Command[];
  log: LogEntry[];
  suggestion: string | null;
  inputValue: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onCommandClick: (command: Command) => void;
  onClear: () => void;
  terminalEndRef: MutableRefObject<HTMLDivElement | null>;
}

export const TerminalFrame = ({
  loginTimestamp,
  commandSummaries,
  commands,
  log,
  suggestion,
  inputValue,
  onInputChange,
  onKeyDown,
  onSubmit,
  onCommandClick,
  onClear,
  terminalEndRef,
}: TerminalFrameProps) => (
  <div className="min-h-screen w-full bg-[#050709] px-0 py-4 font-mono text-slate-200 transition-colors sm:py-6">
    <div className="w-full">
      <div className="w-full border border-slate-800 bg-[#0b1018]">
        <div className="flex items-center justify-between border-b border-slate-800 bg-[#131821] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <p className="text-xs text-slate-400 sm:text-sm">danielescoto - terminal ~/Desktop/dev</p>
          <span className="hidden text-xs text-slate-600 sm:inline">dark mode locked</span>
        </div>
        <div className="flex h-full flex-col gap-6 px-4 pb-5 pt-5 sm:px-6">
          <div className="space-y-1 text-xs text-slate-500 sm:text-sm">
            <p>Last login: {loginTimestamp} on ttys003</p>
            <p>[danielescoto@Daniels-MacBook-Air] $ session</p>
          </div>
          <div className="space-y-2 border border-slate-800 bg-[#090d14] p-4 text-sm text-slate-200">
            <p>&gt; session.init v1.0.0</p>
            <p>user: Daniel Escoto - founding engineer</p>
            <p>using stack: React / React Native / TypeScript / Go / cloud infra</p>
            <p>
              tip: run <span className="text-emerald-300">/help</span> for available commands or type your own request
            </p>
            <div className="border border-slate-800 bg-[#050709] p-3 text-xs text-slate-300">
              <p>current work: Garage - founding engineer</p>
              <p>focus areas: founding engineering / product systems</p>
              <p>location: san francisco / remote</p>
            </div>
          </div>

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

          <div className="space-y-3">
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
            <form onSubmit={onSubmit} className="w-full">
              <label htmlFor="command-input" className="sr-only">
                Command input
              </label>
              <div className="flex items-center gap-3 border border-slate-800 bg-[#050709] px-4 py-3 text-sm text-slate-200 focus-within:border-emerald-400">
                <span className="text-slate-500">&gt;</span>
                <input
                  id="command-input"
                  value={inputValue}
                  onChange={onInputChange}
                  onKeyDown={onKeyDown}
                  placeholder="type a command and press enter"
                  className="flex-1 bg-transparent text-slate-100 placeholder:text-slate-600 focus:outline-none"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  className="border border-slate-700 bg-[#0b1018] px-3 py-1 text-xs text-slate-400 transition-colors hover:border-emerald-400 hover:text-emerald-300"
                >
                  enter
                </button>
              </div>
              {suggestion && (
                <p className="mt-2 text-xs text-slate-500">
                  suggestion: <span className="text-emerald-300">{suggestion}</span> (press Tab to accept)
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
