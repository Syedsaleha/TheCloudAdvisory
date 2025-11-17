export default function Books() {
  const books = [
    {
      title: "Cloud Computing Simplified",
      desc: "Master AWS, Azure, and GCP with real-world cloud architecture explained visually.",
      img: "https://m.media-amazon.com/images/I/71EAHWURLTL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "DevOps Roadmap 2025",
      desc: "Learn CI/CD, Docker, Kubernetes, Terraform, GitOps and real DevOps workflows.",
      img: "https://m.media-amazon.com/images/I/61ozZNaPh+L._AC_UF1000,1000_QL80_.jpg",
    },
  ];

  return (
    <section id="book" className="py-24 bg-gradient-to-b from-[#0a0f1f] to-[#0d1224] text-white px-6">
      <h2 className="text-4xl font-extrabold text-center mb-16
        bg-gradient-to-r from-yellow-400 to-blue-400 text-transparent bg-clip-text animate-fadeIn">
        Books
      </h2>

      <div className="max-w-6xl mx-auto space-y-28">
        {books.map((book, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fadeInUp ${
              index % 2 !== 0 ? "md:flex-row-reverse md:[direction:rtl]" : ""
            }`}
          >
            {/* Image */}
            <img
              src={book.img}
              alt={book.title}
              className="rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.45)] border border-[#1e253d]
                hover:scale-105 transition-transform duration-500"
            />

            {/* Text */}
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-blue-400 text-transparent bg-clip-text">
                {book.title}
              </h3>
              <p className="text-gray-300 text-lg mt-4 leading-relaxed">
                {book.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
