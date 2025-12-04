import React, { useMemo, useState } from 'react';
import { ExternalLink, Database, Globe, Sparkles, Languages, Github, Cpu, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const AIToolsSection = ({ tools }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tools', icon: Zap },
    { id: 'language', name: 'Language & NLP', icon: Languages },
    { id: 'infrastructure', name: 'Infrastructure', icon: Database },
    { id: 'models', name: 'Model Testing', icon: Cpu },
    { id: 'opensource', name: 'Open Source', icon: Github },
    { id: 'government', name: 'Government', icon: Globe }
  ];

  const categoryIconMap = useMemo(() => (
    categories.reduce((acc, category) => {
      acc[category.id] = category.icon;
      return acc;
    }, {})
  ), [categories]);

  const filteredTools = activeCategory === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? 'default' : 'outline'}
              onClick={() => setActiveCategory(cat.id)}
              className={`${
                activeCategory === cat.id 
                  ? 'bg-orange-600 hover:bg-orange-700' 
                  : 'hover:bg-orange-50 hover:border-orange-300'
              }`}
            >
              <Icon className="w-4 h-4 mr-2" />
              {cat.name}
            </Button>
          );
        })}
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool, index) => {
          const hasImage = Boolean(tool.image);
          const CategoryIcon = categoryIconMap[tool.category] || Sparkles;
          return (
            <Card
              key={tool.id}
              className="group hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-orange-200 overflow-hidden relative"
            >
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${tool.gradient || 'from-orange-400 to-red-500'}`}></div>

              <CardHeader>
                <div className="relative mb-4">
                  {hasImage ? (
                    <div className="relative h-32 w-full rounded-xl border border-gray-100 bg-white overflow-hidden shadow-sm group-hover:shadow-lg transition-all duration-300">
                      <img
                        src={tool.image}
                        alt={`${tool.name} logo`}
                        loading="lazy"
                        className="h-full w-full object-contain p-4"
                      />
                    </div>
                  ) : (
                    <div className={`w-16 h-16 bg-gradient-to-br ${tool.gradient || 'from-orange-100 to-orange-200'} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <CategoryIcon className="w-8 h-8 text-orange-700" />
                    </div>
                  )}
                  {tool.featured && (
                    <Badge className={`flex items-center gap-1 bg-yellow-100 text-yellow-700 shadow-sm ${hasImage ? 'absolute top-3 right-3' : 'absolute -top-2 -right-2'}`}>
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </Badge>
                  )}
                </div>

                <CardTitle className="text-xl group-hover:text-orange-600 transition-colors duration-300">
                  {tool.name}
                </CardTitle>
                
                <CardDescription className="text-base mt-2">
                  {tool.description}
                </CardDescription>

                {tool.importance && (
                  <div className="mt-3 p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                    <p className="text-sm text-blue-800">
                      <strong>Impact:</strong> {tool.importance}
                    </p>
                  </div>
                )}
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  {tool.tags && (
                    <div className="flex flex-wrap gap-2">
                      {tool.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-orange-200 text-orange-700">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {tool.provider && (
                    <div className="text-xs text-gray-500">
                      Provider: <span className="font-medium text-gray-700">{tool.provider}</span>
                    </div>
                  )}

                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full"
                  >
                    <Button
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white group/btn"
                    >
                      {tool.buttonText || 'Visit Tool'}
                      <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default AIToolsSection;
