import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';

const SocialMediaSection = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/ETDeptOdisha',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800',
      description: 'Follow us on Facebook for latest updates and announcements'
    },
    {
      name: 'Twitter / X',
      icon: Twitter,
      url: 'https://twitter.com/odisha_eit',
      color: 'from-gray-800 to-black',
      hoverColor: 'hover:from-black hover:to-gray-900',
      description: 'Get real-time updates and engage with us on X'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/etdeptodisha',
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-600 hover:to-purple-700',
      description: 'Explore visual stories and behind-the-scenes content'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com/@odishaeit',
      color: 'from-red-600 to-red-700',
      hoverColor: 'hover:from-red-700 hover:to-red-800',
      description: 'Watch informative videos and event coverage'
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Connect With Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay connected with Electronics & IT Department, Government of Odisha
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full p-6 hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-orange-200 relative overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg mx-auto`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 text-center group-hover:text-orange-600 transition-colors duration-300">
                      {social.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 text-center mb-4">
                      {social.description}
                    </p>

                    {/* Follow Button */}
                    <div className={`mt-4 py-2 px-4 bg-gradient-to-r ${social.color} ${social.hoverColor} text-white rounded-lg text-center font-medium transition-all duration-300 flex items-center justify-center space-x-2 group/btn`}>
                      <span>Follow Us</span>
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </a>
            );
          })}
        </div>

        {/* Official Account Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Official accounts of <span className="font-semibold text-orange-600">Electronics & IT Department, Government of Odisha</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaSection;