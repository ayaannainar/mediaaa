import React, { useState } from 'react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'video', 'photo', 'branding'];

  const projects = [
    {
      id: 1,
      title: 'Luxury Brand Campaign',
      category: 'video',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
      description: 'High-end fashion brand video campaign'
    },
    {
      id: 2,
      title: 'Corporate Identity',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
      description: 'Complete brand identity redesign'
    },
    {
      id: 3,
      title: 'Product Photography',
      category: 'photo',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
      description: 'E-commerce product photography'
    },
    {
      id: 4,
      title: 'Restaurant Promo',
      category: 'video',
      image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=800&q=80',
      description: 'Social media promotional video'
    },
    {
      id: 5,
      title: 'Corporate Portraits',
      category: 'photo',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
      description: 'Executive team photography'
    },
    {
      id: 6,
      title: 'Brand Guidelines',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive brand guide'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold mb-8 text-center">Our Portfolio</h1>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Explore our latest works and creative projects
        </p>

        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full capitalize transition ${
                activeCategory === category
                  ? 'bg-white text-black'
                  : 'text-white bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Create Something Amazing Together</h2>
          <p className="text-xl text-gray-400 mb-12">
            Ready to start your next project? We're here to help bring your vision to life.
          </p>
          <a
            href="https://wa.me/971502904419"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition"
          >
            <span>Start Your Project</span>
          </a>
        </div>
      </div>
    </div>
  );
}