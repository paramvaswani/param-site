"use client";

import { useEffect, useRef, useState } from "react";

export function CountUp({
  value,
  duration = 1400,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(value);
  const [animated, setAnimated] = useState(false);

  const match = value.match(/^(\d+)([+\sa-zA-Z]*)$/);
  const numeric = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (numeric === null) return;
    setDisplay("0" + suffix);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !animated) {
            setAnimated(true);
            const start = performance.now();
            function tick(now: number) {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              const cur = Math.round(numeric! * eased);
              setDisplay(cur + suffix);
              if (t < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [numeric, suffix, duration, animated]);

  if (numeric === null) return <span>{value}</span>;
  return <span ref={ref}>{display}</span>;
}
