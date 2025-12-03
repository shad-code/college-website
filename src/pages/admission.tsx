"use client";
import { useState } from "react";
import Navbar from "../components/layouts/Navar";
import Footer from "../components/layouts/Footer";

export default function AdmissionFormPage() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;

  const photo = (form.elements.namedItem("photo") as HTMLInputElement)?.files?.[0];
  if (photo && photo.size > 1024 * 1024) { // 1MB limit
    alert("Photo size cannot exceed 1MB");
    return;
  }

  // Send only form fields (excluding photo)
  const data = {
    fullName: (form.elements.namedItem("fullName") as HTMLInputElement).value,
    email: (form.elements.namedItem("email") as HTMLInputElement).value,
    phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
    gender: (form.elements.namedItem("gender") as HTMLSelectElement).value,
    dob: (form.elements.namedItem("dob") as HTMLInputElement).value,
    address: (form.elements.namedItem("address") as HTMLTextAreaElement).value,
    course: (form.elements.namedItem("course") as HTMLSelectElement).value,
  };

  const response = await fetch("/api/admission", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    setShowPopup(true);
    form.reset();
  } else {
    alert("Something went wrong!");
  }
};


  return (
    <div className="bg-[#071226] min-h-screen text-white relative">
      <Navbar />

      {showPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white text-black p-8 rounded-2xl shadow-2xl max-w-sm text-center animate-fadeIn">
            <h2 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h2>
            <p className="text-gray-700 mb-6">
              Your admission form has been successfully submitted.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-6 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-3 text-yellow-400 text-center">
          College Admission Form
        </h1>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-10">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label className="block font-semibold mb-2 text-yellow-300">Full Name</label>
              <input
                name="fullName"
                type="text"
                className="w-full bg-white/20 border border-yellow-300/40 px-4 py-3 rounded-xl text-white"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-2 text-yellow-300">Email</label>
              <input
                name="email"
                type="email"
                className="w-full bg-white/20 border border-yellow-300/40 px-4 py-3 rounded-xl text-white"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-2 text-yellow-300">Phone Number</label>
              <input
                name="phone"
                type="text"
                className="w-full bg-white/20 border border-yellow-300/40 px-4 py-3 rounded-xl text-white"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-2 text-yellow-300">Gender</label>
              <select
                name="gender"
                className="w-full bg-white/20 border border-yellow-300/40 px-4 py-3 rounded-xl text-white"
                required
              >
                <option className="text-black" value="">Select gender</option>
                <option className="text-black" value="Male">Male</option>
                <option className="text-black" value="Female">Female</option>
                <option className="text-black" value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2 text-yellow-300">Date of Birth</label>
              <input
                name="dob"
                type="date"
                className="w-full bg-white/20 border border-yellow-300/40 px-4 py-3 rounded-xl text-white"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-2 text-yellow-300">Address</label>
              <textarea
                name="address"
                className="w-full bg-white/20 border border-yellow-300/40 px-4 py-3 rounded-xl text-white"
                rows={3}
                placeholder="Enter your full address"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-2 text-yellow-300">Select Course</label>
              <select
                name="course"
                className="w-full bg-white/20 border border-yellow-300/40 px-4 py-3 rounded-xl text-white"
                required
              >
                <option className="text-black" value="">Choose a course</option>
                <option className="text-black" value="B.Tech">B.Tech</option>
                <option className="text-black" value="BBA">BBA</option>
                <option className="text-black" value="BCA">BCA</option>
                <option className="text-black" value="MBA">MBA</option>
                <option className="text-black" value="MCA">MCA</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2 text-yellow-300">Upload Photo</label>
              <input
                name="photo"
                type="file"
                className="w-full bg-white/20 border border-yellow-300/40 px-3 py-3 rounded-xl text-white"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-3 rounded-xl text-lg font-semibold hover:bg-yellow-300 transition"
            >
              Submit Admission Form
            </button>
          </form>
        </div>

        <div className="text-center mt-12">
          <a
            href="/"
            className="px-8 py-3 bg-white/20 border border-yellow-300 text-yellow-300 
                       rounded-xl shadow hover:bg-white/30 transition-all"
          >
            ← Back to Home
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
