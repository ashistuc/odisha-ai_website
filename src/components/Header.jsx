import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  const navItems = [
    { name: 'Home', section: 'main-content' },
    { name: 'Targets & Vision', section: 'targets-section' },
    { name: 'Implementation', section: 'implementation-section' },
    { name: 'AI Training', section: 'skilling-section' },
    { name: 'AI Startups', section: 'startups-section' },
    { name: 'Tenders', section: 'tenders-section' },
    { name: 'Event Gallery', section: 'gallery-section' },
    { name: 'FAQ', section: 'faq-section' }
  ];

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-stack-header shadow-sm transition-colors duration-300 border-t-4 border-t-orange-500 header-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section with Government Logos */}
          <div className="flex items-center space-x-4">
            <button onClick={() => scrollToSection('main-content')} className="flex items-center space-x-3 group">
              <img 
                src="https://customer-assets.emergentagent.com/job_empower-odisha-ai/artifacts/6m3a87vb_WhatsApp%20Image%202025-11-22%20at%2000.46.35.jpeg" 
                alt="Odisha AI Mission Logo"
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Odisha AI Mission</h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">Government of Odisha</p>
              </div>
            </button>
            
            {/* Partner Logos */}
            <div className="hidden xl:flex items-center space-x-2 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
              <div className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">E&IT Dept</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">OCAC</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">IndiaAI</div>
            </div>
          </div>

          {/* Hamburger Menu Button - Always visible */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 dark:text-white hover:text-orange-600 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Hamburger Menu - Full Screen */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white dark:bg-gray-900 z-stack-modal overflow-y-auto animate-in slide-in-from-top duration-300">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Navigation</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-gray-700 dark:text-white hover:text-orange-600"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>
              <nav className="space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.section)}
                    className="w-full text-left px-6 py-4 text-lg text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-800 hover:text-orange-600 dark:hover:text-orange-400 font-medium rounded-lg transition-all"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;