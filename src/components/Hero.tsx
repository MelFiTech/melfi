'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import TickerPill from './TickerPill';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/logo/bg.png"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mb-6 text-6xl font-bold tracking-normal leading-tight sm:text-7xl font-[Glitten] bg-gradient-to-b from-gray-900 to-white text-transparent bg-clip-text"
        >
          Crafting Digital <br /> Excellence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mb-8 max-w-2xl text-xl text-gray-200"
        >
           
        </motion.p>
      </motion.div>

      {/* Ticker */}
      <div className="relative">
        <div className="absolute left-0 z-10 w-32 h-full bg-gradient-to-r from-black to-transparent" />
        <TickerPill />
        <div className="absolute right-0 top-0 z-10 w-32 h-full bg-gradient-to-l from-black to-transparent" />
      </div>
    </div>
  );
};

export default Hero;