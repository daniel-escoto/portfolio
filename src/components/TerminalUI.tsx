import {
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { ChangeEvent, KeyboardEvent } from "react";
import { collectToolkit, curateProjects, summarizeTimeline } from "./terminal/dataTransforms";
import { TerminalFrame } from "./terminal/TerminalFrame";
import { useCommands } from "./terminal/useCommands";
import type { Command, CommandId, LogEntry } from "./terminal/types";

const LOGIN_FORMAT: Intl.DateTimeFormatOptions = {
  weekday: "short",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

export default function TerminalUI() {
  const [inputValue, setInputValue] = useState("");
  const [log, setLog] = useState<LogEntry[]>([]);

  const loginTimestamp = useMemo(
    () => new Date().toLocaleString("en-US", LOGIN_FORMAT),
    []
  );
  const experience = useMemo(() => summarizeTimeline(), []);
  const featuredProjects = useMemo(() => curateProjects(), []);
  const toolkit = useMemo(() => collectToolkit(), []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const { commands, commandSummaries, commandMap } = useCommands({
    experience,
    featuredProjects,
    toolkit,
  });

  const entryCounter = useRef(0);
  const booted = useRef(false);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  const appendLog = useCallback((entries: LogEntry[]) => {
    setLog((current) => [...current, ...entries]);
  }, []);

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    if (value.startsWith("-")) {
      value = `/${value.slice(1)}`;
    }
    setInputValue(value);
  }, []);

  const runCommand = useCallback(
    (commandId: CommandId, displayValue: string) => {
      const command = commandMap.get(commandId);
      if (!command) {
        return;
      }

      appendLog([
        {
          id: entryCounter.current++,
          role: "user",
          content: displayValue,
        },
        {
          id: entryCounter.current++,
          role: "system",
          content: command.response(),
        },
      ]);
    },
    [appendLog, commandMap]
  );

  const handleCommandClick = useCallback(
    (command: Command) => {
      runCommand(command.id, command.label);
    },
    [runCommand]
  );

  const resolveCommand = useCallback(
    (raw: string): CommandId | null => {
      const trimmed = raw.trim();
      if (!trimmed) {
        return null;
      }

      const sanitized = trimmed.replace(/^\/+/, "").toLowerCase();
      if (sanitized === "?") {
        return "help";
      }

      if (["about", "experience", "projects", "toolkit", "contact", "help"].includes(sanitized)) {
        return sanitized as CommandId;
      }

      return null;
    },
    []
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const commandId = resolveCommand(inputValue);
      const displayValue = inputValue.trim() || "/";
      setInputValue("");

      if (!commandId) {
        appendLog([
          {
            id: entryCounter.current++,
            role: "user",
            content: displayValue,
          },
          {
            id: entryCounter.current++,
            role: "system",
            content: (
              <p className="text-sm text-rose-300">
                Unknown command. Type <span className="text-emerald-300">/help</span> to see supported commands.
              </p>
            ),
          },
        ]);
        return;
      }

      runCommand(
        commandId,
        displayValue.startsWith("/") ? displayValue : `/${displayValue}`
      );
    },
    [appendLog, inputValue, resolveCommand, runCommand]
  );

  const clearLog = useCallback(() => {
    setLog([]);
    entryCounter.current = 0;
    booted.current = true;
    runCommand("help", "/help");
  }, [runCommand]);

  const suggestion = useMemo(() => {
    const trimmed = inputValue.trim();
    if (!trimmed) {
      return null;
    }
    const sanitized = trimmed.replace(/^\/+/, "");
    const match = commands.find((command) => command.id.startsWith(sanitized));
    if (!match) {
      return null;
    }
    const label = match.label;
    if (label === inputValue) {
      return null;
    }
    return label;
  }, [commands, inputValue]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Tab" && suggestion) {
        event.preventDefault();
        setInputValue(suggestion);
        return;
      }

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        clearLog();
      }
    },
    [clearLog, suggestion]
  );

  useEffect(() => {
    if (!booted.current) {
      booted.current = true;
      runCommand("help", "/help");
    }
  }, [runCommand]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [log]);

  return (
    <TerminalFrame
      loginTimestamp={loginTimestamp}
      commandSummaries={commandSummaries}
      commands={commands}
      log={log}
      suggestion={suggestion}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      onKeyDown={handleKeyDown}
      onSubmit={handleSubmit}
      onCommandClick={handleCommandClick}
      onClear={clearLog}
      terminalEndRef={terminalEndRef}
    />
  );
}
