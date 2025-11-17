import { motion } from "framer-motion";

export default function Books() {
  const books = [
    {
      title: "Cloud Computing Simplified",
      desc: "A deep and visual guide to mastering AWS, Azure, and GCP with real-world architecture diagrams.",
      img: "https://via.placeholder.com/420x260",
    },
    {
      title: "DevOps Roadmap 2025",
      desc: "Become industry-ready in DevOps. Covers CI/CD pipelines, Docker, Kubernetes, GitOps, Terraform and more.",
      img: "https://via.placeholder.com/420x260",
    },
  ];

  return (
    <section
      id="book"
      className="py-24 px-6 bg-gradient-to-b from-[#0a0f1f] to-[#0d1224] text-white"
    >
      <h2 className="text-4xl font-extrabold text-center mb-16 
      bg-gradient-to-r from-yellow-400 via-yellow-200 to-blue-400 
      text-transparent bg-clip-text">
        Books
      </h2>

      <div className="max-w-6xl mx-auto space-y-28">
        {books.map((book, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse md:[direction:rtl]" : ""
            }`}
          >
            {/* Book Image */}
            <motion.img
              src={book.img}
              alt={book.title}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="rounded-2xl shadow-[0px_0px_40px_rgba(0,0,0,0.45)] border border-[#1e253d]"
            />

            {/* Content */}
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-blue-400 text-transparent bg-clip-text">
                {book.title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                {book.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
