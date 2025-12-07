import React, { useState } from 'react';
import { Lightbulb, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const AIProjectIdeaForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    projectTitle: '',
    sector: '',
    description: '',
    impact: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        projectTitle: '',
        sector: '',
        description: '',
        impact: ''
      });
    }, 3000);
  };

  const sectors = [
    'Healthcare',
    'Agriculture',
    'Education',
    'Governance',
    'Disaster Management',
    'Manufacturing',
    'Transportation',
    'Financial Services',
    'Environment',
    'Other'
  ];

  if (submitted) {
    return (
      <Card className="border-2 border-green-400 bg-green-50">
        <CardContent className="p-12 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Thank You for Your Submission!
          </h3>
          <p className="text-gray-600">
            Your innovative AI project idea has been received. Our team will review it and get back to you soon.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div>
      <div className="text-center mb-12">
        <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 mb-4 px-4 py-2">
          <Lightbulb className="w-4 h-4 mr-2" />
          Innovation Hub
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Share Your <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">Innovative AI Project Idea</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Have a groundbreaking AI solution? Submit your idea and get support from Odisha's AI ecosystem
        </p>
      </div>

      <Card className="border-2 border-gray-200 shadow-xl max-w-4xl mx-auto">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Organization / Institution
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="Your organization name (optional)"
                />
              </div>
            </div>

            {/* Project Information */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Project Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="projectTitle"
                required
                value={formData.projectTitle}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                placeholder="Give your project a catchy title"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Target Sector <span className="text-red-500">*</span>
              </label>
              <select
                name="sector"
                required
                value={formData.sector}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
              >
                <option value="">Select a sector</option>
                {sectors.map((sector) => (
                  <option key={sector} value={sector}>{sector}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Project Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                placeholder="Describe your AI project idea, the problem it solves, and how it works..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Expected Impact <span className="text-red-500">*</span>
              </label>
              <textarea
                name="impact"
                required
                value={formData.impact}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                placeholder="What impact will your project have on society, economy, or governance?"
              />
            </div>

            <div className="flex items-center justify-center pt-4">
              <Button 
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white px-12 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Submit Your Idea
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIProjectIdeaForm;
