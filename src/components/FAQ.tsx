"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const faqData = [
  {
    question: "Who can join OpenERA?",
    answer: "If you're 18+ and doing your Bachelor's, you're in! Developers, designers, finance geeks – all welcome!"
  },
  {
    question: "Do I need a team?",
    answer: "Yep! Teams of 2 to 4 are required. Flying solo? We’ll help you find your dream squad!"
  },
  {
    question: "Is it online or offline?",
    answer: "Round 1 is online. If you ace it, you’re heading to the offline finals!"
  },
  {
    question: "Where’s the offline round?",
    answer: "The final showdown is happening live at our venue in New York City!"
  },
  {
    question: "What projects are you expecting?",
    answer: "Bring us working AI/ML-based apps solving cool finance problems. Impress us!"
  },
  {
    question: "Who owns our project?",
    answer: "You do! Just make sure it's open-source or demo-ready for judging."
  },
  {
    question: "Any help for us?",
    answer: "Loads! Expect mentors, workshops, dev tools, and API credits from our partners!"
  }
];

  return (
    <section id="faq" className="py-12 md:py-16 lg:py-2 relative overflow-hidden">
      {/* Yellow accent */}
      <div className="absolute top-40 -right-32 w-64 h-64 bg-yellow-400/10 rounded-full filter blur-3xl"></div>
      
      <div className="container max-w-5xl mx-auto px-6 relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Section header */}
          <motion.div variants={fadeIn} className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4 font-heading">
              <span className="text-white">Frequently Asked</span>
              <span className="text-yellow-400"> Questions</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-300 max-w-3xl mx-auto font-body">
              Everything you need to know about the OpenERA hackathon
            </p>
          </motion.div>

          {/* FAQ items */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="border border-yellow-500/10 rounded-xl overflow-hidden hover:border-yellow-500/30 transition-all duration-300"
              >
                <button 
                  className="w-full px-6 py-4 flex justify-between items-center cursor-pointer text-left bg-gray-900/70 hover:bg-gray-900 transition-all"
                  onClick={() => toggleQuestion(index)}
                >
                  <h3 className="text-lg font-medium text-white font-heading">{item.question}</h3>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    className={`w-5 h-5 text-yellow-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-gray-900/30 text-gray-300 font-body">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* More questions */}
          <motion.div 
            variants={fadeIn}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 mb-6">
              Still have questions? Feel free to reach out to our team.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-full transition-all duration-300 border border-yellow-500/20 hover:border-yellow-500/40"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
