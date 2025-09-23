import React from "react";
import { Metadata } from "next";
import { CtaSubsection } from "./sections/CtaSubsection/CtaSubsection";
import { FaQsSubsection } from "./sections/FaQsSubsection/FaQsSubsection";
import { HeroSubsection } from "./sections/HeroSubsection/HeroSubsection";
import { HowWeWorkSubsection } from "./sections/HowWeWorkSubsection/HowWeWorkSubsection";
import { AboutSubsection } from "./sections/AboutSubsection/AboutSubsection";
import { LiveProjectsSubsection } from "./sections/LiveProjectsSubsection/LiveProjectsSubsection";
import { ServicesSubsection } from "./sections/ServicesSubsection/ServicesSubsection";
import { TestimonialSubsection } from "./sections/TestimonialSubsection/TestimonialSubsection";
import { TrustedClientsSubsection } from "./sections/TrustedClientsSubsection/TrustedClientsSubsection";

export const metadata: Metadata = {
  title: "Melfi Agency - Digital Products that Drive Growth",
  description: "A global design & development studio helping startups and brands create stunning, user-focused websites and apps.",
};

export const LandingPage = (): React.ReactElement => {
  return (
    <main className="flex flex-col items-start relative bg-white overflow-hidden w-full">
      <div className="absolute left-[calc(50.00%_-_764px)] bottom-[-1090px] w-[1527px] h-[1527px] rounded-[763.5px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(78,141,237,0.5)_0%,rgba(255,255,255,0.4)_84%)]" />

      <HeroSubsection />
      <TrustedClientsSubsection />
      <ServicesSubsection />
      <LiveProjectsSubsection />
      <HowWeWorkSubsection />
      <AboutSubsection />
      <TestimonialSubsection />
      <FaQsSubsection />
      <CtaSubsection />
    </main>
  );
};
