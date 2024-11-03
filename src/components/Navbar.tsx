import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">NAINAR MEDIA</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
            <Link to="/services" className="text-gray-300 hover:text-white transition">Services</Link>
            <Link to="/portfolio" className="text-gray-300 hover:text-white transition">Portfolio</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition">Contact</Link>
            <a 
              href="https://wa.me/971502904419" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-green-600 transition"
            >
              <span>WhatsApp</span>
              <ChevronRight size={16} />
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-white transition">Home</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-300 hover:text-white transition">Services</Link>
            <Link to="/portfolio" className="block px-3 py-2 text-gray-300 hover:text-white transition">Portfolio</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-300 hover:text-white transition">Contact</Link>
            <a 
              href="https://wa.me/971502904419" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-3 py-2 text-green-500 hover:text-green-400 transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}