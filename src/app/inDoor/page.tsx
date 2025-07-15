import HomePage from "./home/page";
import CategoryPage from "./CategoriesGrid/page";

export default function Indoor() {
  return (
    <div className="max-w-5xl bg-white mx-auto p-10">
      <HomePage />
      <CategoryPage />
    </div>
  );
}
