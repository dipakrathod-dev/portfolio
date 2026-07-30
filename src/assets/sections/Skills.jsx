import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
    },
    {
      title: 'Programming',
      skills: ['C', 'C++', 'Java'],
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'VS Code', 'Vite'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950 text-white px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-center text-indigo-400">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-700 pb-2">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 text-sm font-medium px-3 py-1.5 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;