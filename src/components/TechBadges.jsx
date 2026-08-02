import React from 'react';
import { motion } from 'framer-motion';

const techSkills = [
  'React',
  'JavaScript',
  'Tailwind',
  'Git',
  'GitHub',
  'Responsive Design',
];

const TechBadges = () => {
  return (
    <div className="mt-12 p-6 rounded-xl bg-slate-800/40 border border-purple-500/20 backdrop-blur-sm">
      <h3 className="text-xl font-semibold text-purple-300 mb-4">Technologies & Tools</h3>
      <div className="flex flex-wrap gap-3">
        {techSkills.map((skill, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="px-4 py-2 rounded-full text-sm font-medium bg-purple-900/40 text-purple-200 border border-purple-500/30 hover:border-purple-400 hover:bg-purple-800/50 cursor-pointer transition-all"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default TechBadges;