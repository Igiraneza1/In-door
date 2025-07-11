"use client";

import React from "react";
import Image from "next/image";
import chair from "../../../public/image/chair1.jpg";
import Link from "next/link";

export default function NewPassword() {
  return (
    <div className="grid items-center justify-center bg-gray-200 h-screen">
      <div className="bg-white p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6 rounded-lg shadow-lg max-w-4xl">
        
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
              <p className="text-sm text-gray-500 m-4">
              <Link href="/signin" className="gray-500 hover:underline">
                ← Back to Sign In
              </Link>
            </p>
          <h1 className="text-3xl font-bold mb-4 ">Create a New Password</h1>
          <p className="text-gray-300 mb-6">
            Please enter and confirm your new password below.
          </p>

          <form className="mt-4 space-y-6">
            <div>
              <label htmlFor="newPassword" className="block text-gray-700 mb-2">
                New Password
              </label>
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                placeholder="Your new password"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none"
              />
              <p className="text-sm text-gray-500 mt-1">
                Must be at least 10 characters.
              </p>
            </div>

            <div>
              <label htmlFor="repeatPassword" className="block text-gray-700 mb-2">
                Repeat Password
              </label>
              <input
                id="repeatPassword"
                name="repeatPassword"
                type="password"
                placeholder="Repeat your password"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
            >
              Submit
            </button>

          
          </form>
        </div>
      </div>
    </div>
  );
}
