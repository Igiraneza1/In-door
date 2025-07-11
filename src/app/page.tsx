"use client";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const router = useRouter();

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br  px-4">
      <div className="max-w-xl w-full bg-gradient-to-br from-blue-500 via-blue-300 to-blue-100 shadow-xl rounded-2xl p-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Welcome to In-door Products</h1>
        <p className="text-gray-600 mb-8">
          Discover home decor, modern furniture, and quality indoor essentials.
        </p>

        <div className="space-y-4">
          <button
            onClick={() => router.push("/signin")}
            className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            Sign In
          </button>
          <button
            onClick={() => router.push("/signup")}
            className="w-full border border-gray-700 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-500 transition"
          >
            Sign Up
          </button>
          <button
            onClick={() => router.push("/home")}
            className="w-full text-gray-600 underline hover:text-blue-600 transition"
          >
            Continue as Guest
          </button>
        </div>
      </div>
    </main>
  );
}
