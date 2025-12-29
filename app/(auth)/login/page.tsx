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
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>

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
                name="email"
                onChange={handleChange}
                value={form.email}
                placeholder="Enter your email"
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-200 focus:border-none rounded-lg focus:ring-2 focus:ring-[#0E7A80] outline-none"
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
                onChange={handleChange}
                value={form.password}
                placeholder="Enter your password"
                required
                className="w-full pl-10 pr-10 py-2 border border-gray-200 focus:border-none rounded-lg focus:ring-2 focus:ring-[#0E7A80] outline-none"
              />

              {/* Show / Hide Password */}
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Forgot Password */}
            <div className="text-right mt-2 flex items-center justify-end gap-1">
              <KeyRound size={16} className="text-[#0E7A80]" />
              <Link
                href="/forgot-password"
                className="text-sm text-[#0E7A80] hover:underline font-medium"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0E7A80] 
                       hover:bg-[#0a5e63] text-white py-2.5 rounded-lg font-semibold transition flex items-center justify-center gap-2"
          >
            <LogIn size={20} />
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-[#0E7A80] font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
