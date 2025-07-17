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
  const [message, setMessage] = useState<{ type: "error" | "success"; text: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!email || !password) {
      setMessage({ type: "error", text: "Please enter both email and password." });
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

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Invalid credentials.");
      }

      const data = await res.json();

      setMessage({ type: "success", text: "Login successful! Redirecting..." });

      setTimeout(() => {
        if (data.role === "admin") {
          router.push("/dashboard");
        } else {
          router.push("/inDoor");
        }
      }, 1500);
    } catch (err: unknown) {
      console.error("Login error:", err);
      let errorMessage = "Something went wrong. Please try again later.";
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      setMessage({ type: "error", text: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid items-center justify-center bg-gray-200 h-screen">
      <div className="bg-white p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6 rounded shadow-md">
        <div className="flex items-center justify-center">
          <Image
            src={chair}
            alt="Chair"
            width={500}
            height={400}
            className="rounded"
          />
        </div>

        <div>
          <h1 className="text-3xl text-gray-800 font-bold mb-4">Sign In</h1>
          <p className="text-gray-500 mb-6">
            Do not have an account yet?{" "}
            <Link href="/signup" className="text-green-500 hover:underline">
              Sign Up
            </Link>
          </p>

          {message && (
            <div
              className={`mb-4 font-medium text-center ${
                message.type === "error" ? "text-red-500" : "text-green-600"
              }`}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleLogin} className="mt-4">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-3 py-2 rounded border border-gray-300"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                className="w-full px-3 py-2 rounded border border-gray-300"
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-black w-4 h-4" />
                <span className="text-gray-700">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-gray-700 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
