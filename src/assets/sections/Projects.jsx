import React from 'react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Personal portfolio website built with React and Tailwind CSS to showcase my work and skills.",
      github: "https://github.com/DipakRathod/portfolio",
      live: "#", 
      tech: ["React", "Tailwind CSS", "JavaScript"]
    },
    {
      id: 2,
      title: "E-Commerce App",
      description: "A functional online shopping interface with cart functionality and dynamic product listings.",
      github: "https://github.com/DipakRathod",
      live: "#",
      tech: ["React", "Node.js", "MongoDB"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-950 text-white min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-500 mb-4">My Projects</h2>
          <p className="text-slate-400 text-lg">Here are some of the projects I've built recently.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition duration-300 shadow-lg"
            >
              <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="text-xs bg-slate-800 text-blue-400 px-3 py-1 rounded-full border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                <a
                  href={project.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 text-center py-2 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition ${
                    !project.github || project.github === "#" ? "opacity-50 pointer-events-none" : ""
                  }`}
                >
                  GitHub
                </a>

                <a
                  href={project.live || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 text-center py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition ${
                    !project.live || project.live === "#" ? "opacity-50 pointer-events-none" : ""
                  }`}
                >
                  Live Demo
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}