"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Menu, X, User } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Oxygen Surgicals
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/shop" className="hover:text-blue-600">
            Shop
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
        </div>

        {/* Right side (Login + Cart Icon) */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <Link
            href="/login"
            className="flex items-center gap-1 hover:text-blue-600"
          >
            <User size={20} />
            <span>Login/Register</span>
          </Link>

          <Link href="/cart" className="hover:text-blue-600 relative">
            <ShoppingCart size={22} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-4 py-3 gap-3 text-gray-700 font-medium">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            href="/shop"
            onClick={() => setOpen(false)}
            className="hover:text-blue-600"
          >
            Shop
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="hover:text-blue-600"
          >
            About
          </Link>

          {/* Login */}
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="hover:text-blue-600 flex items-center gap-2"
          >
            <User size={20} /> Login/Register
          </Link>

          {/* Cart Icon */}
          <Link
            href="/cart"
            onClick={() => setOpen(false)}
            className="hover:text-blue-600 flex items-center gap-2"
          >
            <ShoppingCart size={20} /> Cart
          </Link>
        </ul>
      </div>
    </nav>
  );
}
