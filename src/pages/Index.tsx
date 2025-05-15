
import React, { useState, useEffect } from 'react';
import Terminal from '@/components/Terminal';

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-terminal-bg flex flex-col items-center justify-center p-4 md:p-8">
      <div className={`w-full max-w-5xl transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-terminal-green mb-2">
            <span className="typing-animation">Developer Portfolio</span>
          </h1>
          <p className="text-terminal-output text-lg md:text-xl">
            Welcome to my terminal-themed portfolio. Type <span className="text-terminal-amber">'help'</span> to get started.
          </p>
        </div>
        
        <Terminal className="h-[600px] max-h-[70vh]" />
        
        <footer className="mt-8 text-center text-terminal-comment text-sm">
          <p>Built with React + TypeScript + Tailwind CSS</p>
          <p className="mt-2">© {new Date().getFullYear()} Developer Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
