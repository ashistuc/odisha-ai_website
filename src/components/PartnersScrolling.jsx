import React from 'react';
import { Handshake } from 'lucide-react';
import { Badge } from './ui/badge';

const PartnersScrolling = ({ partners }) => {
  // Duplicate the partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div>
      <div className="text-center mb-12">
        <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 mb-4 px-4 py-2">
          <Handshake className="w-4 h-4 mr-2" />
          Collaboration Network
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Partners in <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">Innovation</span>
        </h2>
        <p className="text-lg text-gray-600">
          Collaborating with leading organizations to build Odisha's AI ecosystem
        </p>
      </div>

      {/* Scrolling Container */}
      <div className="relative overflow-hidden py-8 bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-2xl">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Scrolling content - Row 1 (Left to Right) */}
        <div className="flex animate-scroll-left hover:pause-animation mb-4">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-6 w-40"
            >
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-200 group">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-50 to-blue-50 rounded-lg shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-sm font-bold text-gray-700">{partner.logo}</span>
                  </div>
                  <p className="text-xs text-gray-600 font-semibold text-center">
                    {partner.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling content - Row 2 (Right to Left) */}
        <div className="flex animate-scroll-right hover:pause-animation">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 mx-6 w-40"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-600 group">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-lg shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{partner.logo}</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold text-center">
                    {partner.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
        ...and many more organizations working together to transform Odisha through AI
      </p>
    </div>
  );
};

export default PartnersScrolling;
