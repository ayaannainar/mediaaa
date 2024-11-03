import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    services: [] as string[],
    budget: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically integrate with your email service
    // For now, we'll log the data that would be sent
    const emailData = {
      to: 'umerafroz@nainarmedia.com',
      subject: `New Project Inquiry from ${formData.name}`,
      ...formData
    };

    console.log('Sending email:', emailData);
    // Add your email service integration here
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      services: [],
      budget: '',
      message: ''
    });

    alert('Thank you for your message. We will get back to you soon!');
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const budgetRanges = [
    '2,000 - 4,000 AED',
    '4,000 - 6,000 AED',
    '6,000 - 8,000 AED',
    '8,000 - 10,000 AED',
    '10,000+ AED'
  ];

  const services = [
    'Social Media Management',
    'Content Creation',
    'SEO Optimization',
    'Email Marketing',
    'PPC Advertising',
    'Brand Strategy',
    'Video Production',
    'Photography'
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h1 className="text-5xl font-bold mb-8">Get in Touch</h1>
            <p className="text-xl text-gray-300 mb-12">
              Ready to start your next project? Contact us today and let's create something amazing together.
            </p>

            <div className="space-y-8">
              <a
                href="https://wa.me/971502904419"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-300 hover:text-white transition"
              >
                <div className="bg-green-500 p-3 rounded-full">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold">WhatsApp</h3>
                  <p>+971 50 290 4419</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 text-gray-300">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p>umerafroz@nainarmedia.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-gray-300">
                <div className="bg-purple-500 p-3 rounded-full">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p>Dubai, United Arab Emirates</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Services Required</label>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service, index) => (
                    <label key={index} className="flex items-center space-x-2 text-gray-300">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        className="rounded border-gray-600 text-blue-500 focus:ring-blue-500"
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Budget Range</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                >
                  <option value="">Select your budget range</option>
                  {budgetRanges.map((range, index) => (
                    <option key={index} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none h-32"
                  placeholder="Tell us about your project requirements"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-600 transition"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}