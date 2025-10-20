export interface DotState {
  x: number;
  y: number;
  brightness: number; // 0-1, where 0 is off and 1 is full brightness
}

export interface DotMatrixConfig {
  dotSize?: number;
  dotSpacing?: number;
  dotColor?: string;
  offDotColor?: string;
  backgroundColor?: string;
  glowEffect?: boolean;
}

export interface DotMatrixAPI {
  setDot: (x: number, y: number, brightness?: number) => void;
  getDot: (x: number, y: number) => number;
  clear: () => void;
  fill: (brightness?: number) => void;
  drawText: (text: string, x: number, y: number, brightness?: number) => void;
  drawPattern: (pattern: number[][], x: number, y: number, brightness?: number) => void;
  getGridSize: () => { cols: number; rows: number };
}

