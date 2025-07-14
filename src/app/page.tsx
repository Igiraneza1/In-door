"use client";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const router = useRouter();

  return (
    <main
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat px-4"
      style={{
        backgroundImage: 'url("/image/living-room/sofa17.jpg")',
      }}
    >
      <div className="max-w-xl w-full bg-black/50 backdrop-blur-md shadow-xl rounded-2xl p-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Welcome to In-door Products
        </h1>
        <p className="text-gray-200 mb-8">
          Discover home decor, modern furniture, and quality indoor essentials.
        </p>

        <div className="space-y-4">
          <button
            onClick={() => router.push("/signin")}
            className="w-full bg-gray-300 text-black py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Sign In
          </button>
          <button
            onClick={() => router.push("/signup")}
            className="w-full border border-gray-700 text-gray-100 py-3 rounded-lg font-semibold hover:bg-gray-500 transition"
          >
            Sign Up
          </button>
          <button
            onClick={() => router.push("/inDoor")}
            className="w-full text-gray-100 underline hover:text-blue-600 transition"
          >
            Continue as Guest
          </button>
        </div>
      </div>
    </main>
  );
}
