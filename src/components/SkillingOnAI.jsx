import React from 'react';
import { GraduationCap, Rocket, BookOpen, Users, Building2, Zap, ArrowRight, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const SkillingOnAI = ({ programs }) => {
  const iconMap = {
    GraduationCap: GraduationCap,
    Rocket: Rocket,
    BookOpen: BookOpen,
    Users: Users,
    Building2: Building2,
    Zap: Zap
  };

  const colorMap = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600',
    red: 'from-red-500 to-red-600',
    yellow: 'from-yellow-500 to-yellow-600'
  };

  return (
    <div>
      {/* Header Section */}
      <div className="text-center mb-16">
        <Badge className="bg-green-100 text-green-700 hover:bg-green-200 mb-4 px-4 py-2">
          <Award className="w-4 h-4 mr-2" />
          Skill Development Initiatives
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-gray-900">Skilling on </span>
          <span className="bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 bg-clip-text text-transparent">
            Artificial Intelligence
          </span>
        </h2>
        <p className="text-xl text-gray-700 font-medium max-w-4xl mx-auto mb-3">
          Empowering Odisha's Youth & Professionals with World-Class AI Education
        </p>
        <p className="text-base text-gray-600 max-w-3xl mx-auto">
          From government-certified programs to national initiatives, discover comprehensive AI training opportunities 
          designed to build a skilled workforce ready for the AI-powered future
        </p>
      </div>

      {/* Training Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {programs.map((program, index) => {
          const IconComponent = iconMap[program.icon] || GraduationCap;
          const gradientColor = colorMap[program.color] || colorMap.blue;
          const hasImage = Boolean(program.image);

          return (
            <Card 
              key={index}
              className="border-2 border-gray-100 hover:border-orange-300 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
            >
              {/* Card Header with Gradient */}
              <div className={`h-2 bg-gradient-to-r ${gradientColor}`}></div>
              
              <CardHeader className="pb-4">
                <div className="mb-4">
                  {hasImage ? (
                    <div className="relative flex items-center justify-center h-36 rounded-xl bg-white border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      <img
                        src={program.image}
                        alt={`${program.name} logo`}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain p-4"
                      />
                    </div>
                  ) : (
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${gradientColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                  )}
                </div>
                
                <CardTitle className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {program.name}
                </CardTitle>
                
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-gray-700">
                    {program.provider}
                  </p>
                  <Badge variant="outline" className="text-xs font-normal">
                    {program.certification}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {program.description}
                </p>

                {/* Duration and Level */}
                <div className="flex items-center justify-between text-xs text-gray-500 border-t border-b border-gray-200 py-3">
                  <div>
                    <p className="font-semibold text-gray-700">Duration</p>
                    <p>{program.duration}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-700">Level</p>
                    <p>{program.level}</p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  {program.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-600">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradientColor} mr-2`}></div>
                      {highlight}
                    </div>
                  ))}
                </div>

                <Button 
                  size="sm" 
                  className={`w-full bg-gradient-to-r ${gradientColor} hover:opacity-90 text-white shadow-md group-hover:shadow-lg transition-all`}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-orange-50 via-purple-50 to-blue-50 rounded-2xl p-10 border-2 border-orange-200">
        <GraduationCap className="w-12 h-12 text-orange-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Ready to Start Your AI Learning Journey?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Join thousands of learners from across Odisha who are building their AI skills and shaping the future
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg">
            Explore All Programs
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50">
            Download Course Catalog
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkillingOnAI;
