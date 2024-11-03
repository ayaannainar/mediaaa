import React from 'react';
import { ArrowRight, Play, Zap, Globe, Video, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="h-screen flex items-center relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-50"
          style={{ filter: 'brightness(0.3)' }}
        >
          <source src="https://cdn.coverr.co/videos/coverr-computer-coding-on-a-laptop-1559/1080p.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Creating Digital
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"> Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
              We transform ideas into compelling digital experiences through innovative content creation and strategic marketing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-black px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-gray-200 transition"
              >
                <span>Start Project</span>
                <ArrowRight size={20} />
              </Link>
              <a
                href="https://wa.me/971502904419"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-green-600 transition"
              >
                <span>WhatsApp Us</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Video, title: 'Video Production', desc: 'Cinematic storytelling that captures attention' },
              { icon: Camera, title: 'Photography', desc: 'Professional photography for your brand' },
              { icon: Globe, title: 'Digital Marketing', desc: 'Strategic campaigns that drive results' },
            ].map((service, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition">
                <service.icon size={40} className="mb-4 text-blue-400" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Create Something Amazing?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with cutting-edge content creation and marketing strategies.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-black px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-gray-200 transition"
            >
              <span>Get Started</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}