'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, type MotionValue } from 'framer-motion';

type Achievement = {
  id: number;
  title: string;
  description: string;
  isActive?: boolean;
};

type WhyTimelineProps = {
  achievements: Achievement[];
  segmentHeights: MotionValue<string>[];
  numSteps: number;
  activeCount: number;
};

const TimelineItem = ({
  achievement,
  index,
  active,
}: {
  achievement: Achievement;
  index: number;
  active: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex items-start space-x-4 mb-10"
    >
      <div className="flex-shrink-0 mt-2">
        <div
          className={`timeline-dot w-3 h-3 rounded-full transition-colors duration-300 ${
            active ? 'bg-primary' : 'bg-gray-500'
          }`}
        ></div>
      </div>

      <div className="flex-1">
        <h3
          className={`font-bold text-lg mb-2 transition-colors duration-300 ${
            active ? 'text-white' : 'text-gray-300'
          }`}
        >
          {achievement.title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          {achievement.description}
        </p>
      </div>
    </motion.div>
  );
};

export default function WhyTimeline({
  achievements,
  segmentHeights,
  numSteps,
  activeCount,
}: WhyTimelineProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [trackStart, setTrackStart] = useState<number>(0);
  const [trackHeight, setTrackHeight] = useState<number>(0);

  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      if (!container) return;
      const containerRect = container.getBoundingClientRect();
      const dots = container.querySelectorAll<HTMLDivElement>('.timeline-dot');
      if (dots.length < 2) return;
      const firstRect = dots[0].getBoundingClientRect();
      const lastRect = dots[dots.length - 1].getBoundingClientRect();
      const firstCenter = firstRect.top + firstRect.height / 2 - containerRect.top;
      const lastCenter = lastRect.top + lastRect.height / 2 - containerRect.top;
      const height = Math.max(0, lastCenter - firstCenter);
      setTrackStart(firstCenter);
      setTrackHeight(height);
    };
    // Measure after layout
    const id = requestAnimationFrame(measure);
    window.addEventListener('resize', measure);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener('resize', measure);
    };
  }, [achievements.length]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="lg:sticky lg:top-24 self-start"
    >
      <div className="relative" ref={containerRef}>
        {/* Vertical Timeline Base Line (starts from first circle) */}
        <div
          className="absolute left-1.5 top-2 bottom-0 w-px bg-gray-700"
          style={trackHeight > 0 ? { top: trackStart, height: trackHeight } : undefined}
        />

        {/* Segmented Progress Line (starts from first circle) */}
        {segmentHeights.map((h, i) => {
          if (trackHeight > 0) {
            const segH = trackHeight / numSteps;
            const segTop = trackStart + i * segH;
            return (
              <div key={i} className="absolute left-1.5 w-px" style={{ top: segTop, height: segH }}>
                <motion.div aria-hidden className="absolute left-0 top-0 w-px bg-primary origin-top" style={{ height: h }} />
              </div>
            );
          }
          // Fallback to percentage layout before measurement
          return (
            <div
              key={i}
              className="absolute left-1.5 w-px"
              style={{ top: `${2 + (i / numSteps) * 100}%`, height: `${(1 / numSteps) * 100}%` }}
            >
              <motion.div aria-hidden className="absolute left-0 top-0 w-px bg-primary origin-top" style={{ height: h }} />
            </div>
          );
        })}

        {/* Timeline Items */}
        <div className="relative">
          {achievements.map((achievement, index) => (
            <TimelineItem
              key={achievement.id}
              achievement={achievement}
              index={index}
              active={index < activeCount}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
