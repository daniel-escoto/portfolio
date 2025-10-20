import "./App.css";
import { useState, useEffect } from "react";
import { DotMatrix, DotMatrixText } from "./components";

export default function App() {
  const [dotConfig, setDotConfig] = useState(() => {
    // Calculate initial sizes based on viewport
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const minDimension = Math.min(vw, vh);
    
    const dotSize = Math.max(1.5, Math.floor(minDimension / 350));
    const dotSpacing = Math.max(3, Math.floor(minDimension / 140));
    
    return { dotSize, dotSpacing };
  });

  const [isDarkMode, setIsDarkMode] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const handleResize = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const minDimension = Math.min(vw, vh);
      
      // More aggressive scaling for mobile screens
      const dotSize = Math.max(1.5, Math.floor(minDimension / 350));
      const dotSpacing = Math.max(3, Math.floor(minDimension / 140));
      
      setDotConfig({ dotSize, dotSpacing });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <DotMatrix
      config={{
        dotSize: dotConfig.dotSize,
        dotSpacing: dotConfig.dotSpacing,
        dotColor: isDarkMode ? "#ffffff" : "#000000",
        offDotColor: isDarkMode ? "#2a2a2a" : "#f5f5f5",
        backgroundColor: isDarkMode ? "#000000" : "#ffffff",
        glowEffect: isDarkMode,
      }}
    >
      <DotMatrixText
        text="Daniel Escoto"
        centered
        pulse
        pulseSpeed={0.05}
        pulseMin={0.7}
        pulseMax={1}
      />
    </DotMatrix>
  );
}
