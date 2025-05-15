
import React from 'react';
import { Code, Terminal, FileCode, Database, Server, Layers3 } from 'lucide-react';

const FloatingIcons: React.FC = () => {
  const icons = [
    { Icon: Code, size: 24, className: "text-terminal-green/20" },
    { Icon: Terminal, size: 28, className: "text-terminal-amber/20" },
    { Icon: FileCode, size: 22, className: "text-terminal-blue/20" },
    { Icon: Database, size: 26, className: "text-terminal-green/20" },
    { Icon: Server, size: 30, className: "text-terminal-amber/20" },
    { Icon: Layers3, size: 24, className: "text-terminal-blue/20" }
  ];
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((IconObj, index) => {
        const { Icon, size, className } = IconObj;
        const delay = index * 2;
        const duration = 20 + Math.random() * 20;
        const leftPosition = `${10 + Math.random() * 80}%`;

        return (
          <div
            key={index}
            className={`absolute ${className}`}
            style={{
              left: leftPosition,
              top: `${-50 + Math.random() * -30}px`,
              animation: `float ${duration}s ease-in-out ${delay}s infinite`,
              opacity: 0.7
            }}
          >
            <Icon size={size} />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;
