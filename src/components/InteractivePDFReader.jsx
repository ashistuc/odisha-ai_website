import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, BookOpen, List, Volume2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const InteractivePDFReader = ({ isOpen, onClose, pdfUrl }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showIndex, setShowIndex] = useState(true);

  // Complete AI Policy 2025 book content
  const bookSections = [
    {
      title: 'Cover Page',
      page: 0,
      important: false,
      content: {
        title: 'Odisha Artificial Intelligence Policy 2025',
        subtitle: 'Building an Inclusive and Innovation-Driven AI Ecosystem',
        department: 'Electronics & IT Department, Government of Odisha'
      }
    },
    {
      title: 'Vision & Mission',
      page: 1,
      important: true,
      content: {
        section: 'Vision & Mission',
        highlights: [
          'Transform Odisha into a leading AI-driven state',
          'Foster inclusive and responsible AI adoption',
          'Create 50,000+ AI jobs by 2036',
          'Establish world-class AI research infrastructure'
        ]
      }
    },
    {
      title: 'Policy Objectives',
      page: 2,
      important: true,
      content: {
        section: 'Key Policy Objectives',
        objectives: [
          'AI-enabled Governance: Deploy AI across government services',
          'Skill Development: Train 2 lakh citizens in AI by 2036',
          'Innovation Ecosystem: Support 500+ AI startups',
          'Research & Development: Establish 7 AI Innovation Centres',
          'Infrastructure: Develop robust data and compute infrastructure',
          'Ethical AI: Ensure responsible and transparent AI adoption'
        ]
      }
    },
    {
      title: 'Focus Areas',
      page: 3,
      important: true,
      content: {
        section: 'Strategic Focus Areas',
        areas: [
          'Healthcare: AI diagnostics, telemedicine, predictive health',
          'Agriculture: Precision farming, crop advisory, market intelligence',
          'Education: Personalized learning, AI tutors, skill-based curriculum',
          'Governance: Smart cities, citizen services, e-governance',
          'Disaster Management: Early warning systems, risk assessment'
        ]
      }
    },
    {
      title: 'Implementation Framework',
      page: 4,
      important: false,
      content: {
        section: 'Implementation Strategy',
        phases: [
          'Phase 1 (2025-2027): Foundation & Pilot Projects',
          'Phase 2 (2027-2030): Scale-up & Expansion',
          'Phase 3 (2030-2036): Maturity & Leadership'
        ]
      }
    },
    {
      title: 'Budget Allocation',
      page: 5,
      important: true,
      content: {
        section: 'Financial Framework',
        budget: '₹1,000 Crore allocated for 2025-2030',
        breakdown: [
          'Infrastructure: 30%',
          'Skill Development: 25%',
          'Startup Ecosystem: 20%',
          'R&D and Innovation: 15%',
          'Administration: 10%'
        ]
      }
    }
  ];

  const playPageFlipSound = () => {
    // Create a simple page flip sound effect
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    gainNode.gain.value = 0.1;
    
    oscillator.start();
    
    setTimeout(() => {
      oscillator.frequency.value = 400;
    }, 50);
    
    setTimeout(() => {
      oscillator.stop();
    }, 150);
  };

  const nextPage = () => {
    if (currentPage < bookSections.length - 1) {
      playPageFlipSound();
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      playPageFlipSound();
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page) => {
    playPageFlipSound();
    setCurrentPage(page);
    setShowIndex(false);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, currentPage]);

  if (!isOpen) return null;

  const currentSection = bookSections[currentPage];

  return (
    <div className="fixed inset-0 bg-black/80 z-stack-modal flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="w-full max-w-6xl h-[90vh] bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl shadow-2xl flex overflow-hidden">
        {/* Index Sidebar */}
        <div className={`${showIndex ? 'w-80' : 'w-0'} transition-all duration-300 bg-white border-r-2 border-orange-200 overflow-y-auto`}>
          {showIndex && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 flex items-center">
                  <List className="w-5 h-5 mr-2 text-orange-600" />
                  Index
                </h3>
              </div>
              <div className="space-y-2">
                {bookSections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                      currentPage === index
                        ? 'bg-orange-100 border-2 border-orange-400'
                        : 'bg-gray-50 hover:bg-orange-50 border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-gray-900">{section.title}</p>
                        <p className="text-xs text-gray-500">Page {index + 1}</p>
                      </div>
                      {section.important && (
                        <Badge className="bg-yellow-100 text-yellow-800 text-xs ml-2">
                          Important
                        </Badge>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Book Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="bg-white border-b-2 border-orange-200 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowIndex(!showIndex)}
                className="border-orange-300"
              >
                <List className="w-4 h-4 mr-2" />
                {showIndex ? 'Hide' : 'Show'} Index
              </Button>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-gray-900">AI Policy 2025</span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-orange-100"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Page Content */}
          <div className="flex-1 overflow-y-auto p-8 bg-white">
            <div className="max-w-4xl mx-auto">
              {/* Page with flip animation */}
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                {currentPage === 0 && (
                  <div className="text-center py-20">
                    <div className="mb-8">
                      <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-white" />
                      </div>
                    </div>
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                      {currentSection.content.title}
                    </h1>
                    <p className="text-2xl text-gray-700 mb-8">
                      {currentSection.content.subtitle}
                    </p>
                    <Badge className="bg-orange-600 text-white px-6 py-2 text-base">
                      {currentSection.content.department}
                    </Badge>
                  </div>
                )}

                {currentSection.content.highlights && (
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-orange-500 pb-3">
                      {currentSection.content.section}
                    </h2>
                    <div className="space-y-4">
                      {currentSection.content.highlights.map((highlight, idx) => (
                        <div key={idx} className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                          <p className="text-lg text-gray-800 font-medium">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentSection.content.objectives && (
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-orange-500 pb-3">
                      {currentSection.content.section}
                    </h2>
                    <div className="space-y-4">
                      {currentSection.content.objectives.map((obj, idx) => (
                        <div key={idx} className="flex items-start space-x-3 bg-blue-50 p-4 rounded-lg">
                          <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                            {idx + 1}
                          </div>
                          <p className="text-gray-800 font-medium pt-1">{obj}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentSection.content.areas && (
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-orange-500 pb-3">
                      {currentSection.content.section}
                    </h2>
                    <div className="grid grid-cols-1 gap-4">
                      {currentSection.content.areas.map((area, idx) => (
                        <Card key={idx} className="border-2 border-orange-200 hover:border-orange-400 transition-colors">
                          <CardContent className="p-4">
                            <p className="text-gray-800 font-medium">{area}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {currentSection.content.phases && (
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-orange-500 pb-3">
                      {currentSection.content.section}
                    </h2>
                    <div className="space-y-4">
                      {currentSection.content.phases.map((phase, idx) => (
                        <div key={idx} className="bg-gradient-to-r from-orange-50 to-blue-50 p-5 rounded-lg border-2 border-gray-200">
                          <p className="text-lg text-gray-800 font-semibold">{phase}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentSection.content.budget && (
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-orange-500 pb-3">
                      {currentSection.content.section}
                    </h2>
                    <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6 mb-6">
                      <p className="text-2xl font-bold text-green-800">{currentSection.content.budget}</p>
                    </div>
                    <div className="space-y-3">
                      {currentSection.content.breakdown.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                          <span className="text-gray-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentSection.important && (
                  <div className="mt-6 flex items-center space-x-2 text-yellow-700">
                    <Volume2 className="w-5 h-5" />
                    <span className="text-sm font-semibold">Important Section - Auto-highlighted</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="bg-white border-t-2 border-orange-200 p-4">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              <Button
                onClick={prevPage}
                disabled={currentPage === 0}
                className="bg-orange-600 hover:bg-orange-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                Previous
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Page {currentPage + 1} of {bookSections.length}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Use arrow keys or click to navigate
                </p>
              </div>

              <Button
                onClick={nextPage}
                disabled={currentPage === bookSections.length - 1}
                className="bg-orange-600 hover:bg-orange-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Next
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractivePDFReader;
