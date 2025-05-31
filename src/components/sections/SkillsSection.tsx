import React from "react";
import { ChartPie } from "lucide-react";

export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      name: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
    },
    {
      name: "Frontend",
      subcategories: [
        {
          name: "Core",
          skills: ["HTML", "CSS", "JavaScript"],
        },
        {
          name: "Frameworks & Libraries",
          skills: ["React", "Next.js", "Three.js"],
        },
        {
          name: "State Management",
          skills: ["Zustand"],
        },
        {
          name: "Styling",
          skills: ["Tailwind CSS"],
        },
        {
          name: "Animations",
          skills: ["GSAP", "Framer Motion", "Lenis"],
        },
        {
          name: "UI Components",
          skills: ["Shadcn UI", "Radix UI", "Ant Design", "Material UI"],
        },
      ],
    },
    {
      name: "Backend",
      subcategories: [
        {
          name: "Runtime / Frameworks",
          skills: ["Node.js", "Express.js", "Django"],
        },
        {
          name: "Databases",
          skills: ["MongoDB", "PostgreSQL", "Redis"],
        },
        {
          name: "APIs",
          skills: ["GraphQL", "JWT"],
        },
        {
          name: "BaaS (Backend as a Service)",
          skills: ["Firebase", "Supabase", "Auth0"],
        },
      ],
    },
    // {
    //   name: "DevOps & Infrastructure",
    //   subcategories: [
    //     {
    //       name: "Containerization & Orchestration",
    //       skills: ["Docker", "Kubernetes"],
    //     },
    //     {
    //       name: "CI/CD & Automation",
    //       skills: ["GitHub Actions"],
    //     },
    //     {
    //       name: "Cloud Platforms",
    //       skills: ["AWS"],
    //     },
    //     {
    //       name: "OS & Environments",
    //       skills: ["Linux"],
    //     },
    //   ],
    // },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-terminal-green flex gap-2">
        <ChartPie />
        Technical Skills
      </h2>

      {skillCategories.map((category, idx) => (
        <div
          key={idx}
          className="border-l-2 border-terminal-green/30 pl-4 space-y-2"
        >
          <h3 className="text-lg font-bold text-terminal-amber">
            $ {category.name}
          </h3>

          {/* If category has subcategories */}
          {"subcategories" in category ? (
            <div className="space-y-3 ml-2">
              {category.subcategories.map((sub, subIdx) => (
                <div key={subIdx} className="space-y-1">
                  <h4 className="text-sm font-mono text-terminal-text">
                    <span className="text-terminal-green">{">"} </span>
                    <span className="text-terminal-purple">{sub.name}</span>
                  </h4>
                  <div className="flex flex-wrap gap-1 ml-4">
                    {sub.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="text-terminal-text text-sm font-mono"
                      >
                        {skill}
                        {skillIdx < sub.skills.length - 1 ? "," : ""}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-1 ml-6">
              {category.skills.map((skill, skillIdx) => (
                <span
                  key={skillIdx}
                  className="text-terminal-text text-sm font-mono"
                >
                  {skill}
                  {skillIdx < category.skills.length - 1 ? "," : ""}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}

      <p className="text-terminal-comment italic">
        Type 'projects' to see my work or 'experience' to view my professional
        history.
      </p>
    </div>
  );
};
