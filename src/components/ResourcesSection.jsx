import React, { useState } from 'react';
import { Newspaper, GraduationCap, Database, ArrowRight, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import AINewsInteractive from './AINewsInteractive';

const ResourcesSection = ({ aiNews }) => {
    const [activeDialog, setActiveDialog] = useState(null);

    const learningResources = [
        { title: "Odisha AI Portal", url: "https://ai.odisha.gov.in/", description: "Official AI portal of the Government of Odisha." },
        { title: "AI For All", url: "https://ai-for-all.in/", description: "Self-learning programme for everyone in India." },
        { title: "AI for Everyone", url: "https://www.deeplearning.ai/courses/ai-for-everyone/", description: "Introductory course by deeplearning.ai to understand AI." },
        { title: "Elements of AI", url: "https://www.elementsofai.com/", description: "Free online course to demystify AI." },
        { title: "Google AI", url: "https://grow.google/ai/", description: "Learn to use AI to make things faster and smarter." },
        { title: "IndiaAI Learning", url: "https://indiaai.gov.in/learning", description: "Comprehensive learning resources from IndiaAI." },
    ];

    const datasetResources = [
        {
            category: "OVA Datasets on AIKosh",
            items: [
                { title: "OVA Odia Poetry Dataset", url: "https://aikosh.indiaai.gov.in/home/datasets/details/ova_odia_poetry_dataset.html" },
                { title: "OVA Odia Prose Literature Dataset 1", url: "https://aikosh.indiaai.gov.in/home/datasets/details/ova_odia_prose_literature_dataset_1.html" },
                { title: "OVA Odia Literature Dataset v1.30", url: "https://aikosh.indiaai.gov.in/home/datasets/details/ova_odia_literature_dataset_v1_30.html" }
            ]
        },
        {
            category: "Odisha Datasets on OGD",
            items: [
                { title: "Ministry/Department Odisha Datasets", url: "https://www.data.gov.in/ministrydepartment/Odisha" }
            ]
        }
    ];

    const cards = [
        {
            id: 'news',
            title: 'AI News and Blogs',
            icon: Newspaper,
            description: 'Stay updated with the latest trends, breakthroughs, and announcements in the world of Artificial Intelligence.',
            color: 'from-blue-500 to-cyan-500',
            delay: '0'
        },
        {
            id: 'learning',
            title: 'Learning',
            icon: GraduationCap,
            description: 'Access world-class courses, tutorials, and materials to start or advance your journey in AI.',
            color: 'from-purple-500 to-pink-500',
            delay: '100'
        },
        {
            id: 'datasets',
            title: 'Datasets',
            icon: Database,
            description: 'Explore a rich repository of datasets including regional language data for research and development.',
            color: 'from-orange-500 to-red-500',
            delay: '200'
        }
    ];

    const renderDialogContent = () => {
        switch (activeDialog) {
            case 'news':
                return (
                    <div className="h-[700px] w-full">
                        <AINewsInteractive news={aiNews} />
                    </div>
                );
            case 'learning':
                return (
                    <div className="grid gap-6 md:grid-cols-2 p-4">
                        {learningResources.map((resource, idx) => (
                            <a
                                key={idx}
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-purple-300 transition-all duration-300"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors">
                                        <GraduationCap className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 mb-2">
                                    {resource.title}
                                </h3>
                                <p className="text-sm text-gray-600 line-clamp-2">
                                    {resource.description}
                                </p>
                            </a>
                        ))}
                    </div>
                );
            case 'datasets':
                return (
                    <div className="space-y-8 p-4">
                        {datasetResources.map((section, idx) => (
                            <div key={idx} className="space-y-4">
                                <h3 className="text-lg font-bold flex items-center gap-2 text-gray-900 border-b pb-2">
                                    <Database className="w-5 h-5 text-orange-600" />
                                    {section.category}
                                </h3>
                                <div className="grid gap-4">
                                    {section.items.map((item, itemIdx) => (
                                        <a
                                            key={itemIdx}
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-orange-50 hover:text-orange-700 transition-colors group"
                                        >
                                            <span className="font-medium text-gray-700 group-hover:text-orange-900">{item.title}</span>
                                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-orange-600" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    const getDialogTitle = () => {
        switch (activeDialog) {
            case 'news': return 'AI News & Updates';
            case 'learning': return 'Learning Resources';
            case 'datasets': return 'Open Datasets';
            default: return '';
        }
    };

    return (
        <div>
            <div className="text-center mb-16">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4 px-4 py-2">
                    Knowledge Hub
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="text-gray-900">RESOURCES</span>
                </h2>
                <p className="text-xl text-gray-700 font-medium max-w-4xl mx-auto mb-3">
                    Comprehensive tools and information to empower your AI journey
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        className="relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full"
                        onClick={() => setActiveDialog(card.id)}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                        <div className={`h-1.5 bg-gradient-to-r ${card.color}`} />

                        <CardContent className="p-8 flex flex-col items-center text-center h-full">
                            <div className={`mb-6 p-4 rounded-full bg-gradient-to-br ${card.color} bg-opacity-10 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <card.icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all">
                                {card.title}
                            </h3>

                            <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                                {card.description}
                            </p>

                            <Button variant="ghost" className="group-hover:translate-x-1 transition-transform p-0 hover:bg-transparent font-semibold">
                                Explore <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Dialog open={!!activeDialog} onOpenChange={() => setActiveDialog(null)}>
                <DialogContent className="max-w-5xl h-[85vh] flex flex-col p-0 overflow-hidden">
                    <DialogHeader className="p-6 pb-2 border-b bg-white shrink-0">
                        <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                            {activeDialog === 'news' && <Newspaper className="w-6 h-6 text-blue-600" />}
                            {activeDialog === 'learning' && <GraduationCap className="w-6 h-6 text-purple-600" />}
                            {activeDialog === 'datasets' && <Database className="w-6 h-6 text-orange-600" />}
                            {getDialogTitle()}
                        </DialogTitle>
                        <DialogDescription>
                            Explore detailed information and external resources.
                        </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="flex-grow bg-gray-50/50">
                        <div className="p-2">
                            {renderDialogContent()}
                        </div>
                    </ScrollArea>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ResourcesSection;
