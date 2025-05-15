
import React from 'react';

export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      name: "Languages",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "Go", level: 70 },
        { name: "Rust", level: 60 },
      ]
    },
    {
      name: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Redux", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML/CSS", level: 95 },
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 80 },
        { name: "GraphQL", level: 70 },
      ]
    },
    {
      name: "DevOps",
      skills: [
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 70 },
        { name: "AWS", level: 75 },
        { name: "GitHub Actions", level: 85 },
        { name: "Linux", level: 90 },
      ]
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-terminal-green">Technical Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="glass-panel p-4">
            <h3 className="text-lg font-bold text-terminal-amber mb-3">{category.name}</h3>
            <ul className="space-y-3">
              {category.skills.map((skill, skillIdx) => (
                <li key={skillIdx} className="text-terminal-text">
                  <div className="flex justify-between items-center mb-1">
                    <span>{skill.name}</span>
                    <span className="text-xs text-terminal-comment">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-terminal-bg border border-terminal-green/20 rounded-full h-2.5">
                    <div 
                      className="bg-terminal-green h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-terminal-comment italic">Type 'projects' to see my work or 'experience' to view my professional history.</p>
    </div>
  );
};
