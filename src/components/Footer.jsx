import { Cloud, Linkedin, Twitter, Github, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Cloud size={32} className="text-yellow-400" />
              <span className="text-2xl font-bold">
                <span className="text-white">Figuring</span>
                <span className="text-yellow-400"> Services</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Empowering individuals and organizations with cutting-edge Cloud and DevOps expertise through courses, books, and consulting.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-200"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Cloud Courses
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  DevOps Books
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Consulting
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Corporate Training
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Figuring Services. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Crafted with <span className="text-yellow-400">cloud</span> excellence by Pravin Mishra
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
