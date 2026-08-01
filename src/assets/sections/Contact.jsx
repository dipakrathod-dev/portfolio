import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900 text-white min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-3xl w-full mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-blue-500">Contact Me</h2>
          <p className="text-slate-400 text-lg">
            Have a question or want to work together? Feel free to leave a message!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-2xl shadow-xl space-y-6 border border-slate-700">
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-300">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Dipak Rathod"
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-slate-500 transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-300">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="dipak@example.com"
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-slate-500 transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-300">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-slate-500 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/20 transition duration-300"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}