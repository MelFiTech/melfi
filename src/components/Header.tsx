'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ContactForm from './ContactForm';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 bg-transparent"
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative w-20 sm:w-24 h-8 z-50">
            <Image
              src="/logo/melfi-white-logo.png"
              alt="Melfi Tech Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navigation Items - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
              About us
            </Link>
            <Link href="/services" className="text-white hover:text-gray-300 transition-colors">
              Our Services
            </Link>
            <Link href="/projects" className="text-white hover:text-gray-300 transition-colors">
              Our Projects
            </Link>
            <button 
              onClick={() => setIsContactOpen(true)}
              className="px-6 py-2 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-full hover:from-gray-700 hover:to-gray-500 transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Talk to us
            </button>
          </div>

          {/* Mobile Menu - Fullscreen */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed inset-0 bg-black flex flex-col items-center justify-center z-40 md:hidden"
              >
                <motion.div 
                  className="flex flex-col items-center space-y-8"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                    <Link href="/about" className="text-white text-2xl font-semibold hover:text-gray-300 transition-colors">
                      About us
                    </Link>
                  </motion.div>
                  <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                    <Link href="/services" className="text-white text-2xl font-semibold hover:text-gray-300 transition-colors">
                      Our Services
                    </Link>
                  </motion.div>
                  <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                    <Link href="/projects" className="text-white text-2xl font-semibold hover:text-gray-300 transition-colors">
                      Our Projects
                    </Link>
                  </motion.div>
                  <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                    <button 
                      onClick={() => setIsContactOpen(true)}
                      className="px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-full hover:from-gray-700 hover:to-gray-500 transform hover:scale-105 transition-all duration-300 ease-in-out text-xl"
                    >
                      Talk to us
                    </button>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      <ContactForm 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </>
  );
};

export default Header;