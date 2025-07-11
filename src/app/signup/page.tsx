"use client";

import Image from "next/image";
import chair from "../../../public/image/chair1.jpg";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function SignUp() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await axios.post(
        "https://elegant-be.onrender.com/api/users/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Success:", response.data);
      setMessage({ type: "success", text: "Registration successful! 🎉 Redirecting..." });

      setTimeout(() => {
        router.push("/signin");
      }, 2000);
    } catch (error: unknown) {
      if (
        typeof error === "object" &&
        error !== null &&
        "response" in error &&
        typeof (error as { response?: unknown }).response === "object"
      ) {
        const err = error as { response: { data?: { message?: string } } };
        console.error("Server error:", err.response.data);
        setMessage({ type: "error", text: err.response.data?.message || "Registration failed." });
      } else if (
        typeof error === "object" &&
        error !== null &&
        "request" in error
      ) {
        const err = error as { request: unknown };
        console.error("No response received:", err.request);
        setMessage({ type: "error", text: "No response from server." });
      } else if (
        typeof error === "object" &&
        error !== null &&
        "message" in error
      ) {
        const err = error as { message: string };
        console.error("Axios error:", err.message);
        setMessage({ type: "error", text: "Unexpected error occurred." });
      } else {
        console.error("Unknown error:", error);
        setMessage({ type: "error", text: "Unexpected error occurred." });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid items-center justify-center bg-gray-200 h-screen">
      <div className="bg-white p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 items-center justify-center rounded gap-6 shadow-md">
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
          <h1 className="text-3xl text-gray-800 font-bold mb-4">Sign Up</h1>
          <p className="text-gray-500 mb-6">
            Already have an account?{" "}
            <Link href="/signin" className="text-green-500 hover:underline">
              Sign in
            </Link>
          </p>

          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded border border-gray-300 mb-4"
              />

              <label htmlFor="username" className="block text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Your username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded border border-gray-300"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded border border-gray-300"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Your password"
                value={formData.password}
                onChange={handleChange}
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

export default SignUp;
