"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';

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
      <div className="container max-w-5xl mx-auto px-6 relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Section header */}
          <SectionHeader 
            title="Frequently Asked"
            highlight="Questions"
            description="Everything you need to know about the OpenERA hackathon"
            className="mb-16"
          />

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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
