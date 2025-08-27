"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: {
    id: number;
    text: string;
    author: string;
    title: string;
    rating: number;
  };
  index: number;
  className?: string;
}

export const TestimonialCard = ({ testimonial, index, className }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        "bg-gray-800/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 min-w-[300px] max-w-[350px]",
        className
      )}
    >
      {/* Testimonial Text */}
      <div className="mb-4">
        <p className="text-white text-sm leading-relaxed">
          "{testimonial.text}"
        </p>
      </div>

      {/* Author Info */}
      <div className="mb-3">
        <h4 className="text-white font-bold text-sm">
          {testimonial.author}
        </h4>
        <p className="text-gray-400 text-xs">
          {testimonial.title}
        </p>
      </div>

      {/* Star Rating */}
      <div className="flex items-center">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-sm">★</span>
        ))}
      </div>
    </motion.div>
  );
}; 