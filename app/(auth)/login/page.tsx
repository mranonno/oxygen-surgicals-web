"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, KeyRound, LogIn } from "lucide-react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data:", form);
  };

  return (
    <div className=" flex items-center justify-center px-4  pt-24 pb-28">
      <div className="w-full max-w-lg bg-white border border-gray-200 shadow-xl rounded-2xl p-8 sm:p-10">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Welcome Back 👋
        </h2>
        <p className="text-sm text-center text-gray-500 mt-1">
          Please login to continue
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-[#0E7A80]/40"></div>
          <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
            Login with your Email
          </span>
          <div className="flex-1 h-px bg-[#0E7A80]/40"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Email
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={form.email}
                placeholder="Enter your email"
                required
                aria-label="Email"
                className="w-full h-11 pl-10 pr-4 border border-gray-200 rounded-lg
                           focus:ring-2 focus:ring-[#0E7A80]/40 focus:border-[#0E7A80]
                           outline-none transition"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Password
            </label>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type={showPass ? "text" : "password"}
                name="password"
                onChange={handleChange}
                value={form.password}
                placeholder="Enter your password"
                required
                aria-label="Password"
                className="w-full h-11 pl-10 pr-10 border border-gray-200 rounded-lg
                           focus:ring-2 focus:ring-[#0E7A80]/40 focus:border-[#0E7A80]
                           outline-none transition"
              />

              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                aria-label="Toggle password visibility"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
              >
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Forgot password */}
            <div className="flex justify-end items-center gap-1 mt-2">
              <KeyRound size={14} className="text-[#0E7A80]" />
              <Link
                href="/forgot-password"
                className="text-sm text-[#0E7A80] hover:underline font-medium"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-11 bg-[#0E7A80] hover:bg-[#0a5e63]
                       text-white rounded-lg font-semibold
                       transition flex items-center justify-center gap-2
                       active:scale-[0.98]"
          >
            <LogIn size={18} />
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-[#0E7A80] font-semibold hover:underline"
          >
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
}
