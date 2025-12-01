import React, { useState } from 'react';
import { Calendar, ExternalLink, TrendingUp, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';

const AINews = ({ news }) => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredNews = activeTab === 'all' 
    ? news 
    : news.filter(item => item.type.toLowerCase() === activeTab);

  return (
    <div>
      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
          <TabsTrigger value="all">All Updates</TabsTrigger>
          <TabsTrigger value="international">International</TabsTrigger>
          <TabsTrigger value="national">National</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <NewsGrid news={filteredNews} />
        </TabsContent>
        <TabsContent value="international" className="mt-0">
          <NewsGrid news={filteredNews} />
        </TabsContent>
        <TabsContent value="national" className="mt-0">
          <NewsGrid news={filteredNews} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const NewsGrid = ({ news }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((item, index) => (
        <Card
          key={item.id}
          className="group hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-orange-200 overflow-hidden relative"
        >
          {/* Category badge strip */}
          <div className={`absolute top-0 left-0 right-0 h-1 ${
            item.type === 'International' ? 'bg-gradient-to-r from-blue-500 to-purple-600' :
            'bg-gradient-to-r from-orange-500 to-red-600'
          }`}></div>

          <CardHeader className="pt-6">
            <div className="flex items-center justify-between mb-3">
              <Badge className={`${
                item.type === 'International' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-orange-100 text-orange-700'
              }`}>
                <Globe className="w-3 h-3 mr-1" />
                {item.type}
              </Badge>
              <div className="flex items-center text-xs text-gray-500">
                <Calendar className="w-3 h-3 mr-1" />
                {new Date(item.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
              </div>
            </div>
            
            <CardTitle className="text-lg group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
              {item.title}
            </CardTitle>
            
            <CardDescription className="text-sm mt-2 line-clamp-3">
              {item.description}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="space-y-3">
              {item.source && (
                <div className="text-xs text-gray-500">
                  Source: <span className="font-medium">{item.source}</span>
                </div>
              )}
              
              {item.tags && (
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs border-gray-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 group/btn mt-2 w-full"
                >
                  Read Full Article
                  <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AINews;