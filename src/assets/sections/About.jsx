import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 text-white px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center text-indigo-400">About Me</h2>

        <div className="bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700/50 space-y-6 text-gray-300 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Who I Am</h3>
            <p>
              I am a passionate Frontend Developer with a strong foundation in Computer Engineering. I specialize in turning design concepts into interactive, user-friendly, and responsive web applications.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">What I Know</h3>
            <p>
              I have hands-on experience building modern frontend applications using <strong>React.js, JavaScript (ES6+), HTML5, CSS3, and Tailwind CSS</strong>. I focus on writing modular, readable, and maintainable code.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">What I'm Currently Learning</h3>
            <p>
              I am expanding my skills in full-stack web development, working with backend integrations (Firebase/Node.js) and mastering modern state management techniques.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">My Goal</h3>
            <p>
              My goal is to build scalable, high-quality digital products that solve real-world problems and provide exceptional user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;