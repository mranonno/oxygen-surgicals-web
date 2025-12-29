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
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-600">
              Full Name
            </label>

            <div className="relative">
              <User size={20} className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg
                           focus:ring-2 focus:ring-[#0E7A80] outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-600">
              Email
            </label>

            <div className="relative">
              <Mail size={20} className="absolute left-3 top-3 text-gray-500" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg
                           focus:ring-2 focus:ring-[#0E7A80] outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium text-gray-600">
              Password
            </label>

            <div className="relative">
              <Lock size={20} className="absolute left-3 top-3 text-gray-500" />
              <input
                type={showPass ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
                className="w-full pl-10 pr-10 py-2 border border-gray-200 rounded-lg
                           focus:ring-2 focus:ring-[#0E7A80] outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 font-medium text-gray-600">
              Confirm Password
            </label>

            <div className="relative">
              <Lock size={20} className="absolute left-3 top-3 text-gray-500" />
              <input
                type={showConfirmPass ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Repeat your password"
                required
                className="w-full pl-10 pr-10 py-2 border border-gray-200 rounded-lg
                           focus:ring-2 focus:ring-[#0E7A80] outline-none"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showConfirmPass ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-[#0E7A80] hover:bg-[#0a5e63]
                       text-white py-2.5 rounded-lg font-semibold transition
                       flex items-center justify-center gap-2"
          >
            <UserPlus size={20} />
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#0E7A80] font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
