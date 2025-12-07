import React from 'react';
import { Handshake, ArrowRight, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';

const PartnersScrolling = () => {
  const partners = [
    {
      id: 1,
      name: 'AHRC, IIT Bhubaneswar',
      role: 'Academic Collaborators',
      description: 'A leading academic hub advancing high-impact AI research and innovation for real-world applications.',
      logo: '/odisha-ai_website/Our_Partners_in_Innovation/IIT_Bhubaneswar_Logo.png',
      url: 'https://www.iitbbs.ac.in/index.php/ahrc/',
      accent: 'blue'
    },
    {
      id: 2,
      name: 'Wadhwani Foundation',
      role: 'Training Partner',
      description: 'A global non-profit accelerating large-scale skilling and entrepreneurship for workforce transformation.',
      logo: '/odisha-ai_website/Our_Partners_in_Innovation/wadhwani-logo.webp',
      url: 'https://wadhwanifoundation.org/',
      accent: 'indigo'
    },
    {
      id: 3,
      name: 'NASSCOM',
      role: 'Centre of Excellence Partner',
      description: 'India’s apex technology industry body driving AI innovation, startup growth, and enterprise adoption nationwide.',
      logo: '/odisha-ai_website/Our_Partners_in_Innovation/nasscom-logo.jpg',
      url: 'https://nasscom.in/',
      accent: 'orange'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 px-4 py-1.5 rounded-full mb-6 text-sm font-semibold border border-purple-100 dark:border-purple-800/50 shadow-sm">
            <Handshake className="w-4 h-4" />
            <span>Strategic Alliances</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Partners in <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Innovation</span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Collaborating with industry leaders and academic pioneers to drive the future of AI in Odisha.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group relative h-full"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-b from-${partner.accent}-500 to-${partner.accent}-600 rounded-2xl opacity-20 group-hover:opacity-100 blur transition duration-500`} />

              <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">

                {/* Logo Box */}
                <div className="w-full h-32 mb-8 bg-gray-50 dark:bg-gray-900/50 rounded-xl flex items-center justify-center p-6 transition-all duration-300 group-hover:scale-105 group-hover:bg-white dark:group-hover:bg-gray-800 border border-transparent group-hover:border-gray-100 dark:group-hover:border-gray-700">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Content */}
                <div className={`text-xs font-bold uppercase tracking-wider mb-3 px-3 py-1 rounded-full bg-${partner.accent}-50 text-${partner.accent}-700 dark:bg-${partner.accent}-900/30 dark:text-${partner.accent}-300`}>
                  {partner.role}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all">
                  {partner.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-8 flex-grow">
                  {partner.description}
                </p>

                {/* Link */}
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center font-semibold text-${partner.accent}-600 hover:text-${partner.accent}-700 transition-colors mt-auto group/link`}
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PartnersScrolling;
