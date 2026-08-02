import React from 'react';

const Logo = ({ className = 'text-2xl' }) => {
  return (
    <a href="#" className="inline-flex items-center group">
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-900 font-extrabold text-white tracking-wider shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 group-hover:scale-105 transition-all duration-300 border border-purple-400/30">
        <span className={`${className} bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-purple-300 font-sans`}>
          DR
        </span>
      </div>
    </a>
  );
};

export default Logo;