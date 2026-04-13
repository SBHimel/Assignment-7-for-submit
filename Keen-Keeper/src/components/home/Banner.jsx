import React from 'react';

const Banner = () => {
    return (
    <div className="bg-base-100 py-16 text-center">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
          Friends to keep close in your life
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the 
          relationships that matter most.
        </p>

        {/* Button  */}
        <button className="btn bg-emerald-600 hover:bg-emerald-700 text-white border-none px-8 py-3 text-base font-medium rounded-lg shadow-sm flex items-center gap-2 mx-auto">
          <span className="text-xl leading-none">+</span>
          Add a Friend
        </button>

      </div>
    </div>
  );
};

export default Banner;

