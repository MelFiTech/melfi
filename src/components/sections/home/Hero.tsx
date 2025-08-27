'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectMarquee } from './ProjectMarquee';
import { PointerHighlight } from '../../ui/pointer-highlight';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container for hero */}
        <div className="flex flex-col lg:flex-row gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white flex-1 w-full"
          >
            {/* Tools we use section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-full mb-8"
            >
              <span className="text-sm text-gray-300">Tools we use</span>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              We Design Digital Products That{' '}
              <span className="inline-flex items-center">
                Drive{' '}
                <PointerHighlight
                  rectangleClassName="border-primary"
                  pointerClassName="text-primary"
                >
                  <span>Growth.</span>
                </PointerHighlight>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="text-xl text-gray-300 mb-8 max-w-lg"
            >
              A global design & development studio helping startups and brands create stunning, user-focused websites and apps.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors flex items-center space-x-2">
                <span>Book a Free UX Audit</span>
                <span className="text-lg">💡</span>
              </button>
              <button className="px-8 py-4 border border-white/20 text-white rounded-full font-semibold hover:bg-white/5 transition-colors flex items-center space-x-2">
                <span>See Our Work</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Project Marquee */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 20 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex-1 w-full flex items-center justify-center relative"
          >
            <ProjectMarquee />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;