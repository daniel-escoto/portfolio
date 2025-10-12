import { useEffect, useRef } from "react";

const MIN_SPEED = 100;
const MAX_SPEED = 220;

const randomMagnitude = () =>
  MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED);

const randomVelocity = () =>
  (Math.random() < 0.5 ? -1 : 1) * randomMagnitude();

export default function Screensaver() {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const label = labelRef.current;

    if (!container || !label) {
      return;
    }

    let containerWidth = container.clientWidth;
    let containerHeight = container.clientHeight;
    let labelWidth = label.offsetWidth;
    let labelHeight = label.offsetHeight;

    const measure = () => {
      containerWidth = container.clientWidth;
      containerHeight = container.clientHeight;
      labelWidth = label.offsetWidth;
      labelHeight = label.offsetHeight;
    };

    measure();

    const state = {
      x: Math.max(0, (containerWidth - labelWidth) / 2),
      y: Math.max(0, (containerHeight - labelHeight) / 2),
      vx: randomVelocity(),
      vy: randomVelocity(),
      hue: Math.floor(Math.random() * 360),
    };

    let animationFrameId: number;
    let lastTime = performance.now();

    const applyTransforms = () => {
      label.style.transform = `translate3d(${state.x}px, ${state.y}px, 0)`;
      label.style.setProperty("--hue-rotate", `${state.hue}deg`);
    };

    applyTransforms();

    const animate = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      state.x += state.vx * delta;
      state.y += state.vy * delta;

      let bounced = false;

      if (state.x <= 0) {
        state.x = 0;
        state.vx = Math.abs(state.vx);
        bounced = true;
      } else if (state.x + labelWidth >= containerWidth) {
        state.x = Math.max(0, containerWidth - labelWidth);
        state.vx = -Math.abs(state.vx);
        bounced = true;
      }

      if (state.y <= 0) {
        state.y = 0;
        state.vy = Math.abs(state.vy);
        bounced = true;
      } else if (state.y + labelHeight >= containerHeight) {
        state.y = Math.max(0, containerHeight - labelHeight);
        state.vy = -Math.abs(state.vy);
        bounced = true;
      }

      if (bounced) {
        state.hue = (state.hue + 40 + Math.random() * 80) % 360;
        const signX = state.vx >= 0 ? 1 : -1;
        const signY = state.vy >= 0 ? 1 : -1;
        state.vx = signX * randomMagnitude();
        state.vy = signY * randomMagnitude();
      }

      label.style.transform = `translate3d(${state.x}px, ${state.y}px, 0)`;
      label.style.setProperty("--hue-rotate", `${state.hue}deg`);

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame((time) => {
      lastTime = time;
      animationFrameId = requestAnimationFrame(animate);
    });

    const updateBounds = () => {
      measure();
      state.x = Math.min(
        Math.max(0, state.x),
        Math.max(0, containerWidth - labelWidth)
      );
      state.y = Math.min(
        Math.max(0, state.y),
        Math.max(0, containerHeight - labelHeight)
      );
      applyTransforms();
    };

    const resizeObserver = new ResizeObserver(updateBounds);
    resizeObserver.observe(container);
    resizeObserver.observe(label);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="screensaver">
      <div ref={labelRef} className="dvd-logo">
        Daniel Escoto
      </div>
    </div>
  );
}
