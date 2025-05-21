export interface TerminalTheme {
  id: string;
  name: string;
  colors: {
    bg: string;
    text: string;
    green: string;
    amber: string;
    blue: string;
    purple: string;
    prompt: string;
    command: string;
    output: string;
    cursor: string;
    comment: string;
    error: string;
    success: string;
    warning: string;
  };
}

export const themes: TerminalTheme[] = [
  {
    id: "default",
    name: "Default",
    colors: {
      bg: "#1A1F2C",
      text: "#EEEEEE",
      green: "#5FFF87",
      amber: "#FFBF00",
      blue: "#5FB2FF",
      purple: "#AE81FF",
      prompt: "#5FFF87",
      command: "#FFFFFF",
      output: "#BBBBBB",
      cursor: "#FFFFFF",
      comment: "#888888",
      error: "#FF5370",
      success: "#C3E88D",
      warning: "#FFCB6B",
    },
  },
  {
    id: "retro",
    name: "Retro",
    colors: {
      bg: "#000000",
      text: "#33FF33",
      green: "#33FF33",
      amber: "#FFCC00",
      blue: "#00AAFF",
      purple: "#AA00FF",
      prompt: "#33FF33",
      command: "#33FF33",
      output: "#33DD33",
      cursor: "#33FF33",
      comment: "#117711",
      error: "#FF0000",
      success: "#33FF33",
      warning: "#FFCC00",
    },
  },
  {
    id: "light",
    name: "Light",
    colors: {
      bg: "#F5F5F5",
      text: "#333333",
      green: "#00AA55",
      amber: "#DD7700",
      blue: "#0066CC",
      purple: "#8844CC",
      prompt: "#00AA55",
      command: "#111111",
      output: "#666666",
      cursor: "#333333",
      comment: "#999999",
      error: "#DD0000",
      success: "#00AA55",
      warning: "#DD7700",
    },
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk",
    colors: {
      bg: "#0D0221",
      text: "#F706CF",
      green: "#3FFF00",
      amber: "#FF9E00",
      blue: "#00F0FF",
      purple: "#BF00FF",
      prompt: "#F706CF",
      command: "#FFFFFF",
      output: "#F706CF",
      cursor: "#00F0FF",
      comment: "#565656",
      error: "#FF003C",
      success: "#3FFF00",
      warning: "#FF9E00",
    },
  },
];

export const getThemeById = (id: string): TerminalTheme => {
  return themes.find((theme) => theme.id === id) || themes[0];
};
