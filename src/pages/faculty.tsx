import Navbar from "../components/layouts/Navar";
import Footer from "../components/layouts/Footer";
import Image from "next/image";
import Link from "next/link";

export default function FacultyPage() {
  const facultyList = [
    { src: "/01.jpg", name: "Dr. Ayesha Khan", role: "Head, Computer Science" },
    { src: "/02.jpg", name: "Prof. Rajesh Verma", role: "Mechanical Engineering" },
    { src: "/03.jpg", name: "Dr. Sneha Iyer", role: "Dean, Business School" },

    // 10 New Faculty Members
    { src: "/04.jpg", name: "Dr. Manish Rao", role: "Electronics Engineering" },
    { src: "/05.jpg", name: "Dr. Priya Kaur", role: "Civil Engineering" },
    { src: "/06.jpg", name: "Prof. Sujit Menon", role: "Mathematics Department" },
    { src: "/07.jpg", name: "Dr. Rima Das", role: "Biotechnology" },
    { src: "/08.jpg", name: "Dr. Karan Mehta", role: "Physics Department" },
    { src: "/09.jpg", name: "Prof. Anjali Deshpande", role: "Chemistry" },
    { src: "/10.jpg", name: "Dr. Varun Sharma", role: "Artificial Intelligence" },
    { src: "/11.jpg", name: "Dr. Meera Nair", role: "Psychology Department" },
    { src: "/12.jpg", name: "Prof. Imran Siddiqui", role: "IT & Networking" },
    { src: "/13.jpg", name: "Dr. Lata Singh", role: "English & Communication" },
  ];

  return (
    <div className="bg-[#071226] min-h-screen">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-24 text-white">
        <h1 className="text-4xl font-bold mb-3 text-yellow-400">Faculty Members</h1>
        <p className="text-gray-300 mb-10">
          Meet our experienced faculty who guide students with excellence and expertise.
        </p>

        {/* Faculty Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {facultyList.map((f, idx) => (
            <div
              key={idx}
              className="bg-[#081c32] rounded-xl p-6 text-center shadow-lg hover:shadow-2xl 
                         transition transform hover:-translate-y-1"
            >
              <div className="mx-auto w-28 h-28 rounded-full overflow-hidden border-4 border-[#071226] shadow-inner">
                <Image
                  src={f.src}
                  width={112}
                  height={112}
                  alt={f.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="mt-4 text-white font-semibold">{f.name}</h3>
              <p className="text-gray-300 text-sm mt-1">{f.role}</p>
            </div>
          ))}
        </div>

       <div className="text-center mt-16">
          <Link
            href="/"
            className="px-8 py-3 bg-yellow-400 text-[#0A2A43] font-semibold rounded-xl 
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
