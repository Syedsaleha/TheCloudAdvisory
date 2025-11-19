<section
  id="home"
  data-aos="fade-up"
  data-aos-duration="1000"
  className="
    relative min-h-screen 
    bg-cover bg-center bg-no-repeat 
    flex items-center pt-16
  "
  style={{
    backgroundImage: "url('https://pravinmishra.in/wp-content/uploads/2023/02/AWS-CKP-1.jpg')" 
    // 👆 Put your image link here
  }}
>
  {/* Dark Overlay for Readability */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Floating Blur Backgrounds */}
  <div className="absolute inset-0 overflow-hidden">
    <div
      className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
      data-aos="zoom-in"
    ></div>
    <div
      className="absolute top-1/2 -left-40 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl"
      data-aos="zoom-in"
      data-aos-delay="200"
    ></div>
  </div>

  {/* CONTENT */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT CONTENT */}
      <div className="space-y-8">

        {/* Badge */}
        <div
          className="inline-flex items-center space-x-2 bg-yellow-400/10 border border-yellow-400/20 
          rounded-full px-4 py-2 backdrop-blur-md"
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
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
          data-aos="fade-right"
          data-aos-delay="350"
        >
          Transform Your
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500">
            Cloud Journey
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-xl text-gray-300 leading-relaxed max-w-xl"
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
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() =>
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
            }
            className="border-2 border-gray-300 text-white px-8 py-4 rounded-lg font-semibold
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
            <div className="text-gray-300 text-sm">Students Trained</div>
          </div>

          <div className="border-l-2 border-blue-500 pl-4">
            <div className="text-3xl font-bold text-white">50+</div>
            <div className="text-gray-300 text-sm">Projects Delivered</div>
          </div>

          <div className="border-l-2 border-yellow-400 pl-4">
            <div className="text-3xl font-bold text-white">15+</div>
            <div className="text-gray-300 text-sm">Years Experience</div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE REMOVED → because background image is used */}
    </div>
  </div>
</section>
