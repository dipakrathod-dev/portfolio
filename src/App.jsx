import Navbar from "./components/Navbar";
import Hero from "./assets/sections/Hero";
import About from "./assets/sections/About";
import Skills from "./assets/sections/Skills";
import Projects from "./assets/sections/Projects";
import Contact from "./assets/sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;