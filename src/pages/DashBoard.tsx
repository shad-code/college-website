"use client";
//import Navbar from "../components/layouts/Navar";
import Footer from "../components/layouts/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  name: string;
  email: string;
}

export default function StudentDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      router.push("/login");
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("loggedInUser");
    router.push("/");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col bg-[#071226] text-white">
       
      <div className="flex-1 max-w-6xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-yellow-400">
            Welcome, {user.name}!
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-400 transition"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md text-center hover:scale-105 transform transition">
            <h2 className="text-xl font-bold mb-2">Profile</h2>
            <p>View and edit your personal information.</p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md text-center hover:scale-105 transform transition">
            <h2 className="text-xl font-bold mb-2">Courses</h2>
            <p>Check your enrolled courses and grades.</p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md text-center hover:scale-105 transform transition">
            <h2 className="text-xl font-bold mb-2">Announcements</h2>
            <p>Stay updated with college notifications and events.</p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md text-center hover:scale-105 transform transition">
            <h2 className="text-xl font-bold mb-2">Library</h2>
            <p>Access study materials and online resources.</p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md text-center hover:scale-105 transform transition">
            <h2 className="text-xl font-bold mb-2">Events & Clubs</h2>
            <p>Participate in college events and clubs.</p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md text-center hover:scale-105 transform transition">
            <h2 className="text-xl font-bold mb-2">Feedback / Support</h2>
            <p>Submit queries or feedback to the college administration.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
