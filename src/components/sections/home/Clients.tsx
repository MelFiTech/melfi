'use client';

import { cn } from "@/lib/utils";
import { Marquee } from "../../magicui/marquee";
import { motion } from "framer-motion";

// Client logo data - using text logos for now
const clients = [
  {
    name: "Nyra Wallet",
  },
  {
    name: "Sekere",
  },
  {
    name: "Monzi",
  },
  {
    name: "Karama",
  },
  {
    name: "Nyra Wallet",
  },
  {
    name: "Sekere",
  },
  {
    name: "Monzi",
  },
  {
    name: "Karama",
  },
  {
    name: "Nyra Wallet",
  },
  {
    name: "Sekere",
  },
];

const firstRow = clients.slice(0, Math.ceil(clients.length / 2));
const secondRow = clients.slice(Math.ceil(clients.length / 2));

// Text-based logo
const ClientLogo = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center justify-center px-8 py-4">
      <div className="text-white/50 font-semibold text-lg">
        {name}
      </div>
    </div>
  );
};

const StatsCard = ({ 
  icon, 
  title
}: { 
  icon: string; 
  title: string; 
}) => {
  return (
    <div className="flex items-center space-x-3 text-white opacity-50">
      <div className="text-2xl">{icon}</div>
      <div>
        <div className="font-semibold text-sm">{title}</div>
      </div>
    </div>
  );
};

export default function Clients() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Trusted by 80+ Startups
          </h2>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <StatsCard 
              icon="</>" 
              title="Design & Dev" 
            />
            <StatsCard 
              icon="★" 
              title="5 star rating" 
            />
            <StatsCard 
              icon="💼" 
              title="10+ years experience" 
            />
            <StatsCard 
              icon="👥" 
              title="Fast pace Delivery Team" 
            />
          </div>
        </motion.div>

        {/* Logo Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex w-full flex-col items-center justify-center overflow-hidden"
        >
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((client, index) => (
              <ClientLogo key={`${client.name}-${index}`} name={client.name} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((client, index) => (
              <ClientLogo key={`${client.name}-${index}`} name={client.name} />
            ))}
          </Marquee>
          
          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
        </motion.div>
      </div>
    </section>
  );
} 