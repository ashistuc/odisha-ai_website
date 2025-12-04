import React, { useState } from 'react';
import { Building2, CheckCircle, Clock, Lightbulb, Target, Zap, ExternalLink, X, ZoomIn } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const FeaturedProjectsZoom = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

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
    <div>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project) => {
          const StatusIcon = statusIcons[project.status];
          const hasImage = Boolean(project.image);
          return (
            <Card
              key={project.id}
              className="group cursor-pointer transition-all duration-500 border-2 border-gray-100 hover:border-orange-400 hover:shadow-2xl relative overflow-hidden transform hover:scale-105"
              onClick={() => setSelectedProject(project)}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Status Badge */}
              <div className="absolute top-3 right-3 z-10">
                <Badge className={`${statusColors[project.status]} border flex items-center space-x-1`}>
                  <StatusIcon className="w-3 h-3" />
                  <span>{project.status}</span>
                </Badge>
              </div>

              {/* Department Icon */}
              <div className="p-6 relative">
                <div className="mb-4">
                  {hasImage ? (
                    <div className="relative h-36 w-full rounded-2xl bg-white border border-gray-100 flex items-center justify-center overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-500">
                      <img
                        src={project.image}
                        alt={`${project.name} visual`}
                        loading="lazy"
                        className="h-full w-full object-contain p-4"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Building2 className="w-8 h-8 text-orange-600" />
                    </div>
                  )}
                </div>

                {/* Project Name */}
                <h3 className="font-bold text-base text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                  {project.name}
                </h3>

                {/* Department */}
                <p className="text-xs text-gray-600 mb-1">{project.department}</p>
                {project.partner && (
                  <p className="text-xs text-orange-600 font-medium mb-3">Partner: {project.partner}</p>
                )}

                {/* Details Preview */}
                <p className="text-xs text-gray-500 line-clamp-2 mb-4">
                  {project.details}
                </p>

                {/* Zoom Button */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Click to expand</span>
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                    <ZoomIn className="w-4 h-4 text-orange-600 group-hover:text-white" />
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Modal/Zoom View */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-stack-modal flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] shadow-2xl animate-in zoom-in-95 duration-300 overflow-hidden flex flex-col">
            <div className="flex-1 overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white z-10">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Badge className="bg-white text-orange-600 border-0">
                        {selectedProject.status}
                      </Badge>
                      <span className="text-sm opacity-90">{selectedProject.department}</span>
                    </div>
                    <h2 className="text-2xl font-bold">{selectedProject.name}</h2>
                    {selectedProject.partner && (
                      <p className="text-sm text-orange-100 mt-1">Implementation Partner: {selectedProject.partner}</p>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pb-32 space-y-6">
                {selectedProject.image && (
                  <div className="relative h-56 w-full rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
                    <img
                      src={selectedProject.image}
                      alt={`${selectedProject.name} visual`}
                      className="h-full w-full object-contain bg-white p-6"
                    />
                  </div>
                )}

                {/* Objective */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900">Project Objective</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.objective}
                  </p>
                </div>

                {/* Problem Statement */}
                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-red-900 mb-3">Problem Statement</h3>
                      <p className="text-red-800 leading-relaxed">
                        {selectedProject.problem}
                      </p>
                    </div>
                  </div>
                </div>

                {/* How AI Solves */}
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-blue-900 mb-3">How AI Solves It</h3>
                      <p className="text-blue-800 leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Impact */}
                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-green-900 mb-3">Impact & Benefits</h3>
                      <ul className="space-y-2">
                        {selectedProject.impact.map((item, idx) => (
                          <li key={idx} className="flex items-start text-green-800">
                            <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 text-green-600 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions Footer */}
            <div className="border-t border-gray-200 bg-white/90 backdrop-blur-sm p-6 flex flex-wrap gap-4 items-center justify-between sticky bottom-0 z-stack-overlay">
              <div className="flex gap-4 flex-wrap w-full lg:w-auto">
                {selectedProject.url && selectedProject.url !== '#' && (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 lg:flex-none"
                  >
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                      Visit Project Portal
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                )}
              </div>
                <Button
                  variant="outline"
                  onClick={() => setSelectedProject(null)}
                  className="border-2 border-gray-300 hover:bg-gray-100"
                >
                  Close
                </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedProjectsZoom;