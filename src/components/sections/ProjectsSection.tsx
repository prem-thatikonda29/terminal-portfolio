
import React from 'react';
import { Code } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "AI-Powered Task Manager",
      description: "A task management application with AI capabilities to prioritize and categorize tasks automatically.",
      technologies: ["React", "Node.js", "MongoDB", "TensorFlow.js"],
      url: "#",
      github: "https://github.com/username/project1"
    },
    {
      title: "Decentralized Marketplace",
      description: "A blockchain-based marketplace for digital goods with smart contract integration.",
      technologies: ["Solidity", "React", "Web3.js", "Ethereum"],
      url: "#",
      github: "https://github.com/username/project2"
    },
    {
      title: "Real-time Collaboration Tool",
      description: "A collaborative workspace with real-time updates, document sharing, and team management.",
      technologies: ["Next.js", "Socket.io", "PostgreSQL", "Redis"],
      url: "#",
      github: "https://github.com/username/project3"
    },
    {
      title: "DevOps Automation Platform",
      description: "A platform to automate deployment, testing, and monitoring for microservices architecture.",
      technologies: ["Go", "Docker", "Kubernetes", "Prometheus"],
      url: "#",
      github: "https://github.com/username/project4"
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-terminal-green">Projects</h2>
      
      <div className="space-y-4">
        {projects.map((project, idx) => (
          <div key={idx} className="glass-panel p-4">
            <div className="flex items-start">
              <Code className="text-terminal-amber mr-2 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="text-lg font-bold text-terminal-amber">{project.title}</h3>
                <p className="text-terminal-text mt-1">{project.description}</p>
                
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span key={techIdx} className="text-xs px-2 py-1 rounded-md bg-terminal-bg border border-terminal-green/20 text-terminal-green">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-3 flex items-center space-x-4">
                  <a href={project.url} className="text-terminal-blue hover:text-terminal-green">
                    $ open_demo
                  </a>
                  <a href={project.github} className="text-terminal-blue hover:text-terminal-green">
                    $ view_source
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-terminal-comment italic">Type 'contact' to get in touch or 'experience' to see my work history.</p>
    </div>
  );
};
