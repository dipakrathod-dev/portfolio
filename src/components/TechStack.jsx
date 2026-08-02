import React from 'react';

const TechStack = () => {
  const techList = [
    'HTML',
    'CSS',
    'JAVASCRIPT',
    'REACT',
    'TAILWIND',
    'GIT',
    'GITHUB',
    'VS CODE',
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mt-12 pt-6 border-t border-slate-800/80">
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-xs md:text-sm font-semibold text-slate-400 tracking-wider">
        {techList.map((item, index) => (
          <span
            key={index}
            className="hover:text-purple-400 transition-colors duration-200 cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStack;