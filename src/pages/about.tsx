// pages/about.tsx
"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-6 bg-[#071a2c]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">About Us</h2>
          <p className="text-gray-300 mb-6">
            Premier Academic University has been a leader in education for over 25 years. We provide
            research-led teaching, industry collaboration, and a supportive campus environment.
          </p>
          <ul className="space-y-3 text-gray-300">
            <li>• 25+ years of academic excellence</li>
            <li>• Strong industry partnerships & placements</li>
            <li>• International research collaborations</li>
          </ul>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/About.jpg"
            width={900}
            height={600}
            alt="About campus"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
