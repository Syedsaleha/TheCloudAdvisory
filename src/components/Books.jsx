export default function Books() {
  const books = [
    {
      title: "Cloud Computing Simplified",
      desc: "This book simplifies cloud computing using diagrams and real-world examples across AWS, Azure and GCP.",
      author: "Pravin Mishra",
      img: "https://m.media-amazon.com/images/I/71EAHWURLTL._AC_UF1000,1000_QL80_.jpg",
      btn: "Get Your Copy",
    },
    {
      title: "DevOps Roadmap 2025",
      desc: "A complete DevOps guide covering CI/CD, Docker, Kubernetes, GitOps, Terraform, monitoring and real workflows.",
      author: "Pravin Mishra",
      img: "https://m.media-amazon.com/images/I/61ozZNaPh+L._AC_UF1000,1000_QL80_.jpg", // FIXED URL
      btn: "Get Your Copy",
    },
  ];

  return (
    <section id="book" className="py-24 bg-white text-[#0a0f1f] px-6">

      {/* Section Title */}
      <h2 className="
        text-4xl 
        font-extrabold 
        text-center 
        mb-20
        text-black        /* 🔥 TITLE COLOR CHANGED TO BLACK */
      ">
        Books
      </h2>

      <div className="max-w-6xl mx-auto space-y-32">

        {books.map((book, index) => (
          <div
            key={index}
            className={`
              grid grid-cols-1 md:grid-cols-2 gap-16 items-center
              animate-fadeInUp
              ${index % 2 !== 0 ? "md:flex-row-reverse md:[direction:rtl]" : ""}
            `}
          >

            {/* BOOK IMAGE */}
            <div className="flex justify-center">
              <div
                className="
                  rounded-xl 
                  overflow-hidden 
                  w-[220px]     /* 👌 Slightly smaller for perfect fit */
                  md:w-[250px]
                  shadow-[0px_20px_40px_rgba(0,0,0,0.25)]
                  hover:shadow-[0px_25px_50px_rgba(0,0,0,0.35)]
                  transition-all duration-500
                "
              >
                <img 
                  src={book.img}
                  alt={book.title}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* BOOK DETAILS */}
            <div className="md:text-left text-center">

              <h3 className="text-4xl font-bold mb-4 text-black">
                {book.title}
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {book.desc}
              </p>

              <p className="font-semibold text-gray-800 mb-8">
                {book.author}
              </p>

              <button className="
                bg-yellow-400 
                hover:bg-yellow-500 
                text-black 
                font-semibold 
                px-8 
                py-3 
                rounded-lg 
                transition 
                duration-300 
                shadow-md
              ">
                {book.btn} →
              </button>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
