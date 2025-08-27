"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  background: string;
  index: number;
  className?: string;
}

export const ServiceCard = ({
  icon,
  title,
  description,
  background,
  index,
  className,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        "relative border border-white/10 rounded-2xl h-[537px] w-full flex flex-col justify-end overflow-hidden group shadow-lg",
        className
      )}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0" />

      <div className="relative z-10 p-6 md:p-8 flex flex-col gap-3">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-6 h-6 md:w-8 md:h-8 relative">
            <Image
              src={icon}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
          <h3 className="text-white font-bold text-base md:text-lg drop-shadow-lg">{title}</h3>
        </div>
        <p className="text-gray-300 text-sm md:text-base font-normal drop-shadow-md leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};