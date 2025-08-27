'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/ui/ProjectCard';
import RollingGallery from '@/components/ui/RollingGallery';

const projects: Array<{
  id: number;
  name: string;
  title: string;
  scaling: string;
  duration: string;
  services: string[];
  buttonText: string;
  mockupType: "single" | "multiple";
}> = [
  {
    id: 1,
    name: "HealR",
    title: "How We Helped Ceartas Redesign Their Site for Series A After Raising €5M",
    scaling: "Scaled HealR from $1k+ monthly to $500k weekly",
    duration: "2 months",
    services: ["Design", "Development", "Motion", "Branding", "Copy writing"],
    buttonText: "View Live Website",
    mockupType: "multiple", // Three iPhone mockups
  },
  {
    id: 2,
    name: "Hair Care Routine",
    title: "How We Helped Ceartas Redesign Their Site for Series A After Raising €5M",
    scaling: "Scaled Hair Care from $500 monthly to $50k weekly",
    duration: "12 months",
    services: ["Design", "Development"],
    buttonText: "Download App",
    mockupType: "single", // Single iPhone mockup
  },
  {
    id: 3,
    name: "People",
    title: "How We Helped Ceartas Redesign Their Site for Series A After Raising €5M",
    scaling: "Scaled People from $2k monthly to $200k weekly",
    duration: "12 months",
    services: ["Design", "Development", "Motion", "Branding", "Copy writing"],
    buttonText: "View Live Website",
    mockupType: "single", // Single iPhone mockup
  },
  {
    id: 4,
    name: "Set the Tone for Your Club",
    title: "How We Helped Ceartas Redesign Their Site for Series A After Raising €5M",
    scaling: "Scaled Club from $1.5k monthly to $150k weekly",
    duration: "12 months",
    services: ["Design", "Development", "Motion", "Branding", "Copy writing"],
    buttonText: "Download App",
    mockupType: "single", // Single iPhone mockup
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Sticky at top during stack */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sticky top-0 z-50 py-8 text-center"
          >
            {/* Jobs Done Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-medium mb-6"
            >
              Jobs done
            </motion.div>
            
            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Live Projects
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
        </div>

        {/* Rolling Gallery */}
        <div className="mt-16 mb-16">
          <RollingGallery autoplay={true} pauseOnHover={true}>
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </RollingGallery>
        </div>
      </div>
    </section>
  );
}