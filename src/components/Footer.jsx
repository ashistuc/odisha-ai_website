import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Linkedin, Youtube } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'AI Use Cases', path: '/use-cases' },
        { name: 'Ecosystem', path: '/ecosystem' },
        { name: 'Opportunities', path: '/opportunities' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'AI Policy 2025', path: '/resources/policy' },
        { name: 'Guidelines', path: '/resources/guidelines' },
        { name: 'Publications', path: '/resources/publications' },
        { name: 'FAQ', path: '/resources/faq' }
      ]
    },
    {
      title: 'Skilling',
      links: [
        { name: 'AI in Schools', path: '/skilling/schools' },
        { name: 'Higher Education', path: '/skilling/higher-ed' },
        { name: 'Workforce Development', path: '/skilling/workforce' },
        { name: 'Odisha for AI', path: '/skilling/odisha-for-ai' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Use', path: '/terms' },
        { name: 'Accessibility', path: '/accessibility' },
        { name: 'Sitemap', path: '/sitemap' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Logo className="w-12 h-12" />
              <div>
                <h3 className="text-white font-bold text-lg">Odisha AI Mission</h3>
                <p className="text-xs text-gray-400">Govt. of Odisha</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Empowering Innovation, Inclusion, and Intelligence through responsible AI adoption.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-orange-500 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h5 className="text-white font-medium mb-1">Address</h5>
                <p className="text-sm text-gray-400">OCAC, Electronics Niketan, Bhubaneswar, Odisha - 751012</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h5 className="text-white font-medium mb-1">Email</h5>
                <p className="text-sm text-gray-400">ai-mission@odisha.gov.in</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h5 className="text-white font-medium mb-1">Phone</h5>
                <p className="text-sm text-gray-400">+91-674-2535201</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Visitor Counter */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2025 Odisha AI Mission. All rights reserved. Powered by OCAC | Electronics & IT Department, Government of Odisha
            </p>
            <div className="flex items-center space-x-6">
              {/* Visitor Counter */}
              <div className="flex items-center space-x-4 px-4 py-2 bg-gray-800 rounded-lg">
                <div className="text-center">
                  <div className="text-xs text-gray-400">Total Visitors</div>
                  <div className="text-lg font-bold text-orange-500">
                    {(() => {
                      if (typeof window !== 'undefined') {
                        return parseInt(localStorage.getItem('totalVisitors') || '15247').toLocaleString('en-IN');
                      }
                      return '15,247';
                    })()}
                  </div>
                </div>
                <div className="w-px h-8 bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-xs text-gray-400">Today</div>
                  <div className="text-base font-semibold text-green-500">
                    {(() => {
                      if (typeof window !== 'undefined') {
                        return parseInt(localStorage.getItem('todayVisitors') || '342').toLocaleString('en-IN');
                      }
                      return '342';
                    })()}
                  </div>
                </div>
              </div>
              <span className="text-sm text-gray-400">Made with ❤️ for Odisha</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;