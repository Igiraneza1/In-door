import Articles from "./article/page";
import NewArrival from "./newArrival/page";
import Discount from "./discount/page";
import Newsletter from "./newsletter/page";


export default function HomePage() {
  return (
    <main className="bg-white">
    
      <NewArrival />
      <Articles />
      <Discount />
      <Newsletter/>
    </main>
  );
}