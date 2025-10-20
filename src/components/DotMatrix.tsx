import { useEffect, useRef, useImperativeHandle, forwardRef, useState, ReactNode } from 'react';
import type { DotMatrixConfig, DotMatrixAPI } from '../types/dotMatrix';
import { DOT_MATRIX_FONT, CHAR_WIDTH, CHAR_HEIGHT, CHAR_SPACING } from '../utils/dotMatrixFont';
import { DotMatrixContext, type DotMatrixElement } from './DotMatrixContext';

interface DotMatrixProps {
  config?: DotMatrixConfig;
  children?: ReactNode;
}

const defaultConfig: Required<DotMatrixConfig> = {
  // TODO: handle dark mode
  dotSize: 4,
  dotSpacing: 10,
  dotColor: '#000000',
  offDotColor: '#f5f5f5',
  backgroundColor: '#ffffff',
  glowEffect: false,
};

const DotMatrix = forwardRef<DotMatrixAPI, DotMatrixProps>(({ config = {}, children }, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gridRef = useRef<number[][]>([]);
  const animationFrameRef = useRef<number>();
  const configRef = useRef<Required<DotMatrixConfig>>({ ...defaultConfig, ...config });
  const gridSizeRef = useRef({ cols: 0, rows: 0 });
  const elementsRef = useRef<Map<string, DotMatrixElement>>(new Map());
  const [gridSize, setGridSize] = useState({ cols: 0, rows: 0 });

  // Initialize grid based on canvas size
  const initializeGrid = (width: number, height: number) => {
    const { dotSize, dotSpacing } = configRef.current;
    const cellSize = dotSize + dotSpacing;
    const cols = Math.floor(width / cellSize);
    const rows = Math.floor(height / cellSize);

    gridSizeRef.current = { cols, rows };
    setGridSize({ cols, rows });
    gridRef.current = Array(rows)
      .fill(null)
      .map(() => Array(cols).fill(0));
  };

  // Set individual dot brightness
  const setDot = (x: number, y: number, brightness: number = 1) => {
    const { rows, cols } = gridSizeRef.current;
    if (x >= 0 && x < cols && y >= 0 && y < rows) {
      gridRef.current[y][x] = Math.max(0, Math.min(1, brightness));
    }
  };

  // Get dot brightness
  const getDot = (x: number, y: number): number => {
    const { rows, cols } = gridSizeRef.current;
    if (x >= 0 && x < cols && y >= 0 && y < rows) {
      return gridRef.current[y][x];
    }
    return 0;
  };

  // Clear all dots
  const clearAll = () => {
    gridRef.current = gridRef.current.map(row => row.map(() => 0));
  };

  // Fill all dots
  const fillAll = (brightness: number = 1) => {
    gridRef.current = gridRef.current.map(row => row.map(() => brightness));
  };

  // Draw a pattern
  const drawPattern = (pattern: number[][], x: number, y: number, brightness: number = 1) => {
    pattern.forEach((row, rowIndex) => {
      row.forEach((value, colIndex) => {
        if (value) {
          setDot(x + colIndex, y + rowIndex, brightness);
        }
      });
    });
  };

  // Draw text
  const drawText = (text: string, x: number, y: number, brightness: number = 1) => {
    let currentX = x;
    const upperText = text.toUpperCase();

    for (let i = 0; i < upperText.length; i++) {
      const char = upperText[i];
      const charPattern = DOT_MATRIX_FONT[char];

      if (charPattern) {
        drawPattern(charPattern, currentX, y, brightness);
        currentX += CHAR_WIDTH + CHAR_SPACING;
      } else {
        // Unknown character, skip it with space
        currentX += CHAR_WIDTH + CHAR_SPACING;
      }
    }
  };

  // Get grid size
  const getGridSize = () => gridSizeRef.current;

  // Register/unregister child elements
  const registerElement = (element: DotMatrixElement) => {
    elementsRef.current.set(element.id, element);
  };

  const unregisterElement = (id: string) => {
    elementsRef.current.delete(id);
  };

  // Expose API through ref
  const apiRef = useRef<DotMatrixAPI>({
    setDot,
    getDot,
    clear: clearAll,
    fill: fillAll,
    drawText,
    drawPattern,
    getGridSize,
  });

  useImperativeHandle(ref, () => apiRef.current);

  // Render the grid
  const render = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { dotSize, dotSpacing, dotColor, offDotColor, backgroundColor, glowEffect } = configRef.current;
    const { cols, rows } = gridSizeRef.current;

    // Clear grid and render child elements
    clearAll();
    elementsRef.current.forEach(element => element.render());

    // Clear canvas
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const cellSize = dotSize + dotSpacing;

    // Draw all dots (both on and off)
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const brightness = gridRef.current[row][col];
        const x = col * cellSize + dotSpacing / 2;
        const y = row * cellSize + dotSpacing / 2;

        if (brightness > 0) {
          // Active dot
          // Apply glow effect
          if (glowEffect && brightness > 0.3) {
            ctx.shadowBlur = 10 * brightness;
            ctx.shadowColor = dotColor;
          } else {
            ctx.shadowBlur = 0;
          }

          // Set opacity based on brightness
          ctx.globalAlpha = brightness;
          ctx.fillStyle = dotColor;
        } else {
          // Inactive dot
          ctx.shadowBlur = 0;
          ctx.globalAlpha = 1;
          ctx.fillStyle = offDotColor;
        }

        ctx.beginPath();
        ctx.arc(x + dotSize / 2, y + dotSize / 2, dotSize / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Reset context state
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
  };

  // Animation loop
  useEffect(() => {
    const animate = () => {
      render();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Handle canvas resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeGrid(canvas.width, canvas.height);
      clearAll(); // Clear grid on resize
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <DotMatrixContext.Provider
      value={{
        api: apiRef.current,
        gridSize,
        registerElement,
        unregisterElement,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          display: 'block',
        }}
      />
      {children}
    </DotMatrixContext.Provider>
  );
});

DotMatrix.displayName = 'DotMatrix';

export default DotMatrix;

