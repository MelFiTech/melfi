'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await fetch(process.env.NEXT_PUBLIC_FORMSPARK_ACTION_URL!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-black/90 backdrop-blur-sm border border-white/10 rounded-xl p-8 w-full max-w-md"
          >
            {!isSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Let&apos;s Connect</h2>
                  <p className="text-gray-400 text-sm">Fill out the form below and we&apos;ll get back to you soon.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30 text-sm placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Work Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30 text-sm placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <select
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30 text-sm"
                    >
                      <option value="" className="text-gray-500">Select Your Country</option>
                      <option value="US">United States</option>
                      <option value="GB">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="NG">Nigeria</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30 text-sm placeholder:text-gray-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-2 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-full hover:from-gray-700 hover:to-gray-500 transform hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                    Send Message
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="mb-4 text-green-400 text-5xl"
                >
                  ✓
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-gray-300 text-sm">We&apos;ll be in touch shortly.</p>
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-2 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-full hover:from-gray-700 hover:to-gray-500 transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;