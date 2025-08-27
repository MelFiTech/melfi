"use client";

import { Card, CardIcon, CardTitle, CardDescription } from './Card';

interface WorkCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
  className?: string;
}

export const WorkCard = ({ 
  icon, 
  title, 
  description, 
  index, 
  className 
}: WorkCardProps) => {
  return (
    <Card index={index} className={className}>
      {/* Visual Placeholder - Black Square */}
      <div className="w-full h-32 bg-black rounded-lg mb-4"></div>
      
      {/* Content */}
      <div className="flex items-start space-x-3">
        <CardIcon className="text-white">{icon}</CardIcon>
        <div className="flex-1">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </div>
    </Card>
  );
}; 