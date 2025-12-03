import Navbar from "../components/layouts/Navar";
import Footer from "../components/layouts/Footer";
import Image from "next/image";
import Link from "next/link";

export default function FacultyPage() {
  const facultyList = [
    {
      src: "/01.jpg",
      name: "Dr. Ayesha Khan",
      role: "Head, Computer Science",
      experience: "12+ years in AI & Machine Learning",
      expertise: ["Artificial Intelligence", "Deep Learning", "DSA"],
    },
    {
      src: "/02.jpg",
      name: "Prof. Rajesh Verma",
      role: "Mechanical Engineering",
      experience: "15+ years in Automobile & Design",
      expertise: ["Thermodynamics", "Auto Engineering", "Prototyping"],
    },
    {
      src: "/03.jpg",
      name: "Dr. Sneha Iyer",
      role: "Dean, Business School",
      experience: "18+ years in Business Strategy",
      expertise: ["Marketing Analytics", "Leadership", "Corporate Strategy"],
    },
    {
      src: "/02.jpg",
      name: "Dr. Manish Rao",
      role: "Electronics Engineering",
      experience: "10+ years in Chip Design",
      expertise: ["VLSI", "Embedded Systems", "IoT Devices"],
    },
    {
      src: "/01.jpg",
      name: "Dr. Priya Kaur",
      role: "Civil Engineering",
      experience: "14+ years in Infrastructure Projects",
      expertise: ["Structural Engg", "Eco Materials", "EQ-Resistant Design"],
    },
    {
      src: "/03.jpg",
      name: "Prof. Sujit Menon",
      role: "Mathematics",
      experience: "11+ years in Applied Math",
      expertise: ["Statistics", "Modeling", "Advanced Calculus"],
    },
    {
      src: "/01.jpg",
      name: "Dr. Rima Das",
      role: "Biotechnology",
      experience: "9+ years in Genetics",
      expertise: ["Genetic Engineering", "Microbiology", "DNA Research"],
    },
    {
      src: "/02.jpg",
      name: "Dr. Karan Mehta",
      role: "Physics",
      experience: "13+ years in Quantum Research",
      expertise: ["Quantum Mechanics", "Lasers", "Nano Materials"],
    },
    {
      src: "/01.jpg",
      name: "Prof. Anjali Deshpande",
      role: "Chemistry",
      experience: "10+ years in Organic Chemistry",
      expertise: ["Organic Reactions", "Lab Safety", "Green Chemistry"],
    },
    {
      src: "/03.jpg",
      name: "Dr. Varun Sharma",
      role: "Artificial Intelligence",
      experience: "7+ years in AI Models",
      expertise: ["Neural Networks", "NLP", "AI System Design"],
    },
    {
      src: "/01.jpg",
      name: "Dr. Meera Nair",
      role: "Psychology",
      experience: "16+ years in Behavior Science",
      expertise: ["Cognitive Psychology", "Therapy", "Human Development"],
    },
    {
      src: "/02.jpg",
      name: "Prof. Imran Siddiqui",
      role: "IT & Networking",
      experience: "12+ years in Cyber Security",
      expertise: ["Security", "Cloud Systems", "Ethical Hacking"],
    },
    {
      src: "/01.jpg",
      name: "Dr. Lata Singh",
      role: "English & Communication",
      experience: "20+ years in Communication Training",
      expertise: ["Public Speaking", "Linguistics", "Professional English"],
    },
  ];

  return (
    <div className="bg-[#071226] min-h-screen">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-16 text-white">
        <h1 className="text-4xl font-bold mb-3 text-yellow-400">Faculty Members</h1>
        <p className="text-gray-300 mb-10">Meet our highly qualified faculty.</p>

        {/* Compact Faculty Cards */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {facultyList.map((f, idx) => (
            <div
              key={idx}
              className="bg-[#0c1f35] rounded-xl p-4 text-center shadow-lg border border-[#12365a]
                         hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Smaller Image */}
              <div className="mx-auto w-24 h-24 rounded-full overflow-hidden border-2 border-[#071226] shadow-md">
                <Image
                  src={f.src}
                  width={100}
                  height={100}
                  alt={f.name}
                  className="object-cover w-full h-full"
                />
              </div>

              <h3 className="mt-3 text-lg font-semibold text-white">{f.name}</h3>
              <p className="text-yellow-300 text-xs">{f.role}</p>

              <p className="text-gray-300 text-xs italic mt-2">{f.experience}</p>

              <ul className="list-disc text-left ml-5 text-gray-300 text-xs mt-3 space-y-1">
                {f.expertise.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/"
            className="px-6 py-2 bg-yellow-400 text-[#0A2A43] font-semibold rounded-xl 
            shadow hover:bg-yellow-300 hover:shadow-xl transition-all"
          >
            ← Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
