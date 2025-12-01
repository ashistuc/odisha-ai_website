import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, Building2, Heart, Sprout, GraduationCap, CloudRain, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const SectoralApplicationsSlider = ({ applications }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const iconMap = {
    Building2,
    Heart,
    Sprout,
    GraduationCap,
    CloudRain,
    Shield
  };

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {applications.map((app, index) => {
            const Icon = iconMap[app.icon] || Building2;
            return (
              <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
                <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-orange-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                        <Icon className="w-8 h-8 text-orange-600" />
                      </div>
                      <Badge className="bg-orange-100 text-orange-700">{app.sector}</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-orange-600 transition-colors duration-300">
                      {app.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      {app.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Impact:</span>
                        <span className="font-semibold text-orange-600">{app.impact}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Status:</span>
                        <Badge variant="outline" className={`${
                          app.status === 'Deployed' ? 'border-green-300 text-green-700' :
                          app.status === 'Pilot' ? 'border-blue-300 text-blue-700' :
                          'border-yellow-300 text-yellow-700'
                        }`}>
                          {app.status}
                        </Badge>
                      </div>
                      {app.beneficiaries && (
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Beneficiaries:</span>
                          <span className="font-semibold text-gray-900">{app.beneficiaries}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg hover:bg-orange-50 hover:border-orange-300 z-10"
        onClick={scrollPrev}
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg hover:bg-orange-50 hover:border-orange-300 z-10"
        onClick={scrollNext}
      >
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default SectoralApplicationsSlider;