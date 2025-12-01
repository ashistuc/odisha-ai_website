import React, { useState, useEffect } from 'react';
import { X, ChevronDown, Sparkles, Home, Target, GraduationCap, Briefcase, Image as ImageIcon, HelpCircle, FileText, Mail } from 'lucide-react';

const AIMascot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showTip, setShowTip] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const navigationSections = [
    { name: 'Home', icon: Home, sectionId: 'main-content', description: 'Back to top' },
    { name: 'Targets & Goals', icon: Target, sectionId: 'targets-section', description: 'View 2029 & 2036 targets' },
    { name: 'AI Training', icon: GraduationCap, sectionId: 'skilling-section', description: 'Explore training programs' },
    { name: 'Implementation', icon: Target, sectionId: 'implementation-section', description: 'View roadmap' },
    { name: 'Startups', icon: Briefcase, sectionId: 'startups-section', description: 'Meet AI startups' },
    { name: 'Tenders', icon: FileText, sectionId: 'tenders-section', description: 'View tenders' },
    { name: 'Event Gallery', icon: ImageIcon, sectionId: 'gallery-section', description: 'View photos & videos' },
    { name: 'FAQ', icon: HelpCircle, sectionId: 'faq-section', description: 'Get answers' },
    { name: 'Contact', icon: Mail, sectionId: 'contact-section', description: 'Contact us' }
  ];

  const tips = [
    'Hi! I\'m your AI guide. Click me!',
    'Odisha aims to train 2 lakh citizens by 2036!',
    'Explore our AI training programs!',
    'Check out the Event Gallery!'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(tips[Math.floor(Math.random() * tips.length)]);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showTip) {
      setMessage(tips[0]);
      setTimeout(() => setShowTip(false), 10000);
    }
  }, [showTip]);

  const handleNavigate = (sectionId) => {
    console.log('Navigating to:', sectionId);
    setIsOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      console.log('Found element:', element);
      
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        setMessage('Taking you there! 🚀');
        setTimeout(() => setMessage(''), 3000);
      } else {
        console.error('Element not found:', sectionId);
        setMessage('Section not found! 😕');
        setTimeout(() => setMessage(''), 3000);
      }
    }, 100);
  };

  return (
    <>
      {/* Mascot - Fixed Bottom Left */}
      <div className="fixed bottom-5 left-6 z-stack-floating flex flex-col items-start gap-3">
        {/* Speech Bubble positioned above the navigator */}
        {isHovered && !isOpen && (
          <div className="bg-white dark:bg-gray-900 border-2 border-orange-300 dark:border-orange-600 rounded-3xl shadow-2xl px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100 relative -translate-y-5 
            transition-all duration-300 opacity-0 pointer-events-none
            animate-fade-down">
            Need help? Click me for navigation!
            <div className="absolute -bottom-3 left-6 w-4 h-4 bg-white dark:bg-gray-900 border-l-2 border-b-2 border-orange-300 dark:border-orange-600 rotate-45"></div>
          </div>
        )}
        {/* Add keyframes animation for fade-down in your CSS or tailwind config:
        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-down {
          animation: fadeDown 0.4s cubic-bezier(0.4,0,0.2,1) forwards;
          opacity: 1 !important;
          pointer-events: auto !important;
        }
        */}

        {/* Mascot Avatar - Jagannath Style */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative group"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {/* Mascot Circle - Jagannath Eye Design */}
          <div className="w-20 h-20 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-bounce-slow border-4 border-orange-600">
            {/* Jagannath Eyes */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Left Eye */}
              <div className="absolute left-4 top-6">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                </div>
              </div>
              {/* Right Eye */}
              <div className="absolute right-4 top-6">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                </div>
              </div>
              {/* Smile */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-3 border-b-3 border-white rounded-full"></div>
            </div>
          </div>
          
          {/* AI Badge */}
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
            <span className="text-white text-xs font-bold">AI</span>
          </div>
        </button>
      </div>

      {/* Navigation Menu */}
      {isOpen && (
        <div
          className="fixed left-6 bottom-32 z-stack-floating w-80 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border-2 border-gray-200 dark:border-gray-700 animate-in slide-in-from-left duration-300 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">AI Navigator</h3>
                  <p className="text-xs text-orange-100">Quick navigation</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 rounded-full p-1 transition-colors"
                aria-label="Close navigation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="p-2 max-h-96 overflow-y-auto">
            {navigationSections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.sectionId}
                  onClick={() => handleNavigate(section.sectionId)}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-50 dark:hover:bg-gray-800 transition-colors group text-left"
                >
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      {section.name}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {section.description}
                    </p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400 transform -rotate-90 group-hover:translate-x-1 transition-transform" />
                </button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="p-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-center">
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Jai Jagannath! 🙏 Navigate with ease 🚀
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIMascot;