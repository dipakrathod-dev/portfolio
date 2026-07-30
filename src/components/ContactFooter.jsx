import React from 'react';

const ContactFooter = () => {
  return (
    <>
      <section id="contact" className="py-20 bg-slate-950 text-white px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-indigo-400">Get In Touch</h2>
          <p className="text-gray-400">
            Feel free to reach out for collaborations, project inquiries, or just a friendly chat!
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 text-slate-300 pt-4">
            <div>📍 <span className="text-white font-medium">India</span></div>
            <div>📧 <a href="mailto:dipakrathod.work@gmail.com" className="hover:text-indigo-400 transition-colors">dipakrathod.work@gmail.com</a></div>
            <div>🐙 <a href="https://github.com/dipakrathod-dev" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">GitHub Profile</a></div>
          </div>

          <div className="pt-6">
            <a
              href="mailto:dipakrathod.work@gmail.com"
              className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg transition-all"
            >
              Send Message
            </a>
          </div>
        </div>
      </section>

      <footer className="py-6 bg-slate-900 border-t border-slate-800 text-center text-gray-500 text-sm">
        <p>© 2026 Dipak Rathod. All rights reserved.</p>
        <p className="mt-1 text-xs text-gray-600">Built with React + Tailwind CSS</p>
      </footer>
    </>
  );
};

export default ContactFooter;