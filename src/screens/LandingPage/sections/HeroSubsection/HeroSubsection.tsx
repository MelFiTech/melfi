'use client';
import React from 'react';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { Header } from '../../../../components/Header/Header';
import { LazyImage } from '../../../../components/OptimizedImage';
import { Badge } from '../../../../components/ui/badge';
import { Button } from '../../../../components/ui/button';

const toolIcons = [
  { src: '/icons/figma.png', alt: 'Figma' },
  { src: '/icons/framer.png', alt: 'Framer' },
  { src: '/icons/wordpress.png', alt: 'WordPress' },
];

// navigation moved to global Header component

export const HeroSubsection = (): React.ReactElement => {
  return (
    <section id='hero' className='relative w-full h-[925px] overflow-hidden'>
      <Image
        src='/images/Hero-bg.png'
        alt='Hero Background'
        fill
        className='object-cover object-[50%_50%]'
        priority
        quality={85}
        sizes='100vw'
        placeholder='empty'
        style={{ backgroundColor: 'transparent' }}
      />
      <div id='hero-top-sentinel' className='absolute top-0 left-0 right-0 h-1' />
      <Header />

      <main className='inline-flex flex-col items-center justify-center gap-10 absolute top-[150px] md:top-[200px] left-1/2 transform -translate-x-1/2'>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className='flex flex-col items-center justify-center gap-4 relative w-full md:flex-[0_0_auto]'
        >
          <Badge className='inline-flex items-center gap-4 pl-4 pr-3 py-2 relative flex-[0_0_auto] bg-[#daf2fe1a] rounded-[80px] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] border-0 hover:bg-[#daf2fe1a]'>
            <div className="font-normal text-base tracking-[0] leading-[normal] relative w-fit [font-family:'Sora',Helvetica] text-white">
              Our Tools
            </div>

            <div className='inline-flex items-center gap-1.5 relative flex-[0_0_auto]'>
              {toolIcons.map((icon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.4 + index * 0.1,
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className='inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#000f24] rounded-[50px] cursor-pointer'
                >
                  <LazyImage
                    className='relative w-4 h-4'
                    alt={icon.alt}
                    src={icon.src}
                    width={16}
                    height={16}
                    quality={85}
                    priority={index === 0}
                    style={{ backgroundColor: 'transparent' }}
                  />
                </motion.div>
              ))}
            </div>
          </Badge>

          <div className='inline-flex flex-col items-center justify-center gap-5 relative md:flex-[0_0_auto]'>
            <h1 className='relative md:w-[925px] w-[400px] mt-[-1.00px] [text-shadow:0px_4px_4px_#00000040] font-semibold text-white text-6xl text-center tracking-[0] leading-[78px]'>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                className='font-semibold text-white md:text-6xl text-4xl tracking-[0] leading-[78px]'
              >
                We Design Digital Products{' '}
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
                className='font-semibold text-white md:text-6xl text-4xl tracking-[0] leading-[78px]'
              >
                that{' '}
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.0 }}
                className='font-semibold text-white md:text-6xl text-4xl tracking-[0] leading-[78px] relative inline-block'
              >
                {' '}
                Drive
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
                  whileHover={{ scale: 1.05 }}
                  className='relative inline-block ml-2'
                >
                  Growth.
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 1.4 }}
                    className='pointer-events-none absolute -inset-[6px] border-2 border-[#0acf3b]'
                  />
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 1.5 }}
                    className='pointer-events-none absolute -top-[6px] -left-[6px] w-2 h-2 bg-white border-2 border-[#0acf3b]'
                  />
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 1.6 }}
                    className='pointer-events-none absolute -top-[6px] -right-[6px] w-2 h-2 bg-white border-2 border-[#0acf3b]'
                  />
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 1.7 }}
                    className='pointer-events-none absolute -bottom-[6px] -right-[6px] w-2 h-2 bg-white border-2 border-[#0acf3b]'
                  />
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 1.8 }}
                    className='pointer-events-none absolute -bottom-[6px] -left-[6px] w-2 h-2 bg-white border-2 border-[#0acf3b]'
                  />
                </motion.span>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
              className="relative md:w-[643px] w-[350px] md:mx-0 mx-auto [text-shadow:0px_4px_4px_#00000040] [font-family:'Sora',Helvetica] font-normal text-white md:text-lg text-base text-center tracking-[-0.36px] leading-[26px]"
            >
              A global design &amp; development studio helping startups and brands create stunning,
              user-focused websites and apps.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.4 }}
          className='inline-flex items-center flex-col md:flex-row gap-6 relative flex-[0_0_auto]'
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 1.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className='inline-flex items-center justify-center gap-2.5 px-6 py-4 h-auto relative flex-[0_0_auto] rounded-[60px] border-2 border-solid border-[#0049b9] shadow-[inset_0px_4px_7px_#7aaeff] [background:radial-gradient(50%_50%_at_50%_15%,rgba(71,143,254,1)_0%,rgba(6,93,226,1)_100%)] hover:[background:radial-gradient(50%_50%_at_50%_15%,rgba(71,143,254,0.9)_0%,rgba(6,93,226,0.9)_100%)]'>
              <div className="relative w-fit mt-[-2.00px] [font-family:'Sora',Helvetica] font-semibold text-white md:text-base text-sm tracking-[0] leading-[normal]">
                Book a Free Call 😉
              </div>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 1.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant='outline'
              className='inline-flex gap-2.5 px-6 py-[15px] h-auto relative flex-[0_0_auto] rounded-[60px] border border-solid border-white bg-transparent hover:bg-white/10 items-center justify-center'
            >
              <div className="relative w-fit mt-[-1.00px] [font-family:'Sora',Helvetica] font-semibold text-white md:text-base text-sm tracking-[0] leading-[normal]">
                See Our Work
              </div>

              <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <ArrowDown className='w-4 h-4 text-white' aria-hidden />
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
      </main>
    </section>
  );
};
