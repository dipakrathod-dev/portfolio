import React from 'react';

const SkillCard = ({ name, level }) => {
  return (
    <div className="p-4 rounded-xl border border-gray-700 bg-gray-900/50 hover:border-cyan-400 hover:scale-105 transition-all duration-300 shadow-md">
      <h4 className="text-lg font-semibold text-white mb-1">{name}</h4>
      <p className="text-sm text-gray-400">{level}</p>
    </div>
  );
};

export default SkillCard;