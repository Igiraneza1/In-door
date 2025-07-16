import HomePage from "./home/page";
import CategoryPage from "./CategoriesGrid/page";
import NewArrivals from "./newArrival/page";
import Articles from "./article/page";

export default function Indoor() {
  return (
    <div className="max-w-5xl bg-white mx-auto p-10">
      <HomePage />
      <CategoryPage />
      <NewArrivals />
      <Articles />
    </div>
  );
}
