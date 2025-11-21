"use client";
import Link from "next/link";

import Image from "next/image";
import Footer from "../components/layouts/Footer";
import NoticeBoard from "../components/sections/NoticeBoard";
import { useEffect } from "react";
import TestimonialCard from "@/components/ui/TestimonialCard";
import about from "../pages/about"
import AboutSection from "../pages/about";

export default function Home() {
  // if user navigated from another page with hash, smooth-scroll to it
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="w-full min-h-screen bg-[#071226] text-gray-100 antialiased">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <div className="w-10 h-10 rounded-md bg-gradient-to-tr from-yellow-400 to-yellow-600 flex items-center justify-center text-[#071226] font-bold">
              PA
            </div>
            <div>
              <h1 className="text-lg font-semibold text-white">PREMIER ACADEMIC</h1>
              <p className="text-xs -mt-1 text-gray-300">UNIVERSITY</p>
            </div>
          </div>

          <ul className="hidden md:flex gap-6 items-center text-sm">
            <li
              className="cursor-pointer hover:text-yellow-400 transition"
              onClick={() => scrollToSection("home")}
            >
              Home
            </li>
            <li
              className="cursor-pointer hover:text-yellow-400 transition"
              onClick={() => scrollToSection("admissions")}
            >
              Admissions
            </li>
            <li
              className="cursor-pointer hover:text-yellow-400 transition"
              onClick={() => scrollToSection("academics")}
            >
              Academics
            </li>
            <li
              className="cursor-pointer hover:text-yellow-400 transition"
              onClick={() => scrollToSection("faculty")}
            >
              Faculty
            </li>
            <li
              className="cursor-pointer hover:text-yellow-400 transition"
              onClick={() => scrollToSection("campus")}
            >
              Campus Life
            </li>
            <li
              className="cursor-pointer hover:text-yellow-400 transition"
              onClick={() => scrollToSection("about")}
            >
              About
            </li>
            <li
              className="cursor-pointer hover:text-yellow-400 transition"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </li>
          </ul>

          {/* mobile menu (simple) */}
          <div className="md:hidden">
            <select
              onChange={(e) => {
                const id = e.target.value;
                if (id) scrollToSection(id);
              }}
              className="bg-[#0b2440] text-gray-200 px-3 py-2 rounded"
              defaultValue=""
            >
              <option value="" disabled>
                Menu
              </option>
              <option value="home">Home</option>
              <option value="admissions">Admissions</option>
              <option value="academics">Academics</option>
              <option value="faculty">Faculty</option>
              <option value="campus">Campus Life</option>
              <option value="about">About</option>
              <option value="contact">Contact</option>
            </select>
          </div>
        </div>
      </nav>

      {/* HERO */}
<header id="home" className="relative w-full h-[84vh] pt-20">
  <div className="absolute inset-0">
    <Image src="/college.png" alt="Campus" fill className="object-cover brightness-75" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#071226]/80 via-transparent to-[#071226]/60" />
  </div>

  <div className="relative max-w-6xl mx-auto px-6 flex items-center h-full">
    {/* Hero Text */}
    <div className="max-w-2xl text-white">
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow">
        Premier Academic University
      </h1>
      <p className="mt-4 text-lg text-gray-200/90 max-w-xl">
        Excellence in education, research, and leadership — join a community that shapes
        the future.
      </p>

      <div className="mt-8 flex gap-4">
        <button
          onClick={() => scrollToSection("admissions")}
          className="bg-yellow-400 hover:bg-yellow-500 text-[#071226] font-semibold px-6 py-3 rounded-lg shadow-lg transition transform hover:-translate-y-0.5"
        >
          Apply Now
        </button>

        <button
          onClick={() => scrollToSection("about")}
          className="border border-gray-400 text-white px-6 py-3 rounded-lg hover:bg-white/5 transition"
        >
          Learn About Us
        </button>
      </div>
    </div>

    {/* Notice Board on large screens */}
    <div className="hidden lg:block ml-auto">
      <NoticeBoard />
    </div>
  </div>
</header>


      {/* ADMISSIONS WITH IMAGES */}
<section id="admissions" className="py-16 px-6 bg-[#071a2c]">
  <div className="max-w-6xl mx-auto">
    <div className="flex items-center justify-between mb-8">
      <div>
        <h2 className="text-3xl font-bold text-white">Admissions</h2>
        <p className="text-gray-300 mt-2 max-w-2xl">
          Learn about eligibility, deadlines, scholarships and join the next batch of leaders.
        </p>
      </div>
      <div>
        <button
          className="bg-yellow-400 text-[#071226] px-4 py-2 rounded-lg font-medium hover:bg-yellow-500 transition"
          onClick={() => scrollToSection("admissions")}
        >
          Apply Now
        </button>
      </div>
    </div>

    <div className="grid md:grid-cols-4 gap-6">
      {["/a1.jpg", "/a2.jpg", "/a3.jpg", "/a4.jpg"].map((src, idx) => (
        <div
          key={src}
          className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
        >
          <Image
            src={src}
            width={600}
            height={420}
            alt={`Admission ${idx + 1}`}
            className="object-cover w-full h-48"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
            <div>
              <h4 className="text-white font-semibold">Open Day {idx + 1}</h4>
              <p className="text-gray-300 text-sm">Campus tour • Scholarship info • Meet faculty</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ACADEMICS WITH ICONS */}
<section id="academics" className="py-16 px-6 bg-[#071226]">
  <div className="max-w-6xl mx-auto">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-3xl font-bold text-white">Academics</h2>

      {/* SEE MORE BUTTON — Added Here */}
      <Link
        href="/academics"
        className="bg-yellow-400 text-[#071226] px-5 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition shadow-lg"
      >
        See More →
      </Link>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      <article className="bg-[#081c32] p-6 rounded-lg shadow hover:shadow-2xl transition transform hover:scale-[1.02]">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-600 flex items-center justify-center">
            <Image src="/icons/grad.png" alt="UG" width={36} height={36} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Undergraduate</h3>
            <p className="text-gray-300 text-sm mt-1">
              Bachelors with modern syllabus, industry projects and internships.
            </p>
          </div>
        </div>
      </article>

      <article className="bg-[#081c32] p-6 rounded-lg shadow hover:shadow-2xl transition transform hover:scale-[1.02]">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-600 flex items-center justify-center">
            <Image src="/icons/master.png" alt="PG" width={36} height={36} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Postgraduate</h3>
            <p className="text-gray-300 text-sm mt-1">
              Specialized masters with research & industry tie-ups.
            </p>
          </div>
        </div>
      </article>

      <article className="bg-[#081c32] p-6 rounded-lg shadow hover:shadow-2xl transition transform hover:scale-[1.02]">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-600 flex items-center justify-center">
            <Image src="/icons/research.png" alt="Research" width={36} height={36} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Research</h3>
            <p className="text-gray-300 text-sm mt-1">
              PhD programs, funded projects and labs.
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>


     {/* FACULTY WITH SEE MORE BUTTON + IMAGES */}
<section id="faculty" className="py-16 px-6 bg-[#071a2c]">
  <div className="max-w-6xl mx-auto">

    {/* TITLE + SEE MORE BUTTON */}
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-3xl font-bold text-white">Faculty</h2>

      <Link
        href="/faculty"
        className="bg-yellow-400 text-[#071226] px-5 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition shadow-lg"
      >
        See More →
      </Link>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        { src: "/01.jpg", name: "Dr. Ayesha Khan", role: "Head, Computer Science" },
        { src: "/02.jpg", name: "Prof. Rajesh Verma", role: "Mechanical Engineering" },
        { src: "/03.jpg", name: "Dr. Sneha Iyer", role: "Dean, Business School" },
      ].map((f) => (
        <div
          key={f.src}
          className="bg-[#081428] rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
        >
          <div className="mx-auto w-28 h-28 rounded-full overflow-hidden border-4 border-[#071226] shadow-inner">
            <Image src={f.src} width={112} height={112} alt={f.name} className="object-cover" />
          </div>
          <h3 className="mt-4 text-white font-semibold">{f.name}</h3>
          <p className="text-gray-300 text-sm mt-1">{f.role}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* CAMPUS LIFE (gallery) */}
      <section id="campus" className="py-16 px-6 bg-[#071226]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Campus Life</h2>
          <p className="text-gray-300 max-w-2xl mb-8">
            Student clubs, festivals, sports and everyday moments — explore campus life at Premier Academic.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {["/c1.jpg", "/c2.jpg", "/c3.jpg", "/c4.jpg"].map((src) => (
              <div
                key={src}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-[1.02]"
              >
                <Image src={src} width={400} height={280} alt="Campus" className="object-cover w-full h-48" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
<section id="testimonials" className="py-16 px-6 bg-[#071226]">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl font-bold text-white mb-2">What Our Students Say</h2>
    <p className="text-gray-300 mb-10 max-w-2xl">
      Hear real experiences from students who are part of our academic community.
    </p>

    <div className="grid md:grid-cols-3 gap-8">
      
      <TestimonialCard
        img="/user1.jpg"
        name="Aarav Sharma"
        role="B.Tech Student"
        message="The faculty and environment helped me grow both academically and personally. Truly a great learning space."
      />

      <TestimonialCard
        img="/user2.jpg"
        name="Fatima Noor"
        role="MBA Student"
        message="The business school provides excellent industry exposure and placements. Amazing experience!"
      />

      <TestimonialCard
        img="/user3.jpg"
        name="Rohan Das"
        role="B.Sc Student"
        message="Labs, curriculum, clubs — everything is built to help students succeed. Highly recommended!"
      />
    </div>
    
  </div>
</section>


       
       <AboutSection />

      {/* CONTACT WITH ICONS + MAP + FORM */}
      <section id="contact" className="py-16 px-6 bg-[#071226]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-4">
              Reach out for admissions, collaborations, or general enquiries.
            </p>

            <div className="space-y-3 text-gray-200 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-yellow-400">📧</span>
                <span>contact@premieruniversity.edu</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-yellow-400">☎</span>
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-yellow-400">📍</span>
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>

            <form className="bg-[#081428] p-4 rounded-lg shadow-inner">
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  className="bg-[#071226] text-gray-200 px-3 py-2 rounded border border-[#0f2338]"
                  placeholder="Your name"
                />
                <input
                  className="bg-[#071226] text-gray-200 px-3 py-2 rounded border border-[#0f2338]"
                  placeholder="Email"
                />
              </div>

              <textarea
                className="w-full mt-3 bg-[#071226] text-gray-200 px-3 py-2 rounded border border-[#0f2338]"
                placeholder="Message"
                rows={4}
              />

              <div className="mt-3">
                <button className="bg-yellow-400 text-[#071226] px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src="/map.jpg" width={900} height={600} alt="Map" className="object-cover w-full h-full" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
