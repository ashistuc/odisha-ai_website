import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Users, Award, ExternalLink, Lightbulb } from 'lucide-react';
import { Button } from './ui/button';

const InnovationCentres = ({ centres }) => {
  const gradients = [
    'from-orange-400 to-red-500',
    'from-blue-400 to-cyan-500',
    'from-green-400 to-emerald-500',
    'from-purple-400 to-pink-500',
    'from-yellow-400 to-orange-500',
    'from-indigo-400 to-blue-500',
    'from-teal-400 to-green-500'
  ];

  return (
    <div>
      {/* Section Header */}
      <div className="text-center mb-12">
        <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 mb-4 px-4 py-2">
          <Lightbulb className="w-4 h-4 mr-2" />
          Innovation Network
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          AI Innovation <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Centres of Excellence</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Pioneering AI research and development across Odisha's premier institutions
        </p>
      </div>

      {/* Centres Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {centres.map((centre, index) => (
          <Card
            key={centre.id}
            className="group hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-orange-200 overflow-hidden"
          >
            {/* Image Placeholder with Gradient */}
            <div className={`h-48 bg-gradient-to-br ${gradients[index % gradients.length]} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <div className="text-4xl font-bold mb-2 drop-shadow-lg">{centre.acronym}</div>
                  <div className="text-sm font-medium drop-shadow-md">{centre.location}</div>
                </div>
              </div>
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 transform rotate-45 translate-x-10 -translate-y-10"></div>
            </div>

            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge className="bg-orange-100 text-orange-700">{centre.type}</Badge>
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <MapPin className="w-3 h-3" />
                  <span>{centre.location}</span>
                </div>
              </div>
              <CardTitle className="text-xl group-hover:text-orange-600 transition-colors duration-300">
                {centre.name}
              </CardTitle>
              <CardDescription className="text-base mt-2">
                {centre.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Award className="w-4 h-4 text-orange-500" />
                    <span>Focus Areas:</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {centre.focusAreas.map((area, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs border-orange-200 text-orange-700">
                      {area}
                    </Badge>
                  ))}
                </div>

                {centre.achievements && (
                  <div className="pt-3 border-t border-gray-100">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-2 bg-orange-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">{centre.achievements.projects}</div>
                        <div className="text-xs text-gray-600">Projects</div>
                      </div>
                      <div className="text-center p-2 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{centre.achievements.publications}</div>
                        <div className="text-xs text-gray-600">Publications</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="w-full text-orange-600 hover:text-orange-700 hover:bg-orange-50 group/btn"
              >
                Learn More
                <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InnovationCentres;