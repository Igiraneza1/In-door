import Articles from "./article/page";
import Discount from "./discount/page";
import HomePage from "./home/page";
import NewArrivals from "./newArrival/page";

export default function Indoor() {
    return (
        <div className=" bg-white mx-auto p-10">
            <HomePage />
            <Discount />
            <NewArrivals />
            <Articles />
        </div>
    )
}