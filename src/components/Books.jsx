export default function Books() {
  const books = [
    {
      title: "Cloud Computing Simplified",
      desc: "This book simplifies Cloud Computing using real-world examples, readable diagrams, and beginner-friendly explanations that help you understand AWS, Azure, and GCP clearly.",
      author: "Pravin Mishra",
      img: "https://m.media-amazon.com/images/I/71EAHWURLTL._AC_UF1000,1000_QL80_.jpg",
      btn: "Get Your Copy",
    },
    {
      title: "DevOps Roadmap 2025",
      desc: "A practical DevOps guide covering Linux, CI/CD, Docker, Kubernetes, Terraform, GitOps, monitoring, and real industry workflows to become job-ready.",
      author: "Pravin Mishra",
      img: "https://m.media-amazon.com/images/I/71EAHWURLTL._AC_UF1000,1000_QL80_.jpg",
      btn: "Get Your Copy",
    },
  ];

  return (
    <section id="book" className="py-24 bg-white text-[#0a0f1f] px-6">
      <h2 className="text-4xl font-extrabold text-center mb-20 
        bg-gradient-to-r from-yellow-500 to-blue-600 text-transparent bg-clip-text">
        Books
      </h2>

      <div className="max-w-6xl mx-auto space-y-28">
        {books.map((book, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Book Image */}
            <img
              src={book.img}
              alt={book.title}
              className="w-[250px] md:w-[280px] rounded-lg shadow-xl mx-auto"
            />

            {/* Book Content */}
            <div>
              <h3 className="text-4xl font-bold mb-4">{book.title}</h3>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {book.desc}
              </p>

              {/* Signature (Optional, remove if not needed) */}
              {/* <img src="/signature.png" className="w-40 mb-4" /> */}

              <p className="font-semibold text-gray-800 mb-8">
                {book.author}
              </p>

              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition duration-300 shadow-md">
                {book.btn} →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
