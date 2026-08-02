import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    icon: '⚙️',
    title: 'React Development',
    desc: 'Building modern SPA',
  },
  {
    icon: '🎨',
    title: 'UI Design',
    desc: 'Clean responsive UI',
  },
  {
    icon: '🚀',
    title: 'Performance',
    desc: 'Fast optimized apps',
  },
];

const AboutCard = () => {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {achievements.map((card, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="p-6 rounded-xl bg-slate-800/60 border border-purple-500/20 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all cursor-pointer backdrop-blur-sm"
        >
          <div className="text-3xl mb-3">{card.icon}</div>
          <h4 className="text-lg font-semibold text-white mb-1">{card.title}</h4>
          <p className="text-sm text-gray-400">{card.desc}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AboutCard;