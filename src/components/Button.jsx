import React from 'react';

const Buttons = () => {
  return (
    <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start items-center">
      <a
        href="#resume"
        className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/30 font-semibold text-white flex items-center justify-center"
      >
        ↓ Download Resume
      </a>

      <a
        href="#contact"
        className="px-6 py-3 rounded-xl border border-purple-500 hover:bg-purple-600 transition-all duration-300 hover:scale-105 text-white font-semibold flex items-center justify-center"
      >
        Contact Me
      </a>
    </div>
  );
};

export default Buttons;