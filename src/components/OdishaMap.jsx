import React, { useState } from 'react';
import { Building2, Heart, Sprout, GraduationCap, CloudRain, Cpu } from 'lucide-react';

const OdishaMap = () => {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const aiHotspots = [
    { id: 1, x: 45, y: 35, city: 'Bhubaneswar', sector: 'Governance & IT Hub', icon: Building2, color: '#FF6F00' },
    { id: 2, x: 52, y: 42, city: 'Cuttack', sector: 'Healthcare AI', icon: Heart, color: '#E91E63' },
    { id: 3, x: 38, y: 55, city: 'Berhampur', sector: 'Agriculture Tech', icon: Sprout, color: '#4CAF50' },
    { id: 4, x: 55, y: 28, city: 'Rourkela', sector: 'Education & Research', icon: GraduationCap, color: '#2196F3' },
    { id: 5, x: 65, y: 50, city: 'Puri', sector: 'Smart Tourism', icon: Cpu, color: '#9C27B0' },
    { id: 6, x: 42, y: 25, city: 'Sambalpur', sector: 'Climate Monitoring', icon: CloudRain, color: '#00BCD4' },
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FFF3E0', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#FFE0B2', stopOpacity: 1 }} />
          </linearGradient>
          
          <filter id="shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3"/>
          </filter>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Odisha Map Outline */}
        <path
          d="M 30 20 L 40 15 L 50 12 L 60 15 L 70 20 L 75 30 L 78 40 L 80 50 L 78 60 L 72 70 L 65 78 L 55 82 L 45 82 L 35 78 L 28 70 L 22 60 L 20 50 L 22 40 L 25 30 Z"
          fill="url(#mapGradient)"
          stroke="#FF9933"
          strokeWidth="2"
          filter="url(#shadow)"
          className="animate-draw-map"
        />

        {/* Coastline Detail */}
        <path
          d="M 72 70 Q 75 65, 78 60 Q 80 55, 80 50"
          fill="none"
          stroke="#03A9F4"
          strokeWidth="1.5"
          strokeDasharray="3,2"
          opacity="0.6"
          className="animate-wave"
        />

        {/* AI Hotspots */}
        {aiHotspots.map((hotspot, index) => {
          const Icon = hotspot.icon;
          return (
            <g key={hotspot.id}>
              {/* Pulsing Circle Background */}
              <circle
                cx={hotspot.x}
                cy={hotspot.y}
                r="4"
                fill={hotspot.color}
                opacity="0.3"
                className="animate-ping"
                style={{ animationDelay: `${index * 0.2}s` }}
              />
              
              {/* Main Hotspot Circle */}
              <circle
                cx={hotspot.x}
                cy={hotspot.y}
                r="2.5"
                fill={hotspot.color}
                filter="url(#glow)"
                className="cursor-pointer transition-all duration-300 hover:r-3"
                onMouseEnter={() => setHoveredPoint(hotspot.id)}
                onMouseLeave={() => setHoveredPoint(null)}
              />
              
              {/* Connection Lines */}
              <line
                x1="50"
                y1="50"
                x2={hotspot.x}
                y2={hotspot.y}
                stroke={hotspot.color}
                strokeWidth="0.5"
                opacity="0.3"
                strokeDasharray="2,2"
                className="animate-dash"
              />
            </g>
          );
        })}

        {/* Central AI Hub */}
        <circle
          cx="50"
          cy="50"
          r="3"
          fill="#FF6F00"
          filter="url(#glow)"
        />
        <circle
          cx="50"
          cy="50"
          r="5"
          fill="none"
          stroke="#FF6F00"
          strokeWidth="1"
          opacity="0.5"
          className="animate-pulse"
        />
      </svg>

      {/* Tooltips */}
      {aiHotspots.map((hotspot) => {
        const Icon = hotspot.icon;
        return (
          hoveredPoint === hotspot.id && (
            <div
              key={`tooltip-${hotspot.id}`}
              className="absolute bg-white rounded-lg shadow-xl p-4 z-10 animate-in fade-in slide-in-from-bottom-2 duration-300"
              style={{
                left: `${hotspot.x}%`,
                top: `${hotspot.y}%`,
                transform: 'translate(-50%, -120%)'
              }}
            >
              <div className="flex items-center space-x-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${hotspot.color}20` }}
                >
                  <Icon className="w-5 h-5" style={{ color: hotspot.color }} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{hotspot.city}</h4>
                  <p className="text-sm text-gray-600">{hotspot.sector}</p>
                </div>
              </div>
            </div>
          )
        );
      })}

      {/* Legend */}
      <div className="mt-8 bg-white rounded-lg p-4 shadow-md">
        <h4 className="font-semibold text-gray-900 mb-3 text-center">AI Innovation Hubs Across Odisha</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {aiHotspots.map((hotspot) => {
            const Icon = hotspot.icon;
            return (
              <div key={hotspot.id} className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: hotspot.color }}
                />
                <span className="text-xs text-gray-700">{hotspot.city}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OdishaMap;