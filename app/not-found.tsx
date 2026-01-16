"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className=" flex items-center justify-center pt-38 pb-42 ">
      <div className="max-w-lg w-full text-center  rounded-2xl p-8 md:p-10">
        {/* 404 Number */}
        <h1 className="text-[96px] leading-none font-extrabold text-[#0E7A80]/20">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-2 text-gray-500">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-2.5
                       rounded-md bg-[#0E7A80] text-white font-medium
                       hover:bg-[#0a5e63] transition"
          >
            <Home size={18} />
            Go Home
          </Link>

          <button
            onClick={() => history.back()}
            className="inline-flex items-center gap-2 px-6 py-2.5
                       rounded-md border border-gray-300 text-gray-700
                       hover:bg-gray-100 transition"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        {/* Optional Footer Text */}
        <p className="mt-8 text-xs text-gray-400">
          If you think this is a mistake, please contact support.
        </p>
      </div>
    </div>
  );
}
