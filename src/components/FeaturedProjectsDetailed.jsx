import React, { useState } from 'react';
import { Building2, CheckCircle, Clock, Lightbulb, Target, Zap, ExternalLink, ChevronRight } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const FeaturedProjectsDetailed = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const statusColors = {
    'Live': 'bg-green-100 text-green-700 border-green-300',
    'Pilot': 'bg-blue-100 text-blue-700 border-blue-300',
    'Concept': 'bg-yellow-100 text-yellow-700 border-yellow-300'
  };

  const statusIcons = {
    'Live': CheckCircle,
    'Pilot': Clock,
    'Concept': Lightbulb
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Side - Project List */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Building2 className="w-6 h-6 mr-3 text-orange-600" />
          Government AI Projects
        </h3>
        
        <div className="space-y-3">
          {projects.map((project) => {
            const StatusIcon = statusIcons[project.status];
            return (
              <Card
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`p-5 cursor-pointer transition-all duration-300 border-2 ${
                  selectedProject.id === project.id
                    ? 'border-orange-400 bg-orange-50 shadow-lg scale-[1.02]'
                    : 'border-gray-200 hover:border-orange-200 hover:shadow-md'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-gray-900 mb-1">
                      {project.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {project.department}
                    </p>
                  </div>
                  <Badge className={`${statusColors[project.status]} border flex items-center space-x-1`}>
                    <StatusIcon className="w-3 h-3" />
                    <span>{project.status}</span>
                  </Badge>
                </div>

                {project.partner && (
                  <div className="text-xs text-gray-500 mb-2">
                    Implementation Partner: <span className="font-medium text-orange-600">{project.partner}</span>
                  </div>
                )}

                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-gray-500">
                    {project.details}
                  </span>
                  <ChevronRight className={`w-5 h-5 transition-transform ${
                    selectedProject.id === project.id ? 'text-orange-600 translate-x-1' : 'text-gray-400'
                  }`} />
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Right Side - Project Details */}
      <div className="sticky top-24">
        <Card className="border-2 border-orange-200 overflow-hidden">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-2xl font-bold">{selectedProject.name}</h3>
              <Badge className="bg-white text-orange-600 border-0">
                {selectedProject.status}
              </Badge>
            </div>
            <p className="text-orange-100 text-sm">{selectedProject.department}</p>
            {selectedProject.partner && (
              <p className="text-orange-100 text-xs mt-1">Partner: {selectedProject.partner}</p>
            )}
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Objective */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Target className="w-5 h-5 text-orange-600" />
                <h4 className="font-bold text-gray-900">Project Objective</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {selectedProject.objective}
              </p>
            </div>

            {/* Problem Statement */}
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <div className="flex items-start space-x-2">
                <Lightbulb className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-red-900 mb-2">Problem Statement</h4>
                  <p className="text-red-800 text-sm leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>
              </div>
            </div>

            {/* How AI Solves */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
              <div className="flex items-start space-x-2">
                <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">How AI Solves It</h4>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Impact */}
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-green-900 mb-2">Impact & Benefits</h4>
                  <ul className="space-y-1 text-green-800 text-sm">
                    {selectedProject.impact.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* External Link */}
            {selectedProject.url && (
              <div className="pt-4 border-t border-gray-200">
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full">
                    Visit Project Portal
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FeaturedProjectsDetailed;