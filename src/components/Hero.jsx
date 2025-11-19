import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      /* ❗ REMOVE AOS COMPLETELY TO STOP IMAGE MOVING */
      className="
        relative w-full min-h-screen 
        flex items-center justify-center
        bg-cover bg-center bg-no-repeat
        overflow-hidden
        pt-24
      "
      style={{
        backgroundImage:
          "url('public/Champion-of-the-week.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",       // 🔥 full image always visible
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-6 text-center max-w-3xl space-y-6">

        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-xl">
          Transform Your Cloud Journey
        </h1>

        <p className="text-xl text-gray-200 drop-shadow-lg">
          Expert courses, books, and consulting to elevate your DevOps career.
        </p>

        <button
          onClick={scrollToContact}
          className="
            bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold 
            hover:bg-yellow-500 transition flex items-center gap-2 mx-auto
          "
        >
          Get Started <ArrowRight size={20} />
        </button>

      </div>
    </section>
  );
}
