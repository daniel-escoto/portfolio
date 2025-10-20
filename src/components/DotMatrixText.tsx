import { useEffect, useRef, useState } from 'react';
import { useDotMatrix } from './DotMatrixContext';

export interface DotMatrixTextProps {
  text: string;
  x?: number;
  y?: number;
  centered?: boolean;
  brightness?: number;
  pulse?: boolean;
  pulseSpeed?: number;
  pulseMin?: number;
  pulseMax?: number;
}

export const DotMatrixText = ({
  text,
  x,
  y,
  centered = false,
  brightness = 1,
  pulse = false,
  pulseSpeed = 0.05,
  pulseMin = 0.4,
  pulseMax = 1,
}: DotMatrixTextProps) => {
  const { api, gridSize, registerElement, unregisterElement } = useDotMatrix();
  const elementId = useRef(`text-${Math.random()}`);
  const frameRef = useRef(0);

  // Calculate position
  const getPosition = () => {
    if (centered) {
      const textWidth = text.length * 6; // 5 char width + 1 spacing
      return {
        x: Math.floor((gridSize.cols - textWidth) / 2),
        y: Math.floor((gridSize.rows - 7) / 2), // 7 is char height
      };
    }
    return { x: x ?? 0, y: y ?? 0 };
  };

  // Render function
  const render = () => {
    if (!api) return;

    const pos = getPosition();
    let renderBrightness = brightness;

    if (pulse) {
      frameRef.current++;
      renderBrightness = pulseMin + (Math.sin(frameRef.current * pulseSpeed) * 0.5 + 0.5) * (pulseMax - pulseMin);
    }

    api.drawText(text, pos.x, pos.y, renderBrightness);
  };

  // Register this element with the DotMatrix
  useEffect(() => {
    const element = {
      id: elementId.current,
      render,
    };

    registerElement(element);

    return () => {
      unregisterElement(elementId.current);
    };
  }, [text, x, y, centered, brightness, pulse, pulseSpeed, pulseMin, pulseMax, gridSize]);

  // This component doesn't render anything to the DOM
  return null;
};

