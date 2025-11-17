export default function Books() {
  const books = [
    {
      title: "Cloud Computing Simplified",
      desc: "A complete beginner-to-advanced guide to AWS, Azure, and GCP with real-world architecture and hands-on examples.",
      img: "C:\Users\SYED\Desktop\TheCloudAdvisory\book1.jpg",
    },
    {
      title: "DevOps Roadmap 2025",
      desc: "Covers Linux, Git, CI/CD, Jenkins, Docker, Kubernetes, Monitoring, and real industry workflows.",
      img: "data:image/jpeg;base64,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",
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
