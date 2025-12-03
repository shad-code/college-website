"use client";

import Navbar from "../components/layouts/Navar";
import Footer from "../components/layouts/Footer";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface User {
  name: string;
  email: string;
  password: string;
}

export default function SignupPage() {
  const [formData, setFormData] = useState<User>({ name: "", email: "", password: "" });
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send user data to API to email you
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("Signup successful! You will receive admin notification.");
      sessionStorage.setItem("user", JSON.stringify(formData));
      router.push("/login");
    } else {
      alert("Signup failed: " + data.error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#071226] text-white">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <form
          onSubmit={handleSignup}
          className="bg-white/10 p-10 rounded-xl w-full max-w-md backdrop-blur-md"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
            Sign Up
          </h2>

          <input
            name="name"
            type="text"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-3 rounded bg-white/20 border border-yellow-400 text-white"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-3 rounded bg-white/20 border border-yellow-400 text-white"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-3 rounded bg-white/20 border border-yellow-400 text-white"
          />

          <button className="w-full bg-yellow-400 py-3 rounded-lg text-black font-bold hover:bg-yellow-300 transition">
            Sign Up
          </button>

          <p className="text-center mt-4 text-gray-300">
            Already have an account?{" "}
            <Link href="/login" className="text-yellow-400">
              Login
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}
