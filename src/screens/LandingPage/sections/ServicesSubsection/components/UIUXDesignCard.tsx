import React from "react";
import { Card, CardContent } from "../../../../../components/ui/card";
import { motion } from "framer-motion";
import { MousePointer2 } from "lucide-react";

const cursors = [
  {
    top: "top-[121px]",
    left: "left-[89px]",
    width: "w-[50px]",
    label: "you",
    bgColor: "bg-[#e4b215]",
  },
  {
    top: "top-[69px]",
    left: "left-0",
    width: "w-[70px]",
    label: "Designer",
    bgColor: "bg-[#7b61ff]",
  },
  {
    top: "top-[78px]",
    left: "left-[153px]",
    width: "w-[75px]",
    label: "Developer",
    bgColor: "bg-[#ff6665]",
  },
  {
    top: "top-0",
    left: "left-[65px]",
    width: "w-[102px]",
    label: "Product Manager",
    bgColor: "bg-[#08ac49]",
  },
];

export const UIUXDesignCard = (): React.ReactElement => {
  return (
    <Card className="w-[719px] h-[420px] bg-[#F9F9FB] relative rounded-2xl overflow-hidden border-none shadow-none flex-shrink-0">
      <CardContent className="p-0 relative w-full h-full">
        <div className="w-[335px] left-[calc(50.00%_-_270px)] flex flex-col items-start gap-0.5 absolute top-[52px]">
          <h3 className="relative flex items-center justify-center w-fit mt-[-1.00px] font-semibold text-[#010101] text-lg text-center tracking-[-0.09px] leading-7 whitespace-nowrap">
            UI/UX Design
          </h3>

          <p className="relative flex items-center justify-center self-stretch [font-family:'Sora',Helvetica] font-normal text-[#36394a] text-sm tracking-[-0.28px] leading-[21px]">
            Go live faster with design. No delays, no excuses. Beautiful, user-friendly digital experiences.
          </p>
        </div>

        <img
          className="absolute top-[152px] left-1/2 -translate-x-1/2 w-[776px] h-[378px] object-contain"
          alt="UI/UX Design"
          src="/images/design.png"
        />

        {/* Animated cursors over the image area */}
        <div className="absolute top-[172px] left-1/2 -translate-x-1/2 w-[576px] h-[228px] pointer-events-none">
          {/* you */}
          <motion.div
            aria-hidden
            className="absolute flex items-center gap-1"
            initial={{ x: 60, y: 140 }}
            animate={{
              x: [60, 240, 320, 180, 60],
              y: [140, 110, 30, 60, 140],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          >
            <MousePointer2 className="w-4 h-4 text-[#e4b215] drop-shadow" />
            <div className="inline-flex items-center justify-center px-[8.94px] py-[3.46px] rounded-[22.35px] bg-[#e4b215]">
              <span className="[font-family:'Sora',Helvetica] text-white text-[8px] leading-none">you</span>
            </div>
          </motion.div>

          {/* Designer */}
          <motion.div
            aria-hidden
            className="absolute flex items-center gap-1"
            initial={{ x: 10, y: 70 }}
            animate={{ x: [10, 120, 220, 150, 10], y: [70, 40, 80, 140, 70] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            <MousePointer2 className="w-4 h-4 text-[#7b61ff] drop-shadow" />
            <div className="inline-flex items-center justify-center px-[8.94px] py-[3.46px] rounded-[22.35px] bg-[#7b61ff]">
              <span className="[font-family:'Sora',Helvetica] text-white text-[8px] leading-none">Designer</span>
            </div>
          </motion.div>

          {/* Developer */}
          <motion.div
            aria-hidden
            className="absolute flex items-center gap-1"
            initial={{ x: 360, y: 170 }}
            animate={{ x: [360, 260, 120, 280, 360], y: [170, 120, 60, 80, 170] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <MousePointer2 className="w-4 h-4 text-[#ff6665] drop-shadow" />
            <div className="inline-flex items-center justify-center px-[8.94px] py-[3.46px] rounded-[22.35px] bg-[#ff6665]">
              <span className="[font-family:'Sora',Helvetica] text-white text-[8px] leading-none">Developer</span>
            </div>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
};
