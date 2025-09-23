"use client";
import React from "react";
import { motion, useAnimationFrame } from "framer-motion";

type TickerProps = {
  children: React.ReactNode[];
  speed?: number; // pixels per second
  gapClassName?: string; // tailwind gap class between items
  className?: string;
};

export const Ticker = ({ children, speed = 60, gapClassName = "gap-10", className = "" }: TickerProps): React.ReactElement => {
  const [x, setX] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = React.useState(0);

  React.useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // Measure the width of one set of items (first half of duplicated content)
      const firstChild = container.firstElementChild as HTMLElement;
      if (firstChild) {
        setContentWidth(firstChild.offsetWidth);
      }
    }
  }, [children]);

  useAnimationFrame((t, delta) => {
    const dx = (speed * delta) / 1000; // px/frame
    let next = x - dx;
    // Reset seamlessly when we've moved exactly one content width
    if (contentWidth > 0 && Math.abs(next) >= contentWidth) {
      next = 0;
    }
    setX(next);
  });

  const items = React.useMemo(() => children.map((c, i) => <div key={i} className="flex-shrink-0">{c}</div>), [children]);

  return (
    <div className={`relative overflow-hidden w-full ${className}`}>
      <motion.div
        ref={containerRef}
        className={`flex ${gapClassName} items-center will-change-transform pointer-events-none select-none`}
        style={{ transform: `translateX(${x}px)` }}
      >
        <div className={`flex ${gapClassName} items-center`}>{items}</div>
        <div className={`flex ${gapClassName} items-center`}>{items}</div>
      </motion.div>
    </div>
  );
};


