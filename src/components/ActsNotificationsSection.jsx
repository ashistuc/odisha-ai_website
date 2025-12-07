import React from 'react';
import { FileText, Shield, Building2, Lock, Gift, GraduationCap, ShoppingCart, Download, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const ActsNotificationsSection = ({ items }) => {
  const iconMap = {
    FileText: FileText,
    Shield: Shield,
    Building2: Building2,
    Lock: Lock,
    Gift: Gift,
    GraduationCap: GraduationCap,
    ShoppingCart: ShoppingCart
  };

  const typeColorMap = {
    'Act': 'bg-blue-100 text-blue-800 border-blue-300',
    'Notification': 'bg-green-100 text-green-800 border-green-300',
    'Govt Order': 'bg-purple-100 text-purple-800 border-purple-300',
    'Guideline': 'bg-orange-100 text-orange-800 border-orange-300'
  };

  // Duplicate items for seamless scrolling
  const duplicatedItems = [...items, ...items];

  return (
    <div>
      <div className="text-center mb-12">
        <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 mb-4 px-4 py-2">
          <FileText className="w-4 h-4 mr-2" />
          Legal & Regulatory Framework
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Acts, Notifications, <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">Govt Orders & Guidelines</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest legal framework, policy notifications, and government directives for AI implementation
        </p>
      </div>

      {/* Scrolling Container */}
      <div className="relative overflow-hidden py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-orange-50 rounded-2xl">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-blue-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-orange-50 to-transparent z-10"></div>

        {/* Scrolling content */}
        <div className="flex animate-scroll-left hover:pause-animation">
          {duplicatedItems.map((item, index) => {
            const IconComponent = iconMap[item.icon] || FileText;
            const typeColor = typeColorMap[item.type] || typeColorMap['Guideline'];

            return (
              <div
                key={index}
                className="flex-shrink-0 mx-4 w-96"
              >
                <Card className="h-full border-2 border-gray-200 hover:border-orange-400 hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <Badge className={`${typeColor} border`}>
                        {item.type}
                      </Badge>
                      <div className="bg-gradient-to-br from-orange-100 to-blue-100 p-2 rounded-lg group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5 text-orange-600" />
                      </div>
                    </div>
                    <CardTitle className="text-base font-bold text-gray-900 leading-tight group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                      <span className="text-xs text-gray-500">
                        {new Date(item.date).toLocaleDateString('en-IN', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center mt-8">
        <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg">
          View All Documents
          <ExternalLink className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default ActsNotificationsSection;
