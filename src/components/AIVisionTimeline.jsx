import React, { useState } from 'react';
import { Brain, Sparkles, Rocket, Globe, Network, Zap, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const AIVisionTimeline = ({ visionItems }) => {
  const [activePhase, setActivePhase] = useState(0);

  const iconMap = {
    Brain,
    Sparkles,
    Rocket,
    Globe,
    Network,
    Zap
  };

  const phaseColors = [
    { bg: 'from-blue-500 to-indigo-600', text: 'text-blue-600', border: 'border-blue-400' },
    { bg: 'from-orange-500 to-red-600', text: 'text-orange-600', border: 'border-orange-400' },
    { bg: 'from-green-500 to-teal-600', text: 'text-green-600', border: 'border-green-400' },
    { bg: 'from-purple-500 to-pink-600', text: 'text-purple-600', border: 'border-purple-400' },
    { bg: 'from-yellow-500 to-orange-600', text: 'text-yellow-600', border: 'border-yellow-400' },
    { bg: 'from-cyan-500 to-blue-600', text: 'text-cyan-600', border: 'border-cyan-400' }
  ];

  return (
    <div className="relative">
      {/* Timeline Path */}
      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-orange-200 to-green-200 hidden lg:block"></div>

        {/* Timeline Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visionItems.map((item, index) => {
            const Icon = iconMap[item.icon] || Rocket;
            const colors = phaseColors[index % phaseColors.length];
            const isActive = activePhase === index;

            return (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActivePhase(index)}
              >
                {/* Timeline Node */}
                <div className="flex flex-col items-center mb-4">
                  <div
                    className={`relative w-24 h-24 bg-gradient-to-br ${colors.bg} rounded-full flex items-center justify-center cursor-pointer transform transition-all duration-500 ${
                      isActive ? 'scale-125 shadow-2xl' : 'scale-100 shadow-lg hover:scale-110'
                    }`}
                  >
                    <Icon className="w-12 h-12 text-white" />
                    
                    {/* Pulse Effect */}
                    {isActive && (
                      <>
                        <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} rounded-full animate-ping opacity-50`}></div>
                        <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} rounded-full animate-pulse opacity-30`}></div>
                      </>
                    )}
                  </div>

                  {/* Timeline Label */}
                  <div className="mt-4">
                    <Badge className={`bg-gradient-to-r ${colors.bg} text-white border-0 px-4 py-1 text-sm font-semibold`}>
                      {item.timeline}
                    </Badge>
                  </div>
                </div>

                {/* Content Card */}
                <Card
                  className={`transition-all duration-500 border-2 ${
                    isActive
                      ? `${colors.border} shadow-2xl scale-105 bg-gradient-to-br from-white to-gray-50`
                      : 'border-gray-200 shadow-md hover:shadow-lg'
                  }`}
                >
                  <CardHeader>
                    <CardTitle className={`text-lg transition-colors duration-300 ${
                      isActive ? colors.text : 'text-gray-900'
                    }`}>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Objectives */}
                    <div className="space-y-2">
                      <h5 className="font-semibold text-xs text-gray-900 mb-2 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                        Key Objectives:
                      </h5>
                      <ul className="space-y-1">
                        {item.objectives && item.objectives.slice(0, 3).map((obj, idx) => (
                          <li key={idx} className="text-xs text-gray-600 flex items-start">
                            <span className={`${colors.text} mr-2 font-bold`}>→</span>
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500">Progress</span>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3 text-gray-400" />
                          <span className={`font-semibold ${colors.text}`}>{item.timeline}</span>
                        </div>
                      </div>
                      <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${colors.bg} transition-all duration-700 ${
                            isActive ? 'w-full' : 'w-3/4'
                          }`}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center space-x-8 bg-white px-8 py-4 rounded-full shadow-lg border-2 border-gray-100">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Immediate Priority</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Short-term Goal</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Long-term Vision</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIVisionTimeline;