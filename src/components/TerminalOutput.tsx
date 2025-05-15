
import React from 'react';
import { cn } from '@/lib/utils';

interface TerminalOutputProps {
  children: React.ReactNode;
  className?: string;
}

export const TerminalOutput: React.FC<TerminalOutputProps> = ({ 
  children,
  className
}) => {
  return (
    <div className={cn("mb-3", className)}>
      {children}
    </div>
  );
};
