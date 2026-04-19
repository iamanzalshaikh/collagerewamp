"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  end: number;
  durationMs?: number;
  className?: string;
};

export function CountUp({ end, durationMs = 1600, className }: CountUpProps) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(end);
      return;
    }

    const run = () => {
      if (started.current) return;
      started.current = true;
      const t0 = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - t0) / durationMs, 1);
        const ease = 1 - Math.pow(1 - t, 3);
        setVal(Math.round(ease * end));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) run();
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, durationMs]);

  return (
    <span ref={ref} className={className}>
      {val}
    </span>
  );
}
