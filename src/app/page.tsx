"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function WelcomePage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen">
      {/* Left Side: Content/Form */}
      <div className="flex flex-1 flex-col justify-center max-w-md w-full bg-white backdrop-blur-md shadow-xl rounded-l-2xl p-8 text-black pt-10">
        <h1 className="text-4xl md:text-5xl font-bold p-10">
          Welcome to <br/> In-door Products
        </h1>
        <p className="text-gray-900 mb-10">
          Discover home decor, modern furniture, and quality indoor essentials.
        </p>

        <div className="flex flex-col space-y-4 flex-grow">
          <button
            onClick={() => router.push("/signin")}
            className="w-full bg-gray-900 text-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Sign In
          </button>
          <button
            onClick={() => router.push("/signup")}
            className="w-full border border-gray-700 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-500 transition"
          >
            Sign Up
          </button>
          <button
            onClick={() => {
              localStorage.setItem("isAuthenticated", "true");
              router.push("/inDoor");
            }}
            className="w-full text-gray-900 underline hover:text-blue-600 transition"
          >
            Continue as Guest
          </button>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="relative flex-1 rounded-r-2xl overflow-hidden">
        <Image
          src="/image/living-room/sofa17.jpg"
          alt="Living Room Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
    </main>
  );
}
