"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          Oxygen Surgicals
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="hover:text-blue-600">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-blue-600">
              Login/Register
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col px-4 py-3 gap-3 text-gray-700 font-medium">
            <li>
              <Link
                href="/"
                className="hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
