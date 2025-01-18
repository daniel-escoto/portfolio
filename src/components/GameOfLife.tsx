import { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import GameControls from "./GameControls";

const GRID_SIZE = 25;
const CELL_SIZE = 6;

export default function GameOfLife() {
  const [grid, setGrid] = useState(() => {
    return Array(GRID_SIZE)
      .fill(null)
      .map(() => Array(GRID_SIZE).fill(false));
  });

  const [isRunning, setIsRunning] = useState(false);
  const runningRef = useRef(isRunning);
  runningRef.current = isRunning;

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

    setTimeout(runSimulation, 100);
  }, []);

  const handleCellClick = (i: number, j: number) => {
    setGrid((currentGrid) => {
      const newGrid = [...currentGrid.map((row) => [...row])];
      newGrid[i][j] = !newGrid[i][j];
      return newGrid;
    });
  };

  const handleToggleRunning = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      runningRef.current = true;
      runSimulation();
    }
  };

  const handleClear = () => {
    setGrid(
      Array(GRID_SIZE)
        .fill(null)
        .map(() => Array(GRID_SIZE).fill(false))
    );
  };

  const handleRandom = () => {
    setGrid(
      Array(GRID_SIZE)
        .fill(null)
        .map(() =>
          Array(GRID_SIZE)
            .fill(null)
            .map(() => Math.random() > 0.7)
        )
    );
  };

  return (
    <div className="flex flex-col items-center gap-2 p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="p-4 rounded-lg"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
            gap: 1,
            background: "#374151",
          }}
        >
          {grid.map((row, i) =>
            row.map((cell, j) => (
              <motion.div
                key={`${i}-${j}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
                onClick={() => handleCellClick(i, j)}
                style={{
                  width: CELL_SIZE,
                  height: CELL_SIZE,
                  backgroundColor: cell ? "rgb(255 255 255)" : "rgb(31 41 55)",
                  cursor: "pointer",
                }}
                whileHover={{ scale: 1.2 }}
              />
            ))
          )}
        </div>
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
