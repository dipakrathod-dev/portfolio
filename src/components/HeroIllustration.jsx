import React from 'react';

const HeroIllustration = () => {
  return (
    <div className="w-full md:w-[450px] flex justify-center">
      <img
        src="https://illustrations.popsy.co/white/coder.svg"
        alt="Developer Illustration"
        className="w-full max-w-[450px] rounded-2xl object-cover drop-shadow-[0_10px_20px_rgba(147,51,234,0.15)]"
      />
    </div>
  );
};

export default HeroIllustration;