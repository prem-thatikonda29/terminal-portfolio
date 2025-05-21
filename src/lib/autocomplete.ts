// Add available commands array at the top level
const AVAILABLE_COMMANDS = [
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
  "resume",
  "clear",
  "help",
];

// Export the autocomplete function to be used in your terminal component
export const handleTabCompletion = (input: string): string => {
  const trimmedInput = input.trim();
  if (!trimmedInput) return input;

  const words = trimmedInput.split(" ");
  const lastWord = words[words.length - 1];
  const completedWord = getAutoComplete(lastWord);

  if (words.length === 1) {
    return completedWord;
  } else {
    words[words.length - 1] = completedWord;
    return words.join(" ");
  }
};

// Add autocomplete function
const getAutoComplete = (input: string): string => {
  const lowercaseInput = input.toLowerCase();
  return (
    AVAILABLE_COMMANDS.find((cmd) => cmd.startsWith(lowercaseInput)) || input
  );
};
