import type { DotMatrixAPI } from '../types/dotMatrix';

/**
 * Scrolling text effect
 * Scrolls text from right to left across the display
 */
export function scrollText(
  api: DotMatrixAPI,
  text: string,
  y: number,
  speed: number = 2,
  brightness: number = 1
): () => void {
  const gridSize = api.getGridSize();
  let x = gridSize.cols;

  const interval = setInterval(() => {
    api.clear();
    api.drawText(text, x, y, brightness);
    x -= speed;

    // Reset when text completely off-screen
    if (x < -(text.length * 6)) {
      x = gridSize.cols;
    }
  }, 50);

  return () => clearInterval(interval);
}

/**
 * Typewriter effect
 * Reveals text one character at a time
 */
export function typewriterText(
  api: DotMatrixAPI,
  text: string,
  x: number,
  y: number,
  speed: number = 100,
  brightness: number = 1
): Promise<void> {
  return new Promise((resolve) => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        api.clear();
        api.drawText(text.substring(0, currentIndex), x, y, brightness);
        currentIndex++;
      } else {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
}

/**
 * Pulsing effect
 * Makes dots pulse in brightness
 */
export function pulseEffect(
  api: DotMatrixAPI,
  callback: (api: DotMatrixAPI, brightness: number) => void,
  speed: number = 0.05
): () => void {
  let frame = 0;

  const interval = setInterval(() => {
    const brightness = 0.5 + Math.sin(frame * speed) * 0.5;
    callback(api, brightness);
    frame++;
  }, 50);

  return () => clearInterval(interval);
}

/**
 * Random noise effect
 * Creates a random static/noise pattern
 */
export function randomNoise(
  api: DotMatrixAPI,
  density: number = 0.1,
  brightness: number = 1
): void {
  const gridSize = api.getGridSize();

  for (let y = 0; y < gridSize.rows; y++) {
    for (let x = 0; x < gridSize.cols; x++) {
      if (Math.random() < density) {
        api.setDot(x, y, brightness * Math.random());
      }
    }
  }
}

/**
 * Matrix rain effect
 * Creates falling "rain" similar to the Matrix movie
 */
export function matrixRain(api: DotMatrixAPI): () => void {
  const gridSize = api.getGridSize();
  const drops: Array<{ x: number; y: number; speed: number; length: number }> = [];

  // Create initial drops
  for (let i = 0; i < gridSize.cols / 3; i++) {
    drops.push({
      x: Math.floor(Math.random() * gridSize.cols),
      y: Math.floor(Math.random() * gridSize.rows),
      speed: Math.random() * 2 + 1,
      length: Math.floor(Math.random() * 10) + 5,
    });
  }

  const interval = setInterval(() => {
    // Fade all dots
    const currentGrid = api.getGridSize();
    for (let y = 0; y < currentGrid.rows; y++) {
      for (let x = 0; x < currentGrid.cols; x++) {
        const current = api.getDot(x, y);
        if (current > 0) {
          api.setDot(x, y, current * 0.9);
        }
      }
    }

    // Update and draw drops
    drops.forEach((drop) => {
      // Draw the drop
      for (let i = 0; i < drop.length; i++) {
        const y = Math.floor(drop.y - i);
        if (y >= 0 && y < gridSize.rows) {
          const brightness = 1 - i / drop.length;
          api.setDot(drop.x, y, brightness);
        }
      }

      // Move drop down
      drop.y += drop.speed;

      // Reset drop if it's off screen
      if (drop.y - drop.length > gridSize.rows) {
        drop.y = 0;
        drop.x = Math.floor(Math.random() * gridSize.cols);
      }
    });
  }, 50);

  return () => clearInterval(interval);
}

/**
 * Border animation
 * Animates a border around the edge of the display
 */
export function animatedBorder(api: DotMatrixAPI, speed: number = 0.1): () => void {
  const gridSize = api.getGridSize();
  let offset = 0;

  const interval = setInterval(() => {
    api.clear();

    // Draw animated border
    const positions = [];

    // Top edge
    for (let x = 0; x < gridSize.cols; x++) {
      positions.push({ x, y: 0 });
    }
    // Right edge
    for (let y = 1; y < gridSize.rows; y++) {
      positions.push({ x: gridSize.cols - 1, y });
    }
    // Bottom edge
    for (let x = gridSize.cols - 2; x >= 0; x--) {
      positions.push({ x, y: gridSize.rows - 1 });
    }
    // Left edge
    for (let y = gridSize.rows - 2; y > 0; y--) {
      positions.push({ x: 0, y });
    }

    // Draw with animation
    positions.forEach((pos, index) => {
      const brightness = Math.max(0, Math.sin((index + offset) * 0.2));
      if (brightness > 0.1) {
        api.setDot(pos.x, pos.y, brightness);
      }
    });

    offset += speed * 10;
  }, 50);

  return () => clearInterval(interval);
}

/**
 * Conway's Game of Life
 * Implements the classic cellular automaton
 */
export function gameOfLife(api: DotMatrixAPI, initialDensity: number = 0.3): () => void {
  const gridSize = api.getGridSize();
  
  // Initialize random grid
  for (let y = 0; y < gridSize.rows; y++) {
    for (let x = 0; x < gridSize.cols; x++) {
      if (Math.random() < initialDensity) {
        api.setDot(x, y, 1);
      }
    }
  }

  const interval = setInterval(() => {
    const newGrid: number[][] = [];
    
    // Calculate next generation
    for (let y = 0; y < gridSize.rows; y++) {
      newGrid[y] = [];
      for (let x = 0; x < gridSize.cols; x++) {
        let neighbors = 0;
        
        // Count neighbors
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (dx === 0 && dy === 0) continue;
            const nx = (x + dx + gridSize.cols) % gridSize.cols;
            const ny = (y + dy + gridSize.rows) % gridSize.rows;
            if (api.getDot(nx, ny) > 0.5) neighbors++;
          }
        }
        
        const alive = api.getDot(x, y) > 0.5;
        
        // Apply Game of Life rules
        if (alive && (neighbors === 2 || neighbors === 3)) {
          newGrid[y][x] = 1;
        } else if (!alive && neighbors === 3) {
          newGrid[y][x] = 1;
        } else {
          newGrid[y][x] = 0;
        }
      }
    }
    
    // Update grid
    api.clear();
    for (let y = 0; y < gridSize.rows; y++) {
      for (let x = 0; x < gridSize.cols; x++) {
        if (newGrid[y][x] === 1) {
          api.setDot(x, y, 1);
        }
      }
    }
  }, 200);

  return () => clearInterval(interval);
}

