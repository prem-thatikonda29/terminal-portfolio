import React from "react";
import { Scan, Beer } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-terminal-green flex gap-2">
        <Beer />
        About Me
      </h2>

      <div className="glass-panel py-4 px-6">
        <p className="text-terminal-text">
          Hey there!, I'm Prem Thatikonda, and I create{" "}
          <span className="text-terminal-amber">full-stack apps</span> and{" "}
          <span className="text-terminal-purple">Ai-agents</span> and{" "}
          <span className="text-terminal-purple">workflows</span>
        </p>

        <p className="text-terminal-text mt-2">
          It all started with &quot;Hello, World!&quot; &mdash; and me wondering
          where the semicolon goes (it was Java). Since then, I&apos;ve gone
          from writing basic code to building full web apps, APIs, and random
          features that (usually) work. I love playing with new tech &mdash;
          mostly to avoid fixing old bugs. I&apos;ve broken enough CSS to
          qualify as a front-end chaos agent and still trust console.log with my
          life. When I&apos;m not coding, I&apos;m either making games, jamming
          on my guitar, or sketching whatever pops into my head.
        </p>

        <div className="mt-4 text-terminal-comment pb-2">
          <p className="text-terminal-blue">Quick facts:</p>
          <div className="mt-1 flex flex-col gap-2">
            {[
              { label: "Based in", value: "Mumbai, India" },
              { label: "Current focus", value: "AI agents" },
              { label: "Interests", value: "UI-development, n8n workflows" },
              {
                label: "Education",
                value: "Computer Science, ITM Skills University",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Scan size={18} />
                <p className="m-0 leading-tight">
                  {item.label}:{" "}
                  <span className="text-terminal-amber">{item.value}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-terminal-comment italic">
        Type 'skills' to see my technical expertise, or 'projects' to explore my
        work.
      </p>
    </div>
  );
};
