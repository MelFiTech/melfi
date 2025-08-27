'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import WhyTimeline from './WhyTimeline';

const achievements = [
  {
    id: 1,
    title: "20+ Products Launched",
    description:
      "We're a boutique, remote-first agency. That means personal attention, lightning-fast turnaround, and world-class design without bloated agency overhead.",
    isActive: true,
  },
  {
    id: 2,
    title: "98% Client Satisfaction",
    description:
      "We're a boutique, remote-first agency. That means personal attention, lightning-fast turnaround, and world-class design without bloated agency overhead.",
    isActive: false,
  },
  {
    id: 3,
    title: "Clients in 6+ Countries",
    description:
      "We're a boutique, remote-first agency. That means personal attention, lightning-fast turnaround, and world-class design without bloated agency overhead.",
    isActive: false,
  },
  {
    id: 4,
    title: "Conversion Rate",
    description:
      "We're a boutique, remote-first agency. That means personal attention, lightning-fast turnaround, and world-class design without bloated agency overhead.",
    isActive: false,
  },
];

const TimelineItem = ({
  achievement,
  index,
  active,
}: {
  achievement: typeof achievements[0];
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
      {/* Timeline Dot */}
      <div className="flex-shrink-0 mt-2">
        <div
          className={`w-3 h-3 rounded-full transition-colors duration-300 ${
            active ? 'bg-primary' : 'bg-gray-500'
          }`}
        ></div>
      </div>

      {/* Content */}
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

export default function Why() {
  const NUM_STEPS = achievements.length; // 4
  const TOTAL_SECTIONS = NUM_STEPS + 1; // 5 (release on last)
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });

  // Determine active step count at thresholds 1/5, 2/5, 3/5, 4/5
  const thresholds = useMemo(() => achievements.map((_, i) => (i + 1) / TOTAL_SECTIONS), [TOTAL_SECTIONS]);
  const [activeCount, setActiveCount] = useState(0);
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      const count = thresholds.filter((t) => v >= t).length;
      setActiveCount(count);
    });
    return () => unsubscribe();
  }, [scrollYProgress, thresholds]);

  // Segment height functions and hooks (top-level)
  const segPercent = (i: number) => (v: number) => {
    const start = i / TOTAL_SECTIONS; // 0/5, 1/5, 2/5, 3/5
    const end = (i + 1) / TOTAL_SECTIONS; // 1/5, 2/5, 3/5, 4/5
    let t = (v - start) / (end - start);
    if (t < 0) t = 0;
    if (t > 1) t = 1;
    return `${t * 100}%`;
  };

  const seg0 = useTransform(scrollYProgress, segPercent(0));
  const seg1 = useTransform(scrollYProgress, segPercent(1));
  const seg2 = useTransform(scrollYProgress, segPercent(2));
  const seg3 = useTransform(scrollYProgress, segPercent(3));
  const segmentHeights = [seg0, seg1, seg2, seg3];

  return (
    <section ref={sectionRef} className="py-20 bg-black" style={{ height: `${TOTAL_SECTIONS * 100}vh` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-start h-full">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:sticky lg:top-24 self-start"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-medium"
            >
              Why choose us
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Why we are the best team to work with
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              We're a boutique, remote-first agency. That means personal attention, 
              lightning-fast turnaround, and world-class design without bloated agency overhead.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <button className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2">
                <span>Book a Call with Melfi</span>
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M7 17l9.2-9.2M17 17V7H7" 
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Timeline (sticky) */}
          <WhyTimeline
            achievements={achievements}
            segmentHeights={segmentHeights}
            numSteps={NUM_STEPS}
            activeCount={activeCount}
          />
        </div>
      </div>
    </section>
  );
}

