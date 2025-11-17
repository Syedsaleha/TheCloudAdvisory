import { useEffect } from "react";
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Books from "./components/Books";
import Courses from "./components/Courses";

function App() {

  // 👉 Scroll Fade-Up Animation
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((sec) => observer.observe(sec));
  }, []);

  return (
    <div className="fade-up min-h-screen bg-white overflow-x-hidden">
      <Navigation />

      <Hero />
      <Services />
      <Books />
      <Courses />
      <About />
      <Contact />
      
      <Footer />
    </div>
  );
}

export default App;
