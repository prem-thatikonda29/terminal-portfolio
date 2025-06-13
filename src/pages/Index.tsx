import { useState, useEffect } from "react";
import Terminal from "@/components/Terminal";
import FloatingIcons from "@/components/FloatingIcons";
import PixelLoader from "@/components/PixelLoader";

import FuzzyText from "../components/FuzzyText";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const setPageAsLoaded = () => {
      setLoaded(true);
    };

    window.addEventListener("load", setPageAsLoaded);

    if (document.readyState === "complete") {
      setPageAsLoaded();
    }
    // Fallback in case the 'load' event doesn't fire
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
        <div className="text-center mb-8 flex justify-center pt-2">
          <FuzzyText
            baseIntensity={0.1}
            hoverIntensity={0.2}
            enableHover={true}
          >
            Prem's Portfolio
          </FuzzyText>
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
