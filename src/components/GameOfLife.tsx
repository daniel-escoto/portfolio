import { useState, useCallback, useRef } from "react";

const GRID_SIZE = 25;
const CELL_SIZE = 20;

export default function GameOfLife() {
  const [grid, setGrid] = useState(() => {
    // Initialize empty grid
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
          // Check all 8 neighbors
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

          // Conway's Game of Life rules
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

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => {
            setIsRunning(!isRunning);
            if (!isRunning) {
              runningRef.current = true;
              runSimulation();
            }
          }}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={() => {
            setGrid(
              Array(GRID_SIZE)
                .fill(null)
                .map(() => Array(GRID_SIZE).fill(false))
            );
          }}
        >
          Clear
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => {
            setGrid(
              Array(GRID_SIZE)
                .fill(null)
                .map(() =>
                  Array(GRID_SIZE)
                    .fill(null)
                    .map(() => Math.random() > 0.7)
                )
            );
          }}
        >
          Random
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
          gap: 1,
          background: "#ccc",
        }}
      >
        {grid.map((row, i) =>
          row.map((cell, j) => (
            <div
              key={`${i}-${j}`}
              onClick={() => handleCellClick(i, j)}
              style={{
                width: CELL_SIZE,
                height: CELL_SIZE,
                backgroundColor: cell ? "#000" : "#fff",
                cursor: "pointer",
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}
