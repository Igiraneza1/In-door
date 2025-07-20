"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import chair from "../../../public/image/Living-room/chair1.png";

export default function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<{
    type: "error" | "success";
    text: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!email || !password) {
      setMessage({
        type: "error",
        text: "Please enter both email and password.",
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://elegant-be.onrender.com/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Invalid credentials.");
      }

      // ✅ Save token and role
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role); // role could be 'admin' or 'user'

      setMessage({ type: "success", text: "Login successful! Redirecting..." });

      setTimeout(() => {
        if (data.role === "admin") {
          router.push("/admin-dashboard");
        } else {
          router.push("/inDoor");
        }
      }, 1200);
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      setMessage({ type: "error", text: errorMsg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 rounded-lg shadow-lg max-w-4xl w-full">
        {/* Image */}
        <div className="flex items-center justify-center">
          <Image
            src={chair}
            alt="Chair"
            width={500}
            height={400}
            className="rounded-lg object-contain"
            priority
          />
        </div>

        {/* Form */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Sign In</h1>
          <p className="text-gray-500 mb-6">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-green-600 hover:underline">
              Sign up here
            </Link>
          </p>

          {/* Message */}
          {message && (
            <p
              className={`mb-4 text-sm text-center font-medium ${
                message.type === "error" ? "text-red-500" : "text-green-600"
              }`}
            >
              {message.text}
            </p>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-600" />
                <span className="text-gray-700">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
