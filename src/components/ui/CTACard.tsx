"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CTACardProps {
  title: string;
  subtitle: string;
  tagline: string;
  buttonText: string;
  buttonIcon?: string;
  className?: string;
}

export const CTACard = ({ 
  title, 
  subtitle, 
  tagline, 
  buttonText, 
  buttonIcon = "📧",
  className 
}: CTACardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "relative rounded-4xl p-8 md:p-12 overflow-hidden h-[370px]",
        "border border-blue-700/30 shadow-2xl",
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-bg.png"
          alt="CTA Background"
          fill
          className="object-fill"
          priority
        />
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/0 to-blue-800/0"></div>

      {/* Envelope Graphics (images) */}
      <div className="pointer-events-none select-none absolute bottom-[-130px] -left-20 hidden md:block opacity-100">
        <Image
          src="/images/mail-left.png"
          alt="Envelope left"
          width={391}
          height={250}
          className="w-[260px] md:w-[320px] lg:w-[380px] h-auto drop-shadow-xl"
          priority
        />
      </div>
      <div className="pointer-events-none select-none absolute bottom-[-130px] -right-20 hidden md:block opacity-100">
        <Image
          src="/images/mail-right.png"
          alt="Envelope right"
          width={391}
          height={250}
          className="w-[260px] md:w-[320px] lg:w-[380px] h-auto drop-shadow-xl"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-white mb-2"
        >
          {title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl font-bold text-white mb-4"
        >
          {subtitle}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-300 text-lg mb-8"
        >
          {tagline}
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="px-8 py-4 bg-gradient-to-b from-blue-500 to-blue-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2 mx-auto shadow-lg hover:shadow-xl"
        >
          <span>{buttonText}</span>
          <span className="text-lg">{buttonIcon}</span>
        </motion.button>
      </div>
    </motion.div>
  );
};