import React, { useState } from 'react';
import { ChevronDown, Target, Lightbulb, TrendingUp, Building2, Heart, Sprout, GraduationCap, CloudRain, Shield } from 'lucide-react';
import { Card } from './ui/card';

const SectoralAccordion = ({ sectors }) => {
  const [expandedSector, setExpandedSector] = useState(null);
  const [expandedApp, setExpandedApp] = useState(null);

  const iconMap = {
    Building2,
    Heart,
    Sprout,
    GraduationCap,
    CloudRain,
    Shield
  };

  const sectorColors = {
    governance: { bg: 'from-blue-500 to-indigo-600', light: 'bg-blue-50', border: 'border-blue-400', text: 'text-blue-700' },
    healthcare: { bg: 'from-red-500 to-pink-600', light: 'bg-red-50', border: 'border-red-400', text: 'text-red-700' },
    agriculture: { bg: 'from-green-500 to-emerald-600', light: 'bg-green-50', border: 'border-green-400', text: 'text-green-700' },
    education: { bg: 'from-purple-500 to-violet-600', light: 'bg-purple-50', border: 'border-purple-400', text: 'text-purple-700' },
    climate: { bg: 'from-cyan-500 to-blue-600', light: 'bg-cyan-50', border: 'border-cyan-400', text: 'text-cyan-700' },
    security: { bg: 'from-orange-500 to-red-600', light: 'bg-orange-50', border: 'border-orange-400', text: 'text-orange-700' }
  };

  const toggleSector = (sectorId) => {
    if (expandedSector === sectorId) {
      setExpandedSector(null);
      setExpandedApp(null);
    } else {
      setExpandedSector(sectorId);
      setExpandedApp(null);
    }
  };

  const toggleApp = (appId) => {
    setExpandedApp(expandedApp === appId ? null : appId);
  };

  return (
    <div className="space-y-4">
      {sectors.map((sector, sectorIndex) => {
        const Icon = iconMap[sector.icon] || Building2;
        const colors = sectorColors[sector.id] || sectorColors.governance;
        const isSectorExpanded = expandedSector === sector.id;

        return (
          <div key={sector.id}>
            {/* Sector Header */}
            <Card
              onClick={() => toggleSector(sector.id)}
              className={`cursor-pointer transition-all duration-500 border-2 overflow-hidden ${
                isSectorExpanded
                  ? `${colors.border} shadow-2xl scale-[1.02]`
                  : 'border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg'
              }`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${colors.bg} rounded-2xl flex items-center justify-center transform transition-all duration-500 ${
                      isSectorExpanded ? 'scale-110 rotate-6' : 'scale-100'
                    }`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold transition-colors duration-300 ${
                        isSectorExpanded ? colors.text : 'text-gray-900'
                      }`}>
                        {sector.name}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">{sector.description}</p>
                    </div>
                  </div>
                  <ChevronDown className={`w-6 h-6 transition-transform duration-500 ${
                    isSectorExpanded ? 'rotate-180 text-orange-600' : 'text-gray-400'
                  }`} />
                </div>
              </div>
            </Card>

            {/* Applications List */}
            {isSectorExpanded && (
              <div className="mt-2 ml-8 space-y-2 animate-in slide-in-from-top duration-500">
                {sector.applications.map((app, appIndex) => {
                  const isAppExpanded = expandedApp === `${sector.id}-${appIndex}`;

                  return (
                    <Card
                      key={appIndex}
                      className={`transition-all duration-500 border-l-4 ${
                        isAppExpanded
                          ? `${colors.border} shadow-xl scale-[1.01] ${colors.light}`
                          : 'border-gray-300 hover:border-gray-400 shadow-sm hover:shadow-md'
                      }`}
                    >
                      {/* Application Header */}
                      <div
                        onClick={() => toggleApp(`${sector.id}-${appIndex}`)}
                        className="p-5 cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className={`text-lg font-bold transition-colors duration-300 ${
                              isAppExpanded ? colors.text : 'text-gray-900'
                            }`}>
                              {app.name}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">{app.envisagedFor}</p>
                          </div>
                          <ChevronDown className={`w-5 h-5 transition-transform duration-500 flex-shrink-0 ml-4 ${
                            isAppExpanded ? 'rotate-180 text-orange-600' : 'text-gray-400'
                          }`} />
                        </div>
                      </div>

                      {/* Application Details */}
                      {isAppExpanded && (
                        <div className="px-5 pb-5 space-y-4 animate-in zoom-in-95 slide-in-from-top duration-500">
                          {/* Objective */}
                          <div className="bg-white border-l-4 border-blue-400 p-4 rounded-lg shadow-sm">
                            <div className="flex items-start space-x-3">
                              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Target className="w-5 h-5 text-blue-600" />
                              </div>
                              <div className="flex-1">
                                <h5 className="font-bold text-blue-900 mb-2">Objective</h5>
                                <p className="text-gray-700 text-sm leading-relaxed">{app.objective}</p>
                              </div>
                            </div>
                          </div>

                          {/* Problem Statement */}
                          <div className="bg-white border-l-4 border-red-400 p-4 rounded-lg shadow-sm">
                            <div className="flex items-start space-x-3">
                              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Lightbulb className="w-5 h-5 text-red-600" />
                              </div>
                              <div className="flex-1">
                                <h5 className="font-bold text-red-900 mb-2">Problem Statement</h5>
                                <p className="text-gray-700 text-sm leading-relaxed">{app.problem}</p>
                              </div>
                            </div>
                          </div>

                          {/* Impact */}
                          <div className="bg-white border-l-4 border-green-400 p-4 rounded-lg shadow-sm">
                            <div className="flex items-start space-x-3">
                              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <TrendingUp className="w-5 h-5 text-green-600" />
                              </div>
                              <div className="flex-1">
                                <h5 className="font-bold text-green-900 mb-2">Expected Impact</h5>
                                <p className="text-gray-700 text-sm leading-relaxed">{app.impact}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SectoralAccordion;