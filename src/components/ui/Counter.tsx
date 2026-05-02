"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  value: number;
  suffix?: string;
};

export default function Counter({ value, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!spanRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(spanRef.current);

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 16;
    const increment = value / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, value]);

  return (
    <span ref={spanRef}>
      {count}
      {suffix}
    </span>
  );
}
