'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
          <Link href="/" className="relative w-20 sm:w-24 h-8">
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
            className="md:hidden text-white p-2"
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

          {/* Navigation Items */}
          <div className={`
            md:flex items-center space-y-4 md:space-y-0 md:space-x-8
            ${isMenuOpen 
              ? 'absolute top-full left-0 right-0 flex flex-col bg-black/90 p-4 mt-2' 
              : 'hidden'
            }
          `}>
            <button 
              onClick={() => setIsContactOpen(true)}
              className="px-6 py-2 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-full hover:from-gray-700 hover:to-gray-500 transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Talk to us
            </button>
          </div>
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