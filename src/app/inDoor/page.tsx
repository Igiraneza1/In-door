import HomePage from "./home/page";
import CategoryPage from "./CategoriesGrid/page";
import NewArrivals from "./newArrival/page";
import Articles from "./article/page";
import Discount from "./discount/page";
import Newsletter from "./newsletter/page";

export default function Indoor() {
  return (
    <div>
      <div className="text-center  pt-15">
        <h1 className="marquee text-3xl font-bold  text-gray-700 rounded-2xl w-full py-3">
          Elegant
        </h1>
      </div>
      <div className="bg-white  pl-10 pr-10">
        <HomePage />
        <CategoryPage />
        <NewArrivals />
        <Articles />

      </div>
    </div>
  );
}
