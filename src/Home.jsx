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

      <Navigation />

      {/* HERO */}
      <section id="home" data-aos="fade-up" data-aos-duration="1000">
        <Hero />
      </section>

      {/* SERVICES */}
      <section id="services" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <Services />
      </section>

      {/* BOOKS */}
      <section id="book" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        <Books />
      </section>

      {/* COURSES */}
      <section id="courses" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        <Courses />
      </section>

      {/* ABOUT */}
      <section id="about" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <About />
      </section>

      {/* CONTACT */}
      <section id="contact" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
