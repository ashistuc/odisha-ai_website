import React, { useState } from 'react';
import { Rocket, Users, MapPin, Calendar, TrendingUp, ExternalLink, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const AIStartupsSection = ({ startups }) => {
  const [selectedStartup, setSelectedStartup] = useState(null);

  const categoryColors = {
    'Healthcare': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    'Agriculture': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    'Education': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    'Security': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    'FinTech': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    'Climate Tech': 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300'
  };

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-12">
        <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300 hover:bg-indigo-200 mb-4 px-4 py-2">
          <Rocket className="w-4 h-4 mr-2" />
          Innovation Ecosystem
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          AI Startups <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">Powering Odisha</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Meet the innovative AI startups transforming industries and solving real-world problems
        </p>
      </div>

      {/* Startups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {startups.map((startup) => (
          <Card
            key={startup.id}
            className="group cursor-pointer border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800"
            onClick={() => setSelectedStartup(startup)}
            role="button"
            tabIndex={0}
            aria-label={`View details for ${startup.name}`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between mb-4">
                <img
                  src={startup.logo}
                  alt={`${startup.name} logo`}
                  className="w-16 h-16 rounded-lg object-cover border-2 border-gray-200 dark:border-gray-600 group-hover:scale-110 transition-transform"
                />
                <Badge className={`${categoryColors[startup.category]} text-xs`}>
                  {startup.category}
                </Badge>
              </div>
              <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {startup.name}
              </CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-1">
                {startup.tagline}
              </p>
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Calendar className="w-3.5 h-3.5 mr-1.5" />
                  Founded {startup.founded}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="w-3.5 h-3.5 mr-1.5" />
                  {startup.location}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Users className="w-3.5 h-3.5 mr-1.5" />
                  {startup.employees}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <TrendingUp className="w-3.5 h-3.5 mr-1.5" />
                  {startup.funding}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  {startup.product.name}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                  {startup.product.description}
                </p>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedStartup(startup);
                }}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Startup Detail Modal */}
      {selectedStartup && (
        <div
          className="fixed inset-0 bg-black/90 z-stack-modal flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedStartup(null)}
        >
          <div
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-900 border-b-2 border-gray-200 dark:border-gray-700 p-6 z-10">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <img
                    src={selectedStartup.logo}
                    alt={`${selectedStartup.name} logo`}
                    className="w-20 h-20 rounded-lg object-cover border-2 border-gray-200 dark:border-gray-600"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedStartup.name}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 italic mb-3">
                      {selectedStartup.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className={`${categoryColors[selectedStartup.category]}`}>
                        {selectedStartup.category}
                      </Badge>
                      <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                        {selectedStartup.funding}
                      </Badge>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedStartup(null)}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <span className="text-2xl">&times;</span>
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Company Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <Calendar className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mb-2" />
                  <p className="text-xs text-gray-600 dark:text-gray-400">Founded</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{selectedStartup.founded}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mb-2" />
                  <p className="text-xs text-gray-600 dark:text-gray-400">Location</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{selectedStartup.location}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <Users className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mb-2" />
                  <p className="text-xs text-gray-600 dark:text-gray-400">Team Size</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{selectedStartup.employees}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mb-2" />
                  <p className="text-xs text-gray-600 dark:text-gray-400">Customers</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{selectedStartup.product.customers}</p>
                </div>
              </div>

              {/* Product Details */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {selectedStartup.product.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {selectedStartup.product.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Key Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedStartup.product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                      <span className="text-gray-800 dark:text-gray-200 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Website Link */}
              <div className="flex justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg"
                  onClick={() => window.open(selectedStartup.product.website, '_blank')}
                >
                  Visit Website
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIStartupsSection;
