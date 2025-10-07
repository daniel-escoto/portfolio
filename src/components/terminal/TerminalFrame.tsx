import type { Command, CommandSummary, LogEntry } from "./types";
import type {
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  MutableRefObject,
} from "react";

import { TerminalCommandForm } from "./TerminalCommandForm";
import { TerminalCommandList } from "./TerminalCommandList";
import { TerminalHeader } from "./TerminalHeader";
import { TerminalLog } from "./TerminalLog";
import { TerminalQuickActions } from "./TerminalQuickActions";
import { TerminalSessionDetails } from "./TerminalSessionDetails";
import { TerminalSessionInfo } from "./TerminalSessionInfo";

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
        <TerminalHeader />
        <div className="flex h-full flex-col gap-6 px-4 pb-5 pt-5 sm:px-6">
          <TerminalSessionInfo loginTimestamp={loginTimestamp} />
          <TerminalSessionDetails />
          <TerminalCommandList commandSummaries={commandSummaries} />
          <TerminalLog log={log} terminalEndRef={terminalEndRef} />
          <div className="space-y-3">
            <TerminalQuickActions
              commands={commands}
              onCommandClick={onCommandClick}
              onClear={onClear}
            />
            <TerminalCommandForm
              inputValue={inputValue}
              suggestion={suggestion}
              onInputChange={onInputChange}
              onKeyDown={onKeyDown}
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
