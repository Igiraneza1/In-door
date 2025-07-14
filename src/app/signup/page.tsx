"use client";

import Image from "next/image";
import chair from "../../../public/image/Living-room/chair1.jpg";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function SignUp() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      await axios.post(
        "https://elegant-be.onrender.com/api/users/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setMessage({
        type: "success",
        text: "Registration successful! 🎉 Redirecting...",
      });

      setTimeout(() => {
        router.push("/signin");
      }, 2000);
    } catch (error: any) {
       const errorData = error.response?.data;
  if (typeof errorData === "string") {
    alert(errorData); 
  } else if (typeof errorData === "object") {
    alert(errorData.error || "Something went wrong");
  } else {
    alert("Unexpected error occurred");
  }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid items-center justify-center bg-gray-200 h-screen">
      <div className="bg-white p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 items-center justify-center rounded gap-6 shadow-md max-w-4xl mx-auto">
        <div className="flex items-center justify-center">
          <Image
            src={chair}
            alt="Decorative Chair"
            width={500}
            height={400}
            className="rounded"
            priority
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

          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
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

            <div className="mb-4">
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

            <div className="mb-4">
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
                  message.type === "success"
                    ? "text-green-600"
                    : "text-red-500"
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
