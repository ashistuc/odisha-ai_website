import React, { useState } from 'react';
import { Calendar, ExternalLink, Globe, ArrowLeft, Tag } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';

const AINewsInteractive = ({ news }) => {
  const [selectedNews, setSelectedNews] = useState(news[0]);
  const [filter, setFilter] = useState('all');

  const filteredNews = filter === 'all' 
    ? news 
    : news.filter(item => item.type.toLowerCase() === filter);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[700px]">
      {/* Left Sidebar - News List */}
      <div className="lg:col-span-1 bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-blue-50">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Latest Updates</h3>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
              className={filter === 'all' ? 'bg-orange-600' : ''}
            >
              All
            </Button>
            <Button
              size="sm"
              variant={filter === 'international' ? 'default' : 'outline'}
              onClick={() => setFilter('international')}
              className={filter === 'international' ? 'bg-blue-600' : ''}
            >
              International
            </Button>
            <Button
              size="sm"
              variant={filter === 'national' ? 'default' : 'outline'}
              onClick={() => setFilter('national')}
              className={filter === 'national' ? 'bg-orange-600' : ''}
            >
              National
            </Button>
          </div>
        </div>

        <ScrollArea className="h-[580px]">
          <div className="p-2">
            {filteredNews.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedNews(item)}
                className={`p-4 mb-2 rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedNews.id === item.id
                    ? 'bg-orange-100 border-2 border-orange-400 shadow-md'
                    : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <Badge className={`text-xs ${
                    item.type === 'International' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-orange-100 text-orange-700'
                  }`}>
                    {item.type}
                  </Badge>
                  <span className="text-xs text-gray-500">
                    {new Date(item.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
                  </span>
                </div>
                <h4 className="font-semibold text-sm text-gray-900 line-clamp-2 mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-600 line-clamp-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Right Side - Full Article View */}
      <div className="lg:col-span-2 bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="p-8">
            {/* Article Header */}
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <Badge className={`${
                  selectedNews.type === 'International' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-orange-500 text-white'
                }`}>
                  <Globe className="w-3 h-3 mr-1" />
                  {selectedNews.type}
                </Badge>
                <span className="text-sm text-gray-500 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(selectedNews.date).toLocaleDateString('en-IN', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedNews.title}
              </h1>

              <div className="flex items-center text-sm text-gray-600 mb-4">
                <span className="font-medium">Source: </span>
                <span className="ml-2 text-orange-600">{selectedNews.source}</span>
              </div>

              {selectedNews.tags && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedNews.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="border-orange-300 text-orange-700">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {selectedNews.description}
              </p>

              {/* Mock article body - in real implementation, this would come from API */}
              <div className="space-y-4 text-gray-600">
                <p>
                  This groundbreaking development marks a significant milestone in the field of artificial intelligence. 
                  The announcement has generated considerable interest among researchers, developers, and industry leaders 
                  worldwide, highlighting the rapid pace of innovation in AI technology.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Key Highlights</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Advanced capabilities demonstrating significant improvements over previous versions</li>
                  <li>Enhanced performance across multiple benchmarks and real-world applications</li>
                  <li>Potential impact on various industries including healthcare, education, and technology</li>
                  <li>Commitment to responsible AI development and ethical considerations</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Industry Impact</h3>
                <p>
                  Experts suggest that this development will have far-reaching implications for the AI ecosystem. 
                  Organizations are already exploring how to integrate these new capabilities into their workflows, 
                  while researchers are investigating potential applications across diverse domains.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Future Outlook</h3>
                <p>
                  As the technology continues to evolve, stakeholders are optimistic about its potential to address 
                  complex challenges and create new opportunities. Ongoing research and development efforts aim to 
                  further enhance capabilities while ensuring responsible deployment and governance.
                </p>
              </div>

              {/* External Link */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <a
                  href={selectedNews.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                    Read Original Article
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default AINewsInteractive;