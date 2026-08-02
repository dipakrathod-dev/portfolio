import React from 'react';
import { motion } from 'framer-motion';

const statsData = [
  {
    number: '1+',
    label: 'Projects',
  },
  {
    number: '8+',
    label: 'Technologies',
  },
  {
    number: '100%',
    label: 'Frontend Focused',
  },
];

const Stats = () => {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {statsData.map((stat, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="p-6 rounded-xl bg-slate-800/40 border border-purple-500/20 text-center hover:border-purple-500/60 hover:bg-slate-800/80 transition-all cursor-pointer backdrop-blur-sm"
        >
          <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-2">
            {stat.number}
          </div>
          <div className="text-sm font-medium text-gray-300">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;