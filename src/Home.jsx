import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Books from "./components/Books";
import Courses from "./components/Courses";
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* Navigation */}
      <Navigation />

      {/* Sections */}
      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="book">
        <Books />
      </section>

      <section id="courses">
        <Courses />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}
