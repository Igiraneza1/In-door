import React from "react";
import { FaList, FaTh, FaThLarge } from "react-icons/fa";
import Image from "next/image";

export default function Intro (){
  return (
    <div className="min-h-screen bg-white">
      <div className="relative w-full h-96">
        <Image
          src="/image/furniture/blog.jpg"
          alt="Blog Hero"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <div className="text-sm text-gray-400">Home <span className="mx-2">/</span> Blog</div>
          <h1 className="text-4xl font-bold text-black">Our Blog</h1>
          <p className="text-lg text-black">Home ideas and design inspiration</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <div className="space-x-4">
          <button className="text-gray-600 hover:text-black">All Blog</button>
          <button className="text-gray-600 hover:text-black">Featured</button>
        </div>
        <div className="space-x-2">
          <select className="p-2 border rounded">
            <option>Sort by</option>
            <option>Date</option>
            <option>Popularity</option>
          </select>
          <button className="p-2 border rounded"><FaList /></button>
          <button className="p-2 border rounded"><FaTh /></button>
          <button className="p-2 border rounded"><FaThLarge /></button>
        </div>
      </div>
    </div>
  );
};
