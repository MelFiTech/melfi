import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { PhoneCall, RefreshCw, CheckCircle2 } from "lucide-react";

const workflowSteps = [
  {
    title: "Book a Call",
    description:
      "Book a quick discovery call to understand your project goals, needs & challenges.",
  },
  {
    title: "Quick Updates",
    description:
      "Get regular progress updates so you're always in the loop as the design evolves.",
  },
  {
    title: "Approval & Review",
    description:
      "Share feedback, request changes, and approve final designs before launch.",
  },
];

export const HowWeWorkSubsection = (): React.ReactElement => {
  return (
    <section id="how-we-work" className="relative w-full bg-white py-24 scroll-mt-28">
      <div className="container mx-auto px-6 max-w-[1248px] grid grid-cols-1 lg:grid-cols-2 gap-14 ">
        {/* Left copy column */}
        <div className="flex flex-col  flex-1 justify-between gap-4 max-w-[560px]">
         <div className="flex flex-col gap-4">
           <Badge className="w-fit bg-[#ff9b39] text-white hover:bg-[#ff9b39] px-3 py-1 rounded-[50px] h-auto">
            <span className="[font-family:'Sora',Helvetica] font-normal text-xs tracking-[0.12px] leading-[26px]">Steps to deliver</span>
          </Badge>
          <h2 className="font-medium text-neutral-900 text-4xl tracking-[0] leading-[normal]">How we Work</h2>
          <p className="opacity-50 [font-family:'Sora',Helvetica] text-neutral-900 text-base tracking-[-0.64px] leading-[26px]">
            Our approach is simple: understand our clients&apos; needs, explore creative
            solutions, and deliver brands and digital products that stand out.
          </p>
         </div>

          <Button className="mt-6 inline-flex items-center justify-center gap-2.5 h-auto px-6 py-4 rounded-[60px] border-2 border-solid border-[#0049b9] shadow-[inset_0px_4px_7px_#7aaeff] [background:radial-gradient(50%_50%_at_50%_15%,rgba(71,143,254,1)_0%,rgba(6,93,226,1)_100%)] hover:[background:radial-gradient(50%_50%_at_50%_15%,rgba(71,143,254,1)_0%,rgba(6,93,226,1)_100%)] w-full ">
            <span className="[font-family:'Sora',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal]">
              Book a Free Call today😉
            </span>
          </Button>
        </div>

        {/* Right steps column */}
        <div className="flex flex-col gap-6">
          <Card className="bg-[#F9F9FB] rounded-3xl overflow-hidden shadow-none border-none">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#2e6cff] flex items-center justify-center text-white flex-shrink-0">
                <PhoneCall className="w-5 h-5" aria-hidden />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="[font-family:'Clash Display',Helvetica] font-semibold text-[#010101] text-lg leading-7">Book a Call</h3>
                <p className="[font-family:'Sora',Helvetica] text-[#010101]/70 text-base leading-[26px] max-w-[560px]">
                  Book a quick discovery call to understand your project goals, needs & challenges.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#F9F9FB] rounded-3xl overflow-hidden shadow-none border-none">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#2e6cff] flex items-center justify-center text-white flex-shrink-0">
                <RefreshCw className="w-5 h-5" aria-hidden />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="[font-family:'Clash Display',Helvetica] font-semibold text-[#010101] text-lg leading-7">Quick Updates</h3>
                <p className="[font-family:'Sora',Helvetica] text-[#010101]/70 text-base leading-[26px] max-w-[560px]">
                  Get regular progress updates so you’re always in the loop as the design evolves.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#F9F9FB] rounded-3xl overflow-hidden shadow-none border-none">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#2e6cff] flex items-center justify-center text-white flex-shrink-0">
                <CheckCircle2 className="w-5 h-5" aria-hidden />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="[font-family:'Clash Display',Helvetica] font-semibold text-[#010101] text-lg leading-7">Approval & Review</h3>
                <p className="[font-family:'Sora',Helvetica] text-[#010101]/70 text-base leading-[26px] max-w-[560px]">
                  Share feedback, request changes, and approve final designs before launch.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
