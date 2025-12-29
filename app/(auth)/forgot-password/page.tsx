"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, KeyRound, Send } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Forgot Password Email:", email);

    // TODO: Connect with Express backend API
  };

  return (
    <div className="flex items-center justify-center px-4 pt-16 pb-20">
      <div className="w-full max-w-lg bg-white border border-gray-200 shadow-lg rounded-2xl p-8">
        {/* Heading */}
        <h2 className="text-3xl font-medium text-center mb-4 text-gray-700">
          Forgot Password?
        </h2>

        <p className="text-center text-gray-600 mb-6">
          No worries! Enter your email and we’ll send you a reset link.
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-[#0E7A80]" />
          <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
            Reset via Email
          </span>
          <div className="flex-1 h-px bg-[#0E7A80]" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-600">
              Email
            </label>

            <div className="relative">
              <Mail size={20} className="absolute left-3 top-3 text-gray-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your registered email"
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg
                           focus:ring-2 focus:ring-[#0E7A80] outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0E7A80] hover:bg-[#0a5e63]
                       text-white py-2.5 rounded-lg font-semibold transition
                       flex items-center justify-center gap-2"
          >
            <Send size={18} />
            Send Reset Link
          </button>
        </form>

        {/* Back to Login */}
        <p className="text-center text-gray-600 mt-4 flex items-center justify-center gap-1">
          <KeyRound size={16} className="text-[#0E7A80]" />
          <Link
            href="/login"
            className="text-[#0E7A80] font-semibold hover:underline"
          >
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
}
