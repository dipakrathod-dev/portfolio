import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="flex gap-6 mt-8 justify-center md:justify-start items-center">
      <a
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
        className="text-2xl text-slate-400 hover:text-purple-400 hover:scale-125 transition-all duration-300"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
        className="text-2xl text-slate-400 hover:text-purple-400 hover:scale-125 transition-all duration-300"
      >
        <FaLinkedin />
      </a>
      <a
        href="mailto:example@gmail.com"
        className="text-2xl text-slate-400 hover:text-purple-400 hover:scale-125 transition-all duration-300"
      >
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialIcons;