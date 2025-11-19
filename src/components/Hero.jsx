import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen w-full 
        bg-black text-white flex items-center
      "
      style={{
      backgroundImage: "url('https://pravinmishra.in/wp-content/uploads/2023/02/AWS-CKP-1.jpg')"
// put your hero background image here
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-light leading-tight">
              <span className="block">awareness is</span>
              <span className="block font-bold">everything</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
              Make sure all the choices you make in life come from a point of
              awareness and not ignorance.
            </p>

            <button
              className="
                mt-4 inline-flex items-center space-x-2 
                bg-white text-black px-6 py-3 rounded-full font-semibold
                hover:bg-gray-200 transition
              "
            >
              <span>Explore More</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="hidden lg:flex justify-center">
            <img
              src="/your-right-image.jpg"
              alt="Person"
              className="w-[480px] h-auto object-cover rounded-xl shadow-2xl opacity-90"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
