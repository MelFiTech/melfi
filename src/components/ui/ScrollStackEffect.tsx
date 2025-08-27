'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollStackEffectProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollStackEffect: React.FC<ScrollStackEffectProps> = ({ 
  children, 
  className = "" 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform values for stacking effect
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6]);

  return (
    <motion.div
      ref={containerRef}
      className={`sticky top-[300px] ${className}`}
      style={{
        scale,
        rotateX,
        opacity,
        transformOrigin: 'center center',
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </motion.div>
  );
};
