import React, { useEffect, useState } from 'react';
import Logo from './Logo';

const LoadingScreen = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setShowLoader(false);
            onLoadComplete && onLoadComplete();
          }, 300);
          return 100;
        }
        const diff = Math.random() * 15;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 z-stack-top bg-gradient-to-br from-orange-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* Animated AI-themed Logo */}
        <div className="mb-8 relative">
          {/* Outer rotating ring 
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-56 h-56 border-4 border-orange-300/30 rounded-full animate-spin-slow"></div>
          </div>
*/}
          {/* Logo with pulsing effect 
          <div className="relative animate-pulse-slow">
            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-white text-center">
                <div className="text-6xl font-bold mb-2">AI</div>
                <div className="text-xs font-semibold tracking-wider">ODISHA</div>
              </div>
            </div>
          
            <div className="absolute inset-0 w-48 h-48 mx-auto rounded-full bg-orange-400/20 blur-xl animate-pulse"></div>
          </div>
           */}
        </div>

        <img src="odisha-ai_website/images/mission-removebg-preview.png" className="w-96 mx-auto mb-8" alt="" />

        {/* Loading Text with gradient */}
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-600 bg-clip-text text-transparent mb-2 animate-in fade-in slide-in-from-bottom-4">
          Odisha AI Mission
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg animate-in fade-in slide-in-from-bottom-6 duration-700">
          Empowering Innovation, Inclusion, and Intelligence
        </p>

        {/* Progress Bar with glow */}
        <div className="w-80 mx-auto">
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 font-semibold">
            {progress < 100 ? 'Initializing AI Systems' : 'Ready'} • {Math.round(progress)}%
          </p>
        </div>

        {/* Animated Dots */}
        <div className="mt-8 flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full animate-bounce shadow-lg"
              style={{ animationDelay: `${i * 0.15}s` }}
            ></div>
          ))}
        </div>

        {/* Government Badge */}
        <div className="mt-8 text-xs text-gray-500 dark:text-gray-400 animate-in fade-in duration-1000">
          <p>A flagship initiative of</p>
          <p className="font-semibold text-gray-700 dark:text-gray-300">Electronics & IT Department, Government of Odisha</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
