"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 bg-transparent">
        <div className="flex items-center gap-3">
          <div className="rounded-md w-10 h-10 bg-[#0A2A43] flex items-center justify-center text-white font-bold">
            PA
          </div>
          <div>
            <h1 className="text-lg font-semibold text-[#0A2A43]">PREMIER ACADEMIC</h1>
            <p className="text-xs -mt-1 text-gray-600">UNIVERSITY</p>
          </div>
        </div>

        {/* desktop links */}
        <ul className="hidden md:flex gap-6 items-center text-sm font-medium">

          {/* ✅ HOME ADDED */}
          <li>
            <Link href="/#home" className="hover:text-yellow-500">
              Home
            </Link>
          </li>

          <li>
            <Link href="/#academics" className="hover:text-yellow-500">
              Academics
            </Link>
          </li>

          <li>
            <Link href="/#faculty" className="hover:text-yellow-500">
              Faculty
            </Link>
          </li>

          <li>
            <Link href="/#admission" className="hover:text-yellow-500">
              Admission
            </Link>
          </li>

          <li>
            <Link href="/#contact" className="hover:text-yellow-500">
              Contact
            </Link>
          </li>
        </ul>

        {/* mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="toggle menu"
            className="p-2 rounded-md border border-gray-200"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow">
          <ul className="flex flex-col p-4 gap-3 text-sm">

            {/* ✅ HOME ADDED IN MOBILE MENU */}
            <li>
              <Link href="/#home" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/#academics" onClick={() => setOpen(false)}>
                Academics
              </Link>
            </li>
            <li>
              <Link href="/#faculty" onClick={() => setOpen(false)}>
                Faculty
              </Link>
            </li>
            <li>
              <Link href="/#admission" onClick={() => setOpen(false)}>
                Admission
              </Link>
            </li>
            <li>
              <Link href="/#contact" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
