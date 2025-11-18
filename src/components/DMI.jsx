import Navigation from "./Navigation";
import Footer from "./Footer";

export default function DMI() {
  const weeks = [
    { week: "Week 1", topic: "Linux Essentials, Shell Scripting & System Administration" },
    { week: "Week 2", topic: "Git, GitHub, Branching Strategies & CI Basics" },
    { week: "Week 3", topic: "Docker Deep Dive + Microservices Project" },
    { week: "Week 4", topic: "Docker Compose + Private Registries + Image Optimization" },
    { week: "Week 5", topic: "Kubernetes Essentials (Pods, Deployments, Services)" },
    { week: "Week 6", topic: "K8s Advanced: Ingress, Volumes, ConfigMaps, Secrets" },
    { week: "Week 7", topic: "CI/CD Smart Pipelines + GitHub Actions" },
    { week: "Week 8", topic: "AWS Basics: EC2, VPC, Subnets, Security Groups" },
    { week: "Week 9", topic: "AWS RDS, S3, CloudWatch, IAM" },
    { week: "Week 10", topic: "Terraform + IaC Real-World Project" },
    { week: "Week 11", topic: "Monitoring & Logging: Prometheus + Grafana" },
    { week: "Week 12", topic: "Final DevOps Project + Interviews + Portfolio Building" },
  ];

  const testimonials = [
    {
      name: "Rohit Sharma",
      role: "DevOps Engineer – Cohort-1",
      feedback:
        "DMI Cohort-1 changed my career completely. The 12-week structure, projects and mentorship made me job-ready.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Aditi Verma",
      role: "Cloud Engineer – Cohort-1",
      feedback:
        "Hands-on AWS, Kubernetes and CI/CD helped me crack interviews confidently. Best DevOps mentorship program!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  const outcomes = [
    "Built 4+ real DevOps projects",
    "Hands-on AWS, Docker, Kubernetes, Terraform",
    "Strong GitHub portfolio",
    "CI/CD automation expertise",
    "Industry-level interview preparation",
    "Job-ready DevOps knowledge",
  ];

  return (
    <div className="bg-white text-[#0a0f1f] overflow-x-hidden">

      {/* NAVIGATION */}
      <Navigation />

      {/* HERO SECTION */}
      <section
        className="relative py-28 text-center bg-gradient-to-br from-black to-gray-900 text-white px-6"
        data-aos="fade-up"
      >
        <h1 className="text-5xl font-extrabold mb-4">DevOps Micro Internship (DMI)</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">
          12-Week Practical DevOps Internship — Hands-on, Project-oriented, Mentor-driven.
        </p>

        <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-500 blur-3xl opacity-20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>
      </section>

    {/* WEEK STRUCTURE */}
<section className="py-20 px-6 max-w-5xl mx-auto">
  <h2 className="text-4xl font-bold text-center mb-16">12-Week DevOps Roadmap</h2>

  <div className="relative border-l-4 border-yellow-400 ml-6">

    {weeks.map((w, i) => (
      <div key={i} className="mb-12 relative pl-10" data-aos="fade-up" data-aos-delay={i * 100}>

        {/* Timeline Dot */}
        <div className="absolute -left-3 top-2 w-5 h-5 bg-yellow-400 border-4 border-white rounded-full shadow-lg"></div>

        {/* Card */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
          <h3 className="text-2xl font-bold text-black mb-2">{w.week}</h3>
          <p className="text-gray-700 text-lg leading-relaxed">{w.topic}</p>
        </div>
      </div>
    ))}

  </div>
</section>


      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-100 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">What Students Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={t.image} className="w-16 h-16 rounded-full border" />
                <div>
                  <h3 className="text-lg font-bold">{t.name}</h3>
                  <p className="text-gray-500">{t.role}</p>
                </div>
              </div>

              <p className="text-gray-700">{t.feedback}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SUCCESSFUL OUTCOMES */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Successful Outcomes</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {outcomes.map((o, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="p-6 bg-white shadow-lg border rounded-xl text-center text-lg font-semibold 
              hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              {o}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        data-aos="zoom-in"
        className="py-24 text-center bg-gradient-to-r from-yellow-300 to-yellow-500"
      >
        <h2 className="text-4xl font-extrabold mb-4">DMI Cohort-2 Coming Soon!</h2>
        <p className="text-xl text-gray-800 mb-8">
          Limited seats. Register early to secure your spot.
        </p>

        <a
          href="YOUR_GOOGLE_FORM_LINK_HERE"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 text-black font-bold text-lg bg-white rounded-xl shadow-xl hover:scale-105 transition"
        >
          Register Here →
        </a>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
