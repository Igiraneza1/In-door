"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function WelcomePage() {
  const router = useRouter();

  return (
    <main className="relative flex items-center justify-center min-h-screen px-4 overflow-hidden">
     
      <div className="absolute inset-0 z-0 opacity-70">
        <Image
          src="/image/living-room/sofa17.jpg"
          alt="Living Room Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      
      <div className="relative z-10 max-w-xl w-full bg-black/70 backdrop-blur-md shadow-xl rounded-2xl p-8 text-center">
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
            onClick={() => {
              localStorage.setItem("isAuthenticated", "true");
              router.push("/inDoor");
            }}
            className="w-full text-gray-100 underline hover:text-blue-600 transition"
          >
            Continue as Guest
          </button>
        </div>
      </div>
    </main>
  );
}
