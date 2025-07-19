import HomePage from "./home/page";
import CategoryPage from "./CategoriesGrid/page";
import NewArrivals from "./newArrival/page";
import Articles from "./article/page";
import Discount from "./discount/page";
import Newsletter from "./newsletter/page";

export default function Indoor() {
  return (
    <div className="bg-white min-h-screen">
    <div className=" bg-white mx-auto ">
      <HomePage />
      <CategoryPage />
      <NewArrivals />
      <Discount />
      <Articles />
      <Newsletter />
    </div>
    </div>
  );
}
