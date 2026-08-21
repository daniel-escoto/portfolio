import { useEffect } from "react";
import { getHourArtwork, type HourColors } from "../data/hours";

function applyColors(colors: HourColors) {
  const root = document.documentElement;
  root.style.setProperty("--hour-bg", colors.background);
  root.style.setProperty("--hour-surface", colors.surface);
  root.style.setProperty("--hour-text", colors.text);
  root.style.setProperty("--hour-muted", colors.muted);
  root.style.setProperty("--hour-accent", colors.accent);
  root.style.setProperty("--hour-border", colors.border);
  root.dataset.hourTheme = colors.isDark ? "dark" : "light";

  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (themeMeta) {
    themeMeta.setAttribute("content", colors.themeColor);
  }
}

/**
 * Keeps CSS variables and theme-color in sync with the local-hour painting.
 */
export function useHourTheme(hour: number) {
  useEffect(() => {
    applyColors(getHourArtwork(hour).colors);
  }, [hour]);
}
