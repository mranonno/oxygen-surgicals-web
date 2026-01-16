"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, User, Search, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const totalItems = useCartStore((s) => s.totalItems());

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto  py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo/oxygensurgicals.png"
            alt="Oxygen Surgicals Logo"
            width={48}
            height={48}
            priority
          />
          <span className="text-2xl flex flex-col text-start font-bold bg-linear-to-r from-[#0E7A80] to-[#27568D] bg-clip-text text-transparent">
            OXYGEN
            <span className="text-2xl font-bold bg-linear-to-r from-[#0E7A80] to-[#27568D] bg-clip-text text-transparent -mt-1 text-center">
              SURGICALS
            </span>
          </span>
        </Link>

        {/* Search - Desktop */}
        <div className="hidden md:block flex-1 max-w-lg relative">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full h-11 rounded-3xl pl-5 pr-12 bg-gray-100 border border-gray-300 
            focus:outline-none focus:border-[#137577] focus:ring-1 focus:ring-[#137577]/40 
            text-gray-700 placeholder:text-gray-400 transition-all duration-300 ease-in-out"
          />
          <button
            aria-label="Search"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700 p-2 rounded-full"
          >
            <Search className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Right Side - Desktop */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <Link
            href="/login"
            className="flex items-center gap-1 hover:text-[#137577]"
          >
            <User size={20} /> Login/Register
          </Link>

          <Link href="/cart" className="relative hover:text-[#137577]">
            <ShoppingBag size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Toggle */}
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
          {/* Mobile Search */}
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full h-10 rounded-xl pl-4 pr-10 bg-gray-100 border border-gray-300"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
          </div>

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="hover:text-[#137577]"
          >
            Home
          </Link>
          <Link
            href="/shop"
            onClick={() => setOpen(false)}
            className="hover:text-[#137577]"
          >
            Shop
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="hover:text-[#137577]"
          >
            About
          </Link>
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 hover:text-[#137577]"
          >
            <User size={20} /> Login/Register
          </Link>

          <Link
            href="/cart"
            onClick={() => setOpen(false)}
            className="flex items-center relative gap-2 hover:text-[#137577]"
          >
            <ShoppingBag size={20} /> Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                {totalItems}
              </span>
            )}
          </Link>
        </ul>
      </div>
    </nav>
  );
}
