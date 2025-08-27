'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ContactForm from '../contact/ContactForm';

const HEADER_CONTAINER_WIDTH = 762;
const HEADER_CONTAINER_HEIGHT = 64;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-0 right-0 z-50 flex items-center bg-transparent"
        style={{
          height: HEADER_CONTAINER_HEIGHT,
          minHeight: HEADER_CONTAINER_HEIGHT,
        }}
      >
          <nav
            className="flex items-center justify-between w-full"
            style={{
              height: HEADER_CONTAINER_HEIGHT,
            }}
          >
            {/* Left: Logo and Navigation Items - Desktop */}
            <div
              className="hidden md:flex items-center h-full"
              style={{
                marginLeft: 60, // 60px from the left edge
                height: HEADER_CONTAINER_HEIGHT,
              }}
            >
              <div
                className="flex items-center px-4 py-0 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
                style={{
                  height: HEADER_CONTAINER_HEIGHT,
                  minWidth: 0,
                  gap: 0,
                  width: 570,
                  justifyContent: 'flex-start',
                }}
              >
                {/* Logo */}
                <Link
                  href="/"
                  className="relative flex items-center justify-center"
                  style={{
                    width: 72,
                    height: 32,
                    marginLeft: 8,
                    marginRight: 16,
                  }}
                >
                  <Image
                    src="/logo/melfi-white-logo.png"
                    alt="Melfi Tech Logo"
                    fill
                    className="object-contain"
                    priority
                    sizes="72px"
                    style={{ objectFit: 'contain' }}
                  />
                </Link>
                {/* Navigation Links */}
                <Link
                  href="/services"
                  className="text-white hover:text-gray-300 transition-colors text-xs font-normal px-3"
                  style={{ height: HEADER_CONTAINER_HEIGHT, display: 'flex', alignItems: 'center' }}
                >
                  What we do
                </Link>
                <Link
                  href="/projects"
                  className="text-white hover:text-gray-300 transition-colors text-xs font-normal px-3"
                  style={{ height: HEADER_CONTAINER_HEIGHT, display: 'flex', alignItems: 'center' }}
                >
                  Case Studies
                </Link>
                <Link
                  href="/faqs"
                  className="text-white hover:text-gray-300 transition-colors text-xs font-normal px-3"
                  style={{ height: HEADER_CONTAINER_HEIGHT, display: 'flex', alignItems: 'center' }}
                >
                  FAQs
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:text-gray-300 transition-colors text-xs font-normal px-3"
                  style={{ height: HEADER_CONTAINER_HEIGHT, display: 'flex', alignItems: 'center' }}
                >
                  Why work with us
                </Link>
              </div>
            </div>

            {/* Right: CTA Button */}
            <div
              className="hidden md:flex items-center"
              style={{
                height: HEADER_CONTAINER_HEIGHT,
                marginRight: 60, // 60px from the right edge
              }}
            >
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-white text-black rounded-full hover:bg-gray-100 transition-all duration-300 ease-in-out flex items-center space-x-2"
                style={{
                  height: HEADER_CONTAINER_HEIGHT,
                  minWidth: 0,
                  paddingLeft: 20,
                  paddingRight: 20,
                  fontSize: 13,
                  fontWeight: 400,
                  boxShadow: 'none',
                }}
              >
                <span className="font-normal" style={{ fontSize: 13 }}>
                  Book a Call with Melfi
                </span>
                <svg
                  className="ml-2"
                  width={16}
                  height={16}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17l9.2-9.2M17 17V7H7"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Logo */}
            <div className="md:hidden fixed top-4 left-4 z-50">
              <Link
                href="/"
                className="relative flex items-center justify-center"
                style={{
                  width: 72,
                  height: 32,
                }}
              >
                <Image
                  src="/logo/melfi-white-logo.png"
                  alt="Melfi Tech Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="72px"
                  style={{ objectFit: 'contain' }}
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2 z-50 fixed top-4 right-4"
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
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                  >
                    <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                      <Link href="/services" className="text-white text-2xl font-semibold hover:text-gray-300 transition-colors">
                        What we do
                      </Link>
                    </motion.div>
                    <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                      <Link href="/projects" className="text-white text-2xl font-semibold hover:text-gray-300 transition-colors">
                        Case Studies
                      </Link>
                    </motion.div>
                    <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                      <Link href="/faqs" className="text-white text-2xl font-semibold hover:text-gray-300 transition-colors">
                        FAQs
                      </Link>
                    </motion.div>
                    <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                      <Link href="/about" className="text-white text-2xl font-semibold hover:text-gray-300 transition-colors">
                        Why work with us
                      </Link>
                    </motion.div>
                    <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                      <button
                        onClick={() => setIsContactOpen(true)}
                        className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 ease-in-out text-xl flex items-center space-x-2"
                      >
                        <span>Book a Call with Melfi</span>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 17l9.2-9.2M17 17V7H7"
                          />
                        </svg>
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