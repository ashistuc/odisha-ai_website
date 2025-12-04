import React from 'react';
import { ExternalLink, Globe, Server, Database, Building2, Flag, Users, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const QuickLinks = ({ links }) => {
  const iconMap = {
    Globe,
    Server,
    Database,
    Building2,
    Flag,
    Users,
    Award
  };

  const categoryColors = {
    'IndiaAI': 'from-blue-500 to-indigo-600',
    'Government': 'from-orange-500 to-red-600',
    'Organizations': 'from-green-500 to-teal-600'
  };

  return (
    <div className="space-y-8">
      {Object.entries(links).map(([category, items]) => (
        <div key={category}>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className={`inline-block w-1 h-8 bg-gradient-to-b ${categoryColors[category] || 'from-gray-500 to-gray-600'} mr-3`}></span>
            {category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((link, index) => {
              const Icon = iconMap[link.icon] || Globe;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-200 cursor-pointer">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="w-full flex items-center justify-between gap-3">
                          <div className="flex-1">
                            <div className="w-full h-24 rounded-xl border border-gray-100 bg-white overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300 flex items-center justify-center">
                              {link.image ? (
                                <img
                                  src={link.image}
                                  alt={`${link.name} logo`}
                                  loading="lazy"
                                  className="h-full w-full object-contain p-4"
                                />
                              ) : (
                                <div className={`w-12 h-12 bg-gradient-to-br ${categoryColors[category] || 'from-gray-100 to-gray-200'} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                  <Icon className="w-6 h-6 text-white" />
                                </div>
                              )}
                            </div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-orange-600 transition-colors flex-shrink-0" />
                        </div>
                      </div>
                      <CardTitle className="text-base font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mt-3">
                        {link.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{link.description}</p>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickLinks;