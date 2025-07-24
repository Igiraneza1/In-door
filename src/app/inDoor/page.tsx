import HomePage from "./home/page";
import CategoryPage from "./CategoriesGrid/page";
import NewArrivals from "./newArrival/page";
import Articles from "./article/page";
<<<<<<< HEAD
// import Discount from "./discount/page";
// import Newsletter from "./newsletter/page";
=======
import Newsletter from "./newsletter/page";
import Discount from "./discount/page";

>>>>>>> 3046aab507a9827b7806b8e6841644b83d53338c

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
        <Discount/>
        <Articles />
        <Newsletter />

      </div>
    </div>
  );
}
