// app/indoor/page.tsx
"use client";

import HomePage from "./home/page";
import CategoriesGrid from "../../app/inDoor/CategoriesGrid/page";
import  categories  from "../../data/category";

export default function Indoor() {
  return (
    <div className="max-w-5xl bg-white mx-auto p-10">
      <HomePage />
      <CategoriesGrid categories={categories} />
    </div>
  );
}