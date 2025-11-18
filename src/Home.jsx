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
