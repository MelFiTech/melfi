import React from "react";
import { Card, CardContent } from "../../../../../components/ui/card";

export const ProductStrategyCard = (): React.ReactElement => {
  return (
    <Card className="w-[446px] h-[480px] bg-[#F9F9FB] relative rounded-2xl overflow-hidden border-none shadow-none flex-shrink-0">
      <CardContent className="p-0 relative w-full h-full">
        <div className="w-[426px] absolute top-[52px] left-[40px] flex flex-col items-start gap-0.5 z-10">
          <h3 className="mt-[-1.00px] text-[#010101] text-lg tracking-[-0.09px] leading-7 whitespace-nowrap font-semibold text-left w-fit">
            Product Strategy
          </h3>
          <p className="[font-family:'Sora',Helvetica] font-normal text-[#36394a] text-sm tracking-[-0.28px] leading-[21px] text-left w-80">
          Shaping product direction with research-driven insights to maximize business impact.
          </p>
        </div>
        <img
          className="absolute top-[90px] right-[-50px] w-[820px] h-[560px] object-contain z-10 pointer-events-none"
          alt="Product Strategy"
          src="/images/product.png"
        />
      </CardContent>
    </Card>
  );
};
