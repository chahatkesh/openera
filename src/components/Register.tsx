"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    track: '',
    experience: '',
    participation: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    alert('Thank you for registering your interest! We will contact you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      track: '',
      experience: '',
      participation: '',
      message: ''
    });
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

  return (
    <section id="register" className="py-24 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:32px_32px]"></div>
      
      {/* Yellow accent */}
      <div className="absolute top-40 -left-32 w-64 h-64 bg-yellow-400/10 rounded-full filter blur-3xl"></div>
      
      <div className="container max-w-6xl mx-auto px-6 relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Section header */}
          <motion.div variants={fadeIn} className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">Register Your</span>
              <span className="text-yellow-400"> Interest</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
              Be among the first to know when registrations officially open. Fill out the form below to express your interest.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info section */}
            <motion.div variants={fadeIn}>
              <div className="bg-gray-900/50 border border-yellow-500/10 rounded-xl p-8 h-full">
                <h3 className="text-2xl font-semibold text-white mb-6">Why Register Early?</h3>
                
                <ul className="space-y-4">
                  {[
                    "Guaranteed spot when registration officially opens",
                    "Early access to learning resources and preparatory materials",
                    "Priority notification about workshops and pre-hackathon events",
                    "Opportunity to be matched with teammates who share your interests"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-yellow-400 mr-3 mt-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="w-full h-px bg-gray-800 my-8"></div>

                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-white">Event Details</h4>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-400 mr-3 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    <div>
                      <h5 className="text-white font-medium">Dates</h5>
                      <p className="text-gray-400">September 1-3, 2025</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-400 mr-3 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <div>
                      <h5 className="text-white font-medium">Location</h5>
                      <p className="text-gray-400">In-person: New York, NY</p>
                      <p className="text-gray-400">Virtual: Worldwide</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-400 mr-3 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                    <div>
                      <h5 className="text-white font-medium">Team Size</h5>
                      <p className="text-gray-400">1-4 participants per team</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form section */}
            <motion.div variants={fadeIn}>
              <div className="bg-gray-900/30 border border-yellow-500/10 rounded-xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-2">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required
                        className="w-full bg-gray-900 border border-gray-800 focus:border-yellow-500/50 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required
                        className="w-full bg-gray-900 border border-gray-800 focus:border-yellow-500/50 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500/20"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="track" className="block text-white font-medium mb-2">
                      Preferred Track
                    </label>
                    <select 
                      id="track" 
                      name="track" 
                      value={formData.track} 
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-800 focus:border-yellow-500/50 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500/20"
                    >
                      <option value="">Select a track</option>
                      <option value="ai-trading">AI Trading Systems</option>
                      <option value="financial-inclusion">Financial Inclusion</option>
                      <option value="defi">Decentralized Finance</option>
                      <option value="wealth-management">Wealth Management</option>
                      <option value="undecided">Not sure yet</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="experience" className="block text-white font-medium mb-2">
                        Experience Level
                      </label>
                      <select 
                        id="experience" 
                        name="experience" 
                        value={formData.experience} 
                        onChange={handleChange}
                        className="w-full bg-gray-900 border border-gray-800 focus:border-yellow-500/50 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500/20"
                      >
                        <option value="">Select your experience</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        <option value="expert">Expert</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="participation" className="block text-white font-medium mb-2">
                        Participation Type
                      </label>
                      <select 
                        id="participation" 
                        name="participation" 
                        value={formData.participation} 
                        onChange={handleChange}
                        className="w-full bg-gray-900 border border-gray-800 focus:border-yellow-500/50 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500/20"
                      >
                        <option value="">Select option</option>
                        <option value="in-person">In-Person</option>
                        <option value="virtual">Virtual</option>
                        <option value="undecided">Not sure yet</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Anything else you&apos;d like to share?
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange}
                      rows={3}
                      className="w-full bg-gray-900 border border-gray-800 focus:border-yellow-500/50 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500/20"
                    />
                  </div>
                  
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="consent" 
                      className="mt-1 mr-3"
                      required
                    />
                    <label htmlFor="consent" className="text-sm text-gray-400">
                      I agree to receive updates about OpenERA and understand that my data will be processed in accordance with the privacy policy.
                    </label>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="blueprint-btn blueprint-interactive w-full px-6 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold rounded-md shadow-lg shadow-yellow-500/20 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Register Interest
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Register;
