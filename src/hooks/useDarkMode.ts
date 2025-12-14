import { useState, useEffect } from "react";

/**
 * Custom hook to detect system dark mode preference
 * Returns true if dark mode is active, false otherwise
 */
export function useDarkMode(): boolean {
  const [isDark, setIsDark] = useState(() => {
    // Check if we're in a browser environment
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };

    // Modern browsers support addEventListener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handler);
      return () => mediaQuery.removeListener(handler);
    }
  }, []);

  return isDark;
}
