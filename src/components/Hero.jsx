import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      data-aos="fade"   // ← fixed (no movement)
      data-aos-duration="1000"
      className="
        relative w-full min-h-screen 
        flex items-center justify-center
        bg-black
        bg-no-repeat bg-center bg-contain
        pt-24
      "
      style={{
        backgroundImage:
          "url('https://cloudadvisory.mhosen.com/images/Champion-of-the-week.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 text-center max-w-3xl space-y-6">

        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Transform Your Cloud Journey
        </h1>

        <p className="text-xl text-gray-300">
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
