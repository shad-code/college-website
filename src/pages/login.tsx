"use client";
import Navbar from "../components/layouts/Navar";
import Footer from "../components/layouts/Footer";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface User {
  name: string;
  email: string;
  password: string;
}

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter();

  useEffect(() => {
    // Clear any previous login
    sessionStorage.removeItem("loggedInUser");
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const storedUser = sessionStorage.getItem("user");
    if (!storedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    const user: User = JSON.parse(storedUser);
    if (formData.email === user.email && formData.password === user.password) {
      sessionStorage.setItem("loggedInUser", JSON.stringify(user));
      alert("Login successful!");
      router.push("/DashBoard");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#071226] text-white">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <form
          onSubmit={handleLogin}
          className="bg-white/10 p-10 rounded-xl w-full max-w-md backdrop-blur-md"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
            Login
          </h2>

          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-3 rounded bg-white/20 border border-yellow-400 text-white"
          />

          <input
            name="password"
            type="password"
            required
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-3 rounded bg-white/20 border border-yellow-400 text-white"
          />

          <button className="w-full bg-yellow-400 py-3 rounded-lg text-black font-bold hover:bg-yellow-300 transition">
            Login
          </button>

          <p className="text-center mt-4 text-gray-300">
            Don't have an account?{" "}
            <Link href="/signup" className="text-yellow-400">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}
