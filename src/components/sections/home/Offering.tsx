'use client';

import { motion } from 'framer-motion';
import { ServiceCard } from '@/components/ui/ServiceCard';

const services = [
  {
    icon: "/icons/product-strategy.png",
    title: "Product Strategy",
    description: "Research-driven design for business growth.",
    background: "/images/services/product.png",
  },
  {
    icon: "/icons/ux-design.png",
    title: "UI/UX Design",
    description: "Beautiful, user-friendly digital experiences.",
    background: "/images/services/design.png",
  },
  {
    icon: "/icons/development.png",
    title: "Web & Mobile Development",
    description: "Scalable websites & apps.",
    background: "/images/services/development.png",
  },
  {
    icon: "/icons/branding.png",
    title: "Branding & Motion Design",
    description: "Memorable brands that convert.",
    background: "/images/services/branding.png",
  },
];

export default function Offering() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Service Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-medium mb-6"
          >
            Our Services
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            What we offer our clients
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            A global design & development studio helping startups and brands create stunning, user-focused websites and apps.
          </motion.p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              background={service.background}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
} 