import React from "react";
import { AboutSection } from "./sections/AboutSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ContactSection } from "./sections/ContactSection";
import { ExperienceSection } from "./sections/ExperienceSection";

export const TerminalCommands = (command: string) => {
  const cmd = command.trim().toLowerCase();
  const args = cmd.split(" ");
  const primaryCmd = args[0];

  switch (primaryCmd) {
    case "help":
      return (
        <div>
          <p className="text-terminal-blue font-semibold">
            Available commands:
          </p>
          <ul className="ml-4 mt-2 space-y-1">
            <li>
              <span className="text-terminal-green">about</span> - Learn about
              me
            </li>
            <li>
              <span className="text-terminal-green">skills</span> - View my
              technical skills
            </li>
            <li>
              <span className="text-terminal-green">projects</span> - Browse my
              projects
            </li>
            <li>
              <span className="text-terminal-green">experience</span> - See my
              work experience
            </li>
            <li>
              <span className="text-terminal-green">contact</span> - Get in
              touch with me
            </li>
            <li>
              <span className="text-terminal-green">clear</span> - Clear the
              terminal
            </li>
            <li>
              <span className="text-terminal-green">help</span> - Display this
              help message
            </li>
          </ul>
          <p className="mt-3 text-terminal-comment italic">
            Type any command to get started...
          </p>
        </div>
      );

    case "about":
      return <AboutSection />;

    case "skills":
      return <SkillsSection />;

    case "projects":
      return <ProjectsSection />;

    case "experience":
      return <ExperienceSection />;

    case "contact":
      return <ContactSection />;

    case "clear":
      return null;

    default:
      return (
        <div className="text-terminal-error">
          Command not found: {command}
          <p className="text-terminal-output mt-1">
            Type 'help' to see available commands.
          </p>
        </div>
      );
  }
};
