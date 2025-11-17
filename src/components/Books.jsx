export default function Books() {
  const books = [
    {
      title: "Cloud Computing Simplified",
      desc: "A complete beginner-to-advanced guide to AWS, Azure, and GCP with real-world architecture and hands-on examples.",
      img: "https://m.media-amazon.com/images/I/71EAHWURLTL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "DevOps Roadmap 2025",
      desc: "Covers Linux, Git, CI/CD, Jenkins, Docker, Kubernetes, Monitoring, and real industry workflows.",
      img: "https://m.media-amazon.com/images/I/61ozZNaPh+L._AC_UF1000,1000_QL80_.jpg",
    },
  ];

  return (
    <section id="book" className="py-20 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Books</h2>

      <div className="max-w-6xl mx-auto space-y-20">
        {books.map((book, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse md:[direction:rtl]" : ""
            }`}
          >
            <img
              src={book.img}
              className="rounded-xl shadow-xl w-full"
            />

            <div className="space-y-4">
              <h3 className="text-3xl font-semibold">{book.title}</h3>
              <p className="text-gray-300">{book.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
