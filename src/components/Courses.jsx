export default function Courses() {
  const courses = [
    {
      title: "AWS DevOps & CI/CD with AWS CodePipeline for Engineers",
      duration: "15 hours",
      price: "₹659",
      status: "Live",
      img: "https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/165134/courses/193967/1718612700859Course_Thumbnail__1__lyst1718612700913.png?w=805&h=453&resizetype=fill",
      link: "https://www.udemy.com/course/mastering-aws-devops-for-cloud-engineers/?couponCode=PMNVD2025",
    },
    {
      title: "Linux for DevOps, Cloud, and SRE Engineers",
      duration: "5 hours",
      price: "₹629",
      status: "Upcoming",
      img: "https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/165134/courses/184709/1709132099330Screenshot_2024_02_28_at_45430_PMpng_lyst6350.png?w=805&h=453&resizetype=fill",
      link: "https://www.udemy.com/course/linux-for-cloud-engineers-a-complete-project-based-learning/?couponCode=PMNVD2025",
    },
    {
      title: "DevOps for beginners: Docker, K8s, Cloud, CI/CD & 4 Projects",
      duration: "43.5 hours",
      price: "₹569",
      status: "Live",
      img: "https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/165134/courses/184853/1709122169431e3otu_980_6_lyst6257.webp?w=805&h=453&resizetype=fill",
      link: "https://www.udemy.com/course/devops-for-beginners-docker-k8s-cloud-cicd-4-projects/?couponCode=PMNVD2025",
    },
    {
      title: "AWS DevOps & CI/CD with AWS CodePipeline for Engineers",
      duration: "15 hours",
      price: "₹659",
      status: "Live",
      img: "https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/165134/courses/193967/1718612700859Course_Thumbnail__1__lyst1718612700913.png?w=805&h=453&resizetype=fill",
      link: "https://www.udemy.com/course/mastering-aws-devops-for-cloud-engineers/?couponCode=PMNVD2025",
    },
    {
      title: "Linux for DevOps, Cloud, and SRE Engineers",
      duration: "5 hours",
      price: "₹629",
      status: "Upcoming",
      img: "https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/165134/courses/184709/1709132099330Screenshot_2024_02_28_at_45430_PMpng_lyst6350.png?w=805&h=453&resizetype=fill",
      link: "https://www.udemy.com/course/linux-for-cloud-engineers-a-complete-project-based-learning/?couponCode=PMNVD2025",
    },
    {
      title: "DevOps for beginners: Docker, K8s, Cloud, CI/CD & 4 Projects",
      duration: "43.5 hours",
      price: "₹569",
      status: "Live",
      img: "https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/165134/courses/184853/1709122169431e3otu_980_6_lyst6257.webp?w=805&h=453&resizetype=fill",
      link: "https://www.udemy.com/course/devops-for-beginners-docker-k8s-cloud-cicd-4-projects/?couponCode=PMNVD2025",
    },
  ];

  return (
   <section id="courses" className="fade-up py-24 px-6 bg-white scroll-mt-32">

      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-20 md:text-5xl text-black animate-fadeIn">
        Courses
      </h2>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        
        {courses.map((c, index) => (
          <div
            key={index}
            className="
              bg-white border border-gray-200 p-6 rounded-2xl shadow-xl animate-fadeInUp
              hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(0,0,0,0.5)]
              transition-all duration-500 text-center
            "
          >
            {/* IMAGE */}
            <img
              src={c.img}
              className="rounded-lg mb-4 w-full border border-gray-300"
              alt={c.title}
            />

            {/* TITLE */}
            <h3 className="text-2xl font-semibold text-[#0a0f1f] mb-2">
              {c.title}
            </h3>

            {/* DURATION */}
            <p className="text-gray-600">
              Duration: {c.duration}
            </p>

            {/* PRICE */}
            <p className="text-yellow-500 font-bold mt-1">
              {c.price}
            </p>

            {/* STATUS BADGE */}
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

            {/* ENROLL BUTTON (Individual Course Link) */}
            <a
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full block bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Enroll Now →
            </a>

          </div>
        ))}

      </div>
    </section>
  );
}
