import type {
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
} from "react";

interface TerminalCommandFormProps {
  inputValue: string;
  suggestion: string | null;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export const TerminalCommandForm = ({
  inputValue,
  suggestion,
  onInputChange,
  onKeyDown,
  onSubmit,
}: TerminalCommandFormProps) => (
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
);
