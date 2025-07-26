"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  highlight,
  description,
  className = ""
}) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <motion.div 
      variants={fadeInUp} 
      className={`text-center ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="text-white">{title}</span>
        {highlight && <span className="text-yellow-400"> {highlight}</span>}
      </h2>
      {description && (
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
