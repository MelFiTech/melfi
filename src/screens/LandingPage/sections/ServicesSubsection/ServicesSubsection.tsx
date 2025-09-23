"use client";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "../../../../components/ui/badge";
import { UIUXDesignCard } from "./components/UIUXDesignCard";
import { WebMobileDevelopmentCard } from "./components/WebMobileDevelopmentCard";
import { ProductStrategyCard } from "./components/ProductStrategyCard";
import { BrandingMotionDesignCard } from "./components/BrandingMotionDesignCard";


export const ServicesSubsection = (): React.ReactElement => {
  return (
    <section id="services" className="relative w-full min-h-[1315px] bg-white py-20 scroll-mt-28">
      <div className="container mx-auto px-6 max-w-[1248px] flex flex-col items-center gap-[49px]">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col w-[717px] items-center justify-center gap-2 relative flex-[0_0_auto]"
        >
          <Badge className="inline-flex items-center justify-center gap-2.5 px-3 py-px relative flex-[0_0_auto] bg-[#ff9b39] rounded-[50px] hover:bg-[#ff9b39]">
            <span className="mt-[-1.00px] font-normal text-xs tracking-[0.12px] leading-[26px] whitespace-nowrap relative w-fit [font-family:'Sora',Helvetica] text-white">
              Our Services
            </span>
          </Badge>

          <div className="flex flex-col items-center justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative w-[570px] mt-[-1.00px] font-medium text-neutral-900 text-4xl text-center tracking-[0] leading-[normal]">
              What we offer our clients
            </h2>

            <p className="relative w-[569px] opacity-50 [font-family:'Sora',Helvetica] font-normal text-neutral-900 text-base text-center tracking-[-0.64px] leading-[26px]">
              We have been helping our clients find exceptional solutions for
              their businesses, creating memorable websites and digital
              products.
            </p>
          </div>
        </motion.header>

        <div className="flex flex-col gap-4 w-full max-w-[1246px]">
          {/* Top Row - UI/UX Design and Web & Mobile Development */}
          <div className="flex flex-col lg:flex-row gap-4 justify-center">
            <UIUXDesignCard />
            <WebMobileDevelopmentCard />
          </div>

          {/* Bottom Row - Product Strategy and Branding & Motion Design */}
          <div className="flex flex-col lg:flex-row gap-4 justify-center">
            <ProductStrategyCard />
            <BrandingMotionDesignCard />
          </div>
        </div>
      </div>
    </section>
  );
};