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
        relative w-full 
        min-h-[80vh] lg:h-[95vh]   /* FIXED VIEWPORT HEIGHT */
        flex items-center
        overflow-hidden
        pt-28                     /* offset for navbar */
        bg-no-repeat
        bg-top                    /* KEEP IMAGE IN SAME POSITION ALWAYS */
        bg-[length:100%_auto]     /* FIT IMAGE CORRECTLY */
      "
      style={{
        backgroundImage:
          "url('https://cloudadvisory.mhosen.com/images/Champion-of-the-week.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto space-y-6">
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-xl">
          Transform Your Cloud Journey
        </h1>

        <p className="text-xl text-gray-200 max-w-xl drop-shadow-md">
          Expert courses, books, and consulting to elevate your DevOps career.
        </p>

        <button
          onClick={scrollToContact}
          className="
            bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold 
            hover:bg-yellow-500 transition flex items-center gap-2
            shadow-lg hover:shadow-yellow-400/40
          "
        >
          Get Started <ArrowRight size={20} />
        </button>

      </div>
    </section>
  );
}
