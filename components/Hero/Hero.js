import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex items-center justify-between  p-8 ">
      <div className="w-1/2 px-52">
        <h1 className="text-5xl font-bold mb-4">Good Hero Section</h1>
        <p className="text-lg text-gray-700">This is a hero section with some text on the left side of the page. It is styled using Tailwind CSS to look good.</p>
      </div>
      <div className="w-1/2 flex justify-center">
        <svg className='h-[60vh]'>
  <image href="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" width="100%" height="100%" />

          
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;