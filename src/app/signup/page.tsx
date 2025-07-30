"use client";

import React, { useState } from "react";
import Image from "next/image";
import chair from "../../../public/image/Living-room/chair1.png";
import { useRouter } from "next/navigation";
// import axios from "axios"; // Uncomment if backend works

export default function SignUp() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Simple validation
    if (!formData.fullName || !formData.userName || !formData.email || !formData.password) {
      setMessage({ type: "error", text: "Please fill in all fields." });
      setLoading(false);
      return;
    }

    try {
      // Uncomment and fix your API if needed:
      /*
      await axios.post("https://elegant-be.onrender.com/api/users/register", formData, {
        headers: { "Content-Type": "application/json" },
      });
      */

      // Simulate success for now:
      // setTimeout(() => {
      //   setLoading(false);
      //   setMessage({ type: "success", text: "Registration successful! Redirecting to Sign In..." });
      //   setTimeout(() => {
      //     router.push("/signin");
      //   }, 2000);
      // }, 1000);
      setMessage({ type: "success", text: "Registration successful! Redirecting to Sign In..." });
setLoading(false);

// Redirect after 2 seconds
setTimeout(() => {
  router.push("/signin");
}, 2000);

    } catch (error: unknown) {
      let errorMsg = "An unexpected error occurred.";

      /*
      if (axios.isAxiosError(error) && error.response) {
        errorMsg = error.response.data?.message || error.message;
      } else if (error instanceof Error) {
        errorMsg = error.message;
      }
      */

      setMessage({ type: "error", text: errorMsg });
      setLoading(false);
      console.error("Error:", errorMsg);
    }
  };

  return (
    <div className="grid items-center justify-center bg-gray-200 h-screen">
      <div className="bg-white p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 items-center justify-center rounded gap-6 shadow-md max-w-4xl mx-auto">
        <div className="flex items-center justify-center">
          <Image src={chair} alt="Decorative Chair" width={500} height={400} className="rounded" priority />
        </div>

        <div>
          <h1 className="text-3xl text-gray-800 font-bold mb-4">Sign Up</h1>
          <p className="text-gray-500 mb-6">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => router.push("/signin")}
              className="text-green-500 hover:underline"
            >
              Sign in
            </button>
          </p>

          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={handleChange}
                autoComplete="name"
                required
                className="w-full px-3 py-2 rounded border border-gray-300"
              />
            </div>

            <div>
              <label htmlFor="userName" className="block text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                id="userName"
                placeholder="Your username"
                value={formData.userName}
                onChange={handleChange}
                autoComplete="username"
                required
                className="w-full px-3 py-2 rounded border border-gray-300"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
                className="w-full px-3 py-2 rounded border border-gray-300"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Your password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="new-password"
                required
                className="w-full px-3 py-2 rounded border border-gray-300"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
            >
              {loading ? "Signing up..." : "Sign up"}
            </button>

            {message && (
              <p
                className={`mt-4 text-center text-sm ${
                  message.type === "success" ? "text-green-600" : "text-red-500"
                }`}
              >
                {message.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
