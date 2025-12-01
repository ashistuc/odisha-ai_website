import React from 'react';

const Logo = ({ className = "w-12 h-12" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FF6F00', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FF9933', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Background Circle */}
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="url(#logoGradient)"
        className="animate-pulse-slow"
      />
      
      {/* Odisha Map Outline (Simplified) */}
      <path
        d="M 35 25 L 45 20 L 55 22 L 65 25 L 70 35 L 68 45 L 70 55 L 68 65 L 60 72 L 50 75 L 40 72 L 32 65 L 30 55 L 32 45 L 30 35 Z"
        fill="rgba(255, 255, 255, 0.2)"
        stroke="white"
        strokeWidth="1.5"
        className="animate-draw"
      />
      
      {/* AI Circuit Lines */}
      <g className="animate-pulse-circuit">
        <line x1="50" y1="30" x2="50" y2="40" stroke="white" strokeWidth="2" opacity="0.8" />
        <circle cx="50" cy="40" r="3" fill="white" />
        
        <line x1="50" y1="60" x2="50" y2="70" stroke="white" strokeWidth="2" opacity="0.8" />
        <circle cx="50" cy="60" r="3" fill="white" />
        
        <line x1="35" y1="50" x2="45" y2="50" stroke="white" strokeWidth="2" opacity="0.8" />
        <circle cx="45" cy="50" r="3" fill="white" />
        
        <line x1="55" y1="50" x2="65" y2="50" stroke="white" strokeWidth="2" opacity="0.8" />
        <circle cx="55" cy="50" r="3" fill="white" />
      </g>
      
      {/* AI Text */}
      <text
        x="50"
        y="55"
        textAnchor="middle"
        fill="white"
        fontSize="24"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
        filter="url(#glow)"
      >
        AI
      </text>
    </svg>
  );
};

export default Logo;