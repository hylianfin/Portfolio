"use client";

import { useEffect, useRef, useState } from "react";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    document.documentElement.classList.add("is-locked");

    const start = performance.now();
    const duration = 1400;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // ease-out so the count decelerates near 100
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * 100));

      if (t < 1) {
        raf.current = requestAnimationFrame(tick);
      } else {
        window.setTimeout(() => {
          setDone(true);
          document.documentElement.classList.remove("is-locked");
        }, 250);
      }
    };

    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      document.documentElement.classList.remove("is-locked");
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-50 flex items-end justify-between p-6 md:p-10 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] bg-background text-foreground"
      style={{ transform: done ? "translateY(-100%)" : "translateY(0)" }}
    >
      <p className="label text-muted">Loading portfolio</p>
      <p className="display text-[18vw] md:text-[10vw] leading-none tabular-nums">
        {count}
      </p>
    </div>
  );
}
