
import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-terminal-green">About Me</h2>
      
      <div className="glass-panel p-4">
        <p className="text-terminal-text">
          Hello, I'm a passionate <span className="text-terminal-amber">full-stack developer</span> with a focus on creating efficient, 
          user-friendly applications that solve real-world problems.
        </p>
        
        <p className="text-terminal-text mt-3">
          My journey began with the classic "Hello, World!" and evolved into building complex web applications, 
          APIs, and distributed systems. I love the challenge of learning new technologies and applying them
          to create innovative solutions.
        </p>

        <div className="mt-4 text-terminal-comment">
          <p className="text-terminal-blue">Quick facts:</p>
          <ul className="list-disc ml-6 space-y-1 mt-1">
            <li>Based in: <span className="text-terminal-amber">City, Country</span></li>
            <li>Current focus: <span className="text-terminal-amber">Web3, AI, Distributed Systems</span></li>
            <li>Interests: <span className="text-terminal-amber">Open Source, Linux, DevOps</span></li>
            <li>Education: <span className="text-terminal-amber">Computer Science, University Name</span></li>
          </ul>
        </div>
      </div>

      <p className="text-terminal-comment italic">Type 'skills' to see my technical expertise, or 'projects' to explore my work.</p>
    </div>
  );
};
