"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  delay?: number;
}

export const Card = ({ 
  children, 
  className, 
  index = 0, 
  delay = 0 
}: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay + (index * 0.1) }}
      className={cn(
        "bg-gray-800/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-gray-800/50 transition-colors",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader = ({ children, className }: CardHeaderProps) => {
  return (
    <div className={cn("mb-4", className)}>
      {children}
    </div>
  );
};

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle = ({ children, className }: CardTitleProps) => {
  return (
    <h3 className={cn("text-white font-bold text-lg mb-2", className)}>
      {children}
    </h3>
  );
};

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const CardDescription = ({ children, className }: CardDescriptionProps) => {
  return (
    <p className={cn("text-gray-400 text-sm", className)}>
      {children}
    </p>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent = ({ children, className }: CardContentProps) => {
  return (
    <div className={cn("", className)}>
      {children}
    </div>
  );
};

interface CardIconProps {
  children: React.ReactNode;
  className?: string;
}

export const CardIcon = ({ children, className }: CardIconProps) => {
  return (
    <div className={cn("text-2xl", className)}>
      {children}
    </div>
  );
}; 