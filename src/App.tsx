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

  return (
    <DotMatrix
      config={{
        dotSize: dotConfig.dotSize,
        dotSpacing: dotConfig.dotSpacing,
        dotColor: "#000000",
        offDotColor: "#f5f5f5",
        backgroundColor: "#ffffff",
        glowEffect: false,
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
