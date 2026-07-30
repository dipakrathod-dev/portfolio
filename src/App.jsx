import React from 'react';
import Navbar from './components/Navbar';
import Hero from './assets/sections/Hero';
import About from './assets/sections/About';
import Skills from './assets/sections/Skills';
import Projects from './assets/sections/Projects';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactFooter />
    </div>
  );
}

export default App;