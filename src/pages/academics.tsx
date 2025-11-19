import Navbar from "../components/layouts/Navar";
import Footer from "../components/layouts/Footer";
import Link from "next/link";

export default function AcademicsPage() {
  const courses = [
    { title: "Undergraduate Programs", desc: "B.Tech, B.Sc, BBA, course structure, credits and internships." },
    { title: "Postgraduate Programs", desc: "M.Tech, MBA, M.Sc, specializations and project work." },
    { title: "Doctoral Research", desc: "PhD admissions, guides, labs and research publications." },
    { title: "Diploma Courses", desc: "Short-term diploma programs and flexible learning modules." },
    { title: "Online Certification", desc: "Self-paced certified online courses for skills and careers." },
    { title: "Professional Training", desc: "Industry-ready training with hands-on workshops." },
    { title: "Foreign Exchange Programs", desc: "Study abroad opportunities and international MoUs." },
    { title: "Skill Development", desc: "Placement-oriented training and soft skills development." },
    { title: "Honors Program", desc: "Advanced learning path for high-performing students." },
    { title: "Value-Added Courses", desc: "Extra certification, add-on modules and seminars." },
    { title: "Research Centers", desc: "AI, Robotics, Biotechnology and Innovation centers." },
    { title: "Library & Learning Resources", desc: "Digital library, journals and study spaces." },
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

      {/* ACADEMICS GRID – DARK BLUE & YELLOW */}
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

              <div className="mt-4 h-1 w-16 bg-yellow-400 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* BACK BUTTON */}
        <div className="text-center mt-16">
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
