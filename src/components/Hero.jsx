import { Cloud, ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      data-aos="fade-up"
      data-aos-duration="1000"
      className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center pt-16"
    >
      {/* Floating Blur Backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          data-aos="zoom-in"
        ></div>
        <div
          className="absolute top-1/2 -left-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl"
          data-aos="zoom-in"
          data-aos-delay="200"
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">

            {/* Badge */}
            <div
              className="inline-flex items-center space-x-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-2"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <Cloud size={16} className="text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">
                Cloud & DevOps Experts
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              data-aos="fade-right"
              data-aos-delay="350"
            >
              <span className="text-white">Transform Your</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500">
                Cloud Journey
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl text-gray-400 leading-relaxed max-w-xl"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              Expert courses, insightful books, and strategic consulting services
              to elevate your Cloud and DevOps capabilities.
            </p>

            {/* BUTTONS */}
            <div
              className="flex flex-col sm:flex-row gap-4"
              data-aos="fade-right"
              data-aos-delay="650"
            >
              <button
                onClick={scrollToContact}
                className="group bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold 
                hover:bg-yellow-500 transition-all duration-200 
                hover:shadow-lg hover:shadow-yellow-400/50 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-gray-700 text-white px-8 py-4 rounded-lg font-semibold
                hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200"
              >
                Explore Services
              </button>
            </div>

            {/* Stats */}
            <div
              className="flex items-center space-x-8 pt-8"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="border-l-2 border-yellow-400 pl-4">
                <div className="text-3xl font-bold text-white">5000+</div>
                <div className="text-gray-400 text-sm">Students Trained</div>
              </div>

              <div className="border-l-2 border-blue-500 pl-4">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-gray-400 text-sm">Projects Delivered</div>
              </div>

              <div className="border-l-2 border-yellow-400 pl-4">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE SECTION */}
          <div
            className="relative hidden lg:flex items-center justify-center"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-blue-500/20 rounded-3xl blur-2xl"></div>

            <div className="relative rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
              <img
                src="/hero-bg.png"        /* <--- PUT YOUR IMAGE HERE */
                alt="Cloud & DevOps Illustration"
                className="w-[500px] h-[380px] object-cover rounded-3xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
