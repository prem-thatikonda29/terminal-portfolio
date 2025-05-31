import React, { useState, useEffect } from "react";
import Terminal from "@/components/Terminal";
import FloatingIcons from "@/components/FloatingIcons";
import PixelLoader from "@/components/PixelLoader";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Function to mark content as loaded
    const setPageAsLoaded = () => {
      setLoaded(true);
    };

    // Set up loading detection with multiple approaches

    // 1. Use window load event (most reliable for complete load)
    window.addEventListener("load", setPageAsLoaded);

    // 2. Check if already loaded (for when component mounts after page load)
    if (document.readyState === "complete") {
      setPageAsLoaded();
    }

    // 3. Fallback timer to ensure loader eventually disappears
    // This ensures users aren't stuck with an infinite loader
    const fallbackTimer = setTimeout(setPageAsLoaded, 5000);

    return () => {
      window.removeEventListener("load", setPageAsLoaded);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div className="max-h-screen bg-terminal-bg flex flex-col items-center justify-center p-4 md:p-8">
      <FloatingIcons />
      {!loaded && <PixelLoader />}
      <div
        className={`w-full max-w-[80vw] transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-terminal-green mb-2">
            <span className="typing-animation">Prem's Portfolio</span>
          </h1>
        </div>
        <Terminal className="h-[680px] max-h-[80vh] text-left w-[80vw]" />
        <footer className="mt-8 text-center text-terminal-comment text-sm">
          <p className="mt-2">
            © {new Date().getFullYear()} Prem Thatikonda's Portfolio. All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
