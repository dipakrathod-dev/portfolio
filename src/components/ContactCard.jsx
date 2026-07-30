import React from "react";

const ContactCard = ({ title, value, icon: Icon, link }) => {
  const CardContent = (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 group">
      <div className="p-3 rounded-lg bg-slate-800 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="text-sm font-medium text-slate-400">{title}</h4>
        <p className="text-sm md:text-base font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
          {value}
        </p>
      </div>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      {CardContent}
    </a>
  ) : (
    <div>{CardContent}</div>
  );
};

export default ContactCard;