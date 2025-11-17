import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            TheCloud<span className="text-yellow-400">Advisory</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button className="nav-btn" onClick={() => scrollToSection("home")}>Home</button>

            <a href="https://your-university-link.com" target="_blank" className="nav-btn">
              University
            </a>

            <button className="nav-btn" onClick={() => scrollToSection("books")}>Books</button>

            <a href="https://your-blog-link.com" target="_blank" className="nav-btn">
              Blog
            </a>

            <button className="nav-btn" onClick={() => scrollToSection("courses")}>Courses</button>

            <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">
              Contact
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-gray-300" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-4 py-4 space-y-3">

          <button className="mobile-btn" onClick={() => scrollToSection("home")}>Home</button>

          <a href="https://your-university-link.com" target="_blank" className="mobile-btn">
            University
          </a>

          <button className="mobile-btn" onClick={() => scrollToSection("books")}>Books</button>

          <a href="https://your-blog-link.com" target="_blank" className="mobile-btn">
            Blog
          </a>

          <button className="mobile-btn" onClick={() => scrollToSection("courses")}>Courses</button>

          <button className="bg-yellow-400 w-full text-black px-4 py-2 rounded-md font-semibold">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
