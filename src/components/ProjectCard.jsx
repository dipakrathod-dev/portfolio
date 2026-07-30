import React from 'react';

const ProjectCard = ({ title, description, technologies, status, github, live, image }) => {
  const isCompleted = status === "Completed";

  return (
    <div className="h-full bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg transition-all duration-300 hover:border-cyan-400 hover:-translate-y-1 flex flex-col justify-between">
      <div>
        <div className="w-full h-44 bg-slate-800 rounded-lg flex flex-col items-center justify-center text-slate-400 mb-4 border border-dashed border-slate-700">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
          ) : (
            <>
              <span className="font-semibold text-slate-300">Project Preview</span>
              <span className="text-xs text-slate-500 mt-1">Coming Soon</span>
            </>
          )}
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 px-2.5 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-800/80 mt-auto">
        {isCompleted ? (
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <a 
                href={live} 
                target="_blank" 
                rel="noreferrer"
                className="px-3.5 py-1.5 text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-md transition-colors shadow-sm"
              >
                Live Demo
              </a>

              <a 
                href={github} 
                target="_blank" 
                rel="noreferrer"
                className="px-3.5 py-1.5 text-xs font-semibold bg-transparent hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 rounded-md transition-all"
              >
                GitHub
              </a>
            </div>
            
            <span className="text-xs font-medium text-emerald-400 flex items-center gap-1">
              Completed ✅
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-amber-400 bg-amber-950/40 border border-amber-800/50 px-2.5 py-1 rounded-md">
              {status}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;