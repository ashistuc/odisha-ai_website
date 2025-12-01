import React from 'react';
import { Brain, Sparkles, Rocket, Globe, Network, Zap } from 'lucide-react';

const VisionRoadmap = ({ visionItems }) => {
  const iconMap = {
    Brain,
    Sparkles,
    Rocket,
    Globe,
    Network,
    Zap
  };

  // Group by timeline
  const timelineGroups = {};
  visionItems.forEach(item => {
    if (!timelineGroups[item.timeline]) {
      timelineGroups[item.timeline] = [];
    }
    timelineGroups[item.timeline].push(item);
  });

  const roadColors = [
    { gradient: 'from-blue-400 via-indigo-500 to-purple-600', dot: 'bg-blue-500', glow: 'shadow-blue-500/50' },
    { gradient: 'from-orange-400 via-red-500 to-pink-600', dot: 'bg-orange-500', glow: 'shadow-orange-500/50' },
    { gradient: 'from-green-400 via-emerald-500 to-teal-600', dot: 'bg-green-500', glow: 'shadow-green-500/50' },
    { gradient: 'from-purple-400 via-violet-500 to-indigo-600', dot: 'bg-purple-500', glow: 'shadow-purple-500/50' },
    { gradient: 'from-yellow-400 via-orange-500 to-red-600', dot: 'bg-yellow-500', glow: 'shadow-yellow-500/50' },
    { gradient: 'from-cyan-400 via-blue-500 to-indigo-600', dot: 'bg-cyan-500', glow: 'shadow-cyan-500/50' }
  ];

  return (
    <div className="relative py-12">
      {/* Road Path */}
      <div className="relative">
        {/* Central Road Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-orange-200 via-green-200 to-purple-200 transform -translate-x-1/2 hidden md:block"></div>

        {/* Timeline Phases */}
        {Object.entries(timelineGroups).map(([timeline, items], groupIndex) => {
          const colors = roadColors[groupIndex % roadColors.length];

          return (
            <div key={timeline} className="mb-16 last:mb-0">
              {/* Timeline Milestone Marker */}
              <div className="flex items-center justify-center mb-8">
                <div className={`relative inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r ${colors.gradient} rounded-full shadow-2xl ${colors.glow} transform hover:scale-110 transition-all duration-500`}>
                  <span className="text-white font-bold text-lg">{timeline}</span>
                  <div className="absolute inset-0 bg-white rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Activities in this timeline */}
              <div className="space-y-8">
                {items.map((item, itemIndex) => {
                  const Icon = iconMap[item.icon] || Rocket;
                  const isLeft = itemIndex % 2 === 0;

                  return (
                    <div key={itemIndex} className={`flex items-center ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col gap-8`}>
                      {/* Content Card */}
                      <div className={`w-full md:w-5/12 ${
                        isLeft ? 'md:text-right' : 'md:text-left'
                      }`}>
                        <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-orange-300 transform hover:scale-105">
                          {/* Icon and Title */}
                          <div className={`flex items-start gap-4 ${
                            isLeft ? 'md:flex-row-reverse' : 'md:flex-row'
                          } flex-row mb-4`}>
                            <div className={`w-14 h-14 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg ${colors.glow}`}>
                              <Icon className="w-7 h-7 text-white" />
                            </div>
                            <div className={`flex-1 ${
                              isLeft ? 'md:text-right' : 'md:text-left'
                            } text-left`}>
                              <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                                {item.title}
                              </h3>
                            </div>
                          </div>

                          {/* Description */}
                          <p className={`text-gray-600 text-sm leading-relaxed mb-4 ${
                            isLeft ? 'md:text-right' : 'md:text-left'
                          } text-left`}>
                            {item.description}
                          </p>

                          {/* Objectives */}
                          {item.objectives && (
                            <div className={`space-y-2 ${
                              isLeft ? 'md:items-end' : 'md:items-start'
                            } items-start`}>
                              {item.objectives.map((obj, idx) => (
                                <div key={idx} className={`flex items-start gap-2 text-sm text-gray-700 ${
                                  isLeft ? 'md:flex-row-reverse md:text-right' : 'md:flex-row md:text-left'
                                } flex-row text-left`}>
                                  <span className={`${colors.dot} w-2 h-2 rounded-full mt-1.5 flex-shrink-0`}></span>
                                  <span>{obj}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Road Dot */}
                      <div className="hidden md:block w-2/12 flex-shrink-0 relative">
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className={`w-6 h-6 ${colors.dot} rounded-full shadow-lg ${colors.glow} animate-pulse`}>
                            <div className={`absolute inset-0 ${colors.dot} rounded-full opacity-50 animate-ping`}></div>
                          </div>
                        </div>
                      </div>

                      {/* Empty space for alignment */}
                      <div className="hidden md:block w-5/12"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Road End Marker */}
      <div className="flex items-center justify-center mt-12">
        <div className="relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-2xl shadow-green-500/50">
          <span className="text-white font-bold text-lg">Destination: AI-Powered Odisha</span>
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-50 blur-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default VisionRoadmap;