import { useState, useCallback, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import GameControls from "./GameControls";
import { isDarkMode } from "../util";

const GRID_SIZE = 30;
const CELL_SIZE = 6;
const GRID_COLOR = "#374151";
const RESET_INTERVAL = 15000; // 15 seconds
const SPEED = 250;

const backgroundColor = isDarkMode() ? "#1f2935" : "#f9fafb";
const cellColor = isDarkMode() ? "#f3f4f6" : "#1f2935";

const createRandomGrid = () =>
  Array(GRID_SIZE)
    .fill(null)
    .map(() =>
      Array(GRID_SIZE)
        .fill(null)
        .map(() => Math.random() > 0.7)
    );

export default function GameOfLife() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [grid, setGrid] = useState(createRandomGrid);
  const [isRunning, setIsRunning] = useState(true);
  const runningRef = useRef(isRunning);
  runningRef.current = isRunning;

  // Auto-reset timer
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (runningRef.current) {
        setGrid(createRandomGrid());
      }
    }, RESET_INTERVAL);

    return () => clearInterval(intervalId);
  }, []);

  // Draw grid on canvas
  const drawGrid = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw cells
    grid.forEach((row, i) => {
      row.forEach((cell, j) => {
        ctx.fillStyle = cell ? cellColor : backgroundColor;
        ctx.fillRect(
          j * (CELL_SIZE + 1),
          i * (CELL_SIZE + 1),
          CELL_SIZE,
          CELL_SIZE
        );
      });
    });

    // Draw grid lines
    ctx.fillStyle = GRID_COLOR;
    for (let i = 0; i <= GRID_SIZE; i++) {
      ctx.fillRect(i * (CELL_SIZE + 1) - 1, 0, 1, (CELL_SIZE + 1) * GRID_SIZE);
    }
    for (let j = 0; j <= GRID_SIZE; j++) {
      ctx.fillRect(0, j * (CELL_SIZE + 1) - 1, (CELL_SIZE + 1) * GRID_SIZE, 1);
    }
  }, [grid]);

  // Handle canvas click
  const handleCanvasClick = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const i = Math.floor(y / (CELL_SIZE + 1));
      const j = Math.floor(x / (CELL_SIZE + 1));

      if (i >= 0 && i < GRID_SIZE && j >= 0 && j < GRID_SIZE) {
        setGrid((currentGrid) => {
          const newGrid = [...currentGrid.map((row) => [...row])];
          newGrid[i][j] = !newGrid[i][j];
          return newGrid;
        });
      }
    },
    []
  );

  const runSimulation = useCallback(() => {
    if (!runningRef.current) return;

    setGrid((currentGrid) => {
      const nextGrid = currentGrid.map((row, i) =>
        row.map((cell, j) => {
          let neighbors = 0;
          for (let di = -1; di <= 1; di++) {
            for (let dj = -1; dj <= 1; dj++) {
              if (di === 0 && dj === 0) continue;
              const newI = i + di;
              const newJ = j + dj;
              if (
                newI >= 0 &&
                newI < GRID_SIZE &&
                newJ >= 0 &&
                newJ < GRID_SIZE
              ) {
                neighbors += currentGrid[newI][newJ] ? 1 : 0;
              }
            }
          }

          if (cell) {
            return neighbors === 2 || neighbors === 3;
          } else {
            return neighbors === 3;
          }
        })
      );
      return nextGrid;
    });

    setTimeout(runSimulation, SPEED);
  }, []);

  // Update canvas when grid changes
  useEffect(() => {
    drawGrid();
  }, [grid, drawGrid]);

  // Start simulation on load
  useEffect(() => {
    if (isRunning) {
      runSimulation();
    }
  }, [isRunning, runSimulation]);

  const handleToggleRunning = () => {
    setIsRunning((prev) => !prev);
  };

  const handleClear = () => {
    setGrid(
      Array(GRID_SIZE)
        .fill(null)
        .map(() => Array(GRID_SIZE).fill(false))
    );
  };

  const handleRandom = () => {
    setGrid(createRandomGrid());
  };

  return (
    <div className="flex flex-col items-center gap-2 p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="p-4 rounded-lg"
      >
        <canvas
          ref={canvasRef}
          width={(CELL_SIZE + 1) * GRID_SIZE}
          height={(CELL_SIZE + 1) * GRID_SIZE}
          onClick={handleCanvasClick}
          style={{ cursor: "pointer" }}
        />
      </motion.div>

      <GameControls
        isRunning={isRunning}
        onToggleRunning={handleToggleRunning}
        onClear={handleClear}
        onRandom={handleRandom}
      />
    </div>
  );
}
