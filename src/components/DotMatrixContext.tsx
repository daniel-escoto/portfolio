import { createContext, useContext } from 'react';
import type { DotMatrixAPI } from '../types/dotMatrix';

interface DotMatrixContextValue {
  api: DotMatrixAPI | null;
  gridSize: { cols: number; rows: number };
  registerElement: (element: DotMatrixElement) => void;
  unregisterElement: (id: string) => void;
}

export interface DotMatrixElement {
  id: string;
  render: () => void;
}

export const DotMatrixContext = createContext<DotMatrixContextValue | null>(null);

export const useDotMatrix = () => {
  const context = useContext(DotMatrixContext);
  if (!context) {
    throw new Error('useDotMatrix must be used within a DotMatrix component');
  }
  return context;
};

