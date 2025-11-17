export default function Books() {
  const books = [
    {
      title: "Ultimate Git and GitHub for Modern Software Development",
      desc: "Master Git, GitHub workflows, version control, and collaboration techniques used in real-world software engineering.",
      signature: "P. Mishra",
      author: "Pravin Mishra",
      img: "https://m.media-amazon.com/images/I/71EAHWURLTL._AC_UF1000,1000_QL80_.jpg",
      link: "https://www.amazon.in/dp/8197223831",
    },
    {
      title: "Cloud Computing with AWS",
      desc: "A complete beginner-friendly guide to understanding Cloud fundamentals and AWS Cloud Practitioner concepts.",
      signature: "P. Mishra",
      author: "Pravin Mishra",
      img: "https://m.media-amazon.com/images/I/61ozZNaPh+L._AC_UF1000,1000_QL80_.jpg",
      link: "https://www.amazon.in/dp/1484291719",
    },
  ];

  return (
    <section
      id="book"
      className="py-24 px-6 bg-white text-[#0a0f1f] scroll-mt-32 fade-up"
    >
      {/* SECTION TITLE */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20 text-black">
        Featured Books
      </h2>

      <div className="max-w-7xl mx-auto space-y-28">
        {books.map((book, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse md:[direction:rtl]" : ""
            }`}
          >
            {/* ==== BOOK IMAGE BOX ==== */}
            <div className="flex justify-center">
              <div
                className="
                  bg-white 
                  rounded-2xl 
                  shadow-[0_10px_40px_rgba(0,0,0,0.15)]
                  hover:shadow-[0_15px_60px_rgba(0,0,0,0.25)]
                  transition-all duration-500 
                  p-4
                  w-[280px]
                  md:w-[340px]
                "
              >
                <img
                  src={book.img}
                  alt={book.title}
                  className="rounded-xl w-full object-cover"
                />
              </div>
            </div>

            {/* ==== BOOK DETAILS ==== */}
            <div className="md:text-left text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-black leading-snug">
                {book.title}
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {book.desc}
              </p>

              <p className="italic text-gray-500 mb-2 text-lg">
                “{book.signature}”
              </p>

              <p className="font-semibold text-gray-800 mb-8 text-xl">
                — {book.author}
              </p>

              {/* BUTTON */}
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block
                  px-10 
                  py-3 
                  rounded-xl 
                  bg-gradient-to-r 
                  from-yellow-400 
                  to-yellow-500
                  text-black 
                  font-semibold 
                  shadow-md
                  hover:shadow-xl
                  hover:from-yellow-500 
                  hover:to-yellow-600
                  transition-all 
                  duration-300
                "
              >
                Get Your Copy →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
