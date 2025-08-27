'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online marketplace built with Next.js and Stripe integration.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    link: "#"
  },
  {
    title: "Healthcare Management System",
    description: "A comprehensive healthcare platform for managing patient records and appointments.",
    image: "/projects/healthcare.jpg",
    tags: ["React", "Node.js", "MongoDB", "WebRTC"],
    link: "#"
  },
  {
    title: "Financial Analytics Dashboard",
    description: "Real-time financial data visualization and analysis platform.",
    image: "/projects/finance.jpg",
    tags: ["Vue.js", "D3.js", "Python", "FastAPI"],
    link: "#"
  },
  {
    title: "Social Media App",
    description: "A modern social networking platform with real-time messaging and content sharing.",
    image: "/projects/social.jpg",
    tags: ["React Native", "Firebase", "GraphQL"],
    link: "#"
  },
  {
    title: "AI-Powered Learning Platform",
    description: "Educational platform leveraging AI for personalized learning experiences.",
    image: "/projects/education.jpg",
    tags: ["Python", "TensorFlow", "React", "AWS"],
    link: "#"
  },
  {
    title: "IoT Fleet Management",
    description: "Real-time tracking and management system for vehicle fleets.",
    image: "/projects/iot.jpg",
    tags: ["IoT", "React", "Node.js", "MongoDB"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of innovative solutions that have helped businesses transform and grow.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-3xl mb-20"
        >
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with our expertise and innovative solutions.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-opacity"
          >
            Start a Project
          </a>
        </motion.div>
      </div>
    </main>
  );
} 