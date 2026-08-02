import React from 'react';
import { motion } from 'framer-motion';

const AboutCTA = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-purple-900/30 via-slate-800 to-indigo-900/30 border border-purple-500/30 backdrop-blur-sm shadow-xl"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
        Let's Build Something Amazing
      </h3>
      <p className="text-gray-300 max-w-md mx-auto text-sm md:text-base mb-6">
        Have a project idea or looking to hire a dedicated frontend developer? Let's connect.
      </p>
      <a 
        href="#contact"
        className="inline-block px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all shadow-lg shadow-purple-500/25 hover:scale-105"
      >
        Contact Me
      </a>
    </motion.div>
  );
};

export default AboutCTA;