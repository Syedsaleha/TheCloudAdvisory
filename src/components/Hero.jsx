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
        relative w-full min-h-screen 
        flex items-center
        bg-cover bg-center bg-no-repeat
        overflow-hidden
      "
      style={{
        backgroundImage:
          "url('https://cloudadvisory.mhosen.com/images/Champion-of-the-week.png')",
        backgroundPosition: "center center",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto space-y-6">
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Transform Your Cloud Journey
        </h1>

        <p className="text-xl text-gray-200 max-w-xl">
          Expert courses, books, and consulting to elevate your DevOps career.
        </p>

        <button
          onClick={scrollToContact}
          className="
            bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold 
            hover:bg-yellow-500 transition flex items-center gap-2
          "
        >
          Get Started <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
