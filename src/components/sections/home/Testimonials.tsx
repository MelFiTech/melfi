'use client';

import { motion } from 'framer-motion';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { Marquee } from '@/components/magicui/marquee';

const testimonials = [
  {
    id: 1,
    text: "I am deeply appreciative for bringing the Nigeria Youth Leadership Initiative to my attention last month. Thank you again for illuminating paths like this for aspiring youths.",
    author: "Saint John Mark",
    title: "HealR Product Manager",
    rating: 5,
  },
  {
    id: 2,
    text: "Thank you again for illuminating paths like this for aspiring youths. The work you've done has been transformative for our business.",
    author: "Sarah Johnson",
    title: "CEO, TechStart",
    rating: 5,
  },
  {
    id: 3,
    text: "The design and development work exceeded our expectations. The team delivered exactly what we envisioned and more.",
    author: "Michael Chen",
    title: "Founder, InnovateLab",
    rating: 5,
  },
  {
    id: 4,
    text: "Working with this team has been a game-changer for our startup. They understood our vision perfectly and executed flawlessly.",
    author: "Emily Rodriguez",
    title: "CTO, GrowthTech",
    rating: 5,
  },
  {
    id: 5,
    text: "The attention to detail and user experience focus is outstanding. Our users love the new interface.",
    author: "David Kim",
    title: "Product Director, HealthApp",
    rating: 5,
  },
  {
    id: 6,
    text: "Professional, responsive, and incredibly talented. They turned our ideas into a beautiful, functional reality.",
    author: "Lisa Thompson",
    title: "Marketing Lead, BrandBoost",
    rating: 5,
  },
  {
    id: 7,
    text: "The collaboration was seamless from start to finish. They truly understand how to build products that users love.",
    author: "Alex Morgan",
    title: "UX Designer, CreativeStudio",
    rating: 5,
  },
  {
    id: 8,
    text: "Outstanding work quality and communication throughout the entire project. Highly recommend their services.",
    author: "James Wilson",
    title: "CEO, StartupHub",
    rating: 5,
  },
];

const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

export default function Testimonials() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Testimonials Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-medium mb-6"
          >
            Testimonials
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            What people say about us
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

        {/* Testimonial Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative flex w-full flex-col items-center justify-center overflow-hidden"
        >
          <Marquee pauseOnHover className="[--duration:30s]">
            {firstRow.map((testimonial) => (
              <div key={testimonial.id} className="mx-4">
                <TestimonialCard testimonial={testimonial} index={0} />
              </div>
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:30s]">
            {secondRow.map((testimonial) => (
              <div key={testimonial.id} className="mx-4">
                <TestimonialCard testimonial={testimonial} index={0} />
              </div>
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