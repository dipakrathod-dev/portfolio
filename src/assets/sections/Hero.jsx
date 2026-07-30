import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-slate-950 text-white px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <p className="text-indigo-400 font-semibold tracking-wide text-sm sm:text-base">
          WELCOME TO MY PORTFOLIO
        </p>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Hi, I'm <span className="text-indigo-500">Dipak Rathod</span>
        </h1>

        <h2 className="text-xl sm:text-3xl text-gray-300 font-medium">
          Frontend Developer | React Developer
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
          I build responsive, high-performance web applications with clean code and modern user interfaces.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-indigo-600/30"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/dipakrathod-dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-gray-200 font-medium rounded-lg border border-slate-700 transition-all"
          >
            GitHub
          </a>
          <a
            href="/resume.pdf" 
            target="_blank"
            className="px-6 py-3 border border-indigo-500/50 hover:bg-indigo-500/10 text-indigo-400 font-medium rounded-lg transition-all"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;