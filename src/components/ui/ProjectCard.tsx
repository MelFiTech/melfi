"use client";

import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    title: string;
    scaling: string;
    duration: string;
    services: string[];
    buttonText: string;
    mockupType: "single" | "multiple";
  };
  index: number;
  className?: string;
}

export const ProjectCard = ({ project, index, className }: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "backdrop-blur-xl bg-black/90 border border-white/20 rounded-2xl p-4 md:p-5 w-[320px] flex-shrink-0 shadow-2xl relative overflow-hidden",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/15 before:via-white/5 before:to-transparent before:rounded-2xl",
        "after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/20 after:via-transparent after:to-white/10 after:rounded-2xl",
        className
      )}
    >
      {/* Sleek glass overlay layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/12 to-white/4 rounded-2xl" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/8 to-white/15 rounded-2xl" />
      {/* Enhanced inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl" />
      {/* Prominent border highlight */}
      <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-white/12 via-transparent to-transparent" />
      
      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Image Container */}
        <div className="w-full h-[200px] rounded-xl overflow-hidden bg-black/50 backdrop-blur-sm border border-white/15 mb-4 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-transparent" />
          <img
            src={`https://picsum.photos/seed/${project.id}/320/200`}
            alt={project.name}
            className="w-full h-full object-cover relative z-10"
          />
        </div>

        {/* Project Name */}
        <h3 className="text-white font-bold text-lg md:text-xl text-center mb-2 drop-shadow-lg">
          {project.name}
        </h3>
        
        {/* Project Description */}
        <p className="text-gray-300 text-sm text-center line-clamp-2 drop-shadow-md">
          {project.scaling}
        </p>
      </div>
    </div>
  );
};