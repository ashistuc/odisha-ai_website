import React, { useState } from 'react';
import { CheckCircle, Circle, Clock, Rocket, Target, TrendingUp, ChevronRight, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const ImplementationPhaseSection = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: 1,
      name: 'Foundation Phase',
      timeline: '2025-2027',
      status: 'In Progress',
      color: 'blue',
      icon: Rocket,
      description: 'Building the groundwork for AI adoption with pilot projects and infrastructure setup',
      objectives: [
        'Establish 7 AI Innovation Centres across Odisha',
        'Launch pilot AI projects in 5 key sectors',
        'Train 15,000 government officials in AI awareness',
        'Set up data infrastructure and compute facilities',
        'Create AI policy framework and governance structure'
      ],
      milestones: [
        { title: 'AI Policy Approval', status: 'completed', date: 'Jan 2025' },
        { title: 'Innovation Centres Setup', status: 'in-progress', date: 'Q2 2025' },
        { title: 'Pilot Projects Launch', status: 'in-progress', date: 'Q3 2025' },
        { title: 'Training Programs Start', status: 'upcoming', date: 'Q4 2025' },
        { title: 'Infrastructure Ready', status: 'upcoming', date: 'Q2 2026' }
      ],
      keyActivities: [
        'Setting up AI Centres of Excellence in partnership with IITs and premier institutes',
        'Launching AI hackathons and innovation challenges',
        'Creating AI sandbox environment for experimentation',
        'Building datasets for Odisha-specific use cases',
        'Establishing ethics committee and data governance framework'
      ]
    },
    {
      id: 2,
      name: 'Scale-up Phase',
      timeline: '2027-2030',
      status: 'Upcoming',
      color: 'green',
      icon: TrendingUp,
      description: 'Scaling successful pilots and expanding AI adoption across sectors',
      objectives: [
        'Scale AI solutions to 100+ use cases',
        'Onboard 300 AI startups to the ecosystem',
        'Train 50,000 citizens in AI skills',
        'Achieve 50% digital literacy in rural areas',
        'Launch AI-powered citizen services statewide'
      ],
      milestones: [
        { title: 'Pilot Evaluation', status: 'upcoming', date: 'Q1 2027' },
        { title: 'Scaling Begins', status: 'upcoming', date: 'Q2 2027' },
        { title: 'Startup Ecosystem Active', status: 'upcoming', date: 'Q4 2027' },
        { title: 'Mass Training Programs', status: 'upcoming', date: 'Q1 2028' },
        { title: 'Statewide Deployment', status: 'upcoming', date: 'Q4 2029' }
      ],
      keyActivities: [
        'Expanding successful pilots to district level',
        'Creating AI incubation hubs in all major cities',
        'Launching mass AI literacy campaigns',
        'Establishing public-private partnerships for AI solutions',
        'Setting up AI-as-a-Service platform for government departments'
      ]
    },
    {
      id: 3,
      name: 'Maturity & Leadership Phase',
      timeline: '2030-2036',
      status: 'Future',
      color: 'purple',
      icon: Target,
      description: 'Achieving AI leadership and becoming a model state for AI governance',
      objectives: [
        'Position Odisha in Top 5 AI states nationally',
        'Deploy 200+ AI use cases across all sectors',
        'Create 50,000+ AI jobs',
        'Support 500+ AI startups',
        'Train 2 lakh citizens in advanced AI skills'
      ],
      milestones: [
        { title: 'AI Excellence Status', status: 'future', date: '2031' },
        { title: 'National Recognition', status: 'future', date: '2032' },
        { title: 'Self-Sustaining Ecosystem', status: 'future', date: '2034' },
        { title: 'Leadership Position', status: 'future', date: '2035' },
        { title: 'Vision 2036 Achieved', status: 'future', date: '2036' }
      ],
      keyActivities: [
        'Establishing Odisha as AI research hub with global partnerships',
        'Creating AI export capabilities - solutions for other states/countries',
        'Achieving carbon-neutral AI infrastructure',
        'Building world-class AI talent pool',
        'Becoming a model for ethical and inclusive AI governance'
      ]
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-blue-600 animate-spin" />;
      default:
        return <Circle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'upcoming':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const colorMap = {
    blue: { bg: 'from-blue-500 to-blue-600', text: 'text-blue-600', border: 'border-blue-500' },
    green: { bg: 'from-green-500 to-green-600', text: 'text-green-600', border: 'border-green-500' },
    purple: { bg: 'from-purple-500 to-purple-600', text: 'text-purple-600', border: 'border-purple-500' }
  };

  const currentPhase = phases[activePhase];
  const PhaseIcon = currentPhase.icon;
  const colors = colorMap[currentPhase.color];

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-8">
        <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 mb-3 px-3 py-1">
          <Sparkles className="w-4 h-4 mr-2" />
          Implementation Roadmap
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
            Get It Done:
          </span>{' '}
          AI Implementation Timeline
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          A phased approach to transform Odisha into an AI powerhouse - from foundation to leadership
        </p>
      </div>

      {/* Phase Selector - Compact Horizontal Tabs */}
      <div className="flex flex-col sm:flex-row bg-gray-50 rounded-xl p-2 mb-6 border border-gray-200">
        {phases.map((phase, index) => {
          const Icon = phase.icon;
          const phaseColors = colorMap[phase.color];
          const isActive = activePhase === index;

          return (
            <button
              key={phase.id}
              onClick={() => setActivePhase(index)}
              className={`flex-1 relative group transition-all duration-300 p-3 rounded-lg ${
                isActive
                  ? `bg-white shadow-md ${phaseColors.border} border-2`
                  : 'hover:bg-white/50'
              }`}
            >
              <div className="flex items-center justify-center sm:flex-col space-x-3 sm:space-x-0 sm:space-y-2">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${phaseColors.bg} flex items-center justify-center ${isActive ? 'animate-pulse' : ''}`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-center">
                  <h3 className={`text-sm sm:text-base font-bold ${isActive ? phaseColors.text : 'text-gray-700'}`}>
                    {phase.name}
                  </h3>
                  <p className="text-xs text-gray-600 hidden sm:block">{phase.timeline}</p>
                </div>
              </div>
              {isActive && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-orange-500 rounded-full"></div>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Phase Details */}
      <div className="animate-in fade-in slide-in-from-right duration-500">
        <Card className={`border-3 ${colors.border} shadow-xl bg-gradient-to-br from-white to-gray-50`}>
          <CardHeader className="border-b-2 border-gray-200 bg-white p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 sm:w-18 sm:h-18 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center shadow-lg`}>
                  <PhaseIcon className="w-8 h-8 sm:w-9 sm:h-9 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                    {currentPhase.name}
                  </CardTitle>
                  <p className="text-base sm:text-lg text-gray-600">{currentPhase.timeline}</p>
                </div>
              </div>
              <Badge className={`${getStatusColor(currentPhase.status.toLowerCase())} border text-sm px-3 py-1`}>
                {currentPhase.status}
              </Badge>
            </div>
            <p className="text-gray-700 mt-4 text-base sm:text-lg leading-relaxed">
              {currentPhase.description}
            </p>
          </CardHeader>

          <CardContent className="p-4 sm:p-6 space-y-6">
            {/* Objectives */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <Target className={`w-5 h-5 mr-2 ${colors.text}`} />
                Key Objectives
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentPhase.objectives.map((obj, idx) => (
                  <div key={idx} className="flex items-start space-x-2 bg-white p-3 rounded-lg border border-gray-200 hover:border-orange-300 transition-colors">
                    <ChevronRight className={`w-4 h-4 flex-shrink-0 mt-0.5 ${colors.text}`} />
                    <p className="text-gray-800 text-sm font-medium">{obj}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Milestones */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <Clock className={`w-5 h-5 mr-2 ${colors.text}`} />
                Milestones Timeline
              </h4>
              <div className="space-y-2">
                {currentPhase.milestones.map((milestone, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-gray-200">
                    <div className="flex-shrink-0">
                      {getStatusIcon(milestone.status)}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm">{milestone.title}</p>
                      <p className="text-xs text-gray-600">{milestone.date}</p>
                    </div>
                    <Badge className={`${getStatusColor(milestone.status)} border text-xs`}>
                      {milestone.status.replace('-', ' ')}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Activities */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <Sparkles className={`w-5 h-5 mr-2 ${colors.text}`} />
                Key Activities
              </h4>
              <div className="space-y-2">
                {currentPhase.keyActivities.map((activity, idx) => (
                  <div key={idx} className="flex items-start space-x-2 bg-gradient-to-r from-orange-50 to-blue-50 p-3 rounded-lg border border-gray-200">
                    <div className={`bg-gradient-to-br ${colors.bg} text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-xs`}>
                      {idx + 1}
                    </div>
                    <p className="text-gray-800 text-sm leading-relaxed">{activity}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Hint */}
      <div className="text-center mt-4">
        <p className="text-gray-600 text-sm">
          Click on phase tabs above to explore different implementation stages
        </p>
      </div>
    </div>
  );
};

export default ImplementationPhaseSection;
