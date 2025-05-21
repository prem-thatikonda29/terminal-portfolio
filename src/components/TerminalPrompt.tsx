import React, { useRef, useEffect, useState } from "react";
import { handleTabCompletion } from "./TerminalCommands";

interface TerminalPromptProps {
  command: string | React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (command: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  autoFocus?: boolean;
}

export const TerminalPrompt: React.FC<TerminalPromptProps> = ({
  command,
  onChange,
  onSubmit,
  onKeyDown,
  readOnly = false,
  autoFocus = true,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState(command as string);

  useEffect(() => {
    if (!autoFocus || readOnly) return;

    // Focus on initial render
    if (inputRef.current) {
      inputRef.current.focus();
    }

    // Focus when window loads (after all resources)
    const handleLoad = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    // Focus when visibility changes (tab becomes visible)
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && inputRef.current) {
        inputRef.current.focus();
      }
    };

    // Ensure focus when window loads or becomes visible
    window.addEventListener("load", handleLoad);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Set a slightly delayed focus for after transitions/animations
    const delayedFocus = setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 500);

    return () => {
      window.removeEventListener("load", handleLoad);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearTimeout(delayedFocus);
    };
  }, [autoFocus, readOnly]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSubmit) {
      onSubmit(e.currentTarget.value);
      // Clear the input after command execution
      setInputValue("");
      if (onChange) {
        const syntheticEvent = {
          target: { value: "" },
          currentTarget: { value: "" },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(syntheticEvent);
      }
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }

    if (e.key === "Tab") {
      e.preventDefault(); // Prevent default tab behavior
      const completedCommand = handleTabCompletion(e.currentTarget.value);
      setInputValue(completedCommand);
      if (onChange) {
        const syntheticEvent = {
          target: { value: completedCommand },
          currentTarget: { value: completedCommand },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(syntheticEvent);
      }
    }

    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="terminal-prompt mb-2">
      <span className="prompt-symbol">$</span>
      {readOnly ? (
        <span className="ml-2 text-terminal-command">{command}</span>
      ) : (
        <div className="relative inline-flex flex-grow">
          <input
            ref={inputRef}
            type="text"
            className="command-input caret-transparent"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            readOnly={readOnly}
            autoFocus={autoFocus}
            aria-label="Terminal command input"
          />
          {/* Custom blinking cursor */}
          <div className="absolute top-0 left-0 h-full pointer-events-none">
            <span className="inline-block text-terminal-command whitespace-pre">
              {inputValue}
            </span>
            <span className="cursor"></span>
          </div>
        </div>
      )}
    </div>
  );
};
