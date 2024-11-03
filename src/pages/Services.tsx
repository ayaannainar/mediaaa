import React from 'react';
import { Video, Camera, Globe, Megaphone, Palette, Code, BarChart, Mail, Target, Search, Instagram, Smartphone } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Video,
      title: 'Video Production',
      description: 'Professional video content creation including commercials, corporate videos, and social media content.',
      features: ['4K Video Production', 'Aerial Cinematography', 'Post-Production', 'Motion Graphics']
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'High-quality photography services for products, events, and corporate needs.',
      features: ['Product Photography', 'Corporate Events', 'Architectural Shots', 'Lifestyle Photography']
    },
    {
      icon: Instagram,
      title: 'Social Media Management',
      description: 'Complete social media management and content creation services.',
      features: ['Content Calendar', 'Community Management', 'Analytics Reports', 'Engagement Strategy']
    },
    {
      icon: Search,
      title: 'SEO Services',
      description: 'Comprehensive SEO solutions to improve your online visibility.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building']
    },
    {
      icon: Target,
      title: 'PPC Advertising',
      description: 'Results-driven paid advertising campaigns across multiple platforms.',
      features: ['Google Ads', 'Social Media Ads', 'Display Advertising', 'Remarketing']
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Strategic email marketing campaigns that convert.',
      features: ['Campaign Strategy', 'Newsletter Design', 'Automation', 'Performance Analytics']
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights and comprehensive performance reporting.',
      features: ['Custom Dashboards', 'ROI Tracking', 'Competitor Analysis', 'Monthly Reports']
    },
    {
      icon: Smartphone,
      title: 'Content Creation',
      description: 'Engaging content creation for all digital platforms.',
      features: ['Blog Writing', 'Social Media Content', 'Copywriting', 'Visual Content']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <div className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-8 text-center">Our Services</h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Comprehensive digital solutions to elevate your brand and drive business growth
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-800/70 transition">
                <service.icon size={40} className="text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-gray-400 mb-12">
            Contact us today to discuss your project and discover how we can help you achieve your goals.
          </p>
          <a
            href="https://wa.me/971502904419"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition"
          >
            <span>Discuss Your Project on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}