import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-white">TheCloud</span>
              <span className="text-yellow-400"> Advisory</span>
            </span>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                University
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                Blog
              </button>
                 <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                Book
              </button>
                 <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/50"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-gray-900 rounded-md transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-gray-900 rounded-md transition-colors"
            >
              University
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-gray-900 rounded-md transition-colors"
            >
              Blog
            </button>
              <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-gray-900 rounded-md transition-colors"
            >
              Book
            </button>
              <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-gray-900 rounded-md transition-colors"
            >
              Courses
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 bg-yellow-400 text-black rounded-md font-semibold hover:bg-yellow-500 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
