'use client';

import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiGlobe, FiDatabase, FiLayers, FiTrendingUp } from 'react-icons/fi';

const services = [
  {
    icon: FiCode,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies and best practices for optimal performance and user experience."
  },
  {
    icon: FiSmartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that deliver seamless experiences across all devices."
  },
  {
    icon: FiGlobe,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed with user-centered approaches to enhance digital experiences."
  },
  {
    icon: FiDatabase,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services that ensure reliability, security, and performance."
  },
  {
    icon: FiLayers,
    title: "Software Architecture",
    description: "Robust and scalable software architectures designed to support your business growth and objectives."
  },
  {
    icon: FiTrendingUp,
    title: "Digital Strategy",
    description: "Strategic consulting to help businesses leverage technology for growth and innovation."
  }
];

export default function Services() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer a comprehensive suite of technology solutions to help your business thrive in the digital age.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <service.icon className="w-10 h-10 mb-4 text-blue-500" />
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-400">{service.description}</p>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your digital goals.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </main>
  );
} 