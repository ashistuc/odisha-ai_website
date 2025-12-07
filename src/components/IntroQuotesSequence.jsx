import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';

const IntroQuotesSequence = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [highlightedText, setHighlightedText] = useState('');
  const textRef = useRef(null);
  const indexRef = useRef(0);
  const animationIdRef = useRef(null);

  const pmModiQuote = "Artificial Intelligence is not just a technological revolution, it is a means to empower humanity. India must lead the world in ethical and inclusive AI development.";
  const cmQuote = "Odisha AI Policy 2025 is our commitment to transform governance, empower citizens, and build a future where technology serves every Odia. We will make Odisha India's AI powerhouse.";

  const animateText = (text, onComplete) => {
    indexRef.current = 0;
    setHighlightedText('');

    const animate = () => {
      if (indexRef.current <= text.length) {
        setHighlightedText(text.substring(0, indexRef.current));
        indexRef.current++;
        animationIdRef.current = setTimeout(animate, 30);
      } else {
        clearTimeout(animationIdRef.current);
        setTimeout(onComplete, 2000);
      }
    };

    animate();
  };

  useEffect(() => {
    if (step === 0) {
      animateText(pmModiQuote, () => setStep(1));
    } else if (step === 1) {
      animateText(cmQuote, () => setStep(2));
    } else if (step === 2) {
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 3000);
    }

    return () => {
      if (animationIdRef.current) {
        clearTimeout(animationIdRef.current);
      }
    };
  }, [step, onComplete]);

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
                  src="/odisha-ai_website/images/Pm_Modi.png"
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
              <p ref={textRef} className="text-2xl text-white leading-relaxed relative z-10">
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
                  src="/odisha-ai_website/images/Mohan_Charan_Majhi.jpg"
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
              <p ref={textRef} className="text-2xl text-white leading-relaxed relative z-10 notranslate">
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
            <h1 className="text-6xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent animate-pulse mb-4">
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
