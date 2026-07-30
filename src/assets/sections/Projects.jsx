import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Developer Portfolio Website',
      description: 'A modern, responsive personal portfolio website built to showcase my skills, projects, and frontend development journey.',
      techStack: ['React', 'Tailwind CSS', 'Vite'],
      features: ['Fully Responsive Design', 'Smooth Scrolling Navigation', 'Clean Visual Hierarchy', 'Interactive Components'],
      liveDemo: '#',
      github: 'https://github.com/yourusername/portfolio', 
      image: 'https://via.placeholder.com/600x350/1e293b/818cf8?text=Portfolio+Website',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900 text-white px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-center text-indigo-400">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 flex flex-col justify-between">
              <div>
                <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover" />
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white">{proj.title}</h3>
                  <p className="text-gray-400 text-sm">{proj.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {proj.techStack.map((tech, i) => (
                      <span key={i} className="text-xs bg-slate-800 text-indigo-300 px-2.5 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="text-xs text-gray-400 space-y-1 list-disc list-inside">
                    {proj.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0 flex gap-4">
                <a
                  href={proj.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 bg-indigo-600 hover:bg-indigo-700 text-sm font-medium rounded-lg transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 bg-slate-800 hover:bg-slate-700 text-sm font-medium rounded-lg border border-slate-700 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;