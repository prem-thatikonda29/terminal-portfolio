import React from "react";
import { Terminal, ChefHat } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Leading development of microservices architecture, implementing CI/CD pipelines, and mentoring junior developers.",
      achievements: [
        "Reduced system latency by 40% through optimizing database queries and implementing caching",
        "Led migration from monolith to microservices, improving deployment frequency by 300%",
        "Created developer documentation and internal tooling, increasing team productivity",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2021",
      description:
        "Developed and maintained multiple web applications for clients across various industries.",
      achievements: [
        "Built responsive web applications using React, Node.js, and PostgreSQL",
        "Implemented authentication and authorization systems using OAuth and JWT",
        "Optimized frontend performance, improving load times by 35%",
      ],
    },
    {
      title: "Junior Developer",
      company: "Startup Hub",
      period: "2016 - 2018",
      description:
        "Worked on frontend development and API integration for an early-stage startup.",
      achievements: [
        "Developed user interfaces with React and CSS preprocessors",
        "Integrated third-party APIs and implemented websocket connections for real-time features",
        "Participated in code reviews and agile development processes",
      ],
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-terminal-green flex gap-2">
        <ChefHat />
        Work Experience
      </h2>

      <div className="space-y-6">
        {experiences.map((experience, idx) => (
          <div key={idx} className="glass-panel p-4">
            <div className="flex items-start">
              <Terminal
                className="text-terminal-amber mr-2 mt-1 flex-shrink-0"
                size={20}
              />
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="text-lg font-bold text-terminal-amber">
                    {experience.title}
                  </h3>
                  <span className="text-sm text-terminal-green">
                    {experience.period}
                  </span>
                </div>

                <div className="text-terminal-blue mt-1">
                  {experience.company}
                </div>
                <p className="text-terminal-text mt-2">
                  {experience.description}
                </p>

                <div className="mt-3">
                  <p className="text-terminal-comment mb-1">
                    $ cat achievements.log
                  </p>
                  <ul className="list-disc ml-6 space-y-1 text-terminal-output">
                    {experience.achievements.map((achievement, achieveIdx) => (
                      <li key={achieveIdx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-terminal-comment italic">
        Type 'skills' to see my technical expertise or 'projects' to view my
        portfolio.
      </p>
    </div>
  );
};
