import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { TerminalWindow } from "./TerminalWindow";
import { TerminalPrompt } from "./TerminalPrompt";
import { TerminalOutput } from "./TerminalOutput";
import { TerminalCommands } from "./TerminalCommands";

interface TerminalProps {
  className?: string;
  welcomeMessage?: boolean;
}

const asciiArt = `
┌───────────────────────────────────────┐
│  ██████╗ ██████╗ ███████╗███╗   ███╗  │
│  ██╔══██╗██╔══██╗██╔════╝████╗ ████║  │
│  ██████╔╝██████╔╝█████╗  ██╔████╔██║  │
│  ██╔═══╝ ██╔══██╗██╔══╝  ██║╚██╔╝██║  │
│  ██║     ██║  ██║███████╗██║ ╚═╝ ██║  │
│  ╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝  │
│                                       │
│    ╔═════════════════════════════╗    │
│    ║  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ║    │
│    ║  ░░░░░░░░░░░░░░░░░░░░░░░░░  ║    │
│    ║  █████████████████████████  ║    │
│    ╚═════════════════════════════╝    │
└───────────────────────────────────────┘
`;

const Terminal: React.FC<TerminalProps> = ({
  className,
  welcomeMessage = true,
}) => {
  const [history, setHistory] = useState<
    { type: "command" | "output"; content: React.ReactNode }[]
  >([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (welcomeMessage) {
      const initialMessages = [
        {
          type: "output" as const,
          content: (
            <div className="mb-4">
              <pre className="text-terminal-green text-xs leading-tight font-mono whitespace-pre overflow-x-auto">
                {asciiArt}
              </pre>
              <div className="mt-4">
                <p className="text-terminal-green font-bold">
                  System reboot successful!
                </p>
                <p className="text-terminal-output">
                  Type <span className="text-terminal-amber">'help'</span> to
                  see available commands
                </p>
              </div>
            </div>
          ),
        },
      ];
      setHistory(initialMessages);
    }
  }, [welcomeMessage]);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommandSubmit = (command: string) => {
    if (!command.trim()) return;

    // Add command to history
    const newHistory = [
      ...history,
      { type: "command" as const, content: command },
    ];

    // Process command
    const output = TerminalCommands(command);

    // If command is 'clear', reset history to initial state
    if (command.trim().toLowerCase() === "clear") {
      if (welcomeMessage) {
        setHistory([
          {
            type: "output" as const,
            content: (
              <div className="mb-4">
                <pre className="text-terminal-green text-xs leading-tight font-mono whitespace-pre overflow-x-auto">
                  {asciiArt}
                </pre>
                <div className="mt-4">
                  <p className="text-terminal-green font-bold">
                    Terminal cleared
                  </p>
                  <p className="text-terminal-output">
                    Type <span className="text-terminal-amber">'help'</span> to
                    see available commands
                  </p>
                </div>
              </div>
            ),
          },
        ]);
      } else {
        setHistory([]);
      }
    } else {
      // For non-clear commands, add output to history
      newHistory.push({ type: "output" as const, content: output });
      setHistory(newHistory);
    }

    setCurrentCommand("");

    // Update command history for up/down navigation
    setCommandHistory((prev) => [command, ...prev]);
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (
        commandHistory.length > 0 &&
        historyIndex < commandHistory.length - 1
      ) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentCommand("");
      }
    }
  };

  return (
    <TerminalWindow className={cn(className)} title="prem@portfolio: ~">
      <div
        ref={terminalBodyRef}
        className="terminal-body h-full overflow-y-auto"
      >
        {history.map((item, i) => (
          <div
            key={i}
            className={`${
              item.type === "command" ? "terminal-prompt" : "command-output"
            }`}
          >
            {item.type === "command" ? (
              <TerminalPrompt command={item.content as string} readOnly />
            ) : (
              <TerminalOutput>{item.content}</TerminalOutput>
            )}
          </div>
        ))}
        <TerminalPrompt
          command={currentCommand}
          onChange={(e) => setCurrentCommand(e.target.value)}
          onSubmit={handleCommandSubmit}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </div>
    </TerminalWindow>
  );
};

export default Terminal;
