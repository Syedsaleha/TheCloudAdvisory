import { Cloud, Linkedin, Twitter, Github, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* BRAND + DESCRIPTION */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2">
              <Cloud size={32} className="text-yellow-400" />

              {/* FIXED BRAND NAME */}
              <h2 className="text-2xl font-bold flex items-center">
                <span className="text-white">TheCloud</span>
                <span className="text-yellow-400">Advisory</span>
              </h2>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6 max-w-md mt-4">
              Empowering individuals and organizations with cutting-edge Cloud and DevOps expertise
              through courses, books, and consulting.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex space-x-4">

              {/* LinkedIn */}
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center
                           hover:bg-yellow-400 hover:text-black transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>

              {/* Twitter */}
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center
                           hover:bg-yellow-400 hover:text-black transition-all duration-200"
              >
                <Twitter size={20} />
              </a>

              {/* GitHub */}
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center
                           hover:bg-yellow-400 hover:text-black transition-all duration-200"
              >
                <Github size={20} />
              </a>

              {/* Email */}
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center
                           hover:bg-yellow-400 hover:text-black transition-all duration-200"
              >
                <Mail size={20} />
              </a>

              {/* INSTAGRAM */}
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center
                           hover:bg-yellow-400 hover:text-black transition-all duration-200"
              >
                <Instagram size={20} />
              </a>

              {/* UDEMY - custom SVG icon */}
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center
                           hover:bg-yellow-400 hover:text-black transition-all duration-200"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L3 7l9 5 9-5-9-5zm9 7l-9 5-9-5v6l9 5 9-5V9z" />
                </svg>
              </a>

            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-yellow-400">Cloud Courses</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-yellow-400">DevOps Books</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-yellow-400">Consulting</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-yellow-400">Corporate Training</a></li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-yellow-400">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-yellow-400">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
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
