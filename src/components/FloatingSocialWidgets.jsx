import React, { useState } from 'react';
import { MessageCircle, X, Facebook, Twitter, Instagram, Linkedin, Youtube, Share2 } from 'lucide-react';

const FloatingSocialWidgets = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/odisha-ai-mission', color: 'bg-blue-600 hover:bg-blue-700' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/odisha-ai', color: 'bg-sky-500 hover:bg-sky-600' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/odisha-ai', color: 'bg-pink-600 hover:bg-pink-700' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/odisha-ai', color: 'bg-blue-700 hover:bg-blue-800' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/@odisha-ai', color: 'bg-red-600 hover:bg-red-700' },
  ];

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-stack-floating flex flex-col items-center space-y-3">
      {/* Social Icons - Show when expanded */}
      {isExpanded && (
        <div className="flex flex-col space-y-3 animate-in slide-in-from-left duration-300">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 ${social.color} text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/50 animate-in zoom-in`}
                style={{ animationDelay: `${index * 50}ms` }}
                aria-label={`Visit our ${social.name} page`}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 ${
          isExpanded 
            ? 'bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700' 
            : 'bg-gradient-to-br from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700'
        } text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-orange-300`}
        aria-label={isExpanded ? 'Close social menu' : 'Open social menu'}
        aria-expanded={isExpanded}
      >
        {isExpanded ? (
          <X className="w-6 h-6 transition-transform duration-300" />
        ) : (
          <Share2 className="w-6 h-6 transition-transform duration-300" />
        )}
      </button>

    </div>
  );
};

export default FloatingSocialWidgets;
