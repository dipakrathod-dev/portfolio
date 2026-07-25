function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="text-center">

        <p className="text-cyan-400 mb-3">
          👋 Hello, I'm
        </p>

        <h1 className="text-6xl font-extrabold text-white">
          Dipak Rathod
        </h1>

        <h2 className="text-2xl text-slate-400 mt-4">
          Frontend Developer • React Developer
        </h2>

        <p className="max-w-xl mt-6 text-slate-500 mx-auto">
          I build modern, responsive and user-friendly web
          applications using React and modern frontend
          technologies.
        </p>

        <div className="mt-10 flex justify-center gap-4">

        <a
          href="#projects"
          className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-xl text-black font-semibold transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border border-cyan-500 px-6 py-3 rounded-xl text-cyan-400 hover:bg-cyan-500 hover:text-black px-6 py-3 rounded-xl transition"
        >
          Hire Me
        </a>

      </div>

      </div>
    </section>
  );
};

export default Hero;