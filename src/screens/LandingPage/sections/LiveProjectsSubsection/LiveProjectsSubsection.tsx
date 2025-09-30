"use client";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const LiveProjectsSubsection = (): React.ReactElement => {
  const projects = [
    {
      title: "Monzi",
      description:
        "Snap bank info to make seamless transfers. No typing, no errors. Just snap and send money in seconds",
      image: "/projects/monzi.png",
      hasImage: true,
    },
    {
      title: "Nyra Wallet",
      description:
        "An App for Seamless currency switch: fund in Naira, spend in USD, pay bills, and send dollars with NyraTag.",
      image: "/projects/nyra.png",
      hasImage: true,
    },
    {
      title: "Snugs",
      description:
        "Flirt loud, Meet fast, Feel the spark: A dating app where you get to meet people and connect faster.",
      image: "/projects/snugs.png",
      hasImage: true,
    },
    {
      title: "Karama",
      description:
        "Meet Karama, the first matchmaking app, connecting  families and caregivers.",
      image: "/projects/karama.png",
      hasImage: true,
    },
    {
      title: "Dysh",
      description:
        "The World on Your Plate: discover recipes from across the globe using what you already have.",
      image: "/projects/dysh.png",
      hasImage: true,
    },
    {
      title: "Sekere",
      description:
        "An inter-state ride app: Your safe affordable, and convenient way to move around Nigeria",
      image: "/projects/sekere.png",
      hasImage: true,
    },
  ];

  return (
    <section id="projects" className="relative w-full bg-[#f8f8fa] py-[136px] scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-2 mb-16 max-w-[717px] mx-auto">
          <Badge className="bg-[#ff9b39] text-white hover:bg-[#ff9b39] px-3 py-1 rounded-[50px] h-auto">
            <span className="[font-family:'Sora',Helvetica] font-normal text-xs tracking-[0.12px] leading-[26px]">
              Jobs done
            </span>
          </Badge>

          <div className="flex flex-col items-center justify-center gap-2 w-full">
            <h2 className="font-medium text-neutral-900 text-4xl text-center tracking-[0] leading-[normal] max-w-[570px]">
              Live Projects
            </h2>

            <p className="opacity-50 [font-family:'Sora',Helvetica] font-normal text-neutral-900 text-base text-center tracking-[-0.64px] leading-[26px] max-w-[569px]">
              We don&apos;t provide pre-packaged solutions, we build products
              exactly as envisioned in the design phase, with no shortcuts or
              compromises.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row  max-w-[1280px] mx-auto md:justify-around ">
          {/* Left column: indices 0,2,4 */}
          <div className="flex flex-col gap-[115px]">
            {projects.filter((_, i) => i % 2 === 0).map((project, idx) => (
              <motion.div
                key={`left-${idx}-${project.title}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.05 }}
                className="border-none shadow-none bg-transparent"
              >
                <CardContent className="p-0 flex flex-col gap-[35px]">
                  <div className="w-full h-[500px] max-w-[516px]">
                    {project.hasImage ? (
                      <img
                        className="w-full h-full object-contain"
                        alt={project.title}
                        src={project.image || undefined}
                      />
                    ) : (
                      <div className="w-full h-full bg-[#f1f1f1] rounded-3xl" />
                    )}
                  </div>

                  <div className="flex flex-col gap-2.5 max-w-[493px]">
                    <h3 className="font-semibold text-[#010101] text-[22px] tracking-[-0.11px] leading-7">
                      {project.title}
                    </h3>

                    <p className="[font-family:'Sora',Helvetica] font-normal text-[#36394a] text-base tracking-[-0.32px] leading-[21px]">
                      {project.description}
                    </p>
                  </div>
                </CardContent>
              </motion.div>
            ))}
          </div>

          {/* Right column: indices 1,3,5 with stagger offset */}
          <div className="flex flex-col gap-[115px] lg:pt-24">
            {projects.filter((_, i) => i % 2 === 1).map((project, idx) => (
              <motion.div
                key={`right-${idx}-${project.title}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.05 }}
                className="border-none shadow-none bg-transparent"
              >
                <CardContent className="p-0 flex flex-col gap-[35px]">
                  <div className="w-full h-[500px] max-w-[516px]">
                    {project.hasImage ? (
                      <img
                        className="w-full h-full object-contain"
                        alt={project.title}
                        src={project.image || undefined}
                      />
                    ) : (
                      <div className="w-full h-full bg-[#f1f1f1] rounded-3xl" />
                    )}
                  </div>

                  <div className="flex flex-col gap-2.5 max-w-[493px]">
                    <h3 className="font-semibold text-[#010101] text-[22px] tracking-[-0.11px] leading-7">
                      {project.title}
                    </h3>

                    <p className="[font-family:'Sora',Helvetica] font-normal text-[#36394a] text-base tracking-[-0.32px] leading-[21px]">
                      {project.description}
                    </p>
                  </div>
                </CardContent>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
