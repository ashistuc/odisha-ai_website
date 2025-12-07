import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Target, TrendingUp, Server, GraduationCap, Lightbulb, Leaf, Heart, Sprout, Building2, CloudRain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const PolicyTargetsCarousel = ({ policyTargets }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const iconMap = {
    Server: Server,
    GraduationCap: GraduationCap,
    Lightbulb: Lightbulb,
    Leaf: Leaf,
    Heart: Heart,
    Sprout: Sprout,
    Building2: Building2,
    CloudRain: CloudRain
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % policyTargets.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, policyTargets.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + policyTargets.length) % policyTargets.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % policyTargets.length);
  };

  const currentCategory = policyTargets[currentIndex];
  const IconComponent = iconMap[currentCategory.icon] || Target;

  return (
    <div className="relative">
      {/* Section Header */}
      <div className="text-center mb-12">
        <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 mb-4 px-4 py-2">
          <Target className="w-4 h-4 mr-2" />
          AI Policy 2025 Roadmap
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Transforming Odisha with <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">Ambitious Targets</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our vision to become India's AI powerhouse - tracking progress across key sectors from 2025 to 2036
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative bg-gradient-to-br from-orange-50 via-white to-blue-50 rounded-2xl p-8 shadow-xl border-2 border-orange-200">
        {/* Category Header */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4 bg-white px-6 py-3 rounded-full shadow-md">
            <div className="bg-orange-100 p-3 rounded-full">
              <IconComponent className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{currentCategory.category}</h3>
          </div>
        </div>

        {/* Targets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {currentCategory.targets.map((target, idx) => (
            <Card key={idx} className="border-2 border-gray-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold text-gray-800 flex items-center justify-between">
                  <span>{target.label}</span>
                  <TrendingUp className="w-4 h-4 text-green-600 group-hover:scale-125 transition-transform" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {/* Current */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Current (2025)</span>
                    <span className="font-bold text-gray-800 text-lg">{target.current}</span>
                  </div>
                  
                  {/* Progress Bar for 2029 */}
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-blue-600 font-medium">Target 2029</span>
                      <span className="font-bold text-blue-700 text-lg">{target.target2029}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>

                  {/* Progress Bar for 2036 */}
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-orange-600 font-medium">Target 2036</span>
                      <span className="font-bold text-orange-700 text-lg">{target.target2036}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>

                  {/* Unit */}
                  <p className="text-xs text-gray-500 italic mt-2">{target.unit}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-4">
          <Button
            onClick={goToPrevious}
            variant="outline"
            size="icon"
            className="rounded-full border-2 border-orange-300 hover:bg-orange-50 hover:border-orange-500"
          >
            <ChevronLeft className="w-5 h-5 text-orange-600" />
          </Button>

          {/* Indicator Dots */}
          <div className="flex space-x-2">
            {policyTargets.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'w-8 bg-orange-600' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to ${policyTargets[idx].category}`}
              />
            ))}
          </div>

          <Button
            onClick={goToNext}
            variant="outline"
            size="icon"
            className="rounded-full border-2 border-orange-300 hover:bg-orange-50 hover:border-orange-500"
          >
            <ChevronRight className="w-5 h-5 text-orange-600" />
          </Button>
        </div>

        {/* Auto-play Toggle */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-gray-600 hover:text-orange-600 transition-colors"
          >
            {isAutoPlaying ? '⏸ Pause Auto-play' : '▶ Resume Auto-play'}
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 text-center text-sm text-gray-600">
        <p>
          <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-1"></span>
          Mid-term Target (2029)
          <span className="mx-4">|</span>
          <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-1"></span>
          Long-term Vision (2036)
        </p>
      </div>
    </div>
  );
};

export default PolicyTargetsCarousel;
