'use client';
import React from 'react';
import { Button } from '../ui/button';

export type TabOption = {
  label: string;
  value: string;
  active: boolean;
};

type TabsProps = {
  options: TabOption[];
  onTabChange?: (value: string) => void;
  className?: string;
};

export const Tabs = ({ options, onTabChange, className = '' }: TabsProps): React.ReactElement => {
  return (
    <nav
      className={`flex w-full md:w-[570px] items-start gap-1 p-1.5 relative md:flex-[0_0_auto] bg-[#f7f7f7] rounded-[110px] ${className}`}
    >
      {options.map((tab, index) => (
        <Button
          key={index}
          variant={tab.active ? 'default' : 'ghost'}
          onClick={() => onTabChange?.(tab.value)}
          className={`flex items-center justify-center gap-2.5 px-6 py-4 relative flex-1 grow rounded-[60px] h-auto ${
            tab.active
              ? 'border-2 border-solid border-[#0049b9] shadow-[inset_0px_4px_7px_#7aaeff] [background:radial-gradient(50%_50%_at_50%_15%,rgba(71,143,254,1)_0%,rgba(6,93,226,1)_100%)] text-white'
              : 'opacity-20 text-black bg-transparent hover:bg-transparent'
          }`}
        >
          <span className="mt-[-2.00px] font-semibold text-base tracking-[0] leading-[normal] [font-family:'Sora',Helvetica]">
            {tab.label}
          </span>
        </Button>
      ))}
    </nav>
  );
};
