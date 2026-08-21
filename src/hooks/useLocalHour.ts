import { useState, useEffect } from "react";

function msUntilNextHour(now = new Date()): number {
  const next = new Date(now);
  next.setHours(now.getHours() + 1, 0, 0, 50);
  return Math.max(1000, next.getTime() - now.getTime());
}

function hourFromLocation(): number | null {
  if (typeof window === "undefined") return null;
  const raw = new URLSearchParams(window.location.search).get("hour");
  if (raw === null || raw === "") return null;
  const parsed = Number.parseInt(raw, 10);
  if (Number.isNaN(parsed)) return null;
  return ((parsed % 24) + 24) % 24;
}

/**
 * Visitor's local hour (0–23) from the browser timezone.
 * Re-checks on the hour change and when the tab becomes visible again.
 * Optional `?hour=0-23` overrides for previewing the cycle.
 */
export function useLocalHour(): number {
  const [hour, setHour] = useState(() => {
    const override = hourFromLocation();
    if (override !== null) return override;
    return typeof window === "undefined" ? 12 : new Date().getHours();
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    let timeoutId: number;

    const sync = () => {
      const override = hourFromLocation();
      setHour(override !== null ? override : new Date().getHours());
    };

    const schedule = () => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        sync();
        schedule();
      }, msUntilNextHour());
    };

    sync();
    schedule();

    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        sync();
        schedule();
      }
    };

    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.clearTimeout(timeoutId);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return hour;
}
