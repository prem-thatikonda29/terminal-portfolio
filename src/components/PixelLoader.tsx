import React from "react";

const PixelLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="grid grid-cols-5 gap-1">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 bg-terminal-green animate-pulse"
            style={{
              animationDelay: `${i * 0.05}s`,
              opacity: Math.random() * 0.5 + 0.5,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PixelLoader;
