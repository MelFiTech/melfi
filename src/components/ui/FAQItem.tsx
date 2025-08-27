"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

export const FAQItem = ({ 
  question, 
  answer, 
  isOpen = false, 
  onToggle,
  className 
}: FAQItemProps) => {
  return (
    <div className={cn("border-b border-gray-700", className)}>
      <button
        onClick={onToggle}
        className="w-full py-6 text-left flex items-center justify-between hover:text-gray-300 transition-colors"
      >
        <span className="text-white font-medium text-lg">{question}</span>
        <span className="text-white text-xl font-light">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6">
              <p className="text-gray-400 text-sm leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 