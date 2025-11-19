// ========================
// IMPORTS
// ========================
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation as SwiperNav,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import NavBar from "./Navigation";
import Footer from "./Footer";

// ========================
// COMPONENT
// ========================
export default function DMI() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const weeks = [
    { week: "Week 0", topic: "Internet, Networking & Basic Tools + ChatGPT Troubleshooting" },
    { week: "Week 1", topic: "Linux Essentials, Shell Scripting & System Administration" },
    { week: "Week 2", topic: "Git, GitHub, Branching, Pull Requests, Mini Project" },
    { week: "Week 3", topic: "DevOps Fundamentals, CI/CD Basics, Agile, Cloud Intro" },
    { week: "Week 4", topic: "AWS Cloud – IAM, S3, EC2, VPC, Deploy React App" },
    { week: "Week 5", topic: "More AWS – Databases, RDS, CloudWatch, Deployment" },
    { week: "Week 6", topic: "Azure Cloud – VM, Networking, Database, Deploy 3-tier App" },
    { week: "Week 7", topic: "Terraform – IaC, Providers, Variables, Modules, Infra Deployment" },
    { week: "Week 8", topic: "Ansible – Automation, Playbooks, Roles, Full Cloud Deployment" },
    { week: "Week 9", topic: "Azure DevOps – Pipelines, CI/CD, Production Deployment" },
    { week: "Week 10", topic: "Docker & Containerization – Dockerfile, Compose, Multi-stage" },
    { week: "Week 11", topic: "Kubernetes – Pods, ReplicaSets, Deployments, Scaling" },
    { week: "Week 12", topic: "Observability – Prometheus, Grafana, Dashboards, Monitoring" },
    { week: "Week 13", topic: "🎓 Final Project + Graduation" },
  ];

  const testimonials = [
    {
      name: "Anuradha Iyer",
      role: "DMI - Cohort-1",
      feedback:
        "I was selected in the top 100. I am very happy with the cohort. I got direction as to how to upskill my DevOps skills. Lots of hands on labs and assignments. The course content is very good. There is regular followup with the co-mentors...",
      image: "https://media.licdn.com/dms/image/v2/C5103AQHZh8sVH-uNqQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1549595986002?e=1764806400&v=beta&t=EfojpBz32jRZjXXOtKxKWaUWn7yckbgSY0YqEbyBGxQ",
    },
    {
      name: "Samanta Rizzo",
      role: "DMI – Cohort-1",
      feedback:
        "Here, the mentors truly care about our growth... we’ve grown together as a supportive community.",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGTSnmSulkNWw/profile-displayphoto-shrink_800_800/...",
    },
    {
      name: "Mobarak Hosen",
      role: "DMI – Cohort-1",
      feedback:
        "I wasn’t selected in the initial 100! Then when I found its a day long session...",
      image: "https://media.licdn.com/dms/image/v2/D5635AQGSdjVkC-S_Tg/profile-framedphoto-shrink_800_800/...",
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
      <NavBar />

      {/* =====================================================
          ENHANCED HERO SECTION
      ===================================================== */}
      <section className="relative py-32 text-center bg-gradient-to-br from-black to-gray-900 text-white px-6 overflow-hidden">

        {/* Glow Backgrounds */}
        <div className="absolute -top-32 left-1/4 w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto">

          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-3 bg-white/10 px-6 py-3 rounded-full border border-white/20 backdrop-blur-md mb-6">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></span>
            <span className="text-yellow-300 font-semibold text-sm tracking-wide">
              Cloud · DevOps · Observability
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="block bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              DevOps Micro Internship (DMI)
            </span>

            <span className="block mt-4 bg-gradient-to-r from-yellow-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Learn Fast. Build Real. Go Production.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            12-Week Practical DevOps Internship — Hands-on, Project-oriented, Mentor-driven.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-14 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">5k+</div>
              <p className="text-gray-400 text-sm">Learners trained</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-white">50+</div>
              <p className="text-gray-400 text-sm">Projects delivered</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-white">15+</div>
              <p className="text-gray-400 text-sm">Years experience</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-white">98%</div>
              <p className="text-gray-400 text-sm">Satisfaction rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HIGHLIGHTS SECTION
      ===================================================== */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">Why This Program Stands Out</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="p-8 rounded-2xl bg-gradient-to-br from-yellow-200 to-yellow-100 border shadow-lg hover:shadow-2xl hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-3">Project-First Learning</h3>
              <p className="text-gray-700">Weekly deliverables reviewed by real DevOps mentors.</p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-200 to-blue-100 border shadow-lg hover:shadow-2xl hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-3">1:1 Mentor Support</h3>
              <p className="text-gray-700">Live help, code review and continuous feedback.</p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-200 to-green-100 border shadow-lg hover:shadow-2xl hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-3">Job-Ready Portfolio</h3>
              <p className="text-gray-700">Showcase Docker, AWS, Terraform & CI/CD projects.</p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          VIDEO SECTION
      ===================================================== */}
      <section className="py-20 bg-gray-50 text-black">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">Watch the Program Introduction</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            A short overview of what the DevOps Micro Internship will teach you.
          </p>

          <div className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl border">
            <iframe
              className="w-full h-[380px]"
              src="https://www.youtube.com/embed/DqfSdsHW090"
              title="DMI Intro Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

        </div>
      </section>

      {/* =====================================================
          RULES & DELIVERABLES SECTION
      ===================================================== */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          {/* Rules */}
          <div className="p-8 border rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold mb-6">Rules & Expectations</h3>
            <ul className="space-y-4 text-gray-700">
              <li>• Attendance checks at start/mid/end</li>
              <li>• Weekly LinkedIn progress post</li>
              <li>• Missing 2+ deadlines = removal</li>
              <li>• Active participation required</li>
              <li>• Final capstone project demo</li>
            </ul>
          </div>

          {/* Deliverables */}
          <div className="p-8 border rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold mb-6">What You'll Deliver</h3>

            <div className="flex flex-wrap gap-3 text-gray-700">
              <span className="px-4 py-2 rounded-full bg-gray-100 border">CI/CD Pipelines</span>
              <span className="px-4 py-2 rounded-full bg-gray-100 border">AWS Deployments</span>
              <span className="px-4 py-2 rounded-full bg-gray-100 border">Terraform Modules</span>
              <span className="px-4 py-2 rounded-full bg-gray-100 border">Monitoring Dashboards</span>
              <span className="px-4 py-2 rounded-full bg-gray-100 border">GitHub Profile Boost</span>
              <span className="px-4 py-2 rounded-full bg-gray-100 border">Final Capstone</span>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          ROADMAP SECTION (YOUR ORIGINAL)
      ===================================================== */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">14-Week DevOps Roadmap</h2>

        <div className="relative">
          {/* DESKTOP CENTER LINE */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-yellow-400 transform -translate-x-1/2"></div>

          {/* MOBILE LINE */}
          <div className="md:hidden absolute left-1/2 top-0 w-[2px] bg-yellow-400 transform -translate-x-1/2 animate-draw-line"
            style={{ height: "100%" }}></div>

          {/* DESKTOP VERSION */}
          {weeks.map((w, i) => (
            <div
              key={i}
              className={`
                mb-14 hidden md:flex w-full 
                ${i % 2 === 0 ? "justify-start" : "justify-end"}
              `}
            >
              <div className="w-[50%] px-6 relative">
                <div
                  className="absolute top-4 w-5 h-5 bg-yellow-400 border-4 border-white rounded-full shadow-md"
                  style={{
                    left: i % 2 === 0 ? "100%" : "0%",
                    transform: "translate(-50%, 0)"
                  }}
                ></div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl">
                  <h3 className="text-2xl font-bold text-black mb-1">{w.week}</h3>
                  <p className="text-gray-700 text-base leading-relaxed">{w.topic}</p>
                </div>
              </div>
            </div>
          ))}

          {/* MOBILE VERSION */}
          <div className="md:hidden relative">
            {weeks.map((w, i) => (
              <div key={i} className="relative mb-12 flex flex-col items-center">
                <div className="bg-white w-[90%] p-6 rounded-2xl shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold text-black">{w.week}</h3>
                  <p className="text-gray-700 text-base mt-2">{w.topic}</p>
                </div>

                {i !== weeks.length - 1 && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[2px] h-12 bg-yellow-400"></div>
                )}
              </div>
            ))}
          </div>

          {/* FINAL CARD */}
          <div className="flex justify-center mt-20">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-6 rounded-2xl shadow-xl border border-yellow-600 text-center w-[70%]">
              <h3 className="text-2xl font-bold">🎉 Congratulations!</h3>
              <p className="text-md mt-1 font-medium">You have completed the 14-Week DevOps Journey.</p>
            </div>
          </div>
        </div>

        {/* Animations */}
        <style>{`
          @keyframes drawLine {
            0% { height: 0; opacity: 0; }
            100% { height: 100%; opacity: 1; }
          }

          .animate-draw-line {
            animation: drawLine 2.5s ease-out forwards;
          }
        `}</style>
      </section>

      {/* =====================================================
          TESTIMONIAL SECTION (UNCHANGED)
      ===================================================== */}
      <section className="py-24 bg-gray-100 px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-black">What Students Say</h2>

        <div className="max-w-5xl mx-auto relative">
          <div className="swiper-button-prev custom-swiper-btn"></div>
          <div className="swiper-button-next custom-swiper-btn"></div>

          <Swiper
            modules={[SwiperNav, Pagination, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              1024: { slidesPerView: 2 },
            }}
            className="pb-12"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={t.image}
                      className="w-16 h-16 rounded-full border object-cover shadow-sm"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{t.name}</h3>
                      <p className="text-gray-500 text-sm">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">“{t.feedback}”</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* =====================================================
          OUTCOMES SECTION
      ===================================================== */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Successful Outcomes</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {outcomes.map((o, i) => (
            <div key={i} className="p-6 bg-white shadow-lg border rounded-xl text-center text-lg font-semibold hover:scale-105 hover:shadow-2xl transition">
              {o}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gradient-to-r from-yellow-300 to-yellow-500">
        <h2 className="text-4xl font-extrabold mb-4">DMI Cohort-2 Coming Soon!</h2>
        <p className="text-xl text-gray-800 mb-8">Limited seats. Register early to secure your spot.</p>
        <a
          href="https://forms.gle/59x1zrHzSSquZoxi8"
          className="px-10 py-4 text-black font-bold text-lg bg-white rounded-xl shadow-xl hover:scale-105 transition"
        >
          Register Here →
        </a>
      </section>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 z-[9999] bg-white shadow-2xl border border-gray-200 rounded-2xl p-5 w-[320px] animate-slideUp">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold text-black">DMI Cohort-2</h3>
            <button onClick={() => setShowPopup(false)} className="text-gray-500 hover:text-black">✕</button>
          </div>

          <p className="text-gray-700 text-sm mb-4">Registrations are now open! Secure your seat for the next batch.</p>

          <a
            href="https://forms.gle/59x1zrHzSSquZoxi8"
            target="_blank"
            className="block text-center w-full py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl text-black font-semibold hover:scale-105 transition"
          >
            Register Now →
          </a>
        </div>
      )}

      <Footer />
    </div>
  );
}
