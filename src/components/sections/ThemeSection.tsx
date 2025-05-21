import React from "react";
import { useTheme } from "@/context/ThemeContext";

export const ThemeSection: React.FC = () => {
  const { themesList, currentTheme, setTheme } = useTheme();

  const handleThemeChange = (themeId: string) => {
    setTheme(themeId);
  };

  return (
    <div className="theme-section">
      <h3 className="text-terminal-blue font-semibold mb-3">Terminal Themes</h3>

      <p className="mb-2">
        Current theme:{" "}
        <span className="text-terminal-amber">{currentTheme.name}</span>
      </p>

      <p className="mb-3">Available themes:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        {themesList.map((theme) => (
          <div
            key={theme.id}
            className={`p-3 rounded cursor-pointer transition-all ${
              currentTheme.id === theme.id
                ? "border-2 border-terminal-green"
                : "border border-gray-700 hover:border-terminal-blue"
            }`}
            onClick={() => handleThemeChange(theme.id)}
            style={{ backgroundColor: theme.colors.bg }}
          >
            <h4
              className="font-semibold mb-1"
              style={{ color: theme.colors.text }}
            >
              {theme.name}
            </h4>
            <div className="flex space-x-2">
              <span style={{ color: theme.colors.green }}>$</span>
              <span style={{ color: theme.colors.command }}>command</span>
              <span style={{ color: theme.colors.output }}>output</span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-terminal-comment mt-3">
        Use the <span className="text-terminal-green">theme [name]</span>{" "}
        command to change themes.
        <br />
        For example: <span className="text-terminal-amber">theme retro</span>
      </p>
    </div>
  );
};
