import React from 'react';
import { Briefcase, Calendar, DollarSign, Building, Clock, ExternalLink, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const TendersSection = ({ tenders }) => {
  const categoryColorMap = {
    'Healthcare': 'bg-red-100 text-red-800 border-red-300',
    'Agriculture': 'bg-green-100 text-green-800 border-green-300',
    'Smart Cities': 'bg-blue-100 text-blue-800 border-blue-300',
    'E-Governance': 'bg-purple-100 text-purple-800 border-purple-300',
    'Disaster Management': 'bg-orange-100 text-orange-800 border-orange-300',
    'Environment': 'bg-teal-100 text-teal-800 border-teal-300'
  };

  const getStatusColor = (status) => {
    return status === 'Open' 
      ? 'bg-green-500 text-white' 
      : 'bg-gray-500 text-white';
  };

  const getDaysRemaining = (closingDate) => {
    const today = new Date();
    const closing = new Date(closingDate);
    const diffTime = closing - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  return (
    <div>
      <div className="text-center mb-12">
        <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 mb-4 px-4 py-2">
          <Briefcase className="w-4 h-4 mr-2" />
          Business Opportunities
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Active AI Project <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Tenders</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore current tender opportunities for AI solution providers and technology partners
        </p>
      </div>

      {/* Tenders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {tenders.map((tender) => {
          const categoryColor = categoryColorMap[tender.category] || categoryColorMap['E-Governance'];
          const daysRemaining = getDaysRemaining(tender.closingDate);

          return (
            <Card 
              key={tender.id}
              className="border-2 border-gray-200 hover:border-orange-400 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
            >
              {/* Status Bar */}
              <div className="h-1.5 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700"></div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-3">
                  <Badge className={`${categoryColor} border text-xs`}>
                    {tender.category}
                  </Badge>
                  <Badge className={`${getStatusColor(tender.status)} text-xs`}>
                    {tender.status}
                  </Badge>
                </div>

                <CardTitle className="text-lg font-bold text-gray-900 leading-tight group-hover:text-purple-600 transition-colors mb-2">
                  {tender.title}
                </CardTitle>

                <div className="flex items-center text-xs text-gray-600 mb-2">
                  <Building className="w-3.5 h-3.5 mr-1.5 text-gray-500" />
                  <span className="line-clamp-1">{tender.department}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                {/* Tender ID */}
                <div className="flex items-center justify-between text-xs bg-gray-50 p-2 rounded">
                  <span className="text-gray-600">Tender ID:</span>
                  <span className="font-mono font-semibold text-gray-800">{tender.id}</span>
                </div>

                {/* Estimated Value */}
                <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg border border-green-200">
                  <div className="flex items-center text-sm text-gray-700">
                    <DollarSign className="w-4 h-4 mr-1 text-green-600" />
                    <span className="font-medium">Estimated Value</span>
                  </div>
                  <span className="font-bold text-green-700 text-lg">{tender.estimatedValue}</span>
                </div>

                {/* Dates */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Published:</span>
                    <span className="font-semibold text-gray-800">
                      {new Date(tender.publishDate).toLocaleDateString('en-IN', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Closing Date:</span>
                    <span className="font-semibold text-red-600">
                      {new Date(tender.closingDate).toLocaleDateString('en-IN', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </span>
                  </div>
                </div>

                {/* Days Remaining Alert */}
                {daysRemaining > 0 && (
                  <div className={`flex items-center justify-center p-2 rounded-lg ${
                    daysRemaining <= 7 
                      ? 'bg-red-50 border border-red-200' 
                      : 'bg-orange-50 border border-orange-200'
                  }`}>
                    <Clock className={`w-4 h-4 mr-2 ${daysRemaining <= 7 ? 'text-red-600' : 'text-orange-600'}`} />
                    <span className={`text-sm font-semibold ${daysRemaining <= 7 ? 'text-red-700' : 'text-orange-700'}`}>
                      {daysRemaining} {daysRemaining === 1 ? 'day' : 'days'} remaining
                    </span>
                  </div>
                )}

                {/* Action Button */}
                <Button 
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white shadow-md group-hover:shadow-lg transition-all"
                >
                  View Details
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <Button size="lg" variant="outline" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50">
          <FileText className="mr-2 w-5 h-5" />
          View All Tenders
        </Button>
      </div>
    </div>
  );
};

export default TendersSection;
