import React, { useState } from 'react';
import { ShoppingCart, Menu, X, ChevronRight } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-100 z-[1000] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-extrabold tracking-tight text-indigo-600 cursor-pointer">
              DigiTools
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[15px] font-medium text-gray-600 hover:text-indigo-600 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3 sm:space-x-6">
            {/* Cart Icon - Always Visible */}
            <button className="relative p-2 text-gray-600 hover:text-indigo-600 transition-colors">
              <ShoppingCart size={22} />
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white">
                3
              </span>
            </button>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="text-[15px] font-semibold text-gray-700 hover:text-indigo-600 transition-colors cursor-pointer">
                Login
              </button>
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold text-[15px] hover:shadow-lg hover:opacity-95 transition-all active:scale-95">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay & Content */}
      <div
        className={`lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-4 pb-8 space-y-2 bg-white">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex justify-between items-center px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all"
            >
              {link.name}
              <ChevronRight size={16} className="text-gray-400" />
            </a>
          ))}
          
          <div className="pt-6 flex flex-col space-y-3 px-4">
            <button className="w-full py-3 text-center font-semibold text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50">
              Login
            </button>
            <button className="w-full py-3 text-center font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default App;