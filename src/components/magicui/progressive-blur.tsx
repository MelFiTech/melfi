"use client";

import { cn } from "@/lib/utils";

interface ProgressiveBlurProps {
  position?: "top" | "bottom" | "left" | "right";
  height?: string;
  width?: string;
  className?: string;
}

export function ProgressiveBlur({
  position = "bottom",
  height = "40%",
  width = "100%",
  className,
}: ProgressiveBlurProps) {
  const positionClasses = {
    top: "top-0 bg-gradient-to-b",
    bottom: "bottom-0 bg-gradient-to-t",
    left: "left-0 bg-gradient-to-r",
    right: "right-0 bg-gradient-to-l",
  };

  const blurGradient = {
    top: "from-background via-background/80 to-transparent",
    bottom: "from-background via-background/80 to-transparent",
    left: "from-background via-background/80 to-transparent",
    right: "from-background via-background/80 to-transparent",
  };

  return (
    <div
      className={cn(
        "pointer-events-none absolute z-10",
        positionClasses[position],
        blurGradient[position],
        "backdrop-blur-sm",
        className
      )}
      style={{
        height: position === "top" || position === "bottom" ? height : "100%",
        width: position === "left" || position === "right" ? width : "100%",
      }}
    />
  );
}