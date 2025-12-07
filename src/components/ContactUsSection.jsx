import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const ContactUsSection = ({ contactInfo }) => {
  return (
    <div>
      {/* Header */}
      <div className="text-center mb-12">
        <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 mb-4 px-4 py-2">
          <MapPin className="w-4 h-4 mr-2" />
          Get in Touch
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Contact <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">Us</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Have questions about Odisha AI Mission? We're here to help!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card className="border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {contactInfo.address}
              </h3>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">Address</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {contactInfo.fullAddress}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">Phone</p>
                  <a href={`tel:${contactInfo.phone}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">Office Hours</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Monday - Friday: 10:00 AM - 5:30 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <div>
          <Card className="border-2 border-gray-200 dark:border-gray-700 h-full overflow-hidden">
            <CardContent className="p-0 h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.2!2d85.8245!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7f0c0c0c0c0%3A0x1234567890!2sOCAC%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="OCAC Bhubaneswar Location"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
