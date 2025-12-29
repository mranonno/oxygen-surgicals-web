"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Mail, Lock, Eye, EyeOff, UserPlus } from "lucide-react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Register Data:", form);
  };

  return (
    <div className="flex items-center justify-center px-4 pt-8 pb-12">
      <div className="w-full max-w-lg bg-white border border-gray-200 shadow-xl rounded-2xl p-8 sm:p-10">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Create Account 🚀
        </h2>
        <p className="text-sm text-center text-gray-500 mt-1">
          Join us and start shopping smarter
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-[#0E7A80]/40"></div>
          <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
            Register with your Email
          </span>
          <div className="flex-1 h-px bg-[#0E7A80]/40"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Full Name
            </label>

            <div className="relative">
              <User
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full h-11 pl-10 pr-4 border border-gray-200 rounded-lg
                           focus:ring-2 focus:ring-[#0E7A80]/40 focus:border-[#0E7A80]
                           outline-none transition"
              />
            </div>
          </div>

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
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
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
                value={form.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
                className="w-full h-11 pl-10 pr-10 border border-gray-200 rounded-lg
                           focus:ring-2 focus:ring-[#0E7A80]/40 focus:border-[#0E7A80]
                           outline-none transition"
              />

              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2
                           text-gray-400 hover:text-gray-600 transition"
              >
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Confirm Password
            </label>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type={showConfirmPass ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Repeat your password"
                required
                className="w-full h-11 pl-10 pr-10 border border-gray-200 rounded-lg
                           focus:ring-2 focus:ring-[#0E7A80]/40 focus:border-[#0E7A80]
                           outline-none transition"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2
                           text-gray-400 hover:text-gray-600 transition"
              >
                {showConfirmPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
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
            <UserPlus size={18} />
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#0E7A80] font-semibold hover:underline"
          >
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
}
