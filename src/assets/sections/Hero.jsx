import React from "react";
import { motion } from "framer-motion";
import {FaGithub, FaLinkedin, FaEnvelope, FaHtml5, FaCss3Alt, FaReact, FaGitAlt} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 text-white min-h-screen flex items-center"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

        <div className="flex-1 text-center lg:text-left">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-purple-400 uppercase tracking-[4px] font-semibold mb-3"
          >
            👋 Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight"
          >
            Dipak{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
            Rathod
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-2xl md:text-3xl font-semibold text-slate-300"
          >
            Frontend Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 text-slate-400 text-lg leading-8 max-w-xl"
          >
            I build responsive, modern and user-friendly web applications
            using React, JavaScript and Tailwind CSS with a focus on clean UI
            and great user experience.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap justify-center lg:justify-start gap-5 mt-10"
          >
            <a
              href="/Dipak_Rathod_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-xl bg-purple-600 hover:bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/40 font-semibold"
            >
              ⬇ Download Resume
            </a>

            <a
              href="#contact"
              className="px-7 py-3 rounded-xl border border-purple-500/40 backdrop-blur-md bg-white/5 hover:bg-purple-600 hover:scale-105 transition-all duration-300 font-semibold"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex justify-center lg:justify-start gap-6 mt-8"
          >
            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-slate-400 hover:text-purple-400 hover:scale-125 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-slate-400 hover:text-purple-400 hover:scale-125 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:risingdipakdbl@gmail.com"
              className="text-2xl text-slate-400 hover:text-purple-400 hover:scale-125 transition"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex-1 flex justify-center"
        >
          <div className="absolute top-5 right-5 bg-slate-900/80 backdrop-blur-lg border border-purple-500/30 px-4 py-2 rounded-xl shadow-xl">
          <p className="text-sm text-purple-400 font-semibold">
             🚀 Available for Freelancing
          </p>
          </div>
      
          <img
            src="https://illustrations.popsy.co/white/coder.svg"
            alt="Developer Illustration"
            className="w-full max-w-md lg:max-w-lg drop-shadow-[0_0_40px_rgba(168,85,247,0.35)] hover:scale-105 transition-all duration-500"
          />
        </motion.div>
      </div>

      {/* Tech Stack */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden lg:block w-full max-w-6xl px-6">
        <div className="border-t border-slate-800 pt-6 flex justify-center gap-8 text-3xl text-slate-400">

          <FaHtml5 className="hover:text-orange-500 transition" />
          <FaCss3Alt className="hover:text-blue-500 transition" />
          <IoLogoJavascript className="hover:text-yellow-400 transition" />
          <FaReact className="hover:text-cyan-400 transition" />
          <SiTailwindcss className="hover:text-sky-400 transition" />
          <FaGitAlt className="hover:text-orange-600 transition" />
          <FaGithub className="hover:text-white transition" />

        </div>
      </div>

      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, y: [0, 10, 0] }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
  className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-400"
>
  <span className="text-sm mb-2 tracking-widest">
    SCROLL
  </span>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
</motion.div>

    </section>
  );
};

export default Hero;