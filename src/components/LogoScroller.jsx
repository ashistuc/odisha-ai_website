import React from 'react';

const LogoScroller = ({ logos }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-orange-50 via-white to-blue-50 py-12">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* First row - scrolling right */}
      <div className="flex animate-scroll-right mb-8">
        <div className="flex space-x-12 animate-loop-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 w-40 h-24 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-4 group border border-gray-100 hover:border-orange-200"
            >
              <div className="text-center">
                <div className="font-bold text-gray-800 text-lg group-hover:text-orange-600 transition-colors">
                  {logo.name}
                </div>
                {logo.subtitle && (
                  <div className="text-xs text-gray-500 mt-1">{logo.subtitle}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second row - scrolling left */}
      <div className="flex animate-scroll-left">
        <div className="flex space-x-12 animate-loop-scroll-reverse">
          {[...logos.slice().reverse(), ...logos.slice().reverse()].map((logo, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 w-40 h-24 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-4 group border border-gray-100 hover:border-orange-200"
            >
              <div className="text-center">
                <div className="font-bold text-gray-800 text-lg group-hover:text-orange-600 transition-colors">
                  {logo.name}
                </div>
                {logo.subtitle && (
                  <div className="text-xs text-gray-500 mt-1">{logo.subtitle}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoScroller;