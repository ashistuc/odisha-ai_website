import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const IntroQuotesSequence = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [highlightedText, setHighlightedText] = useState('');

  const pmModiQuote = "Artificial Intelligence is not just a technological revolution, it is a means to empower humanity. India must lead the world in ethical and inclusive AI development.";
  const cmQuote = "Odisha AI Policy 2025 is our commitment to transform governance, empower citizens, and build a future where technology serves every Odia. We will make Odisha India's AI powerhouse.";

  useEffect(() => {
    if (step === 0) {
      // PM Modi quote with highlighting effect
      let index = 0;
      const interval = setInterval(() => {
        setHighlightedText(pmModiQuote.substring(0, index));
        index++;
        if (index > pmModiQuote.length) {
          clearInterval(interval);
          setTimeout(() => setStep(1), 2000);
        }
      }, 30);
      return () => clearInterval(interval);
    } else if (step === 1) {
      // CM quote with highlighting effect
      setHighlightedText('');
      let index = 0;
      const interval = setInterval(() => {
        setHighlightedText(cmQuote.substring(0, index));
        index++;
        if (index > cmQuote.length) {
          clearInterval(interval);
          setTimeout(() => setStep(2), 2000);
        }
      }, 30);
      return () => clearInterval(interval);
    } else if (step === 2) {
      // Zoom animation
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 3000);
    }
  }, [step]);

  if (step === 0) {
    // PM Modi Quote Screen
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 z-stack-modal flex items-center justify-center animate-in fade-in duration-1000">
        <div className="max-w-6xl mx-auto px-8 flex items-center space-x-12">
          {/* PM Photo */}
          <div className="flex-shrink-0 animate-in slide-in-from-left duration-1000">
            <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-orange-500 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-orange-200 to-blue-200 flex items-center justify-center">
                <img
                  src="/odisha-ai_website/images/PM.jpg"
                  alt="Prime Minister Narendra Modi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="flex-1 animate-in slide-in-from-right duration-1000">
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-white mb-2">Shri Narendra Modi</h2>
              <p className="text-xl text-blue-200">Prime Minister of India</p>
              <p className="text-sm text-blue-300 mt-1">Paris AI Summit</p>
            </div>
            <div className="relative">
              <div className="absolute -left-6 -top-4 text-8xl text-orange-500 opacity-30">"</div>
              <p className="text-2xl text-white leading-relaxed relative z-10">
                {highlightedText}
                <span className="inline-block w-1 h-8 bg-orange-500 animate-pulse ml-1"></span>
              </p>
              <div className="absolute -right-6 -bottom-4 text-8xl text-orange-500 opacity-30">"</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 1) {
    // CM Quote Screen
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 z-stack-modal flex items-center justify-center animate-in fade-in duration-1000">
        <div className="max-w-6xl mx-auto px-8 flex items-center space-x-12">
          {/* CM Photo */}
          <div className="flex-shrink-0 animate-in slide-in-from-left duration-1000">
            <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-blue-500 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-blue-200 to-orange-200 flex items-center justify-center">
                <img
                  src="/odisha-ai_website/images/CM.webp"
                  alt="Hon'ble Chief Minister"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="flex-1 animate-in slide-in-from-right duration-1000">
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-white mb-2">Hon'ble Chief Minister</h2>
              <p className="text-xl text-orange-200">Government of Odisha</p>
              <p className="text-sm text-orange-300 mt-1">AI Policy 2025 Launch</p>
            </div>
            <div className="relative">
              <div className="absolute -left-6 -top-4 text-8xl text-blue-500 opacity-30">"</div>
              <p className="text-2xl text-white leading-relaxed relative z-10">
                {highlightedText}
                <span className="inline-block w-1 h-8 bg-blue-500 animate-pulse ml-1"></span>
              </p>
              <div className="absolute -right-6 -bottom-4 text-8xl text-blue-500 opacity-30">"</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 2) {
    // Logo Zoom Animation
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-white via-orange-50 to-blue-50 z-stack-modal flex items-center justify-center">
        <div className="animate-zoom-in">
          <div className="text-center">
            <div className="mb-8 transform scale-150">
              <Logo />
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-blue-600 bg-clip-text text-transparent animate-pulse mb-4">
              Odisha AI Mission
            </h1>
            <p className="text-2xl text-gray-700 font-medium">
              Empowering Innovation, Inclusion, and Intelligence
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default IntroQuotesSequence;
