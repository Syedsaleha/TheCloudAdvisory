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
      title: "DevOps for Beginners: Docker, K8s, Cloud, CI/CD & 4 Projects",
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
      title: "DevOps for Beginners: Docker, K8s, Cloud, CI/CD & 4 Projects",
      duration: "43.5 hours",
      price: "₹569",
      status: "Live",
      img: "https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/165134/courses/184853/1709122169431e3otu_980_6_lyst6257.webp?w=805&h=453&resizetype=fill",
      link: "https://www.udemy.com/course/devops-for-beginners-docker-k8s-cloud-cicd-4-projects/?couponCode=PMNVD2025",
    },
  ];

  return (
    <section
      id="courses"
      className="fade-up pt-12 pb-20 px-6 bg-white scroll-mt-20"
    >
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-20">
        Courses
      </h2>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {courses.map((c, index) => (
          <div
            key={index}
            className="
              bg-white border border-gray-200 rounded-2xl shadow-xl 
              hover:scale-105 hover:shadow-2xl transition-all duration-500 
              flex flex-col p-6
            "
          >
            {/* IMAGE */}
            <img
              src={c.img}
              className="rounded-lg w-full border border-gray-300 mb-4"
              alt={c.title}
            />

          {/* TITLE */}
{/* TITLE */}
<h3 className="text-xl font-semibold text-[#0a0f1f] mb-4 text-center h-[60px]">
  {c.title}
</h3>


{/* CENTERED INFO */}
<div className="text-center space-y-1 mb-4">
  <p className="text-gray-600">Duration: {c.duration}</p>
  <p className="text-yellow-500 font-bold">{c.price}</p>

  {/* STATUS BADGE */}
  <span
    className={`
      inline-block px-3 py-1 rounded-full text-sm text-white
      ${c.status === "Live" ? "bg-green-600" : ""}
      ${c.status === "Upcoming" ? "bg-blue-600" : ""}
      ${c.status === "Completed" ? "bg-gray-600" : ""}
    `}
  >
    {c.status}
  </span>
</div>


            {/* Spacer to push button bottom */}
            <div className="flex-grow"></div>

            {/* ENROLL BUTTON */}
            <a
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full block bg-yellow-400 text-black py-2 text-center
                         rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Enroll Now →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
