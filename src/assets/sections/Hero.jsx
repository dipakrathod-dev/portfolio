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
          Frontend Developer | React Developer | Computer Engineering Student
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
          I build responsive, high-performance web applications with clean code and modern user interfaces.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-green-600 text-white rounded-lg"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/dipakrathod-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="/Dipak_Rathod_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;