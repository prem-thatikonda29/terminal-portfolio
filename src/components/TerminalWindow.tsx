
import React from 'react';
import { cn } from '@/lib/utils';

interface TerminalWindowProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({ 
  children, 
  title = "terminal",
  className
}) => {
  return (
    <div className={cn("terminal-window w-full", className)}>
      <div className="terminal-titlebar flex justify-between items-center">
        <div className="flex items-center">
          <div className="terminal-circle bg-terminal-error"></div>
          <div className="terminal-circle bg-terminal-warning"></div>
          <div className="terminal-circle bg-terminal-success"></div>
        </div>
        <div className="text-xs text-terminal-text/70">{title}</div>
        <div className="w-16"></div> {/* Spacer for balance */}
      </div>
      {children}
    </div>
  );
};
