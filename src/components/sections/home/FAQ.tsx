'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FAQItem } from '@/components/ui/FAQItem';

const faqs = [
  {
    id: 1,
    question: "What is HealR?",
    answer: "HealR is a Nigerian telemedicine platform that connects patients to licensed doctors online for fast, affordable, and secure healthcare — anytime, anywhere.",
  },
  {
    id: 2,
    question: "How do I book a telemedicine appointment?",
    answer: "Booking a telemedicine appointment is simple. Download the HealR app, create an account, select your preferred doctor, choose an available time slot, and confirm your appointment. You'll receive a confirmation and can join your video consultation at the scheduled time.",
  },
  {
    id: 3,
    question: "Do I have to pay for consultations?",
    answer: "Yes, consultations on HealR are paid services. We offer transparent pricing with no hidden fees. Payment is processed securely through the app, and you can choose from various payment methods including cards, bank transfers, and mobile money.",
  },
  {
    id: 4,
    question: "Is my data secure on HealR?",
    answer: "Absolutely. We prioritize your privacy and security. All personal and medical data is encrypted and stored according to international healthcare data protection standards. We never share your information with third parties without your explicit consent.",
  },
  {
    id: 5,
    question: "Can I get prescriptions through HealR?",
    answer: "Yes, licensed doctors on HealR can prescribe medications when appropriate. Prescriptions are sent directly to your preferred pharmacy or can be delivered to your doorstep through our partner pharmacies. All prescriptions follow Nigerian healthcare regulations.",
  },
];

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number>(1); // First item open by default

  const handleToggle = (id: number) => {
    setOpenItem(openItem === id ? 0 : id);
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* FAQ Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-medium mb-6"
          >
            FAQs
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Are you Lost? We are here for you!
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

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItem === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-700"
        >
          <p className="text-white text-lg">
            Can't find help here?
          </p>
          <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2">
            <span>Contact Us</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
} 