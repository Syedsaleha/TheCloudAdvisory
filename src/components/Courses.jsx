export default function Courses() {
  const courses = [
    {
      title: "AWS Cloud Mastery",
      duration: "6 Weeks",
      price: "₹4,999",
      status: "Live",
      img: "https://via.placeholder.com/350x220",
    },
    {
      title: "Docker & Kubernetes Bootcamp",
      duration: "4 Weeks",
      price: "₹3,499",
      status: "Upcoming",
      img: "https://via.placeholder.com/350x220",
    },
    {
      title: "DevOps Zero to Hero",
      duration: "8 Weeks",
      price: "₹6,499",
      status: "Live",
      img: "https://via.placeholder.com/350x220",
    },
    {
      title: "Linux Fundamentals for Cloud",
      duration: "3 Weeks",
      price: "₹1,999",
      status: "Completed",
      img: "https://via.placeholder.com/350x220",
    },
  ];

  return (
    <section id="courses" className="py-20 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Courses</h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {courses.map((c, i) => (
          <div
            key={i}
            className="bg-gray-900 border border-gray-800 p-5 rounded-xl shadow-lg"
          >
            <img src={c.img} className="rounded-lg mb-4 w-full" />

            <h3 className="text-2xl font-semibold">{c.title}</h3>

            <p className="text-gray-400 mt-2">Duration: {c.duration}</p>
            <p className="text-yellow-400 font-bold mt-1">Price: {c.price}</p>

            <span
              className={`inline-block mt-3 px-3 py-1 rounded-full text-sm ${
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
