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

// Rename Navigation → NavBar to avoid conflict
import NavBar from "./Navigation";
import Footer from "./Footer";

// ========================
// COMPONENT
// ========================
export default function DMI() {

  // 👇 ADD THIS HERE (Right after function starts)
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000); // show after 2 sec

    return () => clearTimeout(timer);
  }, []);

  // Your existing arrays

const weeks = [
  {
    week: "Week 0",
    topic: "Internet, Networking, Basic Tools, DNS, VS Code, ChatGPT for DevOps, Troubleshooting with AI"
  },
  {
    week: "Week 2",
    topic: "Linux Essentials, VM Setup, System Commands, File System, Permissions, Processes, Networking, Nginx Deployment"
  },
  {
    week: "Week 3",
    topic: "Git & GitHub – Version Control, Branching, Merging, PR Workflow, GitHub Actions Intro"
  },
  {
    week: "Week 4",
    topic: "DevOps Fundamentals + AWS Cloud: IAM, S3, EC2, VPC, Subnets, Security Groups, Hosting React App"
  },
  {
    week: "Week 6",
    topic: "Azure Cloud – VM, Networking, Storage, Database, Deploy React App, Deploy Book Review App (3-tier)"
  },
  {
    week: "Week 7",
    topic: "Terraform – Infra as Code, Providers, Variables, Modules, Multi-Cloud Infra Deployment (AWS + Azure)"
  },
  {
    week: "Week 8",
    topic: "Ansible – Configuration Management, SSH Setup, Playbooks, Roles, Full Automation with Terraform + Ansible"
  },
  {
    week: "Week 9",
    topic: "CI/CD with Azure DevOps – Build & Release Pipelines, Deploy React Apps, Full Production Pipeline"
  },
  {
    week: "Week 10",
    topic: "Docker – Containers, Dockerfile, Multi-stage Builds, Networking, Volumes, Docker Compose, App Deployment"
  },
  {
    week: "Week 11",
    topic: "Kubernetes – Architecture, Pods, ReplicaSets, Deployments, Scaling, Minikube/Kind Setup"
  },
  {
    week: "Week 12",
    topic: "Observability – Prometheus, Grafana, Node Exporter, PromQL, Docker & K8s Metrics Dashboards"
  },
  {
    week: "Week 13",
    topic: "Final Project, Interview Prep, Resume, GitHub Portfolio + Graduation 🎉"
  }
];


  const testimonials = [
    {
      name: "Anuradha Iyer",
      role: "DMI - Cohort-1",
      feedback:
        "I was selected in the top 100. I am very happy with the cohort. I got direction as to how to upskill my DevOps skills. Lots of hands on labs and assignments. The course content is very good. There is regular followup with the co-mentors. Team members helping each other. The engergy is just great. Don't miss out on this opportunity.",
      image: "https://media.licdn.com/dms/image/v2/C5103AQHZh8sVH-uNqQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1549595986002?e=1764806400&v=beta&t=EfojpBz32jRZjXXOtKxKWaUWn7yckbgSY0YqEbyBGxQ",
    },
    {
      name: "Samanta Rizzo",
      role: "DMI – Cohort-1",
      feedback:
        "Here, the mentors truly care about our growth. Pravin Mishra, Praveen Pandey, Abhishek Makwana, Manish Kumar, Wejdan Alahmari, Anisa Bibi and the entire team have guided us through tough moments and helped us build real confidence. Over the past 12 weeks, we’ve grown together as a supportive community. Even those who didn’t complete Cohort-1 aren’t left behind they joined Cohort-2, and we still check on them because we’re all in this together.",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGTSnmSulkNWw/profile-displayphoto-shrink_800_800/B4DZdU_SFIHAAc-/0/1749477566085?e=1764806400&v=beta&t=a3a2PBme1lxXAjiVoXgzD-D0VylooESu0Hr2g2aNTmY",
    },
    {
      name: "Mobarak Hosen",
      role: "DMI – Cohort-1",
      feedback:
        "I wasn’t selected in the initial 100! Then when I found its a day long session for once in every week. I get interested and involved in doing assignments while being consistent. After 2 weeks I got promoted to top 100 and everything gets changed. This cohort is free but you have to be deeply committed. For me: I really feel great to be with this community. Mentor, co-mentors, team members everyone is giving their efforts to ensure you are learning by doing not just theoretically.",
      image: "https://media.licdn.com/dms/image/v2/D5635AQGSdjVkC-S_Tg/profile-framedphoto-shrink_800_800/B56ZlDsRW0IsAg-/0/1757777303331?e=1764079200&v=beta&t=zHI2f4jT8IMzUHaPbOEaTmOgt9ZdEflTeuIGTg9Rq5U",
    },
    {
      name: "Tanisha Borana",
      role: "DMI – Cohort-1",
      feedback:
        "Truly proud to be part of Cohort 1 this program has been a transformative journey that shaped me into a more confident in DevOps and Cloud. I’m sincerely grateful for this incredible opportunity to learn and grow. A special thank you to our trainer Pravin Mishra, whose dedication and guidance made all the difference. My appreciation also goes to all the co-mentors Abhishek Makwana, Praveen Pandey specially for their constant support, and to my amazing Cohort 1 colleagues your teamwork, encouragement, and willingness to help make this journey even more meaningful.",
      image: "https://media.licdn.com/dms/image/v2/D4D35AQE_cw2j7p3YtQ/profile-framedphoto-shrink_800_800/B4DZnT8z0PIgAg-/0/1760197557940?e=1764079200&v=beta&t=_5W6tefqV9YL-rvwKjIk8LBIVce70Vumr4A002DvKA4",
    },
    {
      name: "Akintade Aduroja",
      role: "DMI – Cohort-1",
      feedback:
        "I'm very proud of the creator of this movement Pravin Mishra ,my ever dependable mentors Praveen Pandey ,Abdulrahman Al-Ahdal and others who have really given us all room to fly high in this journey ,and like they say learning never stops. Mastery is not in the multitude, but in the devotion to one motion, until it becomes the soul’s reflex.",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQE-fZe00UwyAg/profile-displayphoto-crop_800_800/B4DZlh5cHYG8AM-/0/1758284072405?e=1764806400&v=beta&t=FfSQWxuvAQewsipl5-0kjALqX6vfMMSmYMmxh3uRYTc",
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

      {/* HERO */}
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

      {/* WEEK TIMELINE */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">12-Week DevOps Roadmap</h2>

        <div className="relative border-l-4 border-yellow-400 ml-6">
          {weeks.map((w, i) => (
            <div
              key={i}
              className="mb-12 relative pl-10"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className="absolute -left-3 top-2 w-6 h-6 bg-yellow-400 border-4 border-white rounded-full shadow-lg"></div>

              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
                <h3 className="text-2xl font-bold text-black mb-2">{w.week}</h3>
                <p className="text-gray-700 text-lg">{w.topic}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL SLIDER */}
      <section className="py-24 bg-gray-100 px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-black" data-aos="fade-up">
          What Students Say
        </h2>

        <div className="max-w-5xl mx-auto relative">

          {/* Custom Buttons */}
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
                <div
                  data-aos="fade-up"
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition"
                >
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

        {/* Custom Arrow Styles */}
        <style>{`
          .custom-swiper-btn {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.4);
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 215, 0, 0.4);
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 20;
            cursor: pointer;
            transition: 0.3s;
          }

          .custom-swiper-btn:hover {
            background: rgba(255, 215, 0, 0.9);
            border-color: #facc15;
            box-shadow: 0 0 20px rgba(255, 200, 0, 0.8);
          }

          .swiper-button-prev.custom-swiper-btn::after,
          .swiper-button-next.custom-swiper-btn::after {
            font-size: 18px;
            font-weight: bold;
            color: black;
          }

          .swiper-button-prev.custom-swiper-btn {
            left: -20px;
          }
          .swiper-button-next.custom-swiper-btn {
            right: -20px;
          }

          @media (max-width: 640px) {
            .custom-swiper-btn {
              display: none;
            }
          }
        `}</style>
      </section>

      {/* OUTCOMES */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Successful Outcomes</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {outcomes.map((o, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="p-6 bg-white shadow-lg border rounded-xl text-center text-lg font-semibold hover:scale-105 hover:shadow-2xl transition"
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
          href="https://forms.gle/59x1zrHzSSquZoxi8"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 text-black font-bold text-lg bg-white rounded-xl shadow-xl hover:scale-105 transition"
        >
          Register Here →
        </a>
      </section>

      {/* COHORT 2 POPUP */}
{showPopup && (
  <div
    className="
      fixed bottom-6 right-6 z-[9999]
      bg-white shadow-2xl border border-gray-200
      rounded-2xl p-5 w-[320px]
      animate-slideUp
    "
  >
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-xl font-bold text-black">DMI Cohort-2</h3>
      <button
        onClick={() => setShowPopup(false)}
        className="text-gray-500 hover:text-black"
      >
        ✕
      </button>
    </div>

    <p className="text-gray-700 text-sm mb-4">
      Registrations are now open! Secure your seat for the next batch.
    </p>

    <a
      href="https://forms.gle/59x1zrHzSSquZoxi8"
      target="_blank"
      rel="noopener noreferrer"
      className="
        block text-center w-full py-3
        bg-gradient-to-r from-yellow-400 to-yellow-500
        rounded-xl text-black font-semibold
        hover:scale-105 transition
      "
    >
      Register Now →
    </a>
  </div>
)}


      {/* FOOTER */}
      <Footer />
    </div>
  );
}
<style>{`
  @keyframes slideUp {
    0% { opacity: 0; transform: translateY(40px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-slideUp {
    animation: slideUp 0.6s ease-out forwards;
  }
`}</style>
