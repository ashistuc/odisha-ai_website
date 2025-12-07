import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { detailedProjects, partners, innovationCentres, quickLinks, aiNews, aiTools, policyTargets, faqs, aiTrainingPrograms, heroTargets2029, heroTargets2036, actsNotifications, tenders, eventGallery, aiStartups, heroSlides, contactInfo } from '../mock';
import InnovationCentres from '../components/InnovationCentres';
import QuickLinks from '../components/QuickLinks';
import AINewsInteractive from '../components/AINewsInteractive';
import AIToolsSection from '../components/AIToolsSection';
import LoadingScreen from '../components/LoadingScreen';
import FeaturedProjectsZoom from '../components/FeaturedProjectsZoom';
import PolicyTargetsCarousel from '../components/PolicyTargetsCarousel';
import FAQSection from '../components/FAQSection';
import AIProjectIdeaForm from '../components/AIProjectIdeaForm';
import ResourcesSection from '../components/ResourcesSection';
import PartnersScrolling from '../components/PartnersScrolling';
import InteractivePDFReader from '../components/InteractivePDFReader';
import ActsNotificationsSection from '../components/ActsNotificationsSection';
import TendersSection from '../components/TendersSection';
import IntroQuotesSequence from '../components/IntroQuotesSequence';
import ImplementationPhaseSection from '../components/ImplementationPhaseSection';
import EventGallery from '../components/EventGallery';
import FloatingSocialWidgets from '../components/FloatingSocialWidgets';
import AIStartupsSection from '../components/AIStartupsSection';
import AIChatbot from '../components/AIChatbot';
import AIMascot from '../components/AIMAscot';
import EnhancedHeroCarousel from '../components/EnhancedHeroCarousel';
import ContactUsSection from '../components/ContactUsSection';
import AboutMissionSection from '../components/AboutMissionSection';
import StrategicPillars from '../components/StrategicPillars';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showIntroQuotes, setShowIntroQuotes] = useState(false);
  const [isPDFReaderOpen, setIsPDFReaderOpen] = useState(false);

  const handleIntroComplete = () => {
    setShowIntroQuotes(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <LoadingScreen onLoadComplete={() => setIsLoading(false)} />
      {showIntroQuotes && <IntroQuotesSequence onComplete={handleIntroComplete} />}
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 scroll-smooth">
        {/* Hero Carousel Section */}
        <section id="main-content" className="relative section-transition">
          <EnhancedHeroCarousel
            slides={heroSlides}
            onReadPolicy={() => setIsPDFReaderOpen(true)}
          />
        </section>

        {/* About the Mission Section */}
        <AboutMissionSection />

        {/* Strategic Pillars Section */}
        <StrategicPillars />

        {/* Policy Targets Carousel 
      <section id="targets-section" className="py-20 bg-white dark:bg-gray-900 section-transition relative overflow-hidden">
       
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] dark:opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <PolicyTargetsCarousel policyTargets={policyTargets} />
        </div>
      </section>
*/}
        {/* Featured AI Projects 
        <section id="projects-section" className="py-20 bg-orange-50 dark:bg-gray-800 section-transition relative overflow-hidden">
        
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80')] bg-cover bg-center bg-fixed"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300 mb-4 px-4 py-2">
                Featured Projects
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured AI Projects in <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">Odisha</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Transforming governance and citizen services through innovative AI implementations
              </p>
            </div>
            <FeaturedProjectsZoom projects={detailedProjects} />
          </div>
        </section>
*/}
        {/* Resources Section */}
        <section id="resources-section" className="py-20 bg-white dark:bg-gray-900 section-transition relative overflow-hidden">
          {/* Transparent background */}
          <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80')] bg-cover bg-center bg-fixed"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ">
            <ResourcesSection aiNews={aiNews} />
          </div>
        </section>

        {/* Implementation Phase Section 
        <section id="implementation-section" className="py-20 bg-orange-50 dark:bg-gray-800 section-transition relative overflow-hidden">
        
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-orange-100 via-transparent to-blue-100"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" >
            <ImplementationPhaseSection />
          </div>
        </section>
*/}
        {/* Innovation Centres 
        <section id="innovation-section" className="py-20 bg-white dark:bg-gray-900 section-transition relative overflow-hidden">
         
          <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')] bg-cover bg-center bg-fixed"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ">
            <InnovationCentres centres={innovationCentres} />
          </div>
        </section>
*/}
        {/* AI Startups Section 
        <section id="startups-section" className="py-20 bg-orange-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AIStartupsSection startups={aiStartups} />
          </div>
        </section>
*/}
        {/* Partners Section */}
        <section id="partners-section" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PartnersScrolling partners={partners} />
          </div>
        </section>

        {/* Acts & Notifications Section */}
        <section id="policy-section" className="py-20 bg-orange-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ActsNotificationsSection items={actsNotifications} />
          </div>
        </section>

        {/* Tenders Section 
        <section id="tenders-section" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TendersSection tenders={tenders} />
          </div>
        </section>
*/}
        {/* Event Gallery Section */}
        <section id="gallery-section" className="py-20 bg-orange-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <EventGallery events={eventGallery} />
          </div>
        </section>

        {/* AI News Section
        <section id="news-section" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300 mb-4 px-4 py-2">
                Latest News
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                AI News & <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">Updates</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Stay updated with the latest developments in AI ecosystem
              </p>
            </div>
            <AINewsInteractive news={aiNews} />
          </div>
        </section>
 */}
        {/* AI Tools Section 
        <section id="tools-section" className="py-20 bg-orange-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300 mb-4 px-4 py-2">
                AI Resources
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                AI Tools & <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">Resources</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Explore powerful AI tools and platforms available for developers and researchers
              </p>
            </div>
            <AIToolsSection tools={aiTools} />
          </div>
        </section>
*/}
        {/* Quick Links Section 
        <section id="links-section" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300 mb-4 px-4 py-2">
                Quick Access
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Important <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">Links</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Direct access to government portals and partner organizations
              </p>
            </div>
            <QuickLinks links={quickLinks} />
          </div>
        </section>
*/}
        {/* AI Project Idea Form */}
        <section id="submit-idea-section" className="py-20 bg-orange-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AIProjectIdeaForm />
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq-section" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact-section" className="py-20 bg-orange-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactUsSection contactInfo={contactInfo} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Join Odisha's AI Revolution?
            </h2>
            <p className="text-xl text-white mb-8 opacity-90">
              Be part of the transformation. Collaborate, Innovate, and Lead with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 shadow-lg">
                Join the Ecosystem
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Interactive PDF Reader */}
      <InteractivePDFReader
        isOpen={isPDFReaderOpen}
        onClose={() => setIsPDFReaderOpen(false)}
        pdfUrl="/Odisha%20AI%20Policy-2025.pdf"
      />

      {/* Floating Social Widgets */}
      <FloatingSocialWidgets />

      {/* AI Mascot Navigator */}
      <AIMascot />

      {/* AI Chatbot */}
      <AIChatbot />
    </>
  );
};

export default Home;
