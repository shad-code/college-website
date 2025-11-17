"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Logo + Title */}
        <div>
          <h2 className="text-2xl font-semibold text-white">Premier College</h2>
          <p className="mt-3">
            Empowering students with quality education and modern resources.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/admissions" className="hover:text-white">Admissions</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Academics */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Academics</h3>
          <ul className="space-y-2">
            <li><Link href="/departments" className="hover:text-white">Departments</Link></li>
            <li><Link href="/courses" className="hover:text-white">Programs</Link></li>
            <li><Link href="/library" className="hover:text-white">Library</Link></li>
            <li><Link href="/research" className="hover:text-white">Research</Link></li>
          </ul>
        </div>

        {/* Contact Info + simple social icons (inline SVG) */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 mb-4">
            <li>📍 Hyderabad, India</li>
            <li>📞 +91 98765 43210</li>
            <li>📧 info@premiercollege.edu</li>
          </ul>

          <div className="flex gap-3">
            {/* Example small inline SVG icon links */}
            <a href="#" aria-label="YouTube" className="hover:opacity-80">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300">
                <path d="M10 15l5-3-5-3v6z"/><path d="M21 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C15.6 4.6 12 4.6 12 4.6s-3.6 0-6.1.5c-.4.1-1.3.1-2.1.9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.6C2 14.4 2.2 16 2.2 16s.2 1.4.8 2c.8.8 1.8.8 2.3.9 1.7.2 7.4.5 7.4.5s3.6 0 6.1-.5c.4-.1 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6C22 9.6 21 8 21 8z"/>
              </svg>
            </a>

            <a href="#" aria-label="LinkedIn" className="hover:opacity-80">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.98h4V24h-4zM8.98 8.98h3.84v2.06h.05c.54-1.02 1.86-2.06 3.84-2.06 4.11 0 4.87 2.7 4.87 6.21V24h-4v-7.07c0-1.69-.03-3.87-2.36-3.87-2.36 0-2.72 1.84-2.72 3.75V24h-4z"/>
              </svg>
            </a>

            <a href="#" aria-label="Instagram" className="hover:opacity-80">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM18.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400">
        © {new Date().getFullYear()} Premier College. All Rights Reserved.
      </div>
    </footer>
  );
}
