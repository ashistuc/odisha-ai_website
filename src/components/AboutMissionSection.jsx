import React from 'react';
import { Badge } from './ui/badge';
import { ArrowRight, Zap, Users, Lightbulb, Lock, Leaf } from 'lucide-react';

const AboutMissionSection = () => {

  const coreObjectives = [
    {
      id: 1,
      title: 'Accelerate AI adoption in priority public sectors',
      icon: Zap,
      description: 'Fast-track implementation of AI solutions across critical government departments to improve service delivery and operational efficiency',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      iconBg: 'bg-blue-100 dark:bg-blue-900'
    },
    {
      id: 2,
      title: 'Strengthen AI learning, skilling and awareness',
      icon: Users,
      description: 'Build a comprehensive ecosystem for AI education, training programs, and public awareness to create a skilled workforce',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      iconBg: 'bg-purple-100 dark:bg-purple-900'
    },
    {
      id: 3,
      title: 'Encourage local innovation and entrepreneurship',
      icon: Lightbulb,
      description: 'Foster a vibrant startup ecosystem and support local entrepreneurs to develop AI solutions tailored to regional challenges',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      iconBg: 'bg-orange-100 dark:bg-orange-900'
    },
    {
      id: 4,
      title: 'Enable responsible, transparent and secure AI deployment',
      icon: Lock,
      description: 'Establish governance frameworks ensuring ethical AI use, data security, and transparent decision-making in government operations',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      iconBg: 'bg-green-100 dark:bg-green-900'
    },
    {
      id: 5,
      title: "Promote AI solutions rooted in Odisha's languages, culture and development needs",
      icon: Leaf,
      description: 'Develop culturally relevant AI applications that respect local languages, traditions, and address unique developmental challenges of the state',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
      iconBg: 'bg-emerald-100 dark:bg-emerald-900'
    }
  ];

  return (
    <section id="about-mission-section" className="py-20 bg-white dark:bg-gray-900 section-transition relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] dark:opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 mb-4 px-4 py-2">
            Our Strategic Direction
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            About the <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">Mission</span>
          </h2>
        </div>

        {/* Vision Statement Card */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 dark:from-blue-900/30 dark:to-orange-900/30 rounded-xl border border-blue-200 dark:border-blue-800 p-8 md:p-12 relative overflow-hidden">
            {/* Decorative gradient blob */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-200 dark:bg-blue-800 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-orange-200 dark:bg-orange-800 rounded-full opacity-10 blur-3xl"></div>

            <div className="relative">
              <div className="inline-block mb-6">
                <Badge className="bg-blue-600 text-white dark:bg-blue-500 px-4 py-2 font-semibold">
                  VISION
                </Badge>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 leading-relaxed">
                To make Odisha a leading state in the responsible use of Artificial Intelligence for inclusive growth, resilient governance, and citizen-centric public services.
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                This vision encompasses a transformative journey where AI becomes a catalyst for positive change, empowering citizens, strengthening institutions, and creating sustainable economic opportunities across all sections of society.
              </p>
            </div>
          </div>
        </div>

        {/* Core Objectives Section - Redesigned */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Left Side: Creative Heading */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="relative p-6 border-l-4 border-orange-500 bg-orange-50 dark:bg-gray-800/50 rounded-r-2xl">
                <div className="absolute -left-20 -top-20 w-40 h-40 bg-orange-200 dark:bg-orange-900/40 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                <h3 className="relative text-4xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
                  Core <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">
                    Objectives
                  </span>
                </h3>

                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium relative z-10">
                  Five strategic pillars guiding our AI adoption and implementation efforts to transform Odisha into a global AI hub.
                </p>

                <div className="mt-8 flex items-center space-x-2 text-orange-600 dark:text-orange-400 font-semibold">
                  <span>Our Focus Areas</span>
                  <div className="h-px bg-orange-600 dark:bg-orange-400 flex-grow max-w-[100px]"></div>
                </div>
              </div>
            </div>

            {/* Right Side: Creative List (Redesigned) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
              {coreObjectives.map((objective, index) => {
                const IconComponent = objective.icon;
                return (
                  <div
                    key={objective.id}
                    className="group relative bg-white dark:bg-gray-900 rounded-xl p-4 pr-6 flex items-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    {/* Decorative Hover Bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${objective.color} transition-all duration-300`}></div>

                    {/* Icon */}
                    <div className={`${objective.iconBg} w-12 h-12 rounded-lg flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <IconComponent className="w-6 h-6 text-gray-900 dark:text-white" />
                    </div>

                    {/* Title */}
                    <h4 className="flex-grow text-lg font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors leading-tight">
                      {objective.title}
                    </h4>

                    {/* Interaction Arrow */}
                    <div className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-gray-400 group-hover:text-orange-500">
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Key Highlights Section */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-8">Strategic Implementation Approach</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                    <span className="text-lg font-bold">1</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Stakeholder Engagement</h4>
                  <p className="text-white/80 text-sm">Building partnerships with government, industry, academia and citizens</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                    <span className="text-lg font-bold">2</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Pilot Projects</h4>
                  <p className="text-white/80 text-sm">Testing solutions in select sectors before large-scale rollout</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                    <span className="text-lg font-bold">3</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Capacity Building</h4>
                  <p className="text-white/80 text-sm">Continuous upskilling of government personnel and citizens</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-orange-600 to-orange-700 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 group text-lg">
            Explore Our Initiatives
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionSection;
