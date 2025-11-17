export default function Courses() {
  const courses = [
    {
      title: "AWS Cloud Mastery",
      duration: "6 Weeks",
      price: "₹4,999",
      status: "Live",
      img: "https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/165134/courses/193967/1718612700859Course_Thumbnail__1__lyst1718612700913.png?w=805&h=453&resizetype=fill",
      link: "https://www.udemy.com/course/aws-cloud-master-course/?couponCode=YOUR_COUPON",
    },
    {
      title: "Docker & Kubernetes Bootcamp",
      duration: "4 Weeks",
      price: "₹3,499",
      status: "Upcoming",
      img: "https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/165134/courses/184709/1709132099330Screenshot_2024_02_28_at_45430_PMpng_lyst6350.png?w=805&h=453&resizetype=fill",
      link: "https://www.udemy.com/course/docker-kubernetes-bootcamp/?couponCode=YOUR_COUPON",
    },
    {
      title: "DevOps Zero to Hero",
      duration: "8 Weeks",
      price: "₹6,499",
      status: "Live",
      img: "https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/165134/courses/184853/1709122169431e3otu_980_6_lyst6257.webp?w=805&h=453&resizetype=fill",
      link: "https://www.udemy.com/course/devops-zero-to-hero/?couponCode=YOUR_COUPON",
    },
  ];

  return (
    <section id="courses" className="py-24 px-6 bg-white text-[#0a0f1f]">

      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-center mb-16 text-black animate-fadeIn">
        Courses
      </h2>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        
        {courses.map((c, index) => (
          <div
            key={index}
            className="
              bg-white border border-gray-200 p-6 rounded-2xl shadow-xl animate-fadeInUp
              hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(0,0,0,0.25)]
              transition-all duration-500 text-center
            "
          >
            {/* IMAGE */}
            <img
              src={c.img}
              className="rounded-lg mb-4 w-full border border-gray-300"
              alt={c.title}
            />

            {/* TITLE */}
            <h3 className="text-2xl font-semibold text-[#0a0f1f] mb-2">
              {c.title}
            </h3>

            {/* DURATION */}
            <p className="text-gray-600">
              Duration: {c.duration}
            </p>

            {/* PRICE */}
            <p className="text-yellow-500 font-bold mt-1">
              {c.price}
            </p>

            {/* STATUS BADGE */}
            <span
              className={`inline-block mt-3 px-3 py-1 rounded-full text-sm text-white ${
                c.status === "Live"
                  ? "bg-green-600"
                  : c.status === "Upcoming"
                  ? "bg-blue-600"
                  : "bg-gray-600"
              }`}
            >
              {c.status}
            </span>

            {/* ENROLL BUTTON (Individual Course Link) */}
            <a
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full block bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Enroll Now →
            </a>

          </div>
        ))}

      </div>
    </section>
  );
}
