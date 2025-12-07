import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Server, GraduationCap, Zap, Scale, Cpu, Globe, Lightbulb, ShieldCheck, Database, Leaf, Users, FileText, ArrowRight } from 'lucide-react';

const StrategicPillars = () => {
    const [activeTab, setActiveTab] = useState('infrastructure');

    const pillars = [
        {
            id: 'infrastructure',
            label: 'INFRASTRUCTURE',
            title: 'Building the Backbone',
            icon: Server,
            color: 'blue',
            description: 'A strong and scalable infrastructure is the foundation of Odisha’s AI ecosystem. This pillar focuses on building the digital, compute, and innovation infrastructure required to support large-scale AI development, deployment, and adoption across sectors.',
            content: {
                intro: 'Building the Digital & Innovation Backbone of AI in Odisha',
                sub_sections: [
                    {
                        title: 'Compute & Data Infrastructure',
                        icon: Cpu,
                        text: 'AI systems require significant computing power. We are strengthening secure compute capacity, enabling high-performance computing infrastructure, and building robust data ecosystems to support research and real-world deployment.'
                    },
                    {
                        title: 'Innovation Centres',
                        icon: Globe,
                        text: 'Nurturing spaces for AI innovation through research centres and incubation hubs. These focus on solving real Odisha-specific challenges in areas such as healthcare, agriculture, disaster management, and governance.'
                    }
                ],
                highlight: {
                    title: 'Strategic Priority: Linguistic Inclusion',
                    text: 'Development of Large Language Models (LLMs) for Odia and tribal languages such as Santali, Saura, and Koya.',
                    icon: Users
                }
            }
        },
        {
            id: 'skills',
            label: 'SKILLS',
            title: 'Future-Ready Workforce',
            icon: GraduationCap,
            color: 'purple',
            description: 'The success of the Odisha AI Mission depends on people. This pillar focuses on building a broad, skilled, and future-ready AI workforce across students, researchers, professionals, and public servants.',
            content: {
                intro: 'Developing Odisha’s AI Talent & Future Workforce',
                sub_sections: [
                    {
                        title: 'AI in School Education',
                        icon: FileText,
                        text: 'Cultivating curiosity and computational thinking from an early age to prepare students for emerging careers and promote equitable access.'
                    },
                    {
                        title: 'Higher Education & Research',
                        icon: GraduationCap,
                        text: 'Strengthening AI education across universities with specialized programs to create a strong pipeline of researchers and engineers.'
                    },
                    {
                        title: 'Workforce AI Skilling',
                        icon: Users,
                        text: 'Expanding skill development in data science and ethical AI for both technical and non-technical domains to support industry and entrepreneurship.'
                    },
                    {
                        title: 'Government Capacity Building',
                        icon: ShieldCheck,
                        text: 'Training public officials in AI fundamentals and data-driven decision-making to ensure responsible and effective AI adoption in governance.'
                    }
                ]
            }
        },
        {
            id: 'energy',
            label: 'ENERGY',
            title: 'Sustainable AI Growth',
            icon: Zap,
            color: 'green',
            description: 'Recognising energy as a critical enabler, Odisha emphasizes the integration of clean and sustainable energy with AI infrastructure to power growth responsibly.',
            content: {
                intro: 'Powering AI Growth Through Sustainable & Clean Energy',
                sub_sections: [
                    {
                        title: 'Reliable Power Infrastructure',
                        icon: Server,
                        text: 'Ensuring stable and high-capacity energy supply for data centres and compute facilities to support future AI expansion.'
                    },
                    {
                        title: 'Clean & Renewable Energy',
                        icon: Leaf,
                        text: 'Promoting renewable energy adoption in AI infrastructure to align digital growth with sustainability and climate goals.'
                    }
                ],
                stats: [
                    { value: '50%', label: 'Renewable Energy by 2029' },
                    { value: '65%', label: 'Renewable Energy by 2036' }
                ]
            }
        },
        {
            id: 'policy',
            label: 'POLICY ENVIRONMENT',
            title: 'Safe & Trusted AI',
            icon: Scale,
            color: 'orange',
            description: 'A comprehensive, forward-looking policy framework is essential for innovation to thrive while protecting citizens’ rights and ensuring ethical AI use.',
            content: {
                intro: 'Enabling Safe, Trusted & Innovation-Friendly AI',
                sub_sections: [
                    {
                        title: 'Ethical Use of AI',
                        icon: Scale,
                        text: 'Clear guidelines focusing on fairness, transparency, and accountability to ensure AI serves public interest responsibly.'
                    },
                    {
                        title: 'Data Governance & Privacy',
                        icon: Database,
                        text: 'Prioritizing strong data governance aligned with national frameworks like the DPDP Act 2023 for secure and responsible data use.'
                    },
                    {
                        title: 'Cyber Security',
                        icon: ShieldCheck,
                        text: 'Strengthening AI-powered cyber defences and integrating best practices to protect digital infrastructure against emerging threats.'
                    },
                    {
                        title: 'Ease of Research',
                        icon: Lightbulb, // Corrected from lightbulb to Lightbulb
                        text: 'Streamlining IP and legal clearances to encourage experimentation and faster translation of research into applications.'
                    }
                ]
            }
        }
    ];

    const getActivePillar = () => pillars.find(p => p.id === activeTab);

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50/50 to-transparent dark:from-orange-900/10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300 mb-4 px-4 py-2">
                        Strategic Pillars
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                        Key Focus <span className="text-orange-600 dark:text-orange-500">Areas</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Four foundational pillars driving the Odisha AI Mission towards a future of innovation, inclusion, and sustainability.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left Side: Navigation Tabs */}
                    <div className="lg:col-span-4 space-y-4">
                        {pillars.map((pillar) => {
                            const Icon = pillar.icon;
                            const isActive = activeTab === pillar.id;

                            return (
                                <button
                                    key={pillar.id}
                                    onClick={() => setActiveTab(pillar.id)}
                                    className={`w-full text-left p-6 rounded-xl transition-all duration-300 border-2 group relative overflow-hidden ${isActive
                                        ? 'bg-white dark:bg-gray-800 border-orange-500 shadow-xl scale-105 z-10'
                                        : 'bg-white/50 dark:bg-gray-800/50 border-transparent hover:bg-white hover:border-orange-200 dark:hover:border-gray-700'
                                        }`}
                                >
                                    {isActive && (
                                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-orange-500 to-pink-500"></div>
                                    )}

                                    <div className="flex items-center space-x-4">
                                        <div className={`p-3 rounded-lg ${isActive ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' : 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400'}`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className={`font-bold text-lg ${isActive ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                                                {pillar.label}
                                            </h4>
                                            <p className={`text-sm mt-1 ${isActive ? 'text-gray-600 dark:text-gray-300' : 'text-gray-500 dark:text-gray-500'}`}>
                                                {pillar.title}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Side: Content Area */}
                    <div className="lg:col-span-8">
                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-gray-700 min-h-[600px] flex flex-col justify-between relative overflow-hidden animate-in fade-in slide-in-from-right-8 duration-500" key={activeTab}>

                            {/* Background Decor in card */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-50 to-transparent dark:from-orange-900/20 rounded-bl-full opacity-50"></div>

                            <div>
                                {/* Header */}
                                <div className="mb-8">
                                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                                        {getActivePillar().content.intro}
                                    </h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed border-l-4 border-orange-500 pl-4">
                                        {getActivePillar().description}
                                    </p>
                                </div>

                                {/* Sub Sections Grid */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    {getActivePillar().content.sub_sections.map((sub, idx) => (
                                        <div key={idx} className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-5 hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-colors border border-transparent hover:border-orange-100 dark:hover:border-orange-800/30">
                                            <div className="flex items-start mb-3">
                                                {sub.icon && <sub.icon className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-1 mr-3" />}
                                                <h4 className="font-bold text-gray-900 dark:text-white">{sub.title}</h4>
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                                {sub.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Feature/Stats */}
                                {getActivePillar().content.highlight && (
                                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white relative overflow-hidden">
                                        <div className="relative z-10 flex items-start gap-4">
                                            <Globe className="w-8 h-8 mt-1 flex-shrink-0 text-blue-200" />
                                            <div>
                                                <h5 className="font-bold text-lg mb-1">{getActivePillar().content.highlight.title}</h5>
                                                <p className="opacity-90">{getActivePillar().content.highlight.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {getActivePillar().content.stats && (
                                    <div className="grid grid-cols-2 gap-4">
                                        {getActivePillar().content.stats.map((stat, idx) => (
                                            <div key={idx} className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 text-center border border-green-100 dark:border-green-800">
                                                <div className="text-3xl font-black text-green-600 dark:text-green-400 mb-1">{stat.value}</div>
                                                <div className="text-sm font-medium text-gray-600 dark:text-gray-300">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700 flex justify-end">
                                <button className="text-orange-600 dark:text-orange-400 font-semibold flex items-center hover:translate-x-1 transition-transform">
                                    Learn more about {getActivePillar().label} <ArrowRight className="ml-2 w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StrategicPillars;
