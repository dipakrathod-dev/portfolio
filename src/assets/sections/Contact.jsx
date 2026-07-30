import React, { useState } from "react";
import { contactInfo } from "../data/contact";
import ContactCard from "../../components/ContactCard";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted Data:", formData);
    alert("Message recorded! Check browser console.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto text-slate-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
          I'm always open to discussing new projects, creative ideas, and freelance opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4 text-cyan-400">Reach Out Direct</h3>
          <div className="flex flex-col gap-4">
            {contactInfo.map((info) => (
              <ContactCard key={info.id} {...info} />
            ))}
          </div>
        </div>

        <div className="bg-slate-900/60 p-6 md:p-8 rounded-2xl border border-slate-800 backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-6 text-slate-100">Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-slate-100 placeholder-slate-500 transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-slate-100 placeholder-slate-500 transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-slate-100 placeholder-slate-500 transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-lg font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transform hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-200 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;