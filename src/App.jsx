import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Products', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'FAQ', href: '#' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-3xl font-bold text-[#7C3AED]">DigiTools</span>
          </div>

          
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-purple-600 text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-600 hover:text-purple-600 transition-colors">
              <ShoppingCart size={20} />
            </button>
            <button className="text-gray-700 font-medium text-sm hover:text-purple-600 transition-colors">
              Login
            </button>
            <button className="bg-gradient-to-r from-[#7C3AED] to-[#9333EA] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-md">
              Get Started
            </button>
          </div>

          
          <div className="lg:hidden flex items-center space-x-4">
            <button className="text-gray-600 md:hidden">
              <ShoppingCart size={20} />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-purple-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <button className="w-full text-center py-2 text-gray-700 font-medium border border-gray-200 rounded-lg">
                Login
              </button>
              <button className="w-full bg-gradient-to-r from-[#7C3AED] to-[#9333EA] text-white py-3 rounded-lg font-semibold">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default App;