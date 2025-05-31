import React from "react";
import { ChevronRight } from "lucide-react";

export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      name: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
    },
    {
      name: "Frontend",
      skills: ["HTML/CSS", "React", "Redux", "Next.js", "Tailwind CSS"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL"],
    },
    {
      name: "DevOps",
      skills: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Linux"],
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-terminal-green">
        Technical Skills
      </h2>

      <div className="space-y-6">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="border-l-2 border-terminal-green/30 pl-4">
            <h3 className="text-lg font-bold text-terminal-amber mb-3">
              $ {category.name}
            </h3>
            <ul className="space-y-3">
              {/* block based design */}
              {/* {category.skills.map((skill, skillIdx) => (
                <li key={skillIdx} className="text-terminal-text">
                  <div className="flex items-center mb-1">
                    <span className="text-terminal-green">
                      <ChevronRight size={20} />
                    </span>
                    <span className="ml-2">{skill}</span>
                  </div>
                </li>
              ))} */}
              {/* inline based design */}
              <div>
                {category.skills.map((skill, skillIdx) => (
                  <span key={skillIdx} className="text-terminal-text">
                    {skill}
                    {skillIdx < category.skills.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
            </ul>
          </div>
        ))}
      </div>

      <p className="text-terminal-comment italic">
        Type 'projects' to see my work or 'experience' to view my professional
        history.
      </p>
    </div>
  );
};
