import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="
        relative min-h-screen w-full 
        flex items-center
        bg-cover bg-center bg-no-repeat
      "
      style={{
        backgroundImage:
          "url('https://cloudadvisory.mhosen.com/images/Champion-of-the-week.png')", // ⭐ Replace with your image
      }}
    >
      {/* DARK OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center sm:text-left space-y-8">
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Transform Your Cloud Journey
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
          Expert courses, books, and consulting to elevate your DevOps career.
        </p>

        <button
          onClick={scrollToContact}
          className="
            bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold 
            hover:bg-yellow-500 transition shadow-lg flex items-center 
            justify-center gap-2 mx-auto sm:mx-0
          "
        >
          Get Started
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
