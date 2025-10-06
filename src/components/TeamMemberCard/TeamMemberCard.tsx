import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { Card, CardContent } from '../ui/card';

export type TeamMember = {
  quote: string;
  name: string;
  role: string;
  isDark: boolean;
  image: string;
};

type TeamMemberCardProps = {
  member: TeamMember;
  index: number;
  className?: string;
};

export const TeamMemberCard = ({
  member,
  index,
  className = '',
}: TeamMemberCardProps): React.ReactElement => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className='flex-shrink-0'
    >
      <Card
        className={`relative w-[361px] h-[420px] rounded-2xl overflow-hidden border border-solid border-[rgba(34, 34, 34, 0.06)] ${
          member.isDark ? '' : 'bg-blend-luminosity'
        } ${className}`}
        style={{
          filter: 'grayscale(100%)',
        }}
      >
        <Image
          src={member.image}
          alt={`${member.name} - ${member.role}`}
          fill
          className='object-cover'
          quality={85}
          priority={index < 2}
          sizes='(max-width: 768px) 100vw, 361px'
        />
        <CardContent className='p-0 h-full relative'>
          <div
            className={`absolute ${
              index === 0
                ? 'left-0'
                : index === 1
                ? 'right-0'
                : index === 2
                ? 'left-px'
                : index === 3
                ? 'left-0'
                : 'left-0'
            } ${
              index === 1 || index === 3 ? '-bottom-px' : 'bottom-0'
            } w-[361px] h-[231px] flex items-end ${
              index === 1 || index === 2 || index === 3 ? 'justify-center' : ''
            } ${
              member.isDark
                ? 'bg-[linear-gradient(180deg,rgba(0,18,38,0)_15%,rgba(0,18,38,1)_66%)]'
                : 'bg-[linear-gradient(180deg,rgba(255,255,255,0)_15%,rgba(255,255,255,1)_53%)]'
            }`}
          >
            <div
              className={`
                 mb-5 w-[321px] h-[104px] ml-5
          ${
            index === 2 ? 'h-[68px]' : index === 0 || index === 4 ? 'h-[104px]' : 'h-[86px]'
          } items-start gap-3 flex relative flex-col`}
            >
              <blockquote
                className={`relative self-stretch mt-[-1.00px] [font-family:'Sora',Helvetica] font-light text-sm tracking-[0.14px] leading-[normal] ${
                  member.isDark ? 'text-white' : 'text-[#010101]'
                }`}
              >
                "{member.quote}"
              </blockquote>

              <div className='inline-flex items-center gap-2 relative flex-[0_0_auto] '>
                <span
                  className={`relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Medium',Helvetica] font-medium text-base text-center tracking-[0] leading-[normal] ${
                    member.isDark ? 'text-white' : 'text-[#010101]'
                  }`}
                >
                  {member.name} -
                </span>

                <span
                  className={`relative w-fit mt-[-1.00px] [font-family:'Sora',Helvetica] font-light text-base text-center tracking-[0] leading-[normal] ${
                    member.isDark ? 'text-[#a6a6a6]' : 'text-[#747474]'
                  }`}
                >
                  {member.role}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
