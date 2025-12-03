"use client";
import Navbar from "../components/layouts/Navar";
import Footer from "../components/layouts/Footer";
import Link from "next/link";
import jsPDF from "jspdf";

export default function AcademicsPage() {
  // PDF Generator Function
  const downloadCoursePDF = (title: string, desc: string) => {
    const doc = new jsPDF();
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(22);
    doc.text(title, 15, 20);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(14);
    doc.text(desc, 15, 40, { maxWidth: 180 });

    doc.save(`${title}.pdf`);
  };

  const courses = [
    {
      title: "Undergraduate Programs",
      desc: "B.Tech, B.Sc, BBA — modern syllabus, credits, internships, and industry projects.",
    },
    {
      title: "Postgraduate Programs",
      desc: "M.Tech, MBA, M.Sc — specialized courses, research projects, and career growth.",
    },
    {
      title: "Doctoral Research",
      desc: "PhD programs, guides, labs, funded projects, and international publications.",
    },
    {
      title: "Diploma Courses",
      desc: "Short-term diploma programs with flexible schedules for skill enhancement.",
    },
    {
      title: "Online Certification",
      desc: "Self-paced online courses with certificates to boost professional skills.",
    },
    {
      title: "Professional Training",
      desc: "Hands-on workshops, industry-ready training, and placement-focused modules.",
    },
    {
      title: "Foreign Exchange Programs",
      desc: "Study abroad opportunities, international collaborations, and MoUs.",
    },
    {
      title: "Skill Development",
      desc: "Soft skills, personality development, and placement-oriented training.",
    },
    {
      title: "Honors Program",
      desc: "Advanced learning tracks for high-performing and merit-based students.",
    },
    {
      title: "Value-Added Courses",
      desc: "Extra certifications, add-on modules, and professional seminars.",
    },
    {
      title: "Research Centers",
      desc: "AI, Robotics, Biotechnology, Innovation labs, and interdisciplinary centers.",
    },
    {
      title: "Library & Learning Resources",
      desc: "Digital library, journals, e-resources, and collaborative study spaces.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F0F6FF]">
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="relative w-full h-[75vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/college-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0A2A43]/70"></div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl font-extrabold drop-shadow-xl">
            Academics
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto font-light">
            World-class academic programs designed to shape your future with excellence.
          </p>

          <div className="mt-8">
            <a
              href="#academics"
              className="px-8 py-4 bg-[#FACC15] text-[#0A2A43] font-bold rounded-xl shadow-lg hover:bg-yellow-400 transition"
            >
              Explore Programs ↓
            </a>
          </div>
        </div>
      </section>

      {/* ACADEMICS GRID */}
      <section id="academics" className="w-full bg-[#0A1C2E] py-24 px-6">
        <h2 className="text-4xl font-extrabold text-center text-yellow-400 mb-14 drop-shadow-lg">
          Academic Offerings
        </h2>

        <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((item, index) => (
            <div
              key={index}
              className="
                p-8 rounded-2xl 
                bg-gradient-to-br from-[#0F2A45] to-[#051423]
                border border-[#1A3A5D]
                shadow-xl 
                hover:shadow-3xl hover:-translate-y-3 hover:scale-[1.02]
                transition-all duration-300
              "
            >
              <h3 className="text-2xl font-bold text-yellow-300 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* DOWNLOAD BUTTON */}
              <button
                onClick={() => downloadCoursePDF(item.title, item.desc)}
                className="mt-4 px-4 py-2 bg-yellow-500 text-[#0A2A43] font-semibold rounded-lg shadow hover:bg-yellow-400 transition"
              >
                Download PDF
              </button>

              <div className="mt-4 h-1 w-16 bg-yellow-400 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* DETAILED SECTIONS */}
        <div className="max-w-6xl mx-auto mt-20 space-y-16">

          {/* CSE SECTION */}
          <div className="bg-[#081C32] p-8 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">
              Computer Science & Engineering
            </h3>
            <p className="text-gray-300 mb-3">
              Offers B.Tech, M.Tech, and research programs with modern labs, AI & Robotics specialization, and internship opportunities.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>State-of-the-art AI and ML labs</li>
              <li>Industry collaborations for internships</li>
              <li>Research projects in Robotics, Data Science, and Software Engineering</li>
            </ul>

            {/* DOWNLOAD */}
            <button
              onClick={() =>
                downloadCoursePDF(
                  "Computer Science & Engineering",
                  "Offers B.Tech, M.Tech, and research programs with modern labs, AI & Robotics specialization, and internship opportunities."
                )
              }
              className="mt-5 px-5 py-2 bg-yellow-500 text-[#0A2A43] rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              Download PDF
            </button>
          </div>

          {/* BUSINESS SECTION */}
          <div className="bg-[#081C32] p-8 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">
              Business & Management
            </h3>
            <p className="text-gray-300 mb-3">
              MBA and BBA programs with case-study approach, entrepreneurship modules, and corporate tie-ups.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Live projects with top companies</li>
              <li>Leadership and soft skill workshops</li>
              <li>International exchange opportunities</li>
            </ul>

            {/* DOWNLOAD */}
            <button
              onClick={() =>
                downloadCoursePDF(
                  "Business & Management",
                  "MBA and BBA programs with case-study approach, entrepreneurship modules, and corporate tie-ups."
                )
              }
              className="mt-5 px-5 py-2 bg-yellow-500 text-[#0A2A43] rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              Download PDF
            </button>
          </div>

          {/* SCIENCE SECTION */}
          <div className="bg-[#081C32] p-8 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">
              Science & Research
            </h3>
            <p className="text-gray-300 mb-3">
              M.Sc, PhD, and Diploma courses in Biology, Chemistry, Physics, and interdisciplinary research.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Research centers for AI, Biotechnology, and Renewable Energy</li>
              <li>Funding for top student research projects</li>
              <li>Collaborations with international universities</li>
            </ul>

            {/* DOWNLOAD */}
            <button
              onClick={() =>
                downloadCoursePDF(
                  "Science & Research",
                  "M.Sc, PhD, and Diploma courses in Biology, Chemistry, Physics, and interdisciplinary research."
                )
              }
              className="mt-5 px-5 py-2 bg-yellow-500 text-[#0A2A43] rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              Download PDF
            </button>
          </div>
        </div>

        {/* BACK BUTTON */}
        <div className="text-center mt-20">
          <Link
            href="/"
            className="px-8 py-3 bg-yellow-400 text-[#0A2A43] font-semibold rounded-xl 
            shadow hover:bg-yellow-300 hover:shadow-xl transition-all"
          >
            ← Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
