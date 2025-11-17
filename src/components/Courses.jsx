export default function Courses() {
  const courses = [
    {
      title: "AWS Cloud Mastery",
      duration: "6 Weeks",
      price: "₹4,999",
      status: "Live",
      img: "https://via.placeholder.com/420x260",
    },
    {
      title: "Docker & Kubernetes Bootcamp",
      duration: "4 Weeks",
      price: "₹3,499",
      status: "Upcoming",
      img: "https://via.placeholder.com/420x260",
    },
    {
      title: "DevOps Zero to Hero",
      duration: "8 Weeks",
      price: "₹6,499",
      status: "Live",
      img: "https://via.placeholder.com/420x260",
    },
  ];

  return (
    <section
      id="courses"
      className="py-24 px-6 bg-white text-[#0a0f1f]"   // <-- WHITE BACKGROUND HERE
    >
      <h2 className="text-4xl font-extrabold text-center mb-16
        bg-gradient-to-r from-yellow-500 via-yellow-300 to-blue-500 
        text-transparent bg-clip-text animate-fadeIn">
        Courses
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {courses.map((c, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-6 rounded-2xl shadow-xl animate-fadeInUp
              hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(0,0,0,0.15)]
              transition-all duration-500"
          >
            <img
              src={c.img}
              className="rounded-lg mb-4 w-full border border-gray-300"
            />

            <h3 className="text-2xl font-semibold text-[#0a0f1f]">{c.title}</h3>

            <p className="text-gray-600 mt-2">Duration: {c.duration}</p>
            <p className="text-yellow-500 font-bold mt-1">{c.price}</p>

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

            <button className="mt-5 w-full bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
