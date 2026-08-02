import React from 'react';
import { motion } from 'framer-motion';
import AboutCard from '../../components/AboutCard';
import Stats from '../../components/Stats';
import TechBadges from '../../components/TechBadges';
import AboutCTA from '../../components/AboutCTA';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-1">
            About Me
          </h2>
          <p className="text-lg font-medium text-purple-400">
            Passionate Frontend Developer
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Building beautiful web experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-purple-500/30 bg-gradient-to-tr from-purple-900/40 to-slate-800 flex items-center justify-center shadow-xl shadow-purple-500/10">
              <span className="text-6xl">🧘‍♂️</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-purple-300 mb-2">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed">
                I am a computer engineering student driven by creating intuitive, modern, and high-performance web applications with a strong focus on frontend architecture and user experience.
              </p>
            </div>

            <div className="border-t border-gray-800 pt-4">
              <ul className="grid grid-cols-2 gap-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-purple-400">✓</span>
                  <span>Frontend</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-purple-400">✓</span>
                  <span>React</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-purple-400">✓</span>
                  <span>Responsive Design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-purple-400">✓</span>
                  <span>Problem Solving</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <AboutCard />
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Stats />
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <TechBadges />
        </motion.div>

        <AboutCTA />

      </div>
    </section>
  );
};

export default About;