export default function Books() {
  const books = [
    {
      title: "Ultimate Git and GitHub for Modern Software Development",
      desc: "Unlock the Power of Git and GitHub Version Control and Collaborative Coding to Seamlessly ... Software Projects.",
      author: "Pravin Mishra",
      img: "https://m.media-amazon.com/images/I/71EAHWURLTL._AC_UF1000,1000_QL80_.jpg",
      btn: "Get Your Copy",
    },
    {
      title: "Cloud Computing with AWS",
      desc: "Everything You Need to Know to be an AWS Cloud Practitioner.",
      author: "Pravin Mishra",
      img: "https://m.media-amazon.com/images/I/61ozZNaPh+L._AC_UF1000,1000_QL80_.jpg", // FIXED URL
      btn: "Get Your Copy",
    },
  ];

  return (
   <section id="book" className="pt-6 pb-20 bg-white text-[#0a0f1f] px-6">


      {/* Section Title */}
      <h2 className="
        text-4xl 
        font-bold 
        text-center 
        md:text-5xl
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
                  w-[320px]     /* 👌 Slightly smaller for perfect fit */
                  md:w-[340px]
                  shadow-[0px_20px_40px_rgba(0.5,0.8,1,1.5)]
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
