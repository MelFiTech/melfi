import React from "react";
import { Button } from "../../../../components/ui/button";

export const CtaSubsection = (): React.ReactElement => {
  return (
    <section className="relative w-full h-[586px] flex items-center justify-center">
      <div className="relative w-[1190px] h-[408px] rounded-[50px] overflow-hidden bg-[linear-gradient(0deg,rgba(16,34,63,1)_44%,rgba(42,89,165,1)_100%)]">
        <img
          className="absolute top-0 left-0 w-[1190px] h-[408px] object-cover"
          alt="CTA Background"
          src="/images/cta-bg.png"
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col items-center justify-center gap-2 w-full">
            <h2 className="w-[641px] font-semibold text-white text-[40px] text-center tracking-[0] leading-[normal]">
              Let's help you build that idea into an amazing product.
            </h2>

            <p className="w-[694px] opacity-50 [font-family:'Sora',Helvetica] font-normal text-white text-lg text-center tracking-[-0.72px] leading-[26px]">
              Ideate, Design, Build.
            </p>
          </div>

          <Button className="h-[51px] px-6 py-[17px] border-2 border-solid border-[#0049b9] shadow-[inset_0px_4px_7px_#7aaeff] [background:radial-gradient(50%_50%_at_50%_15%,rgba(71,143,254,1)_0%,rgba(6,93,226,1)_100%)] rounded-[60px] [font-family:'Sora',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal] hover:opacity-90 transition-opacity">
            Send us a Mail today 😊
          </Button>
        </div>

        <img
          className="absolute bottom-[-130px] left-[-100px] w-[430px] h-[326px] object-contain z-10"
          alt="Mail Left"
          src="/images/mail-left.png"
        />

        <img
          className="absolute bottom-[-130px] right-[-100px] w-[417px] h-[326px] object-contain z-10"
          alt="Mail Right"
          src="/images/mail-right.png"
        />
      </div>
    </section>
  );
};
