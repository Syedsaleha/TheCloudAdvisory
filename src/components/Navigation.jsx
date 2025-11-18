import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // 🔥 Smart scroll function (works across pages)
  const goToSection = (id) => {
    if (window.location.pathname !== "/") {
      // If NOT on home → redirect to home
      window.location.href = `/#${id}`;
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }

    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Brand */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">
              TheCloud<span className="text-yellow-400">Advisory</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">

              <button onClick={() => goToSection("home")} className="nav-link">
                Home
              </button>

              <a href="https://university.pravinmishra.in/learn" target="_blank" rel="noopener noreferrer" className="nav-link">
                University
              </a>

              <a href="https://pravinmishra.in/" target="_blank" rel="noopener noreferrer" className="nav-link">
                Blog
              </a>

              <button onClick={() => goToSection("book")} className="nav-link">
                Book
              </button>

              {/* DMI Page */}
              <a href="/dmi" className="nav-link">DMI</a>

              <button onClick={() => goToSection("courses")} className="nav-link">
                Courses
              </button>

              <button
                onClick={() => goToSection("contact")}
                className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500"
              >
                Contact
              </button>

            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-yellow-400">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">

            <button onClick={() => goToSection("home")} className="mobile-item">Home</button>

            <a href="https://university.pravinmishra.in/learn" target="_blank" rel="noopener noreferrer" className="mobile-item">
              University
            </a>

            <a href="https://pravinmishra.in/" target="_blank" rel="noopener noreferrer" className="mobile-item">
              Blog
            </a>

            <button onClick={() => goToSection("book")} className="mobile-item">Book</button>

            <a href="/dmi" className="mobile-item">DMI</a>

            <button onClick={() => goToSection("courses")} className="mobile-item">Courses</button>

            <button
              onClick={() => goToSection("contact")}
              className="block w-full text-left px-3 py-2 bg-yellow-400 text-black rounded-md"
            >
              Contact
            </button>

          </div>
        </div>
      )}
    </nav>
  );
}
